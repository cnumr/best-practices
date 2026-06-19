# [#53] Fix Card — tooltip et champs undefined Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Corriger l'affichage des champs de la card fiche : utiliser les clés de traduction et ne pas afficher les champs désactivés dans le référentiel actif (éviter `undefined`).

**Architecture:** `components/pages/fiche/Card.tsx` est le seul fichier à modifier. La fonction `cleanImpact` est cassée (regexp inutile), et le bloc `priority_implementation` (lignes 203–224) s'affiche sans vérification du feature flag. La logique de feature flags est déjà dans `getRefConfig().featuresEnabled`.

**Tech Stack:** Next.js 14, TypeScript, TailwindCSS, TinaCMS, i18n via `i18n/ui.ts` + `useTranslations()`

---

## Fichiers concernés

- Modifier: `components/pages/fiche/Card.tsx`
- Lire (contexte): `referentiel-config.ts`, `i18n/ui.ts`, `src/content/constants/index.ts`

---

### Task 1 : Supprimer `cleanImpact` et corriger la traduction MESURE_ON_3

Les valeurs stockées dans le MDX pour `environmental_impact` et `priority_implementation` sont des clés de traduction (`high_environmental_impact`, `medium_priority`, etc.). La fonction `cleanImpact` essaie incorrectement de nettoyer des regexp de mots en clair — elle est inutile.

**Fichiers:**

- Modifier: `components/pages/fiche/Card.tsx`

- [ ] **Étape 1 : Écrire le test visuel (vérification manuelle)**

  Identifier une fiche RWP (MESURE_ON_3) et noter la valeur brute de `priority_implementation` dans son MDX. La valeur attendue est une clé comme `high_priority`, `medium_priority`, ou `low_priority`.

  ```bash
  grep -r "priority_implementation" src/content/fiches/fr/ | head -5
  ```

  Résultat attendu : lignes du type `priority_implementation: high_priority`

- [ ] **Étape 2 : Supprimer la fonction `cleanImpact` et remplacer ses usages**

  Dans `components/pages/fiche/Card.tsx`, remplacer la fonction `cleanImpact` par un accès direct à la clé de traduction.

  Avant (lignes 42–57) :

  ```tsx
  function cleanImpact(meta) {
    let regexp: RegExp;
    switch (lang) {
      case 'es':
        regexp = /t("Fort")|t("Moyen")|t("Faible")/gi;
        break;
      case 'en':
        regexp = /t("High")|t("Medium")|t("Low")/gi;
        break;
      default:
        regexp = /t("Fuerte")|t("Medio")|t("Débil")/gi;
        break;
    }
    return fiche[`${meta}`]?.replace(regexp, ' ') || 'TBD';
  }
  ```

  Après : **supprimer entièrement la fonction**.

- [ ] **Étape 3 : Remplacer les appels à `cleanImpact` dans le JSX**

  Il y a 2 usages de `cleanImpact` dans le JSX :

  **Bloc MESURE_ON_3 pour `priority_implementation`** (lignes ~219–224) :

  ```tsx
  // Avant
  {
    t(cleanImpact('priority_implementation'));
  }

  // Après
  {
    t(fiche.priority_implementation);
  }
  ```

  **Bloc MESURE_ON_3 pour `environmental_impact`** (lignes ~227–234) :

  ```tsx
  // Avant
  {
    t(cleanImpact('environmental_impact'));
  }

  // Après
  {
    t(fiche.environmental_impact);
  }
  ```

- [ ] **Étape 4 : Vérifier les types TypeScript**

  ```bash
  pnpm check-types
  ```

  Résultat attendu : pas d'erreur liée à `Card.tsx`

---

### Task 2 : Conditionner l'affichage de `priority_implementation` au feature flag

Le bloc JSX (lignes ~202–224) affiche toujours `priority_implementation`, même quand le feature flag est désactivé, ce qui produit un `undefined` visible.

**Fichiers:**

- Modifier: `components/pages/fiche/Card.tsx`

- [ ] **Étape 1 : Localiser le bloc dans le JSX**

  Dans `components/pages/fiche/Card.tsx`, trouver le `<div className="flex flex-row items-center justify-start gap-2">` (autour de la ligne 201) qui contient :

  - Le span `priority_implementation` (toujours rendu)
  - Le span séparateur `|` (toujours rendu)
  - Les spans `environmental_impact` (déjà conditionnels)

- [ ] **Étape 2 : Conditionner le span `priority_implementation` et le séparateur**

  Remplacer le bloc entier :

  ```tsx
  // Avant
  <div className="flex flex-row items-center justify-start gap-2">
    {typeof fiche[`priority_implementation`] === 'number' ? (
      <span
        title={t("Priorité d'implémentation")}
        aria-label={`${t("Priorité d'implémentation")} : ${fiche[`priority_implementation`]}`}
        role="img"
        className="text-base">
        {t("Priorité d'implémentation") + ' ' + fiche[`priority_implementation`]}
      </span>
    ) : (
      <span
        title={t("Priorité d'implémentation")}
        aria-label={`${t("Priorité d'implémentation")} : ${fiche[`priority_implementation`]}`}
        role="img">
        {t(fiche.priority_implementation)}
      </span>
    )}
    <span>|</span>
    {getRefConfig().featuresEnabled.environmental_impact === MESURE_ON_3 && (
      ...
    )}
    {getRefConfig().featuresEnabled.environmental_impact === MESURE_ON_5 && (
      ...
    )}
  </div>

  // Après
  <div className="flex flex-row items-center justify-start gap-2">
    {getRefConfig().featuresEnabled.priority_implementation === MESURE_ON_5 && (
      <span
        title={t("Priorité d'implémentation")}
        aria-label={`${t("Priorité d'implémentation")} : ${fiche.priority_implementation}`}
        role="img"
        className="text-base">
        {t("Priorité d'implémentation") + ' ' + fiche.priority_implementation}
      </span>
    )}
    {getRefConfig().featuresEnabled.priority_implementation === MESURE_ON_3 && (
      <span
        title={t("Priorité d'implémentation")}
        aria-label={`${t("Priorité d'implémentation")} : ${t(fiche.priority_implementation)}`}
        role="img">
        {t(fiche.priority_implementation)}
      </span>
    )}
    {(getRefConfig().featuresEnabled.priority_implementation &&
      getRefConfig().featuresEnabled.environmental_impact) && (
      <span aria-hidden="true">|</span>
    )}
    {getRefConfig().featuresEnabled.environmental_impact === MESURE_ON_3 && (
      <span
        title={t('Impact environnemental')}
        aria-label={`${t('Impact environnemental')} : ${t(fiche.environmental_impact)}`}>
        {t(fiche.environmental_impact)}
      </span>
    )}
    {getRefConfig().featuresEnabled.environmental_impact === MESURE_ON_5 && (
      <span
        title={t('Impact environnemental')}
        aria-label={`${t('Impact environnemental')} : ${t(fiche.environmental_impact)}`}
        className="text-base">
        {`${t('Impact environnemental')}: ${fiche.environmental_impact}`}
      </span>
    )}
  </div>
  ```

- [ ] **Étape 3 : Vérifier les types TypeScript**

  ```bash
  pnpm check-types
  ```

  Résultat attendu : aucune erreur TypeScript

- [ ] **Étape 4 : Vérifier le linting**

  ```bash
  pnpm lint
  ```

  Résultat attendu : aucune erreur

- [ ] **Étape 5 : Commit**

  ```bash
  git add components/pages/fiche/Card.tsx
  git commit -m "fix(card): conditionne l'affichage des champs au feature flag et corrige la traduction MESURE_ON_3"
  ```

---

### Task 3 : Correction du tooltip `getMetas()`

La fonction `getMetas()` (lignes ~107–163) alimente le `title` du bouton info. Elle utilise les anciens appels `t(cleanImpact(...))` pour MESURE_ON_3. Avec la suppression de `cleanImpact`, il faut aussi corriger `getMetas()`.

**Fichiers:**

- Modifier: `components/pages/fiche/Card.tsx`

- [ ] **Étape 1 : Corriger les appels dans `getMetas()`**

  ```tsx
  // Avant (MESURE_ON_3 environmental_impact dans getMetas)
  metas.push(
    t('Impact environnemental') + ': ' + t(cleanImpact('environmental_impact'))
  );

  // Après
  metas.push(
    t('Impact environnemental') + ': ' + t(fiche.environmental_impact)
  );
  ```

  ```tsx
  // Avant (MESURE_ON_3 priority_implementation dans getMetas)
  metas.push(
    t("Priorité d'implémentation") + ': ' + t(fiche[`priority_implementation`])
  );
  // Déjà correct pour MESURE_ON_3 (utilise déjà t())
  // Vérifier que MESURE_ON_5 est aussi correct
  ```

- [ ] **Étape 2 : Lancement visuel rapide (facultatif mais recommandé)**

  ```bash
  pnpm dev
  ```

  Naviguer sur une fiche avec `NEXT_PUBLIC_REF_NAME=RWP` (MESURE_ON_3) et vérifier que le tooltip du bouton info n'affiche plus 'TBD' ni `undefined`.

- [ ] **Étape 3 : Vérifier les types et le lint**

  ```bash
  pnpm check-types && pnpm lint
  ```

  Résultat attendu : aucune erreur

- [ ] **Étape 4 : Commit final**

  ```bash
  git add components/pages/fiche/Card.tsx
  git commit -m "fix(card): corrige getMetas() pour utiliser les clés de traduction sans cleanImpact"
  ```
