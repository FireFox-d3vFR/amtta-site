---
stepsCompleted:
  - step-01-validate-prerequisites
  - step-02-design-epics
  - step-03-create-stories
  - step-04-final-validation
inputDocuments:
  - _bmad-output/planning-artifacts/prd.md
  - _bmad-output/planning-artifacts/ux-design-specification.md
  - _bmad-output/planning-artifacts/architecture.md
workflowType: epics-and-stories
projectName: amtta-site
status: complete
---

# amtta-site - Epic Breakdown

## Overview

Ce document decompose le Lot 1 / MVP de `amtta-site` en epics et stories d'implementation concretes. Le decoupage suit le PRD, la specification UX et l'architecture technique validee : site statique Astro, Vue limite aux composants interactifs necessaires, Tailwind pour le design, content collections Astro, routes saisonnieres sous la section Vie Sportive (`/vie-sportive/activites/` et `/vie-sportive/concours/`), pas de backend, pas de CMS, pas d'authentification, pas de base de donnees.

Le decoupage est pense pour un projet solo et une implementation progressive. Chaque epic livre une valeur utilisateur exploitable, et chaque story doit pouvoir etre implementee par un seul agent/dev sans dependance vers une story future.

## Requirements Inventory

### Functional Requirements

FR1: Les visiteurs peuvent acceder a une page d'accueil presentant l'AMTTA, les acces principaux et les informations cles du club.  
FR2: Les visiteurs peuvent naviguer vers les rubriques principales : Le Club, Vie Sportive, Pratique du Tir a l'Arc, Infos Pratiques et Contact.  
FR3: Les visiteurs peuvent retrouver une structure de navigation proche du site Wix existant lorsque cela reste pertinent.  
FR4: Les visiteurs peuvent acceder a des URLs simples, lisibles et coherentes avec la structure du site.  
FR5: Les visiteurs peuvent consulter les pages principales sur mobile, tablette et desktop.  
FR6: La page d'accueil peut afficher des contenus recents ou saisonniers issus des activites, concours, evenements importants ou photos.  
FR7: Le Lot 1 ne contient pas de rubrique Actualites dediee.  
FR8: Les visiteurs peuvent consulter une presentation du club et de son identite associative.  
FR9: Les visiteurs peuvent consulter une page Qui sommes-nous.  
FR10: Les visiteurs peuvent consulter une presentation de l'equipe ou des membres du bureau.  
FR11: Les visiteurs institutionnels peuvent identifier les informations qui demontrent l'activite, l'organisation et la vie associative du club.  
FR12: Les visiteurs peuvent consulter les informations d'entrainement.  
FR13: Les visiteurs peuvent consulter les informations pour rejoindre le club.  
FR14: Les visiteurs peuvent consulter les informations utiles a la decouverte ou reprise du tir a l'arc.  
FR15: Les visiteurs peuvent acceder a des liens utiles depuis une page dediee.  
FR16: Les parents et familles peuvent trouver les informations necessaires pour evaluer une inscription enfant.  
FR17: Les visiteurs peuvent consulter les activites du club organisees par saison.  
FR18: Les visiteurs peuvent acceder aux activites des 3 saisons directement visibles sur le site.  
FR19: Les visiteurs peuvent consulter le detail d'une activite de saison.  
FR20: Les visiteurs peuvent voir une selection limitee de photos associees a une activite.  
FR21: Les visiteurs peuvent acceder a une archive externe pour les anciennes saisons ou contenus volumineux lorsque disponible.  
FR22: Les visiteurs peuvent consulter les concours organises par saison.  
FR23: Les visiteurs peuvent acceder aux concours des 3 saisons directement visibles sur le site.  
FR24: Les visiteurs peuvent consulter le detail d'un concours.  
FR25: Les visiteurs peuvent consulter les resultats ou tableaux associes a un concours.  
FR26: Les visiteurs peuvent voir une selection limitee de photos associees a un concours.  
FR27: Les visiteurs peuvent acceder a une archive externe pour les concours anciens, galeries completes ou contenus volumineux lorsque disponible.  
FR28: Les visiteurs peuvent consulter une galerie photo vitrine.  
FR29: Les visiteurs peuvent consulter des photos contextualisees dans les pages Activites et Concours.  
FR30: Le site peut distinguer les medias principaux affiches sur le site des archives ou galeries completes externalisees.  
FR31: Le mainteneur peut ajouter des images optimisees a une activite, un concours ou une galerie vitrine.  
FR32: Les visiteurs peuvent consulter ou acceder a un agenda des entrainements, activites, concours et evenements saisonniers.  
FR33: Le site peut integrer ou lier un agenda Google ou equivalent.  
FR34: Les visiteurs peuvent utiliser l'agenda pour comprendre les temps forts de la saison.  
FR35: Les visiteurs peuvent acceder a une page Contact.  
FR36: Les visiteurs peuvent envoyer un message au club via un formulaire de contact.  
FR37: Le formulaire de contact transmet les messages vers l'adresse mail du club.  
FR38: Les visiteurs peuvent identifier une voie de contact meme si le formulaire n'est pas disponible.  
FR39: Le developpeur-mainteneur peut ajouter, modifier ou supprimer une page editoriale.  
FR40: Le developpeur-mainteneur peut creer une nouvelle saison.  
FR41: Le developpeur-mainteneur peut ajouter, modifier ou supprimer une activite liee a une saison.  
FR42: Le developpeur-mainteneur peut ajouter, modifier ou supprimer un concours lie a une saison.  
FR43: Le developpeur-mainteneur peut associer resultats, tableaux, photos et liens externes a un concours.  
FR44: Le developpeur-mainteneur peut associer photos et liens externes a une activite.  
FR45: Le developpeur-mainteneur peut maintenir les liens vers Google Drive ou equivalent pour les archives externes.  
FR46: Le developpeur-mainteneur peut mettre a jour les contenus sans CMS, back-office ou base de donnees applicative.  
FR47: Le Lot 1 reprend les principales pages et contenus existants du site Wix.  
FR48: Le Lot 1 conserve les reperes de navigation importants du site existant.  
FR49: Le Lot 1 permet de trier les contenus existants entre contenus repris, archives et abandonnes.  
FR50: Le site peut definir des redirections pour les anciennes URLs importantes lorsque cela est necessaire.  
FR51: Le site peut organiser les contenus saisonniers avec une hierarchie saison puis activite ou concours.

### NonFunctional Requirements

NFR1: Les pages principales doivent etre generees statiquement.  
NFR2: Les pages principales doivent viser un score Lighthouse Performance d'au moins 90 en build de production, hors limites de services tiers.  
NFR3: Les images affichees doivent etre optimisees pour le web.  
NFR4: Les pages Activites et Concours doivent limiter les photos integrees a 5 a 10 images par page.  
NFR5: Les galeries lourdes, archives completes et medias volumineux doivent etre externalises.  
NFR6: Les composants Vue ne doivent etre hydrates cote client que lorsqu'une interaction le justifie.  
NFR7: Les pages principales doivent utiliser une structure HTML semantique.  
NFR8: Les textes, liens, boutons et elements de formulaire doivent conserver des contrastes lisibles en theme clair.  
NFR9: Le formulaire de contact doit fournir des labels explicites et des messages comprehensibles.  
NFR10: Les images porteuses d'information doivent disposer d'un texte alternatif pertinent.  
NFR11: Les parcours principaux doivent etre utilisables au clavier sans blocage majeur.  
NFR12: Les contenus doivent rester lisibles et sans chevauchement sur mobile, tablette et desktop.  
NFR13: Le Lot 1 vise des bonnes pratiques d'accessibilite pragmatiques, sans engagement WCAG AA formel.  
NFR14: Chaque page principale doit fournir un titre, une description et une structure de contenu exploitable par les moteurs de recherche.  
NFR15: Les pages importantes doivent utiliser des URLs courtes, lisibles et coherentes.  
NFR16: Le site doit preserver ou rediriger les anciennes URLs importantes lorsque leur equivalent existe.  
NFR17: Les contenus doivent soutenir la recherche locale autour de l'AMTTA, Mions, tir a l'arc, entrainements, inscriptions, concours et vie associative.  
NFR18: Les contenus saisonniers ne doivent pas rendre la navigation principale confuse.  
NFR19: Le MVP ne doit pas stocker de donnees personnelles dans une base applicative.  
NFR20: Le formulaire de contact doit transmettre uniquement les informations necessaires.  
NFR21: La solution de formulaire doit etre compatible avec un site statique et eviter un backend personnalise.  
NFR22: Les secrets, cles ou jetons ne doivent pas etre stockes dans le depot public.  
NFR23: Les photos publiees doivent respecter les choix de publication du club.  
NFR24: Le projet doit rester comprehensible pour un developpeur-mainteneur apres plusieurs mois sans intervention.  
NFR25: Les contenus doivent etre organises dans des fichiers ou collections dont le role est identifiable.  
NFR26: L'ajout d'une saison, activite, concours, resultat, galerie vitrine ou lien d'archive doit suivre une convention documentable.  
NFR27: Le site ne doit pas introduire de CMS, back-office, base de donnees ou backend personnalise dans le Lot 1.  
NFR28: Les composants doivent rester limites, reutilisables et alignes avec les besoins reels des pages.  
NFR29: La structure doit permettre l'ajout futur d'un dark mode sans refonte majeure.  
NFR30: L'integration agenda doit rester legere et compatible avec une architecture statique.  
NFR31: Les archives Google Drive ou equivalent doivent etre accessibles par liens stables.  
NFR32: Le site doit rester fonctionnel meme si une integration externe est temporairement indisponible.  
NFR33: Le site doit pouvoir etre construit en production via une commande de build reproductible.  
NFR34: Le site doit pouvoir etre deploye sur Netlify, Vercel ou equivalent.  
NFR35: Le deploiement doit rester compatible avec le domaine OVH existant.  
NFR36: La mise en production doit inclure une verification du formulaire, des liens principaux, des URLs importantes et des pages saisonnieres visibles.

### Additional Requirements

- Continuer sur le socle Astro 6 + Vue 3 + Tailwind 4 existant ; ne pas introduire de nouveau starter.
- Creer `src/content.config.ts` avec schemas Zod pour les content collections.
- Utiliser les routes `/vie-sportive/activites/` et `/vie-sportive/concours/` comme routes canoniques.
- Utiliser `getStaticPaths()` pour generer les pages saison et detail.
- Centraliser les helpers de contenu dans `src/lib/content/`.
- Limiter les saisons publiques a 3 via donnees et validation.
- Stocker les medias visibles et optimises dans le depot ; externaliser les albums lourds.
- Utiliser Netlify Forms si Netlify est retenu, sinon Formspree ou equivalent.
- Ne pas ajouter d'API interne, de backend, de CMS, d'authentification, de base de donnees ou d'espace membre.
- Configurer le build statique avec `npm run build` et sortie `dist`.
- Preparer les redirections Wix importantes via configuration d'hebergeur.
- Documenter les conventions de maintenance pour saisons, activites, concours, medias et archives.

### UX Design Requirements

UX-DR1: La navigation principale doit rester proche des reperes Wix tout en rattachant Activites et Concours a la section Vie Sportive.  
UX-DR2: L'accueil doit orienter rapidement vers Entrainements, Nous rejoindre, Contact, Vie Sportive, Activites et Concours.  
UX-DR3: Les pages Activites et Concours doivent proposer un choix clair des 3 saisons visibles.  
UX-DR4: Les details d'activite doivent afficher titre, date, saison, resume, photos limitees et archive externe si necessaire.  
UX-DR5: Les details de concours doivent afficher titre, date, saison, lieu, resultats/tableaux, photos limitees et archive externe si necessaire.  
UX-DR6: Les tableaux de resultats doivent rester lisibles sur mobile, via table responsive ou presentation adaptee.  
UX-DR7: Le formulaire de contact doit avoir des labels visibles, des champs limites et un contact alternatif.  
UX-DR8: L'agenda doit etre integre ou lie sans devenir la seule source des informations critiques.  
UX-DR9: Les photos doivent servir de vitrine legere, avec 5 a 10 images optimisees maximum par activite ou concours.  
UX-DR10: Les liens externes vers archives, agenda ou partenaires doivent etre identifies clairement.  
UX-DR11: Les composants globaux attendus incluent Header, Navigation, MobileMenu, Footer, Breadcrumb, SEO, PageHero, QuickLinks, SeasonSelector, ActivityCard, CompetitionCard, ResultTable, PhotoStrip, ArchiveLink, AgendaEmbed, ContactForm.  
UX-DR12: Le site doit etre mobile-first, sans chevauchement de contenu, avec navigation mobile claire.  
UX-DR13: Les pages doivent respecter une accessibilite pragmatique : semantique, contrastes, clavier, alt text, labels.  
UX-DR14: Le systeme Tailwind doit preparer un futur dark mode sans l'activer dans le MVP.

### FR Coverage Map

FR1-FR7: Epic 1 - Socle public, accueil et navigation.  
FR8-FR16: Epic 2 - Presentation du club et informations pratiques.  
FR17-FR21, FR40-FR41, FR44, FR51: Epic 3 - Activites saisonnieres.  
FR22-FR27, FR42-FR43, FR45, FR51: Epic 4 - Concours, resultats et contenus associes.  
FR28-FR38, FR30-FR31, FR45: Epic 5 - Galerie, agenda, contact et services externes.  
FR39, FR46-FR50: Epic 6 - Migration, maintenance, SEO, redirections et mise en production.  
NFR1-NFR36: Couverts transversalement par les stories de chaque epic, avec validation finale dans Epic 6.

## Epic List

### Epic 1: Socle public, accueil et navigation

Les visiteurs peuvent acceder a un site statique moderne, naviguer dans les rubriques principales et comprendre rapidement les points d'entree du club.

**FRs covered:** FR1, FR2, FR3, FR4, FR5, FR6, FR7, FR48

### Epic 2: Presentation du club et informations pratiques

Les nouveaux visiteurs, familles, adultes debutants et partenaires peuvent comprendre qui est l'AMTTA, ou pratiquer, comment rejoindre le club et quels liens utiles consulter.

**FRs covered:** FR8, FR9, FR10, FR11, FR12, FR13, FR14, FR15, FR16, FR39

### Epic 3: Activites saisonnieres

Les membres et visiteurs peuvent consulter les activites par saison, voir les details d'une activite, quelques photos optimisees et acceder aux archives externes si necessaire.

**FRs covered:** FR17, FR18, FR19, FR20, FR21, FR40, FR41, FR44, FR51

### Epic 4: Concours, resultats et photos associees

Les membres, participants et visiteurs peuvent consulter les concours par saison, lire les resultats, voir quelques photos et acceder aux archives externes.

**FRs covered:** FR22, FR23, FR24, FR25, FR26, FR27, FR42, FR43, FR45, FR51

### Epic 5: Galerie, agenda et contact

Les visiteurs peuvent percevoir la vie associative via une galerie vitrine, comprendre les temps forts via l'agenda et contacter le club via un formulaire statique avec alternative de contact.

**FRs covered:** FR28, FR29, FR30, FR31, FR32, FR33, FR34, FR35, FR36, FR37, FR38, FR45

### Epic 6: Migration, maintenance et readiness de mise en production

Le developpeur-mainteneur dispose d'un site deployable, documente, SEO-friendly, compatible domaine OVH, avec redirections importantes et conventions de maintenance simples.

**FRs covered:** FR39, FR46, FR47, FR48, FR49, FR50

## Epic 1: Socle public, accueil et navigation

Les visiteurs peuvent acceder a un site statique moderne, naviguer dans les rubriques principales et comprendre rapidement les points d'entree du club.

### Story 1.1: Initialiser le socle Astro existant pour le MVP

As a developpeur-mainteneur,
I want un socle Astro/Vue/Tailwind propre et minimal,
So that le MVP puisse etre implemente progressivement sans sur-architecture.

**Acceptance Criteria:**

**Given** le projet Astro existant avec Vue et Tailwind  
**When** le developpeur lance `npm run build`  
**Then** le build se termine avec succes et genere un site statique dans `dist`  
**And** aucune dependance de backend, CMS, base de donnees ou authentification n'est ajoutee.

**Given** l'architecture validee  
**When** les dossiers cibles sont ajoutes  
**Then** la structure contient au minimum `src/pages`, `src/components/site`, `src/components/ui`, `src/components/content`, `src/lib`, `src/content` et `src/assets`  
**And** les composants Vue restent limites aux besoins interactifs.

### Story 1.2: Creer le layout global, le header, la navigation et le footer

As a visiteur,
I want une navigation claire et stable,
So that je puisse retrouver les rubriques principales du site.

**Acceptance Criteria:**

**Given** les rubriques MVP definies  
**When** un visiteur consulte une page desktop  
**Then** le header affiche Accueil, Le Club, Vie Sportive, Pratique & Infos et Contact  
**And** les liens Activites et Concours utilisent les routes canoniques `/vie-sportive/activites/` et `/vie-sportive/concours/`.

**Given** un petit ecran mobile  
**When** le visiteur ouvre le menu mobile  
**Then** les memes rubriques sont accessibles dans un menu lisible  
**And** le menu fonctionne sans transformer le site en SPA.

### Story 1.3: Creer la page d'accueil orientee parcours

As a nouveau visiteur,
I want comprendre rapidement ce qu'est l'AMTTA et ou aller ensuite,
So that je trouve les informations utiles en peu de clics.

**Acceptance Criteria:**

**Given** la page d'accueil  
**When** un visiteur arrive sur le site  
**Then** il voit une presentation claire de l'AMTTA, de Mions et du tir a l'arc  
**And** il dispose d'acces rapides vers Entrainements, Nous rejoindre, Contact, Activites et Concours.

**Given** la contrainte "pas de rubrique Actualites dediee"  
**When** l'accueil affiche des contenus saisonniers  
**Then** ils sont presentes comme mises en avant ou temps forts  
**And** aucune route `/actualites/` n'est creee pour le MVP.

### Story 1.4: Mettre en place les composants SEO et les metadonnees de base

As a visiteur arrivant depuis un moteur de recherche,
I want trouver des pages claires et bien titrees,
So that je comprenne rapidement leur contenu.

**Acceptance Criteria:**

**Given** les pages principales  
**When** elles sont rendues  
**Then** chaque page possede un titre, une description et une structure semantique de base  
**And** les metadonnees soutiennent la recherche locale AMTTA, Mions, tir a l'arc, entrainements, inscriptions et concours.

**Given** les composants de layout  
**When** une page fournit ses props SEO  
**Then** le composant SEO centralise leur rendu  
**And** aucune page principale n'oublie titre ou description.

## Epic 2: Presentation du club et informations pratiques

Les nouveaux visiteurs, familles, adultes debutants et partenaires peuvent comprendre qui est l'AMTTA, ou pratiquer, comment rejoindre le club et quels liens utiles consulter.

### Story 2.1: Creer les pages Le Club, Qui sommes-nous et Equipe

As a parent, adulte debutant ou partenaire,
I want identifier le club, son fonctionnement et son equipe,
So that je puisse evaluer son serieux et son accessibilite.

**Acceptance Criteria:**

**Given** les pages de presentation  
**When** un visiteur consulte `/le-club/`, `/le-club/qui-sommes-nous/` et `/le-club/equipe/`  
**Then** il trouve une presentation de l'association, de son identite et de son equipe  
**And** les pages utilisent un layout coherent avec le reste du site.

**Given** un visiteur institutionnel  
**When** il consulte ces pages  
**Then** il peut identifier des signes d'organisation, d'activite associative et de contact.

### Story 2.2: Creer la page Pratique du Tir a l'Arc

As a personne qui decouvre ou reprend le tir a l'arc,
I want comprendre la pratique et le cadre general,
So that je sache si le club correspond a mon besoin.

**Acceptance Criteria:**

**Given** la route `/pratique-du-tir-a-l-arc/`  
**When** un visiteur consulte la page  
**Then** il trouve une explication claire de la pratique, du cadre et des publics accueillis  
**And** la page propose des liens vers Entrainements, Nous rejoindre et Contact.

**Given** un affichage mobile  
**When** le contenu est consulte  
**Then** les sections restent lisibles sans chevauchement ni bloc trop dense.

### Story 2.3: Creer les pages Infos pratiques, Entrainements et Nous rejoindre

As a parent ou futur adherent,
I want trouver horaires, lieu et demarches d'inscription,
So that je puisse contacter ou rejoindre le club sans chercher partout.

**Acceptance Criteria:**

**Given** les routes `/infos-pratiques/`, `/infos-pratiques/entrainements/` et `/infos-pratiques/nous-rejoindre/`  
**When** un visiteur consulte ces pages  
**Then** il trouve les informations pratiques essentielles, les horaires ou lieux, et les prochaines etapes pour rejoindre le club  
**And** un chemin vers Contact est visible.

**Given** un parent sur mobile  
**When** il cherche les informations d'inscription enfant  
**Then** les informations sont scannables et accessibles en moins de 3 clics depuis l'accueil.

### Story 2.4: Creer la page Liens utiles

As a visiteur ou membre,
I want acceder aux liens externes importants,
So that je puisse retrouver les ressources du club, de la commune ou des instances sportives.

**Acceptance Criteria:**

**Given** la route `/infos-pratiques/liens-utiles/`  
**When** un visiteur consulte la page  
**Then** les liens utiles sont groupes, lisibles et clairement identifies comme externes si necessaire  
**And** aucun lien externe important n'utilise un libelle vague comme "cliquez ici".

## Epic 3: Activites saisonnieres

Les membres et visiteurs peuvent consulter les activites par saison, voir les details d'une activite, quelques photos optimisees et acceder aux archives externes si necessaire.

### Story 3.1: Definir les content collections pour saisons et activites

As a developpeur-mainteneur,
I want gerer saisons et activites dans des content collections,
So that les contenus saisonniers restent simples a maintenir sans CMS.

**Acceptance Criteria:**

**Given** `src/content.config.ts`  
**When** les collections `seasons` et `activities` sont definies  
**Then** leurs schemas valident les champs requis : slug, label, saison, titre, date, resume, photos, archiveUrl et draft si utile  
**And** une activite reference une saison existante par slug.

**Given** les saisons visibles  
**When** plus de 3 saisons sont marquees visibles  
**Then** un helper ou une validation detecte l'erreur avant publication.

### Story 3.2: Creer les helpers de saison et d'activites

As a developpeur-mainteneur,
I want centraliser le tri et le filtrage des activites,
So that les pages ne dupliquent pas la logique metier.

**Acceptance Criteria:**

**Given** `src/lib/content/seasons.ts` et `src/lib/content/activities.ts`  
**When** une page demande les saisons visibles ou activites d'une saison  
**Then** les helpers retournent les donnees triees et filtrees  
**And** les brouillons sont exclus en production.

### Story 3.3: Creer les pages `/vie-sportive/activites/` et `/vie-sportive/activites/[saison]/`

As a membre ou visiteur,
I want consulter les activites par saison,
So that je retrouve rapidement la vie associative recente du club.

**Acceptance Criteria:**

**Given** des saisons et activites de test  
**When** le visiteur consulte `/vie-sportive/activites/`  
**Then** il voit les 3 saisons visibles maximum et un acces clair a chaque saison  
**And** la route canonique est `/vie-sportive/activites/`.

**Given** une saison visible  
**When** le visiteur consulte `/vie-sportive/activites/[saison]/`  
**Then** il voit la liste des activites de cette saison sous forme de cartes lisibles  
**And** chaque carte pointe vers le detail de l'activite.

### Story 3.4: Creer la page detail `/vie-sportive/activites/[saison]/[activite]/`

As a membre AMTTA,
I want consulter le detail d'une activite,
So that je voie le resume, les photos selectionnees et l'archive si disponible.

**Acceptance Criteria:**

**Given** une activite publiee  
**When** le visiteur consulte sa page detail  
**Then** il voit titre, date, saison, resume et contenu principal  
**And** il voit au maximum 10 photos optimisees si des photos sont definies.

**Given** une activite avec `archiveUrl`  
**When** la page est affichee  
**Then** un lien d'archive externe clair est visible  
**And** les contenus lourds ne sont pas embarques dans la page.

## Epic 4: Concours, resultats et photos associees

Les membres, participants et visiteurs peuvent consulter les concours par saison, lire les resultats, voir quelques photos et acceder aux archives externes.

### Story 4.1: Definir la content collection des concours

As a developpeur-mainteneur,
I want gerer les concours dans une collection structuree,
So that resultats, photos et archives restent maintenables.

**Acceptance Criteria:**

**Given** `src/content.config.ts`  
**When** la collection `competitions` est definie  
**Then** elle valide titre, slug, saison, date, lieu, resume, resultats ou liens de resultats, photos et archiveUrl  
**And** chaque concours reference une saison existante.

### Story 4.2: Creer les helpers de concours

As a developpeur-mainteneur,
I want centraliser le tri, les filtres et la recuperation des concours,
So that les pages Concours restent simples.

**Acceptance Criteria:**

**Given** `src/lib/content/competitions.ts`  
**When** une page demande les concours d'une saison  
**Then** le helper retourne les concours publies, tries et associes a la bonne saison  
**And** les brouillons sont exclus en production.

### Story 4.3: Creer les pages `/vie-sportive/concours/` et `/vie-sportive/concours/[saison]/`

As a membre ou participant,
I want consulter les concours par saison,
So that je retrouve rapidement une competition recente.

**Acceptance Criteria:**

**Given** des concours de test  
**When** le visiteur consulte `/vie-sportive/concours/`  
**Then** il voit les 3 saisons visibles maximum et un acces clair aux concours par saison  
**And** la route canonique est `/vie-sportive/concours/`.

**Given** une saison visible  
**When** le visiteur consulte `/vie-sportive/concours/[saison]/`  
**Then** il voit les concours de la saison avec date, lieu, resume et lien detail.

### Story 4.4: Creer la page detail `/vie-sportive/concours/[saison]/[concours]/`

As a adherent ou visiteur de concours,
I want consulter le detail d'un concours,
So that je puisse lire les resultats et voir une selection de photos.

**Acceptance Criteria:**

**Given** un concours publie  
**When** le visiteur consulte sa page detail  
**Then** il voit titre, date, saison, lieu, resume et resultats ou documents associes  
**And** les resultats sont affiches dans un format lisible sur desktop et mobile.

**Given** un concours avec photos et archive externe  
**When** la page est affichee  
**Then** au maximum 10 photos optimisees sont affichees sur le site  
**And** l'archive complete est accessible via un lien externe clair.

### Story 4.5: Implementer le composant ResultTable responsive

As a visiteur mobile,
I want lire les resultats sans debordement incoherent,
So that les concours restent consultables sur petit ecran.

**Acceptance Criteria:**

**Given** un tableau de resultats  
**When** il est affiche sur mobile  
**Then** il reste lisible via defilement horizontal controle ou presentation adaptee  
**And** aucun contenu ne chevauche la navigation ou les sections voisines.

## Epic 5: Galerie, agenda et contact

Les visiteurs peuvent percevoir la vie associative via une galerie vitrine, comprendre les temps forts via l'agenda et contacter le club via un formulaire statique avec alternative de contact.

### Story 5.1: Creer les composants medias et archive

As a visiteur,
I want voir quelques photos utiles sans ralentir le site,
So that je percoive la vie du club sans galerie massive.

**Acceptance Criteria:**

**Given** les composants `PhotoStrip`, `PhotoGrid` et `ArchiveLink`  
**When** une page affiche des photos ou une archive  
**Then** les images sont optimisees, limitees et accompagnees d'un `alt` pertinent  
**And** les liens d'archives externes sont clairement identifies.

### Story 5.2: Creer la page Galerie vitrine

As a visiteur,
I want consulter une galerie courte et representative du club,
So that je voie l'ambiance sans charger une archive complete.

**Acceptance Criteria:**

**Given** la route `/vie-sportive/galerie/`  
**When** un visiteur consulte la page  
**Then** il voit une selection limitee de photos optimisees  
**And** les albums complets ou anciens sont renvoyes vers une archive externe si necessaire.

### Story 5.3: Integrer ou lier un agenda Google ou equivalent

As a membre ou futur adherent,
I want consulter les temps forts de la saison,
So that je comprenne les entrainements, activites, concours et evenements a venir.

**Acceptance Criteria:**

**Given** un `AgendaEmbed` ou lien agenda configure  
**When** l'agenda est affiche  
**Then** le visiteur peut consulter ou ouvrir l'agenda  
**And** les informations critiques comme les horaires d'entrainement restent presentes dans les pages statiques.

**Given** l'agenda externe indisponible  
**When** la page est consultee  
**Then** un lien ou contenu statique de repli reste disponible.

### Story 5.4: Creer la page Contact et le formulaire statique

As a visiteur,
I want envoyer un message au club,
So that je puisse poser une question ou demander des informations.

**Acceptance Criteria:**

**Given** la route `/contact/`  
**When** un visiteur consulte la page  
**Then** il voit un formulaire avec nom, email, sujet et message  
**And** chaque champ possede un label visible.

**Given** le fournisseur statique choisi  
**When** le formulaire est soumis en environnement configure  
**Then** le message est transmis vers l'adresse mail du club  
**And** aucune API backend personnalisee n'est ajoutee.

### Story 5.5: Ajouter un contact alternatif et les etats de formulaire

As a visiteur,
I want disposer d'un moyen de contact meme si le formulaire echoue,
So that je ne sois pas bloque.

**Acceptance Criteria:**

**Given** la page Contact  
**When** le formulaire est indisponible ou non configure  
**Then** une adresse email ou voie de contact alternative est visible  
**And** les messages de succes ou d'erreur sont comprehensibles.

## Epic 6: Migration, maintenance et readiness de mise en production

Le developpeur-mainteneur dispose d'un site deployable, documente, SEO-friendly, compatible domaine OVH, avec redirections importantes et conventions de maintenance simples.

### Story 6.1: Documenter les conventions de contenu et de maintenance

As a developpeur-mainteneur,
I want une documentation courte pour ajouter saisons, activites, concours, photos et archives,
So that le site reste maintenable plusieurs mois apres la derniere intervention.

**Acceptance Criteria:**

**Given** `docs/maintenance/content-guide.md`  
**When** le mainteneur lit le document  
**Then** il trouve comment ajouter une saison, une activite, un concours, des photos optimisees et un lien d'archive  
**And** la documentation rappelle les limites : 3 saisons visibles, 5 a 10 photos, archives lourdes externes.

### Story 6.2: Inventorier les contenus Wix a reprendre, archiver ou abandonner

As a developpeur-mainteneur,
I want classer les contenus existants,
So that la migration preserve les contenus utiles sans importer l'inutile.

**Acceptance Criteria:**

**Given** un document de migration  
**When** les contenus Wix sont inventories  
**Then** chaque contenu important est marque comme repris, archive ou abandonne  
**And** les anciennes galeries lourdes sont orientees vers Google Drive ou equivalent.

### Story 6.3: Preparer les redirections des anciennes URLs importantes

As a visiteur arrivant depuis un ancien lien,
I want etre redirige vers la page equivalente,
So that la migration ne casse pas les usages importants.

**Acceptance Criteria:**

**Given** `docs/migration/redirects.md` ou une configuration d'hebergeur  
**When** une ancienne URL importante a un equivalent  
**Then** une redirection cible est documentee ou configuree  
**And** les routes Activites et Concours pointent vers les routes sous `/vie-sportive/`.

### Story 6.4: Valider le responsive, l'accessibilite pragmatique et la performance

As a visiteur mobile,
I want utiliser les parcours principaux sans blocage,
So that le site soit fiable sur mobile et desktop.

**Acceptance Criteria:**

**Given** les pages principales du MVP  
**When** elles sont testees sur mobile et desktop  
**Then** aucun contenu critique ne chevauche, deborde ou devient illisible  
**And** navigation, formulaire, tableaux et photos restent utilisables.

**Given** le build de production  
**When** une verification Lighthouse ou equivalente est lancee  
**Then** les pages principales visent une performance de 90 ou plus hors limites des services tiers  
**And** les images locales sont optimisees.

### Story 6.5: Preparer la configuration de deploiement statique

As a developpeur-mainteneur,
I want deployer le site sur Netlify, Vercel ou equivalent,
So that le domaine OVH existant puisse servir le nouveau site.

**Acceptance Criteria:**

**Given** le projet MVP  
**When** `npm run build` est execute  
**Then** le site statique est genere dans `dist`  
**And** la configuration de deploiement documente le build command, le dossier de sortie et les besoins du formulaire.

**Given** le domaine OVH existant  
**When** la mise en production est preparee  
**Then** les actions DNS ou hebergeur necessaires sont documentees  
**And** aucun secret n'est stocke dans le depot.

### Story 6.6: Effectuer la verification finale du Lot 1

As a responsable du site,
I want une checklist finale avant publication,
So that les parcours principaux soient verifies avant mise en ligne.

**Acceptance Criteria:**

**Given** le MVP implemente  
**When** la checklist finale est executee  
**Then** elle couvre accueil, navigation, pages club, infos pratiques, activites, concours, galerie, agenda, contact, archives, redirections et build  
**And** les contraintes "pas de backend, pas de CMS, pas d'auth, pas de base de donnees" sont confirmees.

## Validation Summary

### FR Coverage Validation

- FR1-FR7 sont couverts par Epic 1.
- FR8-FR16 sont couverts par Epic 2.
- FR17-FR21 et FR40-FR41/FR44/FR51 sont couverts par Epic 3.
- FR22-FR27 et FR42-FR43/FR45/FR51 sont couverts par Epic 4.
- FR28-FR38 et FR30-FR31/FR45 sont couverts par Epic 5.
- FR39 et FR46-FR50 sont couverts par Epic 6.

### Architecture Compliance Validation

- Le decoupage conserve Astro statique comme architecture de base.
- Vue est limite au menu mobile ou a une interaction justifiee.
- Les content collections sont introduites au moment ou elles servent les contenus saisonniers.
- Aucune story n'introduit backend, CMS, authentification, base de donnees ou espace membre.
- Les routes saisonnieres canoniques sont `/vie-sportive/activites/` et `/vie-sportive/concours/`.
- Les archives lourdes sont externalisees.

### Story Readiness Validation

- Les epics sont organises par valeur utilisateur, pas par couche technique pure.
- Les stories sont sequentielles et ne dependent pas de stories futures.
- Les stories restent adaptees a une implementation progressive solo.
- Les criteres d'acceptation sont testables et alignes avec PRD, UX et Architecture.
