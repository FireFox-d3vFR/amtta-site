---
stepsCompleted:
  - step-01-init
  - step-02-discovery
  - step-02b-vision
  - step-02c-executive-summary
  - step-03-success
  - step-04-journeys
  - step-05-domain
  - step-06-innovation
  - step-07-project-type
  - step-08-scoping
  - step-09-functional
  - step-10-nonfunctional
  - step-11-polish
  - step-12-complete
inputDocuments: []
workflowType: 'prd'
documentCounts:
  productBriefs: 0
  research: 0
  brainstorming: 0
  projectDocs: 0
releaseMode: phased
classification:
  projectType: web_app
  domain: general
  complexity: low
  projectContext: brownfield_content_greenfield_implementation
  notes:
    - Site statique Astro oriente contenu, avec Vue uniquement pour les composants interactifs necessaires.
    - Migration brownfield cote contenu et structure fonctionnelle Wix existante.
    - Nouvelle implementation technique greenfield avec Astro, Vue et Tailwind.
    - MVP volontairement simple sans authentification, base de donnees, paiement, back-office ou espace membre.
    - Enjeux principaux: structuration du contenu, UX mobile/desktop, navigation, performances, galeries photos, archivage des saisons, SEO et maintenabilite.
---

# Product Requirements Document - amtta-site

**Author:** Jonathan
**Date:** 2026-05-10

## Executive Summary

`amtta-site` migre le site Wix existant de l'AMTTA vers un site statique moderne base sur Astro, Vue et Tailwind. Le projet reduit la dependance a Wix, baisse les couts recurrents, ameliore la liberte de design et cree une base technique maintenable pour les prochaines saisons du club.

Le site sert d'abord les nouveaux adherents, les parents et familles, les adultes decouvrant le tir a l'arc, puis les membres actuels qui souhaitent suivre les activites, concours, resultats, photos et informations de saison. Les partenaires institutionnels et visiteurs lies a la commune doivent aussi percevoir une association sportive active, organisee et vivante.

Le MVP doit permettre a un visiteur de comprendre rapidement ce qu'est l'AMTTA, ou et quand pratiquer, comment rejoindre ou contacter le club, et quelle est la vie sportive et associative en cours. Le site doit rester statique, rapide, responsive, facile a maintenir, sans authentification, base de donnees, paiement, back-office ou espace membre.

### What Makes This Special

La migration ne remplace pas seulement un outil d'hebergement. Elle transforme le site en vitrine claire et vivante de la saison du club : activites, concours, resultats, evenements, galeries photos et archives doivent etre structures pour etre faciles a consulter et a mettre a jour.

Le choix produit central est la simplicite : un site statique bien organise apporte plus de valeur qu'une plateforme communautaire complexe. Astro porte les pages et contenus, Vue reste reserve aux interactions necessaires, Tailwind assure une interface coherente et responsive, et les contenus Markdown/JSON gardent la maintenance accessible.

La promesse du site est : "Le point d'entree moderne et vivant pour decouvrir, suivre et rejoindre l'AMTTA."

## Project Classification

- **Project Type:** `web_app` - site web statique / MPA Astro oriente contenu, avec Vue uniquement pour les composants interactifs necessaires.
- **Domain:** `general` - association sportive locale, sans exigences reglementaires lourdes.
- **Complexity:** `low` - MVP sans authentification, base de donnees, paiement, back-office ou espace membre.
- **Project Context:** `brownfield_content_greenfield_implementation` - migration d'un site Wix existant cote contenu et structure fonctionnelle, avec nouvelle implementation technique Astro + Vue + Tailwind.

## Success Criteria

### User Success

Un nouveau visiteur comprend en moins de 2 minutes ce qu'est l'AMTTA, ou pratiquer, quand s'entrainer et comment contacter ou rejoindre le club.

Un parent ou une famille trouve les informations pratiques liees aux entrainements, a la pratique jeune, a l'inscription et au contact en moins de 3 clics depuis l'accueil.

Un membre actuel retrouve les reperes principaux du site existant : navigation proche, contenus de saison, activites, concours, resultats, photos, archives et informations pratiques.

Un visiteur percoit un club actif, organise et vivant grace a des contenus saisonniers visibles : agenda, activites, concours, evenements, resultats et galeries photos.

### Business Success

Le club migre hors Wix sans rupture forte dans les usages actuels du site `amtta-mions.fr`.

Le domaine OVH existant reste utilise pour le nouveau site.

Les couts recurrents lies a Wix sont supprimes ou fortement reduits apres mise en production du nouveau site.

Le bureau dispose d'un site plus maintenable, ou les contenus editoriaux, saisons, activites, concours, resultats et photos peuvent etre organises sans dependance a une plateforme proprietaire.

Le site renforce la vitrine du club aupres des futurs adherents, familles, membres actuels, commune et partenaires.

### Technical Success

Le MVP reste statique et ne contient pas d'authentification, base de donnees, paiement, back-office, espace membre ou backend personnalise complexe.

Le site est deployable sur Netlify, Vercel ou equivalent, avec generation statique et integration du domaine OVH.

Le formulaire de contact fonctionne via une solution legere compatible statique, par exemple Netlify Forms, Formspree ou equivalent, et transmet les messages vers l'adresse mail du club.

Les activites et concours sont structures par saison, avec une limite de 3 saisons directement visibles sur le site.

Les saisons plus anciennes sont archivees hors site principal via Google Drive ou equivalent, avec acces depuis le site si necessaire.

Un agenda Google ou equivalent est integre pour exposer les activites du club, concours, entrainements et evenements saisonniers.

Les contenus principaux sont geres via Markdown, JSON ou fichiers structures simples, sans sur-architecture.

Le socle technique permet d'ajouter ulterieurement un dark mode et des composants interactifs Vue sans refonte.

### Measurable Outcomes

Le Lot 1 reprend les principales pages et contenus existants du site Wix.

La navigation du Lot 1 reste suffisamment proche du site actuel pour conserver les reperes des visiteurs et membres.

Les pages principales sont utilisables sur mobile et desktop sans chevauchement de contenu ni parcours bloquant.

Les contenus Activites et Concours sont consultables par saison, avec les 3 saisons les plus pertinentes visibles directement.

Les archives plus anciennes disposent d'une strategie de consultation ou de stockage externe documentee.

Le formulaire de contact permet l'envoi d'un message test vers l'adresse mail du club avant mise en production.

## Product Scope

### MVP - Minimum Viable Product

Le MVP couvre la migration moderne du site existant, avec reprise de la logique fonctionnelle principale, conservation des reperes de navigation et amelioration progressive de l'experience.

Le MVP inclut :
- page d'accueil ;
- pages Le Club, Qui sommes-nous et Equipe ;
- pages Vie Sportive, Concours FFTA et Activites ;
- page Pratique du Tir a l'Arc ;
- pages Infos Pratiques, Entrainements, Nous rejoindre et Liens utiles ;
- page Contact avec formulaire fonctionnel ;
- gestion des Activites par saison ;
- gestion des Concours par saison, avec resultats, tableaux et photos ;
- galerie photo ;
- integration d'un agenda Google ou equivalent ;
- limitation a 3 saisons directement visibles ;
- archivage externe des saisons anciennes via Google Drive ou equivalent ;
- deploiement statique sur Netlify, Vercel ou equivalent ;
- conservation du domaine OVH existant.

### Growth Features (Post-MVP)

Les evolutions post-MVP peuvent inclure :
- dark mode ;
- enrichissements UI/UX plus marques ;
- nouveaux composants interactifs Vue ;
- amelioration des filtres ou parcours de consultation des archives ;
- enrichissement des galeries photos ;
- optimisation continue du SEO, des performances et de l'accessibilite ;
- automatisation partielle de certains contenus si le besoin apparait.

### Vision (Future)

Le site devient le point d'entree vivant et durable de l'AMTTA : clair pour decouvrir le club, utile pour suivre les saisons, credible pour les partenaires, et simple a maintenir par le bureau.

La vision exclut volontairement une plateforme communautaire complexe. Le produit doit rester statique, sobre, evolutif et centre sur la mise en valeur de la vie associative.

## User Journeys

### Journey 1 - Parent ou famille qui decouvre le club

Claire cherche une activite sportive pour son enfant, souvent au debut de saison, autour du forum des associations, ou pendant l'ete precedent une nouvelle saison. Elle arrive sur le site depuis Google, une recommandation ou le site de la commune. Elle veut savoir rapidement si le club accueille les jeunes, ou se deroulent les entrainements, quels sont les horaires, comment se passe la pratique et comment contacter l'association.

Elle consulte l'accueil, comprend que l'AMTTA est un club de tir a l'arc actif, puis rejoint les informations pratiques ou la page Nous rejoindre. Elle trouve les entrainements, les informations d'inscription et le formulaire de contact sans parcourir toute l'arborescence.

Le moment de valeur arrive quand Claire peut se dire : "Je sais ou c'est, quand venir, et comment poser une question." Le parcours echoue si les horaires, le lieu, les conditions de pratique jeune ou le contact sont disperses, obsoletes ou difficiles a trouver sur mobile.

### Journey 2 - Adulte qui souhaite decouvrir ou reprendre le tir a l'arc

Marc a envie de commencer ou reprendre le tir a l'arc. Il ne cherche pas encore un calendrier de concours ; il veut comprendre le club, l'ambiance, les types de pratique et les prochaines etapes pour essayer ou rejoindre.

Il parcourt Qui sommes-nous, Pratique du Tir a l'Arc, les entrainements et les pages de vie sportive. Les photos, activites et concours lui montrent que le club vit pendant les moments forts de la saison, sans donner l'impression d'un media a actualite permanente.

Le moment de valeur arrive quand Marc comprend que le club est accessible, organise et actif, puis trouve un chemin clair vers le contact ou l'inscription. Le parcours echoue si le site donne une impression ancienne, inactive ou trop administrative.

### Journey 3 - Membre AMTTA qui suit la saison

Sophie est deja membre du club. Elle vient consulter les activites de saison, retrouver un concours, regarder des resultats, verifier un evenement dans l'agenda ou partager quelques photos.

Elle entre par Vie Sportive, Activites, Concours FFTA ou l'agenda. Elle doit pouvoir distinguer les saisons, acceder aux 3 saisons visibles, consulter resultats et photos, puis retrouver les archives anciennes via Google Drive ou equivalent si necessaire.

Le moment de valeur arrive quand Sophie retrouve rapidement un contenu recent ou une archive utile sans devoir demander le lien a quelqu'un. Le parcours echoue si les saisons sont melangees, si les resultats ne sont pas lisibles sur mobile, ou si les anciennes photos alourdissent le site principal.

### Journey 4 - Adherent ou visiteur qui consulte un concours

Un adherent AMTTA ayant participe a une competition cherche principalement les resultats, quelques photos et le contenu de saison associe. Un competiteur externe ou un visiteur d'un autre club peut aussi consulter ces pages, mais ce besoin reste secondaire pour le MVP.

Il arrive sur une page Concours organisee par saison. Il doit identifier le concours, lire les tableaux ou resultats, voir une selection limitee de photos et acceder si besoin a une archive externe plus complete.

Le moment de valeur arrive quand le contenu du concours est trouve rapidement, lisible sur mobile et suffisamment illustre. Le parcours echoue si les concours ne sont pas ranges par saison, si les tableaux sont illisibles, ou si la page tente de porter une galerie massive.

### Journey 5 - Developpeur-mainteneur du site

Jonathan maintient le site avec un profil developpeur. Il doit pouvoir ajouter une page, modifier une information pratique, creer une saison, publier une activite ou un concours, ajouter 5 a 10 images optimisees, lier une galerie externe, et deployer sans gerer un CMS ou une administration complete.

Il travaille dans un projet Astro/Vue/Tailwind propre, lisible et structure. Les contenus sont organises via Markdown, JSON ou fichiers structures simples. Les medias importants sont optimises pour le web ; les galeries lourdes et archives completes sont externalisees via Google Drive ou equivalent.

Le moment de valeur arrive quand une evolution courante reste simple a comprendre, tester et deployer plusieurs mois apres la derniere intervention. Le parcours echoue si le projet devient trop abstrait, trop automatise, trop dependu d'un service externe, ou si les medias rendent le depot lourd.

### Journey 6 - Commune ou partenaire qui evalue la vie associative

Un representant de la commune, un partenaire ou un visiteur institutionnel consulte le site pour comprendre l'activite du club. Il cherche des signes de serieux : presentation claire, equipe identifiee, activites recentes, concours, photos, liens utiles et informations de contact.

Il consulte l'accueil, Le Club, l'equipe, les activites, concours et galeries. Le site doit montrer une association vivante, bien organisee et inscrite dans son territoire, sans adopter un ton commercial excessif.

Le moment de valeur arrive quand le visiteur percoit rapidement que l'AMTTA est active, fiable et facilement joignable. Le parcours echoue si les contenus semblent anciens, si l'equipe est difficile a identifier, ou si les activites recentes ne sont pas visibles.

### Journey Requirements Summary

Ces parcours revelent les capacites suivantes :
- navigation proche du site Wix existant, avec reperes conserves ;
- accueil capable d'orienter rapidement vers club, pratique, entrainements, vie sportive et contact ;
- pages d'information pratiques accessibles en peu de clics ;
- contenus Activites et Concours structures par saison ;
- periode d'usage saisonniere prise en compte : debut de saison, concours d'octobre a fevrier, preparation de la saison suivante ;
- pages Concours priorisees pour les adherents AMTTA, avec usage externe secondaire ;
- affichage lisible des resultats, tableaux et photos sur mobile et desktop ;
- selection limitee de photos par activite ou concours, environ 5 a 10 images selon les pages ;
- medias principaux optimises pour le web ;
- limite de 3 saisons directement visibles sur le site ;
- strategie d'archivage externe pour les saisons anciennes, galeries importantes et archives completes ;
- integration d'un agenda Google ou equivalent ;
- formulaire de contact fonctionnel et leger ;
- modele de contenu maintenable par un developpeur via Markdown, JSON ou fichiers structures ;
- projet Astro/Vue/Tailwind propre, lisible, teste et simple a faire evoluer ;
- valorisation visible de la vie associative, de l'equipe et de l'activite recente pendant les temps forts du club.

## Web App Specific Requirements

### Project-Type Overview

`amtta-site` est un site web statique multi-pages oriente contenu. Astro porte la generation des pages, les layouts, le routage statique et les contenus. Vue est reserve aux composants interactifs necessaires, sans transformer le site en SPA. Tailwind fournit le systeme de styles et facilite une interface responsive coherente.

Le projet privilegie une architecture MPA statique pour optimiser performance, SEO, simplicite de deploiement et maintenabilite. Aucun temps reel, espace membre, authentification ou etat applicatif complexe n'est requis dans le MVP.

### Technical Architecture Considerations

Le site doit etre genere statiquement et deployable sur Netlify, Vercel ou equivalent. L'architecture doit rester compatible avec le domaine OVH existant.

Les contenus doivent etre organises via Markdown, JSON ou fichiers structures simples. Les types de contenu principaux incluent pages editoriales, activites, concours, saisons, resultats, photos, equipe, liens utiles et informations pratiques.

Les composants Vue doivent etre limites aux besoins interactifs reels. Les pages purement editoriales ou structurables en Astro ne doivent pas introduire d'hydratation client inutile.

Le formulaire de contact doit utiliser une solution compatible site statique, par exemple Netlify Forms, Formspree ou equivalent. Aucun backend personnalise n'est prevu pour le MVP.

L'integration d'un agenda Google ou equivalent doit permettre d'afficher ou lier les activites du club, entrainements, concours et evenements saisonniers sans introduire une dependance applicative lourde.

Les archives anciennes, galeries completes et contenus medias volumineux doivent etre externalises via Google Drive ou equivalent lorsque leur presence dans le depot nuirait au poids, aux performances ou a la maintenance.

### Browser Matrix

Le MVP cible les navigateurs modernes desktop et mobile : Chrome, Edge, Firefox et Safari dans leurs versions courantes.

Aucun support specifique Internet Explorer ou navigateur legacy n'est requis.

Les parcours principaux doivent rester utilisables sur mobile, tablette et desktop, avec une attention particuliere aux petits ecrans pour les horaires, tableaux, resultats, navigation et formulaire de contact.

### Responsive Design

Le site doit etre concu mobile-first ou mobile-aware, avec une navigation claire sur petits ecrans et une presentation desktop lisible.

Les tableaux de resultats, listes de concours, cartes d'activites, galeries et informations pratiques doivent rester consultables sans chevauchement, debordement horizontal involontaire ou perte d'information essentielle.

La navigation doit conserver des reperes proches du site Wix existant tout en modernisant l'ergonomie.

### Performance Targets

Le site doit exploiter la generation statique pour obtenir un chargement rapide, particulierement sur mobile.

Les images principales doivent etre optimisees pour le web. Les pages Activites et Concours doivent afficher une selection limitee de photos, typiquement 5 a 10 images selon le contenu.

Les galeries lourdes et archives completes doivent etre externalisees pour proteger le poids du depot, le temps de build et les performances percues.

Les composants interactifs ne doivent pas degrader inutilement le chargement initial des pages.

### SEO Strategy

Le site doit conserver et ameliorer la decouvrabilite locale du club : AMTTA, tir a l'arc, Mions, club, entrainements, inscriptions, concours et vie associative.

Chaque page principale doit disposer d'un titre, d'une description et d'une structure semantique adaptee.

Les URLs doivent rester simples, lisibles et coherentes avec la structure actuelle du site lorsque cela est pertinent, afin de limiter la rupture d'usage et de faciliter les redirections.

La migration doit profiter du nouveau modele de contenu pour ameliorer la hierarchie des contenus saisonniers, notamment Activites et Concours, avec des chemins previsibles par saison et par contenu.

Les contenus saisonniers doivent etre organises pour rester comprehensibles par les visiteurs et moteurs de recherche, sans exposer indifferemment toutes les anciennes saisons dans la navigation principale.

Les redirections depuis les anciennes URLs importantes du site Wix doivent etre identifiees si possible lors de la migration.

### Accessibility Level

Le MVP doit viser une accessibilite pragmatique : structure HTML semantique, contrastes suffisants, navigation clavier raisonnable, textes alternatifs pour les images porteuses d'information, labels explicites sur le formulaire et lisibilite mobile.

Aucun audit reglementaire formel n'est requis pour le Lot 1, mais les choix UX et composants doivent eviter les obstacles courants pour un site associatif public.

### Implementation Considerations

Le Lot 1 doit rester proche de la structure fonctionnelle du site Wix pour limiter la rupture d'usage.

La structure de contenu doit faciliter l'ajout d'une nouvelle saison, d'une activite, d'un concours, de resultats, de photos optimisees et de liens d'archives externes.

Les routes doivent rester lisibles et maintenables, avec une hierarchie explicite pour les contenus saisonniers, par exemple une organisation par saison puis par activite ou concours.

Le projet doit rester lisible pour un developpeur-mainteneur : conventions de fichiers claires, composants limites, donnees structurees comprehensibles et absence de sur-architecture.

Le dark mode doit rester possible apres le MVP, mais ne doit pas conditionner la livraison du Lot 1.

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** migration modernisee avec continuite fonctionnelle.

Le Lot 1 doit reprendre l'essentiel de la structure, des contenus et des usages existants du site Wix `amtta-mions.fr`, tout en posant un socle Astro/Vue/Tailwind propre, rapide et maintenable. Le MVP n'est pas une refonte fonctionnelle radicale ; il modernise l'experience et l'architecture sans casser les reperes actuels.

**Resource Requirements:** un developpeur-mainteneur capable de gerer Astro, Vue, Tailwind, contenus structures, optimisation d'images, deploiement statique et configuration domaine/formulaire.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- parent ou famille qui decouvre le club ;
- adulte qui souhaite decouvrir ou reprendre le tir a l'arc ;
- membre AMTTA qui suit la saison ;
- adherent ou visiteur qui consulte un concours ;
- developpeur-mainteneur du site ;
- commune ou partenaire qui evalue la vie associative.

**Must-Have Capabilities:**
- reprise des principales pages et contenus existants du site Wix ;
- navigation proche de la structure actuelle lorsque cela reste pertinent ;
- URLs simples, lisibles et coherentes avec la structure existante ou avec la nouvelle hierarchie saisonniere ;
- page d'accueil ;
- pages Le Club, Qui sommes-nous et Equipe ;
- pages Vie Sportive, Concours FFTA et Activites ;
- page Pratique du Tir a l'Arc ;
- pages Infos Pratiques, Entrainements, Nous rejoindre et Liens utiles ;
- page Contact avec formulaire fonctionnel ;
- formulaire compatible statique, par exemple Netlify Forms, Formspree ou equivalent ;
- gestion des Activites par saison ;
- gestion des Concours par saison, avec resultats, tableaux et photos ;
- limitation a 3 saisons directement visibles sur le site ;
- archivage externe des anciennes saisons, galeries lourdes et archives completes via Google Drive ou equivalent ;
- selection limitee de photos par activite ou concours, environ 5 a 10 images optimisees ;
- galerie photo vitrine sans stockage massif ;
- integration d'un agenda Google ou equivalent ;
- contenus geres via Markdown, JSON ou fichiers structures simples ;
- responsive mobile/desktop pour les parcours principaux ;
- SEO local et structure semantique des pages principales ;
- deploiement statique sur Netlify, Vercel ou equivalent ;
- conservation du domaine OVH existant.

### Post-MVP Features

**Phase 2 (Post-MVP):**
- dark mode ;
- enrichissements UI/UX plus marques ;
- nouveaux composants interactifs Vue si un besoin concret emerge ;
- amelioration des filtres ou parcours de consultation des archives ;
- enrichissement progressif des galeries photos ;
- optimisation continue SEO, performance et accessibilite.

**Phase 3 (Expansion):**
- automatisation partielle de certains contenus si la maintenance manuelle devient insuffisante ;
- integration plus avancee d'outils externes si le besoin est valide ;
- evolution du modele de contenu si le volume de saisons, concours ou medias augmente fortement.

### Risk Mitigation Strategy

**Technical Risks:** le risque principal est la sur-architecture. Le projet doit limiter l'hydratation Vue, eviter un CMS ou backend inutile, externaliser les medias lourds et garder des conventions de fichiers simples.

**Market / Usage Risks:** le trafic est faible et saisonnier. Le site ne doit pas etre concu comme un media continu, mais comme une vitrine claire pendant les temps forts : debut de saison, concours d'octobre a fevrier, preparation de la saison suivante.

**Content Risks:** la migration peut echouer si les contenus Wix importants, anciennes URLs, saisons, concours, photos et resultats ne sont pas inventories. Le Lot 1 doit prevoir une passe de tri : contenu repris, contenu archive, contenu abandonne.

**Resource Risks:** la maintenance repose sur un developpeur-mainteneur unique. Le code, les donnees et le deploiement doivent rester comprehensibles plusieurs mois apres la derniere intervention.

## Functional Requirements

### Site Structure & Navigation

- FR1: Les visiteurs peuvent acceder a une page d'accueil presentant l'AMTTA, les acces principaux et les informations cles du club.
- FR2: Les visiteurs peuvent naviguer vers les rubriques principales : Le Club, Vie Sportive, Pratique du Tir a l'Arc, Infos Pratiques et Contact.
- FR3: Les visiteurs peuvent retrouver une structure de navigation proche du site Wix existant lorsque cela reste pertinent.
- FR4: Les visiteurs peuvent acceder a des URLs simples, lisibles et coherentes avec la structure du site.
- FR5: Les visiteurs peuvent consulter les pages principales sur mobile, tablette et desktop.
- FR6: La page d'accueil peut afficher des contenus recents ou saisonniers issus des activites, concours, evenements importants ou photos.
- FR7: Le Lot 1 ne contient pas de rubrique Actualites dediee.

### Club & Institutional Content

- FR8: Les visiteurs peuvent consulter une presentation du club et de son identite associative.
- FR9: Les visiteurs peuvent consulter une page Qui sommes-nous.
- FR10: Les visiteurs peuvent consulter une presentation de l'equipe ou des membres du bureau.
- FR11: Les visiteurs institutionnels peuvent identifier les informations qui demontrent l'activite, l'organisation et la vie associative du club.

### Practical Information & Membership

- FR12: Les visiteurs peuvent consulter les informations d'entrainement.
- FR13: Les visiteurs peuvent consulter les informations pour rejoindre le club.
- FR14: Les visiteurs peuvent consulter les informations utiles a la decouverte ou reprise du tir a l'arc.
- FR15: Les visiteurs peuvent acceder a des liens utiles depuis une page dediee.
- FR16: Les parents et familles peuvent trouver les informations necessaires pour evaluer une inscription enfant.

### Seasonal Activities

- FR17: Les visiteurs peuvent consulter les activites du club organisees par saison.
- FR18: Les visiteurs peuvent acceder aux activites des 3 saisons directement visibles sur le site.
- FR19: Les visiteurs peuvent consulter le detail d'une activite de saison.
- FR20: Les visiteurs peuvent voir une selection limitee de photos associees a une activite.
- FR21: Les visiteurs peuvent acceder a une archive externe pour les anciennes saisons ou contenus volumineux lorsque disponible.

### Competitions & Results

- FR22: Les visiteurs peuvent consulter les concours organises par saison.
- FR23: Les visiteurs peuvent acceder aux concours des 3 saisons directement visibles sur le site.
- FR24: Les visiteurs peuvent consulter le detail d'un concours.
- FR25: Les visiteurs peuvent consulter les resultats ou tableaux associes a un concours.
- FR26: Les visiteurs peuvent voir une selection limitee de photos associees a un concours.
- FR27: Les visiteurs peuvent acceder a une archive externe pour les concours anciens, galeries completes ou contenus volumineux lorsque disponible.

### Photos & Media

- FR28: Les visiteurs peuvent consulter une galerie photo vitrine.
- FR29: Les visiteurs peuvent consulter des photos contextualisees dans les pages Activites et Concours.
- FR30: Le site peut distinguer les medias principaux affiches sur le site des archives ou galeries completes externalisees.
- FR31: Le mainteneur peut ajouter des images optimisees a une activite, un concours ou une galerie vitrine.

### Agenda & Events

- FR32: Les visiteurs peuvent consulter ou acceder a un agenda des entrainements, activites, concours et evenements saisonniers.
- FR33: Le site peut integrer ou lier un agenda Google ou equivalent.
- FR34: Les visiteurs peuvent utiliser l'agenda pour comprendre les temps forts de la saison.

### Contact

- FR35: Les visiteurs peuvent acceder a une page Contact.
- FR36: Les visiteurs peuvent envoyer un message au club via un formulaire de contact.
- FR37: Le formulaire de contact transmet les messages vers l'adresse mail du club.
- FR38: Les visiteurs peuvent identifier une voie de contact meme si le formulaire n'est pas disponible.

### Content Maintenance

- FR39: Le developpeur-mainteneur peut ajouter, modifier ou supprimer une page editoriale.
- FR40: Le developpeur-mainteneur peut creer une nouvelle saison.
- FR41: Le developpeur-mainteneur peut ajouter, modifier ou supprimer une activite liee a une saison.
- FR42: Le developpeur-mainteneur peut ajouter, modifier ou supprimer un concours lie a une saison.
- FR43: Le developpeur-mainteneur peut associer resultats, tableaux, photos et liens externes a un concours.
- FR44: Le developpeur-mainteneur peut associer photos et liens externes a une activite.
- FR45: Le developpeur-mainteneur peut maintenir les liens vers Google Drive ou equivalent pour les archives externes.
- FR46: Le developpeur-mainteneur peut mettre a jour les contenus sans CMS, back-office ou base de donnees applicative.

### Migration & Content Continuity

- FR47: Le Lot 1 reprend les principales pages et contenus existants du site Wix.
- FR48: Le Lot 1 conserve les reperes de navigation importants du site existant.
- FR49: Le Lot 1 permet de trier les contenus existants entre contenus repris, archives et abandonnes.
- FR50: Le site peut definir des redirections pour les anciennes URLs importantes lorsque cela est necessaire.
- FR51: Le site peut organiser les contenus saisonniers avec une hierarchie saison puis activite ou concours.

## Non-Functional Requirements

### Performance

- NFR1: Les pages principales doivent etre generees statiquement pour reduire le temps de chargement et limiter la dependance a du calcul serveur.
- NFR2: Les pages principales doivent viser un score Lighthouse Performance d'au moins 90 en conditions de build de production, hors limites imposees par services tiers integres.
- NFR3: Les images affichees sur le site doivent etre optimisees pour le web avant publication ou via le pipeline du site.
- NFR4: Les pages Activites et Concours doivent limiter les photos integrees a une selection raisonnable, typiquement 5 a 10 images par page.
- NFR5: Les galeries lourdes, archives completes et medias volumineux doivent etre externalises pour preserver le poids du depot, le temps de build et les performances percues.
- NFR6: Les composants Vue ne doivent etre hydrates cote client que lorsqu'une interaction le justifie.

### Accessibility

- NFR7: Les pages principales doivent utiliser une structure HTML semantique avec titres hierarchises.
- NFR8: Les textes, liens, boutons et elements de formulaire doivent conserver des contrastes lisibles en theme clair.
- NFR9: Le formulaire de contact doit fournir des labels explicites et des messages comprehensibles.
- NFR10: Les images porteuses d'information doivent disposer d'un texte alternatif pertinent.
- NFR11: Les parcours principaux doivent etre utilisables au clavier sans blocage majeur.
- NFR12: Les contenus doivent rester lisibles et sans chevauchement sur mobile, tablette et desktop.
- NFR13: Le Lot 1 vise des bonnes pratiques d'accessibilite pragmatiques, sans engagement WCAG AA formel.

### SEO & Discoverability

- NFR14: Chaque page principale doit fournir un titre, une description et une structure de contenu exploitable par les moteurs de recherche.
- NFR15: Les pages importantes doivent utiliser des URLs courtes, lisibles et coherentes.
- NFR16: Le site doit preserver ou rediriger les anciennes URLs importantes lorsque leur equivalent existe dans le nouveau site.
- NFR17: Les contenus doivent soutenir la recherche locale autour de l'AMTTA, Mions, tir a l'arc, entrainements, inscriptions, concours et vie associative.
- NFR18: Les contenus saisonniers ne doivent pas rendre la navigation principale confuse pour les visiteurs ou les moteurs de recherche.

### Security & Privacy

- NFR19: Le MVP ne doit pas stocker de donnees personnelles dans une base applicative.
- NFR20: Le formulaire de contact doit transmettre uniquement les informations necessaires a la prise de contact.
- NFR21: La solution de formulaire retenue doit etre compatible avec un site statique et eviter un backend personnalise.
- NFR22: Les secrets, cles ou jetons necessaires au deploiement ou aux services externes ne doivent pas etre stockes dans le depot public.
- NFR23: Les photos publiees doivent respecter les choix de publication du club et eviter l'exposition inutile de medias non destines au site public.

### Maintainability

- NFR24: Le projet doit rester comprehensible pour un developpeur-mainteneur apres plusieurs mois sans intervention.
- NFR25: Les contenus doivent etre organises dans des fichiers ou collections dont le role est identifiable par leur chemin et leur nommage.
- NFR26: L'ajout d'une saison, activite, concours, resultat, galerie vitrine ou lien d'archive doit suivre une convention documentable.
- NFR27: Le site ne doit pas introduire de CMS, back-office, base de donnees ou backend personnalise dans le Lot 1.
- NFR28: Les composants doivent rester limites, reutilisables et alignes avec les besoins reels des pages.
- NFR29: La structure doit permettre l'ajout futur d'un dark mode sans refonte majeure.

### Integrations

- NFR30: L'integration agenda doit rester legere et compatible avec une architecture statique.
- NFR31: Les archives Google Drive ou equivalent doivent etre accessibles par liens stables depuis les pages concernees.
- NFR32: Le site doit rester fonctionnel meme si une integration externe d'archive ou d'agenda est temporairement indisponible, en conservant les contenus essentiels du site.

### Reliability & Deployment

- NFR33: Le site doit pouvoir etre construit en production via une commande de build reproductible.
- NFR34: Le site doit pouvoir etre deploye sur Netlify, Vercel ou equivalent.
- NFR35: Le deploiement doit rester compatible avec le domaine OVH existant.
- NFR36: Une mise en production du Lot 1 doit inclure une verification du formulaire, des liens principaux, des URLs importantes et des pages saisonnieres visibles.
