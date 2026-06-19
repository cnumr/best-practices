# [#55] Fix build-local ne charge pas .env Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Faire en sorte que `pnpm build-local` charge les variables du fichier `.env` avant d'exécuter le build, afin que `NEXT_PUBLIC_REF_NAME`, `TINA_PUBLIC_REF_NAME` et les autres variables soient disponibles.

**Architecture:** Le script `scripts/build-local.sh` ne fait pas de `source .env`. Il faut ajouter un chargement du fichier `.env` au début du script, avant toute utilisation de variable d'environnement. Le pattern `set -a / source .env / set +a` exporte automatiquement toutes les variables lues.

**Tech Stack:** Bash, shell POSIX

---

## Fichiers concernés

- Modifier: `scripts/build-local.sh`

---

### Task 1 : Ajouter le chargement du `.env` dans `build-local.sh`

**Fichiers:**

- Modifier: `scripts/build-local.sh`

- [ ] **Étape 1 : Lire le script actuel**

  ```bash
  cat scripts/build-local.sh
  ```

  Confirmer que le script commence par `set -e` et qu'il n'y a pas de `source .env` existant.

- [ ] **Étape 2 : Ajouter le chargement du `.env` après `set -e`**

  Dans `scripts/build-local.sh`, après la ligne `set -e`, ajouter :

  ```bash
  #!/bin/bash
  set -e

  # Charge les variables du fichier .env si présent (ne remplace pas les variables déjà définies)
  if [ -f .env ]; then
    set -a
    # shellcheck source=/dev/null
    source .env
    set +a
  fi

  # Ensures NEXT_PUBLIC_REF_NAME is set...
  export NEXT_PUBLIC_REF_NAME=${NEXT_PUBLIC_REF_NAME:-REF_HOME}
  # ... reste du script inchangé
  ```

  Note : placer le `source .env` **avant** la ligne `export NEXT_PUBLIC_REF_NAME=${NEXT_PUBLIC_REF_NAME:-REF_HOME}` pour que la valeur du `.env` soit chargée en premier, et que l'affectation avec valeur par défaut ne l'écrase pas si elle est déjà définie.

- [ ] **Étape 3 : Vérifier la reproduction du bug (optionnel)**

  Avant de commiter, vérifier que le fix fonctionne :

  ```bash
  # Ajouter temporairement dans .env :
  # NEXT_PUBLIC_REF_NAME=REIPRO

  pnpm build-local 2>&1 | grep "REF_NAME\|REIPRO\|RWEB" | head -5
  ```

  Résultat attendu : le build utilise `REIPRO` et non `REF_HOME` ou `RWEB`.

- [ ] **Étape 4 : Vérifier que le build fonctionne sans `.env`**

  Renommer temporairement `.env` en `.env.bak` et lancer `pnpm build-local`. Le script doit fonctionner sans erreur (le `if [ -f .env ]` protège le `source`).

  ```bash
  mv .env .env.bak && pnpm build-local; mv .env.bak .env
  ```

  Résultat attendu : build réussi avec `NEXT_PUBLIC_REF_NAME=REF_HOME` (valeur par défaut).

- [ ] **Étape 5 : Commit**

  ```bash
  git add scripts/build-local.sh
  git commit -m "fix(build): charge les variables .env dans build-local.sh"
  ```
