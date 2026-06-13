---
'gen-referentiel-core': patch
---

fix: améliore l'accessibilité des cards et corrige le tooltip du bouton info

- Déplace le lien de la card entière vers le titre uniquement (card-view.tsx) pour respecter les bonnes pratiques a11y (un lien ne doit pas englober toute une card interactive)
- Ajoute un overlay invisible (`aria-hidden`, `tabIndex=-1`) pour maintenir la surface de clic sur toute la card
- Déplace le lien sur le titre dans FicheCard (Card.tsx) avec `z-10` pour rester au-dessus de l'overlay
- Corrige l'affichage du tooltip natif du bouton (i) en ajoutant `pointer-events-none` sur le SVG enfant, permettant au navigateur de cibler le `<button>` et d'afficher son attribut `title`
