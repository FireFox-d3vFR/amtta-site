# Sprint Change Proposal - Routes Vie Sportive

**Date :** 2026-05-11  
**Projet :** amtta-site  
**Statut :** applique

## Resume du Changement

La decision precedente exposait les contenus saisonniers directement a la racine :

- `/activites/`
- `/concours/`
- `/galerie/`

La nouvelle decision rattache ces contenus a la section parente Vie Sportive afin d'aligner les URLs avec la navigation principale du site.

## Nouvelles Routes Canoniques

```text
/vie-sportive/
/vie-sportive/activites/
/vie-sportive/activites/[saison]/
/vie-sportive/activites/[saison]/[activite]/
/vie-sportive/concours/
/vie-sportive/concours/[saison]/
/vie-sportive/concours/[saison]/[concours]/
/vie-sportive/galerie/
```

## Impact

- **UX Design :** arborescence MVP et regles de navigation mises a jour.
- **Architecture :** routes canoniques, fichiers Astro attendus, generation dynamique et mapping structurel mis a jour.
- **Epics & Stories :** stories Activites, Concours, Galerie et navigation realignees.
- **Story 1.2 :** contexte, criteres, routes autorisees/interdites, notes et Dev Agent Record realignes.
- **Navigation implementee :** `src/lib/content/navigation.ts` pointe maintenant vers les nouvelles routes sous `/vie-sportive/`.

## Hors Scope

- Aucune page metier n'a ete creee.
- Aucune content collection n'a ete creee.
- Aucune dependance n'a ete ajoutee.
- Aucune redirection de production n'a ete configuree.

## Handoff

Les prochaines stories doivent utiliser les nouvelles routes sous `/vie-sportive/` comme routes canoniques. Les anciennes routes directes `/activites/`, `/concours/` et `/galerie/` peuvent etre traitees plus tard comme redirections de migration si elles deviennent necessaires, mais elles ne doivent plus etre referencees comme routes canoniques.
