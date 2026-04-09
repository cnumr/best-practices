---
"gen-referentiel-core": patch
---

fix(tina): corrige le type de maxValue dans les validations de fiche

TinaCMS interprétait les valeurs numériques du champ `maxValue` comme `number` au lieu de `string`. Ajout de `ui.parse` et `ui.format` pour forcer la coercition en string.
