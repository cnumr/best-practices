---
label: Synchronisation
icon: sync
order: 8
---

# Synchronisation Upstream

## Vue d'ensemble

Ce projet utilise une architecture **multi-sites** basée sur un repo source partagé (`gen-referentiel-core`) qui alimente plusieurs sites spécialisés.

```
┌─────────────────────────────────────────────────────────────────┐
│                    gen-referentiel-core                          │
│                    (repo source)                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │ app/        │  │ components/ │  │ tina/       │   CODE       │
│  └─────────────┘  └─────────────┘  └─────────────┘              │
│  ┌─────────────────────────────────────────────────┐            │
│  │ src/content/  (contenu FAKE pour tests)         │   CONTENU  │
│  └─────────────────────────────────────────────────┘            │
└─────────────────────────────────────────────────────────────────┘
                              │
            ┌─────────────────┼─────────────────┐
            │ upstream        │ upstream        │ upstream
            │ remote          │ remote          │ remote
            ▼                 ▼                 ▼
     ┌──────────┐      ┌──────────┐      ┌──────────┐
     │   rwp    │      │   rweb   │      │  reipro  │
     │(existant)│      │(existant)│      │(existant)│
     │          │      │          │      │          │
     │ CODE:    │      │ CODE:    │      │ CODE:    │
     │ sync     │      │ sync     │      │ sync     │
     │ upstream │      │ upstream │      │ upstream │
     │          │      │          │      │          │
     │ CONTENU: │      │ CONTENU: │      │ CONTENU: │
     │ WordPress│      │ Web      │      │ REIPRO   │
     └──────────┘      └──────────┘      └──────────┘
          │                 │                 │
          ▼                 ▼                 ▼
       Vercel            Vercel            Vercel
```

!!!success Principe
- **Code source** : Partagé depuis `gen-referentiel-core`
- **Contenu** : Spécifique à chaque site (protégé lors des syncs)
- **Déploiement** : Automatique via Vercel
!!!

!!!warning Note importante
Cette approche n'utilise PAS la fonctionnalité "Fork" de GitHub. On ajoute simplement un remote `upstream` aux repos existants. Le résultat technique est identique, mais sans le lien "forked from" dans l'interface GitHub.
!!!

---

## Configuration initiale

### 1. Ajouter le remote upstream

Dans chaque repo existant (rwp, rweb, reipro) :

```bash
# Se placer dans le repo existant
cd best-practices-wordpress  # ou rweb, reipro, etc.

# Ajouter le remote upstream
git remote add upstream git@github.com:cnumr/gen-referentiel-core.git

# Vérifier les remotes
git remote -v
# origin    git@github.com:cnumr/best-practices-wordpress.git (fetch/push)
# upstream  git@github.com:cnumr/gen-referentiel-core.git (fetch/push)
```

### 2. Configurer les drivers de merge

```bash
# Driver "ours" pour les fichiers à protéger entièrement
git config merge.ours.driver true

# Driver custom pour package.json (merge intelligent)
git config merge.package-json-merge.name "Merge intelligent package.json"
git config merge.package-json-merge.driver "scripts/merge-package-json.sh %O %A %B"
```

==- Configuration globale (optionnel)

Ou l'ajouter au `.gitconfig` global :

```ini
[merge "ours"]
    driver = true

[merge "package-json-merge"]
    name = Merge intelligent package.json
    driver = scripts/merge-package-json.sh %O %A %B
```

===

### 3. Récupérer les fichiers de configuration

```bash
git fetch upstream
git checkout upstream/main -- .gitattributes
git checkout upstream/main -- scripts/merge-package-json.sh
chmod +x scripts/merge-package-json.sh
git add .gitattributes scripts/merge-package-json.sh
git commit -m "chore: configure upstream sync"
```

!!!success Configuration terminée
Votre repo est maintenant prêt à synchroniser avec upstream.
!!!

---

## Workflow de synchronisation

### Synchroniser avec upstream

!!!danger Ne PAS utiliser `git merge upstream/main` directement
Le `.gitattributes` configure `merge=ours` pour protéger `src/content/`, mais ce driver ne s'active **que lors de conflits**. Si seul upstream a modifié des fichiers (ajout de contenu fake, suppressions), Git applique ces changements sans conflit et **écrase votre contenu**. Utilisez toujours le workflow ci-dessous.
!!!

```bash
# Dans le repo du site (ex: rwp)
git fetch upstream

# 1. Merger SANS commiter (résout les conflits en faveur d'upstream)
git merge upstream/main --no-commit --allow-unrelated-histories -X theirs

# 2. Réinitialiser l'index des dossiers protégés à l'état pré-merge
git reset HEAD -- src/content/ public/img_fiches/

# 3. Restaurer le working tree et supprimer les fichiers fake ajoutés par upstream
git checkout HEAD -- src/content/ public/img_fiches/
git clean -fd -- src/content/ public/img_fiches/

# 4. Commiter le merge (contenu local préservé)
git commit -m "chore: sync upstream (contenu local préservé)"

# 5. Pousser les changements
git push origin main
```

**Explication des étapes 2 et 3 :**
- `git reset HEAD` — dé-stage toutes les modifications upstream dans ces dossiers
- `git checkout HEAD` — restaure les fichiers existants à leur état pré-merge
- `git clean -fd` — supprime les fichiers **nouveaux** ajoutés par upstream (contenu fake) devenus untracked après le reset

!!!warning Push avec divergence
Si votre branche et `origin/main` ont divergé (après merge upstream), vous devrez forcer le push :

```bash
git push --force-with-lease origin main
```

`--force-with-lease` est plus sûr que `--force` car il vérifie que vous n'écrasez pas des commits distants inconnus.
!!!

### Script de synchronisation

Le script `scripts/sync-upstream.sh` automatise tout le processus, que ce soit pour la **première synchronisation** ou les **suivantes** :

```bash
pnpm sync-upstream
# ou directement
./scripts/sync-upstream.sh
```

**Ce script :**
1. Vérifie que le remote `upstream` existe
2. Détecte automatiquement si c'est la première sync (historiques non liés)
3. Affiche les commits à intégrer et demande confirmation
4. Merge avec protection du contenu local (`src/content/`, `public/img_fiches/`)
5. Régénère `tina-lock.json` avec `pnpm tinacms build`
6. Commit et push

!!!success Recommandé
Utilisez ce script plutôt que les commandes manuelles pour éviter les erreurs. Il gère automatiquement le cas `--allow-unrelated-histories` lors de la première sync.
!!!

---

## Gestion des conflits

Si un conflit survient lors du merge (les conflits sur `src/content/` sont évités par le workflow `--no-commit` ci-dessus).

### Voir les fichiers en conflit

```bash
git status
# ou pour plus de détails
git diff --name-only --diff-filter=U
```

### Stratégie 1 : Résolution fichier par fichier

```bash
# Pour garder votre version locale d'un fichier (ours)
git checkout --ours src/content/chemin/fichier.mdx

# Pour prendre la version upstream (theirs)
git checkout --theirs app/chemin/fichier.ts

# Marquer comme résolu
git add src/content/chemin/fichier.mdx app/chemin/fichier.ts
```

### Stratégie 2 : Tout accepter d'upstream (première sync)

Si vous faites la première synchronisation et voulez tout prendre d'upstream :

```bash
# Accepter TOUS les fichiers en conflit depuis upstream
git checkout --theirs .

# Marquer tous les fichiers comme résolus
git add .

# Finaliser le merge
git commit -m "merge: intègre les mises à jour du core"
```

!!!danger Attention
Cette stratégie écrase TOUTES vos modifications locales. À utiliser uniquement lors de la première synchronisation !
!!!

### Stratégie 3 : Résolution manuelle avec un éditeur

Les fichiers en conflit contiennent des marqueurs :

```
<<<<<<< HEAD (votre version)
votre code
=======
code upstream
>>>>>>> upstream/main
```

Vous pouvez :
1. Ouvrir le fichier dans VS Code (il détecte automatiquement les conflits)
2. Choisir "Accept Current Change", "Accept Incoming Change", ou éditer manuellement
3. Sauvegarder et `git add` le fichier

### Annuler un merge en cours

```bash
# Si vous voulez recommencer
git merge --abort
```

---

## Fichiers : partagés vs protégés

| Fichier/Dossier | Partagé (upstream) | Protégé (local) | Raison |
|-----------------|:------------------:|:---------------:|--------|
| `app/` | ✅ | | Code |
| `components/` | ✅ | | Code |
| `tina/config.tsx` | ✅ | | Config TinaCMS |
| `tina/collections/` | ✅ | | Schéma (dynamique via env) |
| `tina/tina-lock.json` | | ✅ | Généré selon `TINA_PUBLIC_REF_NAME` |
| `tina/__generated__/` | | ✅ | Généré selon `TINA_PUBLIC_REF_NAME` |
| `utils/` | ✅ | | Code |
| `package.json` | ⚡ | ⚡ | Merge intelligent |
| `README.md` | | ✅ | Doc spécifique au site |
| `src/content/` | | ✅ | Contenu spécifique |
| `.env` | | (gitignore) | Pas dans git |
| `.env.example` | ✅ | | Template partagé |

**Légende :**
- ✅ Synchronisé depuis upstream
- ✅ Protégé (garde la version locale)
- ⚡ Merge intelligent (fusion des deux)

### Merge intelligent de package.json

Le script `scripts/merge-package-json.sh` fusionne automatiquement :
- **Garde local** : `name`, `description`, `repository`, `homepage`, `bugs`
- **Prend upstream** : `dependencies`, `devDependencies`, `scripts`, etc.

!!!warning Prérequis
`jq` doit être installé : `brew install jq`
!!!

---

## Commandes de référence

```bash
# Voir l'état des remotes
git remote -v

# Voir les commits upstream non intégrés
git log --oneline HEAD..upstream/main

# Synchroniser avec upstream (voir section Workflow ci-dessus)
git fetch upstream
git merge upstream/main --no-commit --allow-unrelated-histories -X theirs
git reset HEAD -- src/content/ public/img_fiches/
git checkout HEAD -- src/content/ public/img_fiches/
git clean -fd -- src/content/ public/img_fiches/
git commit -m "chore: sync upstream (contenu local préservé)"

# Voir ce qui a changé dans le dernier merge
git diff HEAD~1 --stat

# Annuler un merge en cours
git merge --abort

# Forcer à garder la version locale d'un fichier
git checkout --ours <fichier>

# Forcer à prendre la version upstream d'un fichier
git checkout --theirs <fichier>
```

---

## Points d'attention

### 1. Ne jamais modifier le code dans les repos sites

!!!danger Important
Toutes les évolutions de code doivent être faites dans `gen-referentiel-core`.
!!!

Les repos sites ne servent qu'à :
- Stocker le contenu spécifique (`src/content/`)
- Configurer les variables d'environnement
- Synchroniser le code depuis upstream

### 2. Contenu uniquement dans les repos sites

Les modifications de contenu (`src/content/`) ne doivent être faites que dans les repos des sites, jamais dans le core.

### 3. Tester avant de push

Après un merge upstream, toujours vérifier que le build fonctionne :

```bash
pnpm check-types  # Vérifier les types TypeScript
pnpm lint         # Vérifier le linting
pnpm build-local  # Vérifier que le build fonctionne
```

### 4. referentiel-config.ts

Ce fichier est partagé. Les différences entre sites sont gérées automatiquement par la variable `NEXT_PUBLIC_REF_NAME`.

### 5. Fichiers générés TinaCMS

`tina-lock.json` et `tina/__generated__/` sont générés selon `TINA_PUBLIC_REF_NAME`. Ils sont protégés avec `merge=ours` dans `.gitattributes`.

!!!warning Régénérer tina-lock.json après un merge
Après chaque `git merge upstream/main`, il faut régénérer le fichier `tina/tina-lock.json` en lançant :

```bash
pnpm tinacms build
```

Ce fichier contient le schéma TinaCMS spécifique à votre configuration (`TINA_PUBLIC_REF_NAME`). Sans régénération, le build peut échouer.
!!!

---

## Différence avec un "vrai" fork GitHub

| Aspect | Fork GitHub | Upstream Sync (cette approche) |
|--------|-------------|-------------------------------|
| Lien dans l'interface GitHub | "forked from cnumr/core" | Aucun lien visible |
| Fonctionnement git | Identique | Identique |
| Commandes de sync | `git fetch upstream && git merge` | `git fetch upstream && git merge` |
| Pull Requests vers upstream | Via GitHub UI | Via GitHub UI (mais moins intuitif) |
| Repos existants | Doivent être recréés | Peuvent être utilisés tels quels ✅ |

---

## Pour aller plus loin

- [Guide de développement](./developpement.md)
- [Configuration du projet](./configuration.md)

---

**Dernière mise à jour :** Février 2026
