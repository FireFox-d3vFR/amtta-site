# Story 1.2: Creer le layout global, le header, la navigation et le footer

Status: review

## Story

As a visiteur,  
I want une navigation claire, stable et utilisable sur desktop comme sur mobile,  
so that je puisse retrouver les rubriques principales du site AMTTA sans perdre les reperes du site Wix existant.

## Contexte

Le projet `amtta-site` migre le site Wix `amtta-mions.fr` vers un site statique Astro + Vue + Tailwind. Story 1.1 a consolide le socle minimal : Astro reste en generation statique, Vue est disponible uniquement pour les composants interactifs necessaires, Tailwind 4 est configure via `@tailwindcss/vite`, et l'arborescence minimale existe.

Story 1.2 doit construire le shell global du MVP : `Layout.astro`, header, navigation desktop, menu mobile et footer. Elle doit corriger la navigation provisoire actuelle sans creer les pages metier completes, sans creer de content collections et sans ajouter de dependance.

La navigation doit rester proche des reperes fonctionnels Wix, tout en respectant la nouvelle decision d'architecture : Vie Sportive est la section parente des URLs Activites, Concours et Galerie. Les routes canoniques correspondantes sont `/vie-sportive/activites/`, `/vie-sportive/concours/` et `/vie-sportive/galerie/`.

## Objectifs

- Mettre en place un shell global coherent pour toutes les pages Astro.
- Centraliser la definition de navigation pour eviter des menus divergents entre desktop, mobile et footer.
- Afficher une navigation desktop lisible avec les rubriques MVP.
- Afficher une navigation mobile accessible, claire et proche de la navigation desktop.
- Utiliser Vue uniquement si necessaire pour l'etat ouvert/ferme du menu mobile.
- Corriger les liens provisoires actuels du header vers les routes canoniques.
- Garder le site statique, sans backend, CMS, auth, base de donnees, espace membre ou adapter SSR.
- Verifier `npm run build`.

## Acceptance Criteria

1. **Layout global**

   **Given** une page Astro qui utilise `Layout.astro`  
   **When** la page est rendue  
   **Then** elle contient un document HTML en francais, un `Header`, un element `main` semantique et un `Footer`  
   **And** le CSS global Tailwind reste importe une seule fois depuis le layout.

2. **Navigation desktop**

   **Given** les rubriques MVP definies dans le PRD et l'UX  
   **When** un visiteur consulte le site sur desktop  
   **Then** le header expose une navigation claire vers Accueil, Le Club, Vie Sportive, Pratique du Tir a l'Arc, Infos Pratiques et Contact  
   **And** les entrees ou sous-entrees permettent d'acceder aux routes suivantes quand elles sont pertinentes :
   - `/`
   - `/le-club/`
   - `/le-club/qui-sommes-nous/`
   - `/le-club/equipe/`
   - `/vie-sportive/`
   - `/vie-sportive/activites/`
   - `/vie-sportive/concours/`
   - `/vie-sportive/galerie/`
   - `/pratique-du-tir-a-l-arc/`
   - `/infos-pratiques/`
   - `/infos-pratiques/entrainements/`
   - `/infos-pratiques/nous-rejoindre/`
   - `/infos-pratiques/liens-utiles/`
   - `/contact/`

3. **Routes canoniques Activites et Concours**

   **Given** la rubrique Vie Sportive  
   **When** le visiteur accede a Activites ou Concours depuis la navigation  
   **Then** les liens pointent vers `/vie-sportive/activites/` et `/vie-sportive/concours/`  
   **And** les anciennes routes directes `/activites/` et `/concours/` ne sont plus referencees comme routes canoniques.

4. **Navigation mobile**

   **Given** un petit ecran  
   **When** le visiteur ouvre le menu mobile  
   **Then** les memes rubriques et liens essentiels sont accessibles dans un panneau lisible  
   **And** le bouton de menu possede un nom accessible, un etat ouvert/ferme comprehensible et reste utilisable au clavier.

5. **Usage limite de Vue**

   **Given** le choix Astro-first du projet  
   **When** Story 1.2 est implementee  
   **Then** Astro reste le rendu principal du layout, du header, de la navigation desktop et du footer  
   **And** Vue n'est utilise que pour le menu mobile si un etat client est necessaire.

6. **Footer MVP**

   **Given** le footer global  
   **When** un visiteur arrive en bas de page  
   **Then** il retrouve le nom AMTTA, un rappel de contact ou lien Contact, et des liens secondaires utiles  
   **And** les liens ne dupliquent pas une structure contradictoire avec le header.

7. **Build statique**

   **Given** le shell global implemente  
   **When** le developpeur lance `npm run build`  
   **Then** le build se termine avec succes  
   **And** la sortie Astro confirme `output: "static"` et `mode: "static"`.

## Tasks / Subtasks

- [x] Lire l'etat initial du shell (AC: 1, 2, 4)
  - [x] Lire `src/layouts/Layout.astro`, `src/components/site/Header.astro`, `src/components/site/Footer.astro`, `src/components/site/Navigation.astro`, `src/components/site/MobileMenu.vue` et `src/styles/global.css`.
  - [x] Confirmer que `Navigation.astro` et `MobileMenu.vue` sont actuellement vides.
  - [x] Identifier les liens provisoires actuels du header (`/club`, `/pratiques`, etc.) a remplacer par les routes canoniques.

- [x] Centraliser la definition de navigation (AC: 2, 3, 6)
  - [x] Creer une source unique de navigation, recommandee dans `src/lib/content/navigation.ts` ou equivalent simple.
  - [x] Definir les groupes de navigation MVP : Accueil, Le Club, Vie Sportive, Pratique du Tir a l'Arc, Infos Pratiques, Contact.
  - [x] Inclure les sous-liens utiles sans creer de pages metier dans cette story.
  - [x] Utiliser uniquement des objets/constantes TypeScript simples ; ne pas creer de content collection.
  - [x] Verifier que les liens Activites et Concours pointent vers `/vie-sportive/activites/` et `/vie-sportive/concours/`.

- [x] Refactorer le header et la navigation desktop (AC: 1, 2, 3)
  - [x] Faire importer et utiliser `Navigation.astro` par `Header.astro`.
  - [x] Afficher le logo ou nom AMTTA comme lien vers `/`.
  - [x] Afficher les entrees desktop a partir de la source de navigation centralisee.
  - [x] Prevoir des sous-liens simples via dropdown CSS accessible ou liste exposee selon le pattern le plus sobre.
  - [x] Garder une structure HTML semantique : `header`, `nav`, listes de liens quand pertinent.
  - [x] Ne pas ajouter de librairie UI, routeur client ou dependance d'icones.

- [x] Implementer le menu mobile si necessaire avec Vue (AC: 4, 5)
  - [x] Utiliser `MobileMenu.vue` uniquement pour gerer l'etat ouvert/ferme du menu mobile si Astro seul devient trop limite.
  - [x] Hydrater le composant avec une directive `client:*` uniquement sur ce composant et uniquement si l'interaction l'exige.
  - [x] Le bouton doit exposer un libelle accessible, `aria-expanded` et `aria-controls` ou equivalent.
  - [x] Le panneau mobile doit proposer les memes routes essentielles que la navigation desktop.
  - [x] Le menu doit rester utilisable au clavier et ne pas masquer definitivement le contenu si JavaScript est indisponible.

- [x] Clarifier le layout global (AC: 1, 5)
  - [x] Conserver l'import de `src/styles/global.css` dans `Layout.astro`.
  - [x] Conserver `<html lang="fr">`.
  - [x] Donner un `id` utile au `main` si un lien d'evitement est ajoute.
  - [x] Ne pas introduire de systeme SEO complet dans cette story ; Story 1.4 le traitera.
  - [x] Ne pas activer de dark mode ou de toggle theme.

- [x] Refactorer le footer MVP (AC: 6)
  - [x] Corriger les textes mal encodes dans le footer si le fichier est modifie.
  - [x] Afficher une mention AMTTA claire et sobre.
  - [x] Ajouter des liens secondaires vers Contact, Infos pratiques, Activites et Concours si cela reste lisible.
  - [x] Identifier les liens externes seulement s'il y en a ; ne pas inventer d'archives, agenda ou partenaires dans cette story.

- [x] Verifier le responsive et l'accessibilite pragmatique (AC: 2, 4, 6)
  - [x] Verifier que la navigation desktop ne s'affiche pas sur mobile si un menu mobile la remplace.
  - [x] Verifier que le menu mobile n'introduit pas de chevauchement incoherent.
  - [x] Verifier les focus visibles sur liens et boutons.
  - [x] Verifier que les textes longs comme "Pratique du Tir a l'Arc" restent lisibles.

- [x] Respecter strictement le scope Story 1.2 (AC: 3, 5)
  - [x] Ne pas creer les pages `/le-club/`, `/vie-sportive/activites/`, `/vie-sportive/concours/`, `/contact/`, etc.
  - [x] Ne pas creer `src/content.config.ts`.
  - [x] Ne pas creer les schemas `seasons`, `activities` ou `competitions`.
  - [x] Ne pas ajouter de formulaire, agenda, galerie, cartes d'activites ou composants metier.
  - [x] Ne pas ajouter de dependance.

- [x] Valider le build (AC: 7)
  - [x] Executer `npm run build`.
  - [x] Confirmer que le build reste statique.
  - [x] Confirmer que `dist/` est genere.

- [x] Mettre a jour le Dev Agent Record (AC: 1-7)
  - [x] Cocher les taches terminees.
  - [x] Lister les fichiers crees ou modifies.
  - [x] Noter les choix d'implementation du menu mobile.
  - [x] Noter explicitement qu'aucune dependance, page metier ou content collection n'a ete ajoutee.

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
- `_bmad-output/implementation-artifacts/1-1-initialiser-socle-astro-mvp.md`

### A modifier ou creer probablement

- `src/layouts/Layout.astro`
- `src/components/site/Header.astro`
- `src/components/site/Navigation.astro`
- `src/components/site/MobileMenu.vue`
- `src/components/site/Footer.astro`
- `src/lib/content/navigation.ts`
- `_bmad-output/implementation-artifacts/1-2-creer-layout-global-header-navigation-footer.md`

### A ne pas creer dans cette story

- Pages metier completes :
  - `src/pages/le-club/index.astro`
  - `src/pages/le-club/qui-sommes-nous.astro`
  - `src/pages/le-club/equipe.astro`
  - `src/pages/vie-sportive.astro`
  - `src/pages/vie-sportive/activites/index.astro`
  - `src/pages/vie-sportive/concours/index.astro`
  - `src/pages/vie-sportive/galerie.astro`
  - `src/pages/pratique-du-tir-a-l-arc.astro`
  - `src/pages/infos-pratiques/index.astro`
  - `src/pages/infos-pratiques/entrainements.astro`
  - `src/pages/infos-pratiques/nous-rejoindre.astro`
  - `src/pages/infos-pratiques/liens-utiles.astro`
  - `src/pages/contact.astro`
- `src/content.config.ts`
- Schemas ou collections `seasons`, `activities`, `competitions`
- Formulaire Netlify/Formspree
- Agenda Google
- Galerie ou composants medias metier
- Redirections de production
- Configuration domaine OVH

## Dev Notes

### Etat actuel issu de Story 1.1

- Story 1.1 est en statut `review`.
- `npm run build` passe avec succes.
- La sortie Astro a ete confirmee en `output: "static"` et `mode: "static"`.
- L'arborescence minimale existe :
  - `src/components/site`
  - `src/components/ui`
  - `src/components/content`
  - `src/lib`
  - `src/lib/content`
  - `src/content`
  - `src/assets`
  - `src/assets/images`
- Aucun backend, CMS, auth, base de donnees, espace membre ou adapter SSR n'a ete introduit.

### Etat actuel des fichiers a modifier

- `src/layouts/Layout.astro`
  - Importe deja `../styles/global.css`.
  - Rend deja `Header`, `main` et `Footer`.
  - Contient `<html lang="fr">`.
  - Contient des classes `dark:*` existantes. Ne pas ajouter de logique dark mode dans cette story.

- `src/components/site/Header.astro`
  - Contient actuellement la navigation inline.
  - Contient des liens provisoires non conformes : `/club`, `/pratiques`, `/concours` utilise comme libelle Vie Sportive.
  - Doit etre refactore pour deleguer la liste de liens a `Navigation.astro` et/ou la source centralisee.

- `src/components/site/Navigation.astro`
  - Fichier existant actuellement vide.
  - Candidat naturel pour la navigation desktop Astro.

- `src/components/site/MobileMenu.vue`
  - Fichier existant actuellement vide.
  - Candidat naturel pour l'etat ouvert/ferme du menu mobile.
  - Ne doit pas devenir un routeur client ou une navigation SPA.

- `src/components/site/Footer.astro`
  - Contient une mention AMTTA minimale.
  - Le texte existant presente des caracteres mal encodes ; il peut etre corrige dans cette story puisque le footer est dans le perimetre.

- `src/styles/global.css`
  - Contient `@import "tailwindcss";`.
  - Ne pas ajouter de configuration Tailwind ou PostCSS inutile.

### Routes de navigation a utiliser

Routes principales et secondaires autorisees dans les liens :

```text
/
/le-club/
/le-club/qui-sommes-nous/
/le-club/equipe/
/vie-sportive/
/vie-sportive/activites/
/vie-sportive/concours/
/vie-sportive/galerie/
/pratique-du-tir-a-l-arc/
/infos-pratiques/
/infos-pratiques/entrainements/
/infos-pratiques/nous-rejoindre/
/infos-pratiques/liens-utiles/
/contact/
```

Routes interdites dans cette story :

```text
/club
/pratiques
/activites/
/concours/
/galerie/
/vie-sportive/concours-ffta/
```

### Navigation recommandee

Structure recommandee pour la source de navigation :

```ts
export const mainNavigation = [
  { label: "Accueil", href: "/" },
  {
    label: "Le Club",
    href: "/le-club/",
    children: [
      { label: "Qui sommes-nous", href: "/le-club/qui-sommes-nous/" },
      { label: "Equipe", href: "/le-club/equipe/" },
    ],
  },
  {
    label: "Vie Sportive",
    href: "/vie-sportive/",
    children: [
      { label: "Activites", href: "/vie-sportive/activites/" },
      { label: "Concours", href: "/vie-sportive/concours/" },
      { label: "Galerie", href: "/vie-sportive/galerie/" },
    ],
  },
  {
    label: "Pratique du Tir a l'Arc",
    href: "/pratique-du-tir-a-l-arc/",
  },
  {
    label: "Infos Pratiques",
    href: "/infos-pratiques/",
    children: [
      { label: "Entrainements", href: "/infos-pratiques/entrainements/" },
      { label: "Nous rejoindre", href: "/infos-pratiques/nous-rejoindre/" },
      { label: "Liens utiles", href: "/infos-pratiques/liens-utiles/" },
    ],
  },
  { label: "Contact", href: "/contact/" },
];
```

Le dev peut adapter legerement les libelles pour lisibilite mobile, mais ne doit pas changer les routes canoniques.

### Architecture compliance

- Astro reste le rendu principal.
- Vue est limite au menu mobile si l'etat client est necessaire.
- Tailwind reste la seule solution de style.
- Ne pas ajouter de librairie de composants, d'icones ou d'animation.
- Ne pas ajouter de routeur client.
- Ne pas ajouter d'adapter SSR.
- Ne pas creer de content collections.
- Ne pas creer de pages metier completes.
- Ne pas ajouter d'API interne.

### Accessibilite pragmatique attendue

- `nav` avec `aria-label` explicite, par exemple `Navigation principale`.
- Bouton mobile avec libelle visible ou `aria-label`.
- `aria-expanded` synchronise avec l'etat du menu mobile si Vue est utilise.
- Focus visible sur les liens et boutons.
- Texte de lien explicite, pas de libelle vague.
- Structure de listes pour les groupes de liens quand cela aide les lecteurs d'ecran.
- Un lien d'evitement vers le contenu principal peut etre ajoute si simple et coherent.

### UX et responsive

- Desktop : navigation horizontale stable, sous-liens accessibles sans surcharge.
- Mobile : bouton menu, panneau vertical, rubriques et sous-liens scannables.
- Le lien Contact doit rester facile a trouver.
- Les libelles longs doivent pouvoir revenir a la ligne sans casser le layout.
- Ne pas creer de hero, cartes d'accueil ou contenu editorial dans cette story.

### References

- [PRD] `_bmad-output/planning-artifacts/prd.md` : FR1-FR5, FR47-FR48, NFR6-NFR15, NFR24-NFR29.
- [UX] `_bmad-output/planning-artifacts/ux-design-specification.md` : Information Architecture, Navigation Principale, Responsive Design, Accessibility Strategy.
- [Architecture] `_bmad-output/planning-artifacts/architecture.md` : Routes et Pages, Architecture des Composants, Patterns d'Implementation, Structure Projet et Frontieres.
- [Epics] `_bmad-output/planning-artifacts/epics.md` : Epic 1, Story 1.2.
- [Story 1.1] `_bmad-output/implementation-artifacts/1-1-initialiser-socle-astro-mvp.md` : etat du socle, fichiers existants, garde-fous.

## Definition of Done

- `Layout.astro` rend un shell global propre avec header, `main` et footer.
- `Header.astro` n'utilise plus les liens provisoires non conformes.
- `Navigation.astro` affiche la navigation desktop a partir d'une source centralisee ou equivalente.
- `MobileMenu.vue` gere uniquement le menu mobile si Vue est necessaire.
- Le footer contient une mention AMTTA propre et des liens secondaires coherents.
- Les liens Activites et Concours utilisent `/vie-sportive/activites/` et `/vie-sportive/concours/`.
- Aucune ancienne route directe `/activites/`, `/concours/` ou `/galerie/` n'est referencee comme route canonique.
- Aucune page metier complete n'est creee.
- Aucune content collection ou schema metier n'est cree.
- Aucune dependance n'est ajoutee.
- `npm run build` passe sans erreur.
- La sortie Astro confirme un build statique.
- Les fichiers touches et les choix d'implementation sont listes dans le Dev Agent Record.

## Risques et Points d'Attention

- **Scope creep :** ne pas commencer Story 1.3 ou les pages metier derriere les liens.
- **Routes inexistantes temporairement :** les liens peuvent pointer vers des routes prevues mais non encore creees. Ne pas creer les pages pour "corriger" cela dans Story 1.2.
- **Menu mobile trop complexe :** eviter transitions lourdes, focus trap complexe ou librairie externe. Rester pragmatique.
- **Hydratation inutile :** ne pas hydrater toute la navigation si seul le bouton mobile a besoin d'etat.
- **Navigation dupliquee :** eviter de coder des listes differentes dans Header, MobileMenu et Footer.
- **Encoding existant :** corriger les textes touches dans Header/Footer, sans lancer une refonte editoriale globale.
- **Dark mode :** post-MVP ; ne pas ajouter de toggle ou logique theme.
- **SEO complet :** Story 1.4 portera les metadonnees centrales. Story 1.2 peut garder un titre simple.

## Questions Ouvertes

- Aucune question bloquante pour Story 1.2.
- Decision non bloquante a garder pour l'implementation : dropdown desktop visible au survol/focus ou sous-liens exposes dans une navigation simple.
- Decision non bloquante a garder pour Story 1.4 : composant SEO dedie vs props enrichies du layout.

## Dev Agent Record

### Agent Model Used

GPT-5 Codex

### Debug Log References

- `npm run build` execute avec succes.
- Sortie Astro confirmee : `output: "static"`, `mode: "static"`, generation dans `dist/`.
- Controle routes interdites effectue : aucune reference applicative a `/club`, `/pratiques`, `/activites/`, `/concours/`, `/galerie/` ou `/vie-sportive/concours-ffta/`.
- Controle scope effectue : `src/content.config.ts` absent et seule page existante dans `src/pages` = `index.astro`.

### Completion Notes List

- Navigation centralisee dans `src/lib/content/navigation.ts` avec `mainNavigation` et `footerNavigation`.
- Header refactore pour composer `Navigation.astro` et `MobileMenu.vue`.
- Navigation desktop implementee en Astro avec sous-liens accessibles au survol et au focus.
- Menu mobile implemente dans `MobileMenu.vue` avec `<details>/<summary>` natif, rendu sans directive `client:*` et sans hydratation client.
- Layout global clarifie avec lien d'evitement et `main#contenu-principal`.
- Footer refactore avec mention AMTTA corrigee et liens secondaires coherents.
- Correction de trajectoire appliquee : Activites, Concours et Galerie utilisent maintenant les routes canoniques sous `/vie-sportive/`.
- Aucune page metier complete n'a ete creee.
- Aucune content collection ou schema metier n'a ete cree.
- Aucune dependance n'a ete ajoutee.
- Aucun backend, CMS, authentification, base de donnees, espace membre ou adapter SSR n'a ete introduit.

### File List

- `_bmad-output/implementation-artifacts/1-2-creer-layout-global-header-navigation-footer.md`
- `src/components/site/Footer.astro`
- `src/components/site/Header.astro`
- `src/components/site/MobileMenu.vue`
- `src/components/site/Navigation.astro`
- `src/layouts/Layout.astro`
- `src/lib/content/navigation.ts`

### Change Log

- 2026-05-11: Implementation du shell global, centralisation de la navigation, menu mobile natif sans hydratation client et validation du build statique.
- 2026-05-11: Realignement des routes canoniques Activites, Concours et Galerie sous la section `/vie-sportive/`.
