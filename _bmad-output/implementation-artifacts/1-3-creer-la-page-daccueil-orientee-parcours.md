# Story 1.3: Creer la page d'accueil orientee parcours

Status: review

## Story

As a nouveau visiteur,  
I want comprendre rapidement ce qu'est l'AMTTA et ou aller ensuite,  
so that je trouve les informations utiles en peu de clics.

## Contexte

Le projet `amtta-site` migre le site Wix `amtta-mions.fr` vers un site statique Astro + Vue + Tailwind. Story 1.1 a consolide le socle Astro statique et Story 1.2 a livre le shell global : `Layout.astro`, header, navigation desktop, menu mobile, footer et navigation centralisee dans `src/lib/content/navigation.ts`.

Story 1.3 doit remplacer l'accueil minimal actuel par une page d'accueil MVP orientee parcours. L'accueil doit expliquer clairement l'AMTTA, orienter vers les rubriques utiles et montrer un club vivant sans creer de rubrique Actualites dediee.

Les captures de la homepage Wix actuelle servent de reference fonctionnelle, pas de reference stylistique. Elles montrent les elements utiles a conserver : acces rapides, informations saisonnieres visibles, documents utiles, liens vers activites/concours, agenda accessible et photos recentes du club. Elles montrent aussi les problemes a corriger : mise en page compacte, zones petites, lisibilite faible, couleurs agressives, blocs tasses et responsive mobile a ameliorer.

Le perimetre reste strict : reutiliser le shell global existant, rester Astro-first, ne pas creer les pages metier liees, ne pas creer de content collections, ne pas integrer l'agenda Google complet, ne pas creer de galerie complete, ne pas ajouter de backend, CMS, authentification, base de donnees, espace membre, dependance ou adapter SSR.

## Objectifs

- Creer une page d'accueil claire, statique et orientee parcours.
- Presenter l'AMTTA, Mions et la pratique du tir a l'arc de facon concise.
- Proposer des acces rapides vers Entrainements, Nous rejoindre, Contact, Vie Sportive, Activites et Concours.
- Utiliser les routes realignees sous Vie Sportive :
  - `/vie-sportive/`
  - `/vie-sportive/activites/`
  - `/vie-sportive/concours/`
  - `/vie-sportive/galerie/`
- Signaler la vie du club avec des blocs de mise en avant statiques, sans rubrique Actualites dediee.
- Conserver l'esprit associatif simple et accessible de l'accueil Wix actuel sans reproduire son style visuel.
- Moderniser fortement le layout avec plus d'espace, une meilleure hierarchie et une presentation plus professionnelle.
- Garder l'accueil lisible sur mobile et desktop, sans chevauchement de contenu.
- Verifier obligatoirement `npm run build`.

## Acceptance Criteria

1. **Presentation claire de l'AMTTA**

   **Given** la page d'accueil  
   **When** un visiteur arrive sur `/`  
   **Then** il voit une presentation claire de l'AMTTA, de Mions et du tir a l'arc  
   **And** il comprend que le site est celui d'un club associatif local.

2. **Accueil orientee parcours**

   **Given** un nouveau visiteur, un parent ou un adulte debutant  
   **When** il parcourt l'accueil  
   **Then** il trouve des acces visibles vers Entrainements, Nous rejoindre et Contact  
   **And** ces acces utilisent les routes prevues `/infos-pratiques/entrainements/`, `/infos-pratiques/nous-rejoindre/` et `/contact/`.

3. **Acces Vie Sportive**

   **Given** un membre ou visiteur interesse par la saison du club  
   **When** il consulte les acces rapides ou blocs de l'accueil  
   **Then** il peut acceder a Vie Sportive, Activites et Concours  
   **And** les liens utilisent `/vie-sportive/`, `/vie-sportive/activites/` et `/vie-sportive/concours/`.

4. **Pas de rubrique Actualites dediee**

   **Given** la contrainte MVP sans rubrique Actualites  
   **When** l'accueil affiche des contenus saisonniers ou temps forts  
   **Then** ils sont presentes comme mises en avant, parcours ou temps forts  
   **And** aucune route `/actualites/`, section Actualites permanente ou modele d'actualite n'est cree.

5. **Respect du scope sans pages metier**

   **Given** les liens de l'accueil pointent vers des routes prevues  
   **When** Story 1.3 est implementee  
   **Then** seules les modifications necessaires a l'accueil et eventuels composants generiques associes sont realisees  
   **And** les pages metier ciblees par les liens ne sont pas creees dans cette story.

6. **Astro-first et statique**

   **Given** l'architecture validee  
   **When** l'accueil est implemente  
   **Then** la page est rendue principalement avec Astro et Tailwind  
   **And** aucun composant Vue n'est ajoute sauf besoin interactif justifie, non attendu pour cette story.

7. **Responsive et accessibilite pragmatique**

   **Given** un affichage mobile ou desktop  
   **When** l'accueil est consulte  
   **Then** les blocs, liens et appels a l'action restent lisibles, scannables et sans chevauchement  
   **And** les liens ont des libelles explicites et des focus visibles.

8. **Modernisation par rapport a Wix**

   **Given** les captures de la homepage Wix actuelle  
   **When** l'accueil MVP est implemente  
   **Then** il conserve l'esprit associatif, les acces rapides, les informations saisonnieres, les documents utiles, l'acces agenda et la presence de photos recentes  
   **And** il ne reproduit pas le style Wix actuel, les couleurs agressives, les zones trop petites, les elements tasses ou les blocs difficilement lisibles.

9. **Build statique**

   **Given** l'accueil implemente  
   **When** le developpeur lance `npm run build`  
   **Then** le build se termine avec succes  
   **And** le site reste en sortie statique Astro.

## Tasks / Subtasks

- [x] Lire l'etat actuel et les patterns etablis (AC: 1-8)
  - [x] Lire `src/pages/index.astro`.
  - [x] Lire `src/layouts/Layout.astro`.
  - [x] Lire `src/lib/content/navigation.ts`.
  - [x] Lire `src/components/site/Header.astro`, `Navigation.astro`, `MobileMenu.vue` et `Footer.astro` pour comprendre le shell existant.
  - [x] Confirmer que la page actuelle est un accueil minimal a remplacer.

- [x] Concevoir la structure de l'accueil MVP (AC: 1, 2, 3, 4, 7, 8)
  - [x] Prevoir un hero sobre avec nom AMTTA, localisation Mions et proposition claire.
  - [x] Ajouter une presentation courte du club et de la pratique.
  - [x] Ajouter des acces rapides vers Entrainements, Nous rejoindre, Contact, Vie Sportive, Activites et Concours.
  - [x] Ajouter des blocs de mise en avant statiques pour la saison ou la vie du club, sans les presenter comme Actualites.
  - [x] Prevoir un bloc Documents utiles ou Ressources utiles si cela aide a conserver l'usage Wix actuel, sans creer de page metier supplementaire.
  - [x] Prevoir un bloc Agenda visible ou un acces agenda clair, sans integrer encore l'agenda Google complet.
  - [x] Prevoir une presence photo sobre, avec image placeholder ou zone future, sans creer de galerie complete.
  - [x] Ajouter un rappel vers les parcours prioritaires : parent/famille, adulte debutant, membre qui suit la saison.
  - [x] Donner davantage d'espace vertical et de respiration que l'accueil Wix actuel.
  - [x] Hierarchiser les sections pour eviter l'effet page compacte.

- [x] Implementer l'accueil dans `src/pages/index.astro` (AC: 1-8)
  - [x] Utiliser le `Layout` global existant.
  - [x] Ne pas imbriquer un second `<main>` dans la page, car `Layout.astro` rend deja `main#contenu-principal`.
  - [x] Structurer le contenu avec des sections semantiques et titres hierarchises.
  - [x] Utiliser Tailwind directement dans la page ou extraire de petits composants Astro generiques seulement si cela reduit vraiment la duplication.
  - [x] Garder un contenu provisoire mais plausible pour AMTTA, Mions et tir a l'arc si les textes definitifs ne sont pas encore inventories.

- [x] Verifier les liens et routes (AC: 2, 3, 4, 5)
  - [x] Utiliser `/infos-pratiques/entrainements/` pour Entrainements.
  - [x] Utiliser `/infos-pratiques/nous-rejoindre/` pour Nous rejoindre.
  - [x] Utiliser `/contact/` pour Contact.
  - [x] Utiliser `/vie-sportive/` pour Vie Sportive.
  - [x] Utiliser `/vie-sportive/activites/` pour Activites.
  - [x] Utiliser `/vie-sportive/concours/` pour Concours.
  - [x] Ne pas utiliser `/activites/`, `/concours/`, `/galerie/`, `/actualites/`, `/club` ou `/pratiques`.

- [x] Respecter strictement les exclusions de scope (AC: 4, 5, 6)
  - [x] Ne pas creer de rubrique Actualites dediee.
  - [x] Ne pas creer les pages metier liees : Vie Sportive, Activites, Concours, Galerie, Entrainements, Nous rejoindre ou Contact.
  - [x] Ne pas creer `src/content.config.ts`.
  - [x] Ne pas creer de collections `seasons`, `activities`, `competitions`, `gallery` ou autres.
  - [x] Ne pas integrer Google Agenda complet.
  - [x] Ne pas creer de galerie complete ou composant media metier.
  - [x] Ne pas ajouter de dependance, backend, CMS, auth, base de donnees, espace membre ou adapter SSR.

- [x] Verifier responsive, accessibilite et lisibilite (AC: 7, 8)
  - [x] Verifier que les textes longs restent lisibles sur petits ecrans.
  - [x] Verifier que les liens rapides sont scannables et tactiles.
  - [x] Verifier que les focus visibles restent presents.
  - [x] Verifier que les blocs ne se chevauchent pas et ne creent pas de debordement horizontal.
  - [x] Verifier que l'accueil ne donne pas un rendu tasse ou miniature sur desktop large.
  - [x] Verifier que les sections gardent une hierarchie claire sur mobile.

- [x] Valider le build (AC: 9)
  - [x] Executer `npm run build`.
  - [x] Confirmer que le build passe.
  - [x] Confirmer que la sortie reste statique et que `dist/` est genere.

- [x] Mettre a jour le Dev Agent Record (AC: 1-9)
  - [x] Cocher les taches terminees.
  - [x] Lister les fichiers modifies ou crees.
  - [x] Noter explicitement qu'aucune page metier, content collection, agenda complet, galerie complete, rubrique Actualites ou dependance n'a ete ajoutee.
  - [x] Noter le resultat de `npm run build`.

## Fichiers Concernes

### A lire avant modification

- `package.json`
- `src/pages/index.astro`
- `src/layouts/Layout.astro`
- `src/lib/content/navigation.ts`
- `src/components/site/Header.astro`
- `src/components/site/Navigation.astro`
- `src/components/site/MobileMenu.vue`
- `src/components/site/Footer.astro`
- `_bmad-output/implementation-artifacts/1-1-initialiser-socle-astro-mvp.md`
- `_bmad-output/implementation-artifacts/1-2-creer-layout-global-header-navigation-footer.md`

### A modifier probablement

- `src/pages/index.astro`
- `_bmad-output/implementation-artifacts/1-3-creer-la-page-daccueil-orientee-parcours.md`

### A creer seulement si necessaire

- Un composant Astro generique et non metier dans `src/components/ui/`, par exemple si la page a besoin d'un pattern reutilisable de lien ou carte simple.

### A ne pas creer dans cette story

- `src/pages/vie-sportive/index.astro`
- `src/pages/vie-sportive/activites/index.astro`
- `src/pages/vie-sportive/concours/index.astro`
- `src/pages/vie-sportive/galerie.astro`
- `src/pages/infos-pratiques/entrainements.astro`
- `src/pages/infos-pratiques/nous-rejoindre.astro`
- `src/pages/contact.astro`
- `src/content.config.ts`
- Dossiers ou schemas de collections metier.
- Composants metier `ActivityCard`, `CompetitionCard`, `PhotoStrip`, `AgendaEmbed` ou `ContactForm`.
- Route ou dossier `/actualites/`.

## Dev Notes

### Etat actuel issu des stories precedentes

- Story 1.1 est en statut `review`.
- Story 1.2 est en statut `review`.
- `npm run build` passait apres les stories precedentes.
- `Layout.astro` importe `src/styles/global.css`, rend `Header`, `main#contenu-principal` et `Footer`, et contient deja `<html lang="fr">`.
- `Header.astro` compose `Navigation.astro` et `MobileMenu.vue` avec `mainNavigation`.
- `Navigation.astro` affiche la navigation desktop depuis `mainNavigation`.
- `MobileMenu.vue` utilise `<details>/<summary>` et ne necessite pas d'hydratation client explicite.
- `Footer.astro` utilise `footerNavigation`.
- `src/lib/content/navigation.ts` centralise les routes principales et secondaires.
- `src/pages/index.astro` est encore minimal : il utilise `Layout` et affiche seulement `AMTTA Mions`.

### Routes utiles existantes dans la navigation centralisee

Routes a utiliser dans l'accueil :

```text
/
/vie-sportive/
/vie-sportive/activites/
/vie-sportive/concours/
/vie-sportive/galerie/
/infos-pratiques/entrainements/
/infos-pratiques/nous-rejoindre/
/contact/
```

Routes interdites dans cette story :

```text
/actualites/
/activites/
/concours/
/galerie/
/club
/pratiques
/vie-sportive/concours-ffta/
```

### Contenu recommande pour l'accueil

La specification UX recommande pour l'accueil :

- hero sobre avec nom AMTTA, localisation Mions et proposition claire ;
- acces rapides vers Entrainements, Nous rejoindre, Contact, Vie Sportive ;
- bloc "Saison en cours" ou temps forts ;
- mise en avant Activites / Concours recents ;
- quelques photos selectionnees au maximum, pas une galerie massive ;
- rappel du lieu, des horaires ou lien direct vers Entrainements ;
- pas de page d'Actualites infinie ou permanente.

Pour cette story, les blocs saisonniers doivent rester statiques et provisoires. Ils peuvent pointer vers les futures routes mais ne doivent pas consommer de collections.

### References visuelles Wix actuelles

Les captures de la homepage actuelle indiquent les usages a conserver :

- esprit associatif simple et accessible ;
- acces rapides importants ;
- informations saisonnieres visibles rapidement ;
- documents utiles accessibles depuis l'accueil ;
- lien evident vers activites et concours ;
- agenda visible ou facilement accessible ;
- presence de photos recentes du club.

Elles indiquent aussi ce que la nouvelle homepage doit ameliorer :

- layout plus moderne et professionnel ;
- meilleure lisibilite ;
- espacement plus genereux ;
- reduction de l'effet page compacte ;
- meilleur responsive mobile ;
- hierarchie de sections plus claire ;
- blocs plus grands, plus respirants et plus scannables.

Ne pas reproduire :

- style Wix actuel ;
- couleurs trop agressives ;
- zones trop petites ;
- elements tasses ;
- blocs difficilement lisibles ;
- fil d'actualites permanent.

### Architecture compliance

- Astro reste le rendu principal.
- Vue n'est pas necessaire pour cette story.
- Tailwind reste la seule solution de style.
- Ne pas ajouter de librairie UI, icones, carrousel, animation ou dependance.
- Ne pas ajouter de routeur client.
- Ne pas ajouter d'adapter SSR.
- Ne pas creer de content collections.
- Ne pas creer de pages metier completes.
- Ne pas ajouter d'API interne.
- Ne pas integrer l'agenda Google complet.
- Ne pas creer de galerie complete.

### Accessibilite et UX attendues

- Un seul `main` doit etre rendu par la page complete, celui du layout.
- Les sections internes peuvent utiliser `<section>` avec titres explicites.
- Les liens rapides doivent avoir des libelles descriptifs.
- Les cartes ou blocs cliquables ne doivent pas masquer des liens imbriques invalides.
- Les focus visibles doivent rester compatibles avec le shell existant.
- Le contenu doit rester lisible sur mobile sans grille trop dense.
- La page doit orienter plus qu'informer exhaustivement.

### Previous Story Intelligence

- Story 1.2 a deja centralise la navigation dans `src/lib/content/navigation.ts`; ne pas recreer une navigation locale contradictoire.
- Story 1.2 a volontairement laisse les pages metier non creees ; les liens peuvent pointer vers des routes prevues mais pas encore implementees.
- Story 1.2 a utilise un menu mobile natif sans hydratation client ; ne pas ajouter d'interaction Vue pour l'accueil sauf besoin demontre.
- Le dernier commit pertinent est `1cf5098 Align sports section routes under vie-sportive`; conserver ce realignement.
- Le repo est propre au moment de creation de la story.

### Build et validation

- `npm run build` est obligatoire en fin d'implementation.
- Si le build echoue uniquement parce que des liens pointent vers des pages non encore creees, corriger l'approche sans creer les pages metier : Astro n'exige pas que les liens HTML internes existent pour builder.
- Si un composant generique est cree, il doit etre importe par `src/pages/index.astro` et rester independant des futures content collections.

### References

- [PRD] `_bmad-output/planning-artifacts/prd.md` : FR1-FR7, NFR1-NFR18, NFR24-NFR29.
- [UX] `_bmad-output/planning-artifacts/ux-design-specification.md` : Executive Summary, Core User Experience, Accueil, User Journey Flows, Responsive Design, Accessibility Strategy.
- [Architecture] `_bmad-output/planning-artifacts/architecture.md` : Architecture Frontend, Routes et Pages, Structure Projet et Frontieres, Passage a l'Implementation.
- [Epics] `_bmad-output/planning-artifacts/epics.md` : Epic 1, Story 1.3.
- [Readiness] `_bmad-output/planning-artifacts/implementation-readiness-report-2026-05-11.md` : warnings sur inventaire Wix, contenu editorial et readiness globale.
- [Story 1.1] `_bmad-output/implementation-artifacts/1-1-initialiser-socle-astro-mvp.md` : socle Astro statique et garde-fous.
- [Story 1.2] `_bmad-output/implementation-artifacts/1-2-creer-layout-global-header-navigation-footer.md` : shell global, navigation centralisee, routes canoniques.

## Definition of Done

- `src/pages/index.astro` contient une page d'accueil MVP orientee parcours.
- L'accueil utilise le shell global existant via `Layout.astro`.
- L'accueil presente clairement l'AMTTA, Mions et le tir a l'arc.
- Des acces rapides visibles pointent vers Entrainements, Nous rejoindre, Contact, Vie Sportive, Activites et Concours.
- L'accueil conserve les usages utiles de la homepage Wix actuelle : saison, documents utiles, acces activites/concours, agenda accessible et presence photo.
- L'accueil modernise fortement la presentation par rapport a Wix : sections plus lisibles, espacement plus genereux, hierarchie claire, rendu mobile-first.
- Les liens Activites, Concours et Galerie, si presents, utilisent les routes sous `/vie-sportive/`.
- Aucune rubrique Actualites dediee, route `/actualites/` ou modele d'actualite n'est cree.
- Aucune page metier liee n'est creee.
- Aucune content collection ou schema metier n'est cree.
- Aucun agenda Google complet ou galerie complete n'est implemente.
- Aucune dependance n'est ajoutee.
- Le rendu reste Astro-first et statique.
- L'accueil est lisible sur mobile et desktop sans chevauchement.
- `npm run build` passe sans erreur.
- Les fichiers touches et choix d'implementation sont listes dans le Dev Agent Record.

## Risques et Points d'Attention

- **Scope creep :** ne pas commencer Epic 2, Epic 3, Epic 4 ou Epic 5 depuis les liens de l'accueil.
- **Actualites :** ne pas creer de rubrique permanente ; utiliser uniquement des mises en avant statiques ou temps forts.
- **Routes futures :** les liens peuvent pointer vers des routes prevues mais non encore creees ; ne pas creer les pages pour "resoudre" ces liens.
- **Content collections :** les activites/concours reels arriveront plus tard ; ne pas anticiper `src/content.config.ts`.
- **Agenda :** ne pas integrer Google Calendar complet ; un lien ou texte de placeholder suffit si utile.
- **Galerie :** ne pas embarquer de galerie massive ou composant media metier ; rester vitrine.
- **Hero marketing :** eviter une page trop commerciale ; le ton doit rester associatif, clair et sobre.
- **Double main :** `Layout.astro` fournit deja le `main`; ne pas en ajouter un dans `index.astro`.
- **Hydratation inutile :** ne pas ajouter Vue ou `client:*` pour de simples liens ou blocs statiques.
- **Encodage :** rester en ASCII dans la story et preferer du texte sans accents dans les fichiers si le projet montre encore des contraintes d'encodage.

## Questions Ouvertes

- Aucune question bloquante pour Story 1.3.
- Les contenus definitifs Wix ne sont pas encore inventories ; utiliser un contenu provisoire sobre et remplacer plus tard lors des stories de migration/contenu.
- La charte visuelle AMTTA definitive n'est pas formalisee ; rester coherent avec le shell vert existant sans refonte graphique lourde.

## Dev Agent Record

### Agent Model Used

GPT-5 Codex

### Debug Log References

- Baseline commit: `1cf5098cd1d637ab22b4a9a59cd9e69f50f3f3ff`.
- `npm run build` a echoue sous PowerShell car `npm.ps1` est bloque par la policy d'execution Windows.
- `npm.cmd run build` execute avec succes.
- Sortie Astro confirmee : `output: "static"`, `mode: "static"`, generation dans `dist/`.
- Build termine avec 1 page generee : `/index.html`.

### Completion Notes List

- Page d'accueil MVP remplacee dans `src/pages/index.astro`.
- Hero sobre cree avec proposition claire : decouvrir, suivre et rejoindre l'AMTTA.
- Acces rapides ajoutes vers Entrainements, Nous rejoindre, Contact, Vie Sportive, Activites et Concours.
- Bloc parcours ajoute pour familles, nouveaux archers et membres.
- Bloc temps forts ajoute sans creer de rubrique Actualites dediee.
- Bloc agenda/documents utiles ajoute comme acces statique, sans integration Google Agenda complete.
- Presence photo sobre ajoutee sous forme de vignettes visuelles statiques, sans galerie complete ni medias lourds.
- Les routes Activites, Concours et Galerie restent rattachees a `/vie-sportive/`.
- Aucune page metier liee n'a ete creee.
- Aucune content collection ou schema metier n'a ete cree.
- Aucune dependance n'a ete ajoutee.
- Aucun backend, CMS, authentification, base de donnees, espace membre, adapter SSR ou SPA n'a ete introduit.

### File List

- `_bmad-output/implementation-artifacts/1-3-creer-la-page-daccueil-orientee-parcours.md`
- `src/pages/index.astro`
