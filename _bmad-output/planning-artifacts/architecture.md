---
stepsCompleted:
  - step-01-init
  - step-02-context
  - step-03-starter
  - step-04-decisions
  - step-05-patterns
  - step-06-structure
  - step-07-validation
  - step-08-complete
workflowType: architecture
lastStep: 8
status: complete
completedAt: 2026-05-11
project_name: amtta-site
user_name: Jonathan
inputDocuments:
  - _bmad-output/planning-artifacts/prd.md
  - _bmad-output/planning-artifacts/ux-design-specification.md
---

# Architecture Technique - amtta-site

**Auteur :** Jonathan  
**Date :** 2026-05-11  
**Perimetre :** Lot 1 / MVP  
**Stack cible :** Astro + Vue + Tailwind  
**Sources :** PRD et specification UX dans `_bmad-output/planning-artifacts/`

## Synthese

`amtta-site` est une migration modernisee du site Wix `amtta-mions.fr` vers un site statique MPA. L'architecture privilegie la simplicite : Astro porte les pages, les layouts, les routes et les contenus ; Vue est limite aux composants interactifs necessaires ; Tailwind fournit le systeme de styles.

Le Lot 1 / MVP exclut volontairement backend personnalise, CMS, authentification, base de donnees, espace membre et paiement. Les contenus sont maintenus dans le depot via Markdown, JSON ou collections Astro. Les medias restent legers sur le site, avec externalisation des archives lourdes vers Google Drive ou equivalent.

## Analyse du Contexte Projet

### Vue d'Ensemble des Exigences

**Fonctionnel :**

- Pages de presentation : Accueil, Le Club, Qui sommes-nous, Equipe, Vie Sportive, Pratique du Tir a l'Arc, Infos Pratiques, Entrainements, Nous rejoindre, Liens utiles, Contact.
- Contenus saisonniers : Activites et Concours organises par saison.
- Routes canoniques des contenus saisonniers sous la section Vie Sportive :
  - `/vie-sportive/activites/`
  - `/vie-sportive/activites/[saison]/`
  - `/vie-sportive/activites/[saison]/[activite]/`
  - `/vie-sportive/concours/`
  - `/vie-sportive/concours/[saison]/`
  - `/vie-sportive/concours/[saison]/[concours]/`
- Maximum 3 saisons visibles directement.
- Photos limitees a 5 a 10 images optimisees par activite ou concours.
- Archives anciennes, galeries completes et medias lourds externalises.
- Agenda Google ou equivalent integre ou lie.
- Formulaire de contact compatible site statique.

**Non-fonctionnel :**

- Generation statique.
- Performance cible elevee, notamment mobile.
- SEO local : AMTTA, Mions, tir a l'arc, entrainements, inscriptions, concours.
- Accessibilite pragmatique : semantique HTML, labels, contrastes, clavier, textes alternatifs.
- Maintenance simple par developpeur-mainteneur.
- Dark mode post-MVP possible sans bloquer la livraison.

### Echelle et Complexite

- **Domaine primaire :** site web statique de contenu.
- **Complexite :** faible.
- **Risque principal :** sur-architecture.
- **Composants architecturaux :** routes statiques, collections de contenu, composants UI, gestion medias, formulaire statique, agenda externe, SEO, deploiement.

### Contraintes Techniques et Dependances

- Astro 6.x deja present dans le projet.
- Vue 3 via `@astrojs/vue`.
- Tailwind 4 via `@tailwindcss/vite`.
- Node.js `>=22.12.0`.
- Pas de backend applicatif.
- Pas de service de donnees persistant gere par le site.
- Deploiement cible Netlify, Vercel ou equivalent.
- Domaine OVH existant a conserver.

### Preoccupations Transverses

- URLs lisibles et stables.
- Redirections depuis anciennes URLs Wix importantes.
- Limitation stricte du poids media.
- Donnees structurees type-safe autant que possible.
- Hydratation client minimale.
- Accessibilite et SEO integres dans les composants de base.

## Evaluation du Socle de Depart

### Decision

Le projet est deja initialise avec Astro, Vue et Tailwind. Aucun nouveau starter ou boilerplate ne doit etre introduit pour le Lot 1.

### Justification

- Le socle actuel correspond exactement au PRD : site statique Astro, Vue disponible, Tailwind installe.
- Ajouter un starter externe maintenant risquerait d'introduire des conventions inutiles, des composants marketing, un CMS, un routeur client ou des dependances superflues.
- L'architecture doit evoluer depuis la structure existante avec des dossiers et conventions explicites.

### Stack Locale Actuelle

```json
{
  "node": ">=22.12.0",
  "astro": "^6.3.1",
  "@astrojs/vue": "^6.0.1",
  "vue": "^3.5.34",
  "tailwindcss": "^4.3.0",
  "@tailwindcss/vite": "^4.3.0"
}
```

### References Externes Verifiees

- Routage Astro : routes basees sur les fichiers dans `src/pages/`, avec `getStaticPaths()` pour les routes dynamiques statiques.
- Content collections Astro : collections au build via `src/content.config.ts`, loaders et schemas.
- Assets Astro : `<Image />` et `<Picture />` pour les images optimisees.
- Integration Vue pour Astro : les composants Vue 3 peuvent etre rendus et hydrates comme islands Astro.
- Deploiement Astro Netlify/Vercel : les sites Astro statiques se construisent avec `astro build` / `npm run build` et publient `dist`.
- Netlify Forms : les formulaires HTML statiques peuvent etre geres sans appels API personnalises.

## Decisions Architecturales Principales

### Priorisation des Decisions

**Decisions critiques :**

- Utiliser la generation statique Astro comme architecture applicative.
- Utiliser les content collections Astro pour les contenus saisonniers structures.
- Garder les routes canoniques saisonnieres rattachees a la section Vie Sportive.
- Garder l'hydratation Vue optionnelle et rare.
- Utiliser des services externes pour le formulaire de contact, l'agenda et les archives lourdes.

**Decisions importantes :**

- Stocker les medias visibles et optimises dans le depot sous `src/assets` ou `public`.
- Stocker les galeries completes et anciennes saisons hors du depot.
- Utiliser des schemas explicites pour saisons, activites, concours, equipe et liens utiles.
- Maintenir des redirections pour les URLs Wix importantes.

**Decisions reportees post-MVP :**

- Toggle de dark mode.
- Filtres avances d'archives.
- CMS ou interface d'administration.
- Automatisation de l'ingestion de contenus.

### Architecture des Donnees

Pas de base de donnees. Pas de CMS. Les donnees sont locales, versionnees et generees statiquement.

Collections recommandees :

- `seasons`
- `activities`
- `competitions`
- `team`
- `usefulLinks`
- `gallery`
- optionnel : `siteSettings`

Utiliser `src/content.config.ts` avec les content collections Astro et des schemas Zod. Preferer Markdown pour les entrees editoriales riches et JSON pour les listes structurees compactes.

Regles :

- `season` est un slug stable comme `2025-2026`.
- Les activites et concours referencent une saison par slug.
- Seules les saisons avec `visible: true` apparaissent dans les selecteurs publics.
- Un helper de validation doit limiter les saisons visibles a 3.
- Les liens d'archives sont stockes comme URLs, pas comme medias embarques.

### Authentification et Securite

Pas d'authentification ni d'autorisation dans le MVP.

Regles de securite :

- Ne pas ajouter de login, espace membre ou logique de session.
- Ne pas stocker de donnees personnelles dans le depot.
- Ne pas committer de secrets fournisseur ni de tokens de deploiement.
- Garder les champs du formulaire de contact au minimum : nom, email, sujet, message.
- Conserver la configuration du fournisseur de formulaire dans son dashboard ou dans les variables d'environnement si necessaire.
- Curater les photos avant publication.

### API et Modes de Communication

Pas d'API interne. Pas de couche REST ou GraphQL.

Modes de communication :

- Lecture des contenus au build via les APIs Astro content.
- Navigation visiteur par liens HTML standards.
- Soumission du formulaire directement vers le fournisseur statique.
- Agenda integre via iframe ou lie en externe.
- Archives exposees comme liens externes.

### Architecture Frontend

Astro est le choix par defaut pour les pages et composants. Vue est reserve aux composants qui necessitent un etat dans le navigateur.

Composants Astro :

- layouts ;
- headers, footers et navigation quand ils sont statiques ;
- cartes ;
- listes ;
- tableaux ;
- affichage des medias ;
- markup de formulaire ;
- composants SEO/head.

Composants Vue :

- menu mobile s'il a besoin d'un etat ouvert/ferme cote client ;
- selecteur de saison optionnel si l'amelioration progressive est utile ;
- wrapper d'agenda optionnel seulement si necessaire.

Regle d'hydratation : ne pas utiliser de directive `client:*` sauf si le composant a reellement besoin d'une interaction au runtime.

### Infrastructure et Deploiement

Cible de deploiement privilegiee : Netlify, car il fournit l'hebergement statique et la gestion de formulaires integree. Vercel reste compatible si le fournisseur de formulaire est externe, par exemple Formspree.

Build :

```bash
npm run build
```

Sortie :

```text
dist/
```

Regles de deploiement :

- Garder la sortie statique Astro sauf si une exigence future prouve que le SSR est necessaire.
- Ne pas ajouter d'adapter Astro pour le deploiement statique sauf si une fonctionnalite d'hebergeur le requiert.
- Configurer le DNS du domaine OVH vers l'hebergeur choisi.
- Ajouter les redirections des anciennes URLs Wix importantes via la configuration de l'hebergeur.

## Routes et Pages

### Routes Canoniques

```text
/
/le-club/
/le-club/qui-sommes-nous/
/le-club/equipe/
/vie-sportive/
/vie-sportive/activites/
/vie-sportive/activites/[saison]/
/vie-sportive/activites/[saison]/[activite]/
/vie-sportive/concours/
/vie-sportive/concours/[saison]/
/vie-sportive/concours/[saison]/[concours]/
/vie-sportive/galerie/
/pratique-du-tir-a-l-arc/
/infos-pratiques/
/infos-pratiques/entrainements/
/infos-pratiques/nous-rejoindre/
/infos-pratiques/liens-utiles/
/contact/
```

### Fichiers de Pages Astro

```text
src/pages/
  index.astro
  le-club/
    index.astro
    qui-sommes-nous.astro
    equipe.astro
  vie-sportive/
    index.astro
    activites/
      index.astro
      [saison]/
        index.astro
        [activite].astro
    concours/
      index.astro
      [saison]/
        index.astro
        [concours].astro
    galerie.astro
  pratique-du-tir-a-l-arc.astro
  infos-pratiques/
    index.astro
    entrainements.astro
    nous-rejoindre.astro
    liens-utiles.astro
  contact.astro
```

### Generation des Routes Dynamiques

Utiliser `getStaticPaths()` pour :

- `/vie-sportive/activites/[saison]/`
- `/vie-sportive/activites/[saison]/[activite]/`
- `/vie-sportive/concours/[saison]/`
- `/vie-sportive/concours/[saison]/[concours]/`

Regles de generation :

- Generer les pages uniquement depuis les content collections.
- Exclure les brouillons en production.
- Generer les pages index de saison publiques uniquement pour les saisons visibles.
- Les pages detail anciennes peuvent exister seulement si elles sont explicitement conservees ; sinon les anciens contenus pointent vers les archives externes.

## Content Collections Astro

### Arborescence Recommandee

```text
src/content/
  seasons/
    2025-2026.json
    2024-2025.json
  activities/
    2025-2026/
      forum-associations.md
      passage-fleches.md
  competitions/
    2025-2026/
      concours-salle-mions.md
  team/
    bureau.json
  useful-links/
    links.json
  gallery/
    gallery.json
```

### Schemas des Collections

`seasons`:

- `slug: string`
- `label: string`
- `startDate: date/string`
- `endDate: date/string`
- `current: boolean`
- `visible: boolean`
- `archiveUrl?: string`
- `order: number`

`activities`:

- `title: string`
- `slug: string`
- `season: string`
- `date?: date/string`
- `summary: string`
- `cover?: image/string`
- `photos?: Photo[]`
- `archiveUrl?: string`
- `draft?: boolean`

`competitions`:

- `title: string`
- `slug: string`
- `season: string`
- `date?: date/string`
- `location?: string`
- `summary?: string`
- `results?: ResultBlock[]`
- `resultFiles?: Link[]`
- `photos?: Photo[]`
- `archiveUrl?: string`
- `draft?: boolean`

`Photo`:

- `src: string`
- `alt: string`
- `caption?: string`
- `credit?: string`

`Link`:

- `label: string`
- `url: string`
- `external: boolean`

### Regles de Contenu

- Le slug d'une entree de contenu doit correspondre a son nom de fichier.
- Une reference de saison doit correspondre a un slug de saison existant.
- Les photos par activite ou concours doivent rester entre 0 et 10.
- Preferer 5 a 10 photos uniquement lorsque la page en beneficie vraiment.
- Les albums lourds doivent etre representes par `archiveUrl`.
- Never store complete old galleries in the repo.

## Architecture des Composants

### Composants Globaux

```text
src/components/site/
  Header.astro
  Navigation.astro
  MobileMenu.vue
  Footer.astro
  Breadcrumbs.astro
  Seo.astro
```

### Composants UI

```text
src/components/ui/
  ButtonLink.astro
  Card.astro
  Section.astro
  PageHero.astro
  Prose.astro
  Alert.astro
  ExternalLink.astro
```

### Composants Fonctionnels

```text
src/components/content/
  QuickLinks.astro
  SeasonSelector.astro
  ActivityCard.astro
  CompetitionCard.astro
  ResultTable.astro
  PhotoStrip.astro
  PhotoGrid.astro
  ArchiveLink.astro
  AgendaEmbed.astro
  ContactForm.astro
  TeamMemberCard.astro
  UsefulLinkCard.astro
```

### Regles de Composants

- Les composants qui affichent des content collections recoivent des donnees typees, pas des chemins de fichiers bruts.
- Les composants ne recuperent pas eux-memes les donnees, sauf helper de niveau page.
- Les composants restent presentationnels quand c'est possible.
- Les composants propres aux contenus vivent dans `src/components/content`.
- Les primitives visuelles partagees vivent dans `src/components/ui`.
- Les composants de structure du site vivent dans `src/components/site`.

## Strategie Medias

### Medias Locaux

Utiliser des images locales optimisees pour :

- hero or key presentation images;
- selected activity/competition photos;
- gallery vitrine;
- team or club imagery if approved.

Structure recommandee :

```text
src/assets/
  images/
    site/
    activities/
      2025-2026/
    competitions/
      2025-2026/
    gallery/
```

### Medias Publics

Utiliser `public/` uniquement pour les fichiers qui doivent conserver une URL stable ou qui ne sont pas traites par Astro :

```text
public/
  favicon.svg
  robots.txt
  documents/
```

### Regles d'Optimisation

- Utiliser Astro `<Image />` ou `<Picture />` pour les images locales.
- Chaque image informative doit avoir un `alt`.
- Les images cles au-dessus de la ligne de flottaison peuvent utiliser un chargement prioritaire.
- Les images de contenu doivent etre en lazy loading par defaut.
- Ne pas committer d'archives volumineuses.
- Ne pas integrer directement des albums Google Drive comme grandes galeries.

### Archives Externes

Google Drive ou equivalent stocke :

- saisons plus anciennes que les 3 saisons visibles ;
- albums photo complets ;
- documents de resultats volumineux ;
- exports historiques depuis Wix.

Les pages doivent exposer les liens d'archives via un composant reutilisable `ArchiveLink.astro`.

## Architecture du Formulaire de Contact

### Option MVP Privilegiee : Netlify Forms

En cas de deploiement sur Netlify, utiliser un formulaire HTML statique rendu par Astro :

- `name="contact"`
- `method="POST"`
- `data-netlify="true"` ou `netlify`
- champ cache `form-name` si necessaire
- champ honeypot si active

Aucun Vue n'est requis pour le formulaire de contact MVP.

### Option Portable : Formspree ou Equivalent

En cas de deploiement sur Vercel ou un autre hebergeur statique, utiliser Formspree ou equivalent :

- l'action du formulaire pointe vers l'endpoint du fournisseur ;
- pas de backend personnalise ;
- le dashboard du fournisseur gere les notifications.

### Champs du Formulaire

- `name`
- `email`
- `subject`
- `message`

Regles :

- labels visibles pour tous les champs ;
- pas d'upload de fichier dans le MVP ;
- contact alternatif visible sur la page ;
- aucune donnee personnelle sensible demandee.

## Architecture Agenda

### Options d'Integration

Le MVP supporte au choix :

- Google Calendar iframe embed;
- lien externe vers l'agenda ;
- liste compacte d'evenements a venir maintenue manuellement si l'iframe n'est pas souhaitable.

### Pattern Recommande

Creer `AgendaEmbed.astro` avec les props :

- `embedUrl?: string`
- `externalUrl: string`
- `title: string`

Regles :

- L'agenda ne doit pas etre la seule source pour les informations critiques d'entrainement.
- Si l'iframe est indisponible, les utilisateurs voient toujours le lien externe et les contenus statiques essentiels.
- Pas d'integration Google Calendar API dans le MVP.

## SEO et Metadonnees

### Composant SEO

Creer `src/components/site/Seo.astro` ou un equivalent integre dans `Layout.astro`.

Props:

- `title`
- `description`
- `canonicalPath`
- `ogImage?`
- `noindex?`

Regles :

- Chaque page a un titre et une description uniques.
- Les pages detail saisonnieres incluent la saison et le titre du contenu.
- Les URLs canoniques des contenus saisonniers utilisent les routes sous `/vie-sportive/`.
- Les termes de recherche locale sont integres naturellement dans les contenus, sans bourrage de mots-cles.

### Sitemap et Robots

Recommande :

- ajouter l'integration Astro sitemap si necessaire pendant l'implementation ;
- maintenir `robots.txt` ;
- lier volontairement les contenus externes archives.

### Redirections

Les redirections des anciennes URLs Wix doivent etre configurees selon l'hebergeur :

- Netlify : `_redirects` ou `netlify.toml`.
- Vercel : `vercel.json`.

Stocker le mapping dans :

```text
docs/migration/redirects.md
```

ou dans des donnees structurees si une automatisation devient utile.

## Architecture de Deploiement

### Build et Preview

```bash
npm run build
npm run preview
```

### Netlify

Recommande si Netlify Forms est retenu :

- commande de build : `npm run build`
- dossier de publication : `dist`
- formulaires actives dans le dashboard Netlify ;
- domaine configure depuis le DNS OVH ;
- redirections dans `_redirects` ou `netlify.toml`.

### Vercel

Deploiement statique compatible :

- framework : Astro ;
- commande de build : `npm run build` ;
- dossier de sortie : `dist` ;
- formulaire de contact via Formspree ou equivalent ;
- redirections dans `vercel.json`.

### Variables d'Environnement

Le MVP devrait en necessiter peu ou aucune. Si besoin :

- les URLs publiques non secretes peuvent utiliser `PUBLIC_*` ;
- les secrets doivent rester uniquement dans les dashboards d'hebergement ;
- aucun `.env` contenant des secrets ne doit etre committe.

## Patterns d'Implementation et Regles de Coherence

### Nommage

- Routes et noms de fichiers : kebab-case.
- Slugs de collections : kebab-case.
- Slugs de saisons : `YYYY-YYYY`.
- Composants Astro : noms de fichiers en PascalCase.
- Composants Vue : noms de fichiers en PascalCase.
- Fonctions helper : camelCase.
- Noms de types : PascalCase.

Exemples :

- `src/pages/pratique-du-tir-a-l-arc.astro`
- `src/content/activities/2025-2026/forum-associations.md`
- `ActivityCard.astro`
- `getVisibleSeasons()`

### Acces aux Donnees

Creer les content helpers dans :

```text
src/lib/content/
  seasons.ts
  activities.ts
  competitions.ts
  navigation.ts
```

Regles :

- Les pages appellent des helpers au lieu de dupliquer les filtres.
- Les helpers centralisent le tri, le filtrage des saisons visibles et le filtrage des brouillons.
- Les composants recoivent des donnees deja preparees.

### Gestion des Erreurs

Les erreurs au build sont acceptables pour un contenu invalide. Il vaut mieux faire echouer le build que publier une navigation cassee.

Regles :

- Une saison referencee mais absente doit faire echouer la validation.
- Plus de 3 saisons visibles doit faire echouer la validation ou etre explicitement detecte par un helper.
- Un `alt` manquant sur une photo doit faire echouer la validation du schema.
- Les URLs d'archives externes doivent etre validees comme URLs.

### Etats de Chargement

La plupart des pages sont statiques et n'ont pas besoin d'etat de chargement.

Seuls les composants Vue hydrates peuvent avoir besoin d'etats de chargement ou d'etats vides. Ces etats doivent se degrader proprement si JavaScript est indisponible.

### Liens Externes

Tous les liens externes doivent utiliser un composant partage ou une convention de helper :

- libelle clair ;
- `target="_blank"` uniquement lorsque c'est intentionnel ;
- `rel="noopener noreferrer"` lors de l'ouverture dans un nouvel onglet ;
- indication visible lorsque c'est utile.

## Structure Projet et Frontieres

### Structure Cible Complete

```text
amtta-site/
  astro.config.mjs
  package.json
  package-lock.json
  tsconfig.json
  README.md
  public/
    favicon.svg
    robots.txt
    documents/
  src/
    assets/
      images/
        site/
        activities/
        competitions/
        gallery/
    components/
      site/
        Header.astro
        Navigation.astro
        MobileMenu.vue
        Footer.astro
        Breadcrumbs.astro
        Seo.astro
      ui/
        Alert.astro
        ButtonLink.astro
        Card.astro
        ExternalLink.astro
        PageHero.astro
        Prose.astro
        Section.astro
      content/
        ActivityCard.astro
        AgendaEmbed.astro
        ArchiveLink.astro
        CompetitionCard.astro
        ContactForm.astro
        PhotoGrid.astro
        PhotoStrip.astro
        QuickLinks.astro
        ResultTable.astro
        SeasonSelector.astro
        TeamMemberCard.astro
        UsefulLinkCard.astro
    content/
      seasons/
      activities/
      competitions/
      team/
      useful-links/
      gallery/
    layouts/
      Layout.astro
      SectionLayout.astro
    lib/
      content/
        activities.ts
        competitions.ts
        navigation.ts
        seasons.ts
      seo.ts
      urls.ts
    pages/
      index.astro
      le-club/
        index.astro
        qui-sommes-nous.astro
        equipe.astro
      vie-sportive/
        index.astro
        activites/
          index.astro
          [saison]/
            index.astro
            [activite].astro
        concours/
          index.astro
          [saison]/
            index.astro
            [concours].astro
        galerie.astro
      pratique-du-tir-a-l-arc.astro
      infos-pratiques/
        index.astro
        entrainements.astro
        nous-rejoindre.astro
        liens-utiles.astro
      contact.astro
    styles/
      global.css
    content.config.ts
  docs/
    maintenance/
      content-guide.md
    migration/
      redirects.md
```

### Frontieres Architecturales

**Pages :** orchestrent donnees, layout et composants.  
**Helpers de contenu :** trient, filtrent et preparent les collections.  
**Composants :** rendent l'interface sans connaitre le systeme de fichiers.  
**Content collections :** stockent et valident les donnees.  
**Services externes :** contact, agenda et archives lourdes.  

Aucun composant ne doit lire directement des fichiers depuis le disque. Aucune page ne doit dupliquer une logique complexe de tri ou de filtrage.

### Mapping Exigences vers Structure

| Domaine d'exigence | Emplacement d'implementation |
| --- | --- |
| Pages editoriales | `src/pages`, `src/layouts`, `src/components/ui` |
| Navigation proche Wix | `src/components/site/Navigation.astro`, `src/lib/content/navigation.ts` |
| Activites par saison | `src/content/activities`, `src/pages/vie-sportive/activites`, `src/lib/content/activities.ts` |
| Concours par saison | `src/content/competitions`, `src/pages/vie-sportive/concours`, `src/lib/content/competitions.ts` |
| 3 saisons visibles | `src/content/seasons`, `src/lib/content/seasons.ts` |
| Photos limitees | schemas content + `PhotoStrip.astro`, `PhotoGrid.astro` |
| Archives externes | `ArchiveLink.astro`, fields `archiveUrl` |
| Agenda | `AgendaEmbed.astro`, page Accueil/Vie Sportive/Infos |
| Contact | `src/pages/contact.astro`, `ContactForm.astro` |
| SEO | `Seo.astro`, `src/lib/seo.ts` |
| Deploiement | host config, README, docs maintenance |

## Conventions de Maintenance

### Ajouter une Saison

1. Ajouter `src/content/seasons/YYYY-YYYY.json`.
2. Marquer `visible: true` seulement si la saison doit apparaitre publiquement.
3. Verifier qu'il n'y a pas plus de 3 saisons visibles.
4. Ajouter les activites et concours dans leurs dossiers de saison.

### Ajouter une Activite

1. Creer `src/content/activities/YYYY-YYYY/slug.md`.
2. Renseigner titre, saison, date, resume et photos selectionnees.
3. Ajouter au maximum 10 photos optimisees.
4. Ajouter `archiveUrl` si une galerie complete existe.

### Ajouter un Concours

1. Creer `src/content/competitions/YYYY-YYYY/slug.md`.
2. Renseigner titre, saison, date, lieu, resume.
3. Ajouter resultats en donnees structurees ou liens documents.
4. Ajouter photos limitees et lien archive si necessaire.

### Modifier la Navigation

Navigation principale dans une seule source, idealement `src/lib/content/navigation.ts`. Ne pas coder des menus differents dans Header, Footer et MobileMenu.

## Resultats de Validation de l'Architecture

### Validation de Coherence

Les decisions sont coherentes avec le PRD et l'UX :

- Astro statique couvre le besoin MPA.
- Content collections couvrent la maintenance Markdown/JSON.
- Vue limite aux interactions respecte la performance.
- Routes Activites/Concours sous Vie Sportive respectent la specification UX.
- L'externalisation media evite le gonflement du depot.
- Netlify/Vercel restent compatibles avec l'objectif deploiement statique.

### Validation de Couverture des Exigences

Tous les blocs fonctionnels du PRD disposent d'un emplacement architectural :

- pages principales ;
- contenus saisonniers ;
- concours et resultats ;
- galerie vitrine ;
- agenda ;
- contact ;
- archives externes ;
- SEO ;
- responsive/accessibilite ;
- maintenance.

### Analyse des Ecarts

**Aucun ecart critique.**

Ecarts mineurs a trancher pendant l'implementation :

- choix final Netlify Forms vs Formspree selon hebergeur retenu ;
- choix exact iframe agenda vs lien externe ;
- inventaire des anciennes URLs Wix ;
- charte couleur definitive si l'identite visuelle AMTTA n'est pas encore formalisee.

### Checklist de Completude de l'Architecture

**Analyse des exigences**

- [x] Contexte projet analyse en profondeur
- [x] Echelle et complexite evaluees
- [x] Contraintes techniques identifiees
- [x] Preoccupations transverses cartographiees

**Decisions architecturales**

- [x] Decisions critiques documentees avec versions
- [x] Stack technique entierement specifiee
- [x] Patterns d'integration definis
- [x] Considerations de performance traitees

**Patterns d'implementation**

- [x] Conventions de nommage etablies
- [x] Patterns de structure definis
- [x] Modes de communication specifies
- [x] Patterns de processus documentes

**Structure projet**

- [x] Arborescence complete definie
- [x] Frontieres de composants etablies
- [x] Points d'integration cartographies
- [x] Mapping exigences vers structure complete

### Evaluation de Preparation de l'Architecture

**Statut global :** PRET POUR IMPLEMENTATION  
**Niveau de confiance :** eleve

### Passage a l'Implementation

Les agents IA qui implementent le MVP doivent :

- respecter exactement les routes saisonnieres sous `/vie-sportive/` ;
- garder le site statique sauf changement explicite dans une future story ;
- utiliser Astro en premier, Vue seulement pour un vrai etat cote client ;
- garder les contenus dans les collections et helpers, pas hard-codes dans les pages ;
- faire respecter la regle des 3 saisons visibles ;
- garder les medias locaux limites et optimises ;
- utiliser les archives externes pour les contenus lourds ;
- eviter tout ajout de CMS, backend, authentification ou base de donnees.

**Premiere priorite d'implementation :** creer `src/content.config.ts`, les content helpers et le squelette final des routes avant de remplir tous les contenus editoriaux.

## References Techniques

- Routage Astro : https://docs.astro.build/en/guides/routing/
- Content collections Astro : https://docs.astro.build/en/guides/content-collections/
- Images et assets Astro : https://docs.astro.build/en/guides/images/
- Integration Vue pour Astro : https://docs.astro.build/en/guides/integrations-guide/vue/
- Deploiement Astro sur Netlify : https://docs.netlify.com/frameworks/astro/
- Deploiement Astro sur Vercel : https://vercel.com/docs/frameworks/frontend/astro
- Configuration Netlify Forms : https://docs.netlify.com/forms/setup/
