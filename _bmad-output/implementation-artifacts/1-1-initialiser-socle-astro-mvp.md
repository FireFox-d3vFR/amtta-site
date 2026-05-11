# Story 1.1: Initialiser le socle Astro existant pour le MVP

Status: review

## Story

As a developpeur-mainteneur,  
I want un socle Astro/Vue/Tailwind propre et minimal,  
so that le MVP puisse etre implemente progressivement sans sur-architecture.

## Contexte

Le projet `amtta-site` migre le site Wix `amtta-mions.fr` vers un site statique Astro + Vue + Tailwind. Le Lot 1 / MVP doit rester simple : Astro MPA statique, Vue uniquement pour les composants interactifs necessaires, Tailwind pour le design, contenus futurs via content collections Astro, sans backend, CMS, authentification, base de donnees ni espace membre.

Cette story est la premiere story d'implementation. Elle ne doit pas construire les pages metier completes. Elle doit consolider le socle existant, preparer l'arborescence minimale cible et verifier que le build statique reste fonctionnel.

## Objectifs

- Confirmer que le projet existant fonctionne comme site Astro statique.
- Conserver la stack actuelle : Astro 6, Vue 3, Tailwind 4 via `@tailwindcss/vite`.
- Preparer les dossiers minimaux attendus par l'architecture.
- Eviter toute dependance ou configuration de sur-architecture.
- Ne pas commencer les pages metier completes, les content collections detaillees, le formulaire, l'agenda ou les routes saisonnieres.
- Laisser le repo dans un etat buildable avec `npm run build`.

## Acceptance Criteria

1. **Build statique**

   **Given** le projet Astro existant avec Vue et Tailwind  
   **When** le developpeur lance `npm run build`  
   **Then** le build se termine avec succes et genere un site statique dans `dist`  
   **And** aucune dependance de backend, CMS, base de donnees ou authentification n'est ajoutee.

2. **Arborescence minimale**

   **Given** l'architecture validee  
   **When** les dossiers cibles sont ajoutes  
   **Then** la structure contient au minimum `src/pages`, `src/components/site`, `src/components/ui`, `src/components/content`, `src/lib`, `src/content` et `src/assets`  
   **And** les composants Vue restent limites aux besoins interactifs.

3. **Respect du scope Story 1.1**

   **Given** les stories suivantes gerent les pages metier, activites, concours, contact, agenda et medias  
   **When** Story 1.1 est terminee  
   **Then** aucune page metier complete n'est implementee au-dela du shell existant  
   **And** aucun schema de collection metier complet n'est introduit avant Story 3.1/4.1.

4. **Garde-fous d'architecture**

   **Given** les documents PRD, UX, Architecture et Readiness  
   **When** la story est implementee  
   **Then** le projet reste aligne avec Astro statique, Vue opt-in et Tailwind  
   **And** aucune route longue `/vie-sportive/activites` ou `/vie-sportive/concours-ffta` n'est creee.

## Tasks / Subtasks

- [x] Verifier l'etat initial du socle (AC: 1)
  - [x] Lire `package.json`, `astro.config.mjs`, `src/styles/global.css`, `src/layouts/Layout.astro` et les composants dans `src/components/site`.
  - [x] Confirmer que `@astrojs/vue`, `vue`, `tailwindcss` et `@tailwindcss/vite` sont deja presents.
  - [x] Ne pas ajouter de nouveau starter, framework, CMS, backend, base de donnees, auth ou librairie UI.

- [x] Consolider l'arborescence cible minimale (AC: 2)
  - [x] Creer les dossiers manquants : `src/components/ui`, `src/components/content`, `src/lib`, `src/lib/content`, `src/content`, `src/assets`, `src/assets/images`.
  - [x] Si un dossier doit etre conserve vide dans Git, ajouter un fichier minimal `.gitkeep`.
  - [x] Ne pas creer les collections metier completes dans cette story ; reserver les schemas `seasons`, `activities`, `competitions` aux stories 3.1 et 4.1.

- [x] Preserver et clarifier le shell existant sans faire la navigation finale (AC: 2, 3)
  - [x] Verifier que `Layout.astro` importe toujours `global.css` et rend `Header`, `main` et `Footer`.
  - [x] Ne pas refondre l'accueil ni les pages metier.
  - [x] Ne pas implementer les routes saisonnieres dans cette story.
  - [x] Si une correction mineure est necessaire pour garder le build propre, rester strictement dans le perimetre du shell.

- [x] Verifier la configuration Astro/Tailwind/Vue (AC: 1, 4)
  - [x] Conserver `@tailwindcss/vite` dans `astro.config.mjs`.
  - [x] Conserver `vue()` dans `integrations`.
  - [x] Conserver `@import "tailwindcss";` dans `src/styles/global.css`.
  - [x] Ne pas ajouter de directive `client:*` sauf si un composant interactif existant en a deja besoin.

- [x] Valider le build et le resultat statique (AC: 1)
  - [x] Executer `npm run build`.
  - [x] Confirmer dans la sortie que le mode/output Astro reste `static`.
  - [x] Confirmer que `dist/` est genere.

- [x] Documenter les fichiers touches dans le Dev Agent Record (AC: 1-4)
  - [x] Lister les fichiers crees ou modifies.
  - [x] Noter explicitement qu'aucune dependance interdite n'a ete ajoutee.

## Fichiers Concernes

### A lire avant modification

- `package.json`
- `astro.config.mjs`
- `src/styles/global.css`
- `src/layouts/Layout.astro`
- `src/components/site/Header.astro`
- `src/components/site/Footer.astro`
- `src/components/site/Navigation.astro`
- `src/components/site/MobileMenu.vue`
- `src/pages/index.astro`

### A modifier ou creer probablement

- `src/components/ui/.gitkeep`
- `src/components/content/.gitkeep`
- `src/lib/.gitkeep`
- `src/lib/content/.gitkeep`
- `src/content/.gitkeep`
- `src/assets/.gitkeep`
- `src/assets/images/.gitkeep`

### A ne pas creer dans cette story

- Pages metier completes : `/le-club/`, `/activites/`, `/concours/`, `/contact/`, etc.
- Schemas complets `seasons`, `activities`, `competitions`.
- Formulaire Netlify/Formspree.
- Agenda Google.
- Redirections de production.
- Configuration de domaine OVH.

## Dev Notes

### Etat actuel du repo

- `package.json` declare deja :
  - `astro` `^6.3.1`
  - `@astrojs/vue` `^6.0.1`
  - `vue` `^3.5.34`
  - `tailwindcss` `^4.3.0`
  - `@tailwindcss/vite` `^4.3.0`
  - Node `>=22.12.0`
- `astro.config.mjs` configure deja `tailwindcss()` dans `vite.plugins` et `vue()` dans `integrations`.
- `src/styles/global.css` contient deja `@import "tailwindcss";`.
- `src/layouts/Layout.astro` importe deja `global.css`, `Header` et `Footer`.
- `src/components/site/Header.astro` et `Footer.astro` existent.
- `src/components/site/Navigation.astro` et `MobileMenu.vue` existent mais sont vides au moment de creation de cette story.
- `src/pages/index.astro` existe avec une page d'accueil minimale.
- Verification effectuee avant creation de cette story : `npm run build` passe et genere 1 page statique dans `dist/`.

### Points de vigilance dans les fichiers existants

- `Header.astro` contient actuellement des liens provisoires qui ne sont pas alignes avec l'UX finale (`/club`, `/pratiques`, usage de `/concours` comme libelle Vie Sportive). Story 1.2 est responsable de la navigation finale ; ne pas sur-traiter ce point dans Story 1.1.
- Certains textes existants affichent des caracteres mal encodes (`Ã `, `Â©`, etc.). Ce n'est pas le coeur de Story 1.1, mais le dev peut corriger une occurrence touchee si cela reste local et sans refonte de contenu.
- `Layout.astro` contient deja des classes `dark:*` alors que le dark mode est post-MVP. Ne pas ajouter de fonctionnalite dark mode dans Story 1.1. Si ces classes restent, elles ne doivent pas introduire de toggle ni de comportement.
- Ne pas supprimer les fichiers existants sans raison ; travailler avec le shell actuel.

### Architecture compliance

- Astro doit rester en generation statique. Ne pas ajouter d'adapter SSR.
- Vue reste disponible uniquement pour les composants interactifs necessaires, typiquement le futur menu mobile.
- Tailwind 4 doit rester configure via `@tailwindcss/vite`; ne pas ajouter `tailwind.config.js` ou PostCSS sauf besoin prouve.
- Les content collections Astro seront implementees plus tard. Story 1.1 peut preparer `src/content/`, mais ne doit pas definir les schemas metier complets.
- Ne pas creer de routes `/vie-sportive/activites` ou `/vie-sportive/concours-ffta`.
- Ne pas ajouter d'API interne.

### References

- [PRD] `_bmad-output/planning-artifacts/prd.md` : Project Classification, Web App Specific Requirements, Functional Requirements, Non-Functional Requirements.
- [UX] `_bmad-output/planning-artifacts/ux-design-specification.md` : Core User Experience, Information Architecture, Implementation Notes.
- [Architecture] `_bmad-output/planning-artifacts/architecture.md` : Starter Template Evaluation, Core Architectural Decisions, Project Structure & Boundaries.
- [Epics] `_bmad-output/planning-artifacts/epics.md` : Epic 1, Story 1.1.
- [Readiness] `_bmad-output/planning-artifacts/implementation-readiness-report-2026-05-11.md` : Premiere Story Recommandee, Architecture Compliance Review.
- Astro content collections : `src/content.config.ts` est le point de configuration des collections build-time avec `defineCollection()` et schemas Zod. A utiliser dans les stories de collections, pas forcement ici.
- Astro routing : les routes viennent de `src/pages`; `getStaticPaths()` sert aux routes dynamiques statiques futures.
- Astro Vue integration : `@astrojs/vue` permet de rendre/hydrater Vue 3 ; sans directive `client:*`, un composant framework n'est pas hydrate cote client.
- Tailwind Astro guide : Tailwind 4 avec Astro utilise `@tailwindcss/vite` dans `astro.config.mjs` et `@import "tailwindcss";` dans le CSS global.

## Definition of Done

- `npm run build` passe sans erreur.
- La sortie Astro indique un build statique.
- L'arborescence minimale cible existe ou est preparee avec `.gitkeep` quand necessaire.
- Aucune dependance interdite n'est ajoutee.
- Aucun backend, CMS, auth, base de donnees, espace membre ou adapter SSR n'est introduit.
- Aucune page metier complete n'est implementee.
- Les fichiers touches sont listes dans le Dev Agent Record.

## Risques et Points d'Attention

- **Scope creep :** ne pas commencer Story 1.2 ou les pages metier pendant cette story.
- **Arborescence vide :** Git ne suit pas les dossiers vides ; utiliser `.gitkeep` si le but est de preparer une structure visible.
- **Navigation provisoire :** les liens actuels du header sont imparfaits, mais la navigation finale appartient a Story 1.2.
- **Encoding existant :** corriger seulement les textes touches localement ; ne pas lancer une refonte editoriale.
- **Dark mode :** reste post-MVP ; ne pas ajouter de toggle ou logique theme.
- **Collections :** ne pas introduire des schemas metier incomplets trop tot. Les stories 3.1 et 4.1 doivent porter ce travail.

## Questions Ouvertes

- Aucune question bloquante pour Story 1.1.
- Decision non bloquante a garder pour plus tard : Netlify Forms vs Formspree avant Story 5.4.
- Decision non bloquante a garder pour plus tard : iframe Google Calendar vs lien externe avant Story 5.3.

## Dev Agent Record

### Agent Model Used

GPT-5 Codex

### Debug Log References

- `npm run build` execute avec succes.
- Sortie Astro confirmee : `output: "static"`, `mode: "static"`, generation dans `dist/`.

### Completion Notes List

- Arborescence minimale cible materialisee avec des fichiers `.gitkeep`.
- Aucun fichier applicatif existant n'a ete modifie.
- Aucune page metier complete n'a ete creee.
- Aucun schema de content collection n'a ete cree.
- Aucune dependance n'a ete ajoutee.
- Aucun backend, CMS, authentification, base de donnees, espace membre ou adapter SSR n'a ete introduit.

### File List

- `_bmad-output/implementation-artifacts/1-1-initialiser-socle-astro-mvp.md`
- `src/assets/.gitkeep`
- `src/assets/images/.gitkeep`
- `src/components/content/.gitkeep`
- `src/components/ui/.gitkeep`
- `src/content/.gitkeep`
- `src/lib/.gitkeep`
- `src/lib/content/.gitkeep`

### Change Log

- 2026-05-11: Creation des marqueurs `.gitkeep` pour l'arborescence minimale cible et validation du build statique.
