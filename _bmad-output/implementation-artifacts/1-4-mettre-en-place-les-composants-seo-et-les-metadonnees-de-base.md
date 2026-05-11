# Story 1.4: Mettre en place les composants SEO et les metadonnees de base

Status: review

## Story

As a visiteur arrivant depuis un moteur de recherche,  
I want trouver des pages claires et bien titrees,  
so that je comprenne rapidement leur contenu et leur lien avec l'AMTTA.

## Contexte

Le projet `amtta-site` migre le site Wix `amtta-mions.fr` vers un site statique Astro + Vue + Tailwind. Le MVP reste volontairement simple : site statique, pas de backend complexe, pas d'espace membre, pas de base de donnees et pas de back-office.

Story 1.1 a consolide le socle Astro statique. Story 1.2 a livre le shell global avec `Layout.astro`, header, navigation, menu mobile, footer et navigation centralisee. Story 1.3 a cree une page d'accueil MVP orientee parcours qui presente l'AMTTA, les acces utiles et les routes canoniques sous `/vie-sportive/`.

Story 1.4 doit maintenant centraliser les metadonnees SEO de base pour eviter que chaque page gere son `<head>` de maniere ad hoc. Le layout actuel ne recoit qu'un `title` et rend directement la balise `<title>`. L'architecture cible prevoit un composant SEO centralise, par exemple `src/components/site/Seo.astro`, avec des props telles que `title`, `description`, `canonicalPath`, `ogImage?` et `noindex?`.

Le SEO attendu est pragmatique et local : AMTTA, Mions, tir a l'arc, club, entrainements, inscriptions, activites, concours et vie associative. Il ne s'agit pas de lancer une phase SEO avancee, ni d'ajouter un sitemap, un `robots.txt`, des pages metier ou une strategie editoriale complete.

## Objectifs

- Centraliser le rendu des metadonnees SEO de base dans un composant dedie ou une integration equivalente propre.
- Permettre a `Layout.astro` de recevoir au minimum `title`, `description` et `canonicalPath`.
- Definir des valeurs par defaut coherentes pour le site AMTTA.
- Mettre a jour la page d'accueil pour fournir des metadonnees propres et locales.
- Preparer les futures pages a utiliser le meme contrat SEO sans duplication.
- Conserver une implementation Astro-first, statique, simple et maintenable.
- Ne pas creer de pages metier, de content collections, de sitemap, de `robots.txt` ou de dependance supplementaire.
- Verifier obligatoirement `npm run build`.

## Acceptance Criteria

1. **Composant SEO centralise**

   **Given** le shell global Astro  
   **When** `Layout.astro` rend le `<head>`  
   **Then** les metadonnees SEO de base sont rendues via un composant centralise ou une integration clairement isolee  
   **And** le rendu ne duplique pas la logique SEO dans les pages.

2. **Props SEO du layout**

   **Given** une page Astro utilisant `Layout.astro`  
   **When** elle fournit `title`, `description` et `canonicalPath`  
   **Then** le layout transmet ces valeurs au rendu SEO centralise  
   **And** la page obtient un `<title>`, une meta description et une URL canonique coherents.

3. **Metadonnees d'accueil**

   **Given** la page d'accueil `/`  
   **When** elle est rendue  
   **Then** elle fournit un titre et une description explicites pour l'AMTTA  
   **And** le contenu SEO mentionne naturellement Mions, le tir a l'arc, le club, les entrainements, les inscriptions et les concours sans bourrage de mots-cles.

4. **URL canonique propre**

   **Given** une page qui fournit `canonicalPath`  
   **When** le SEO est rendu  
   **Then** la balise canonique utilise une URL absolue coherente avec le domaine cible `https://amtta-mions.fr`  
   **And** les slashs sont normalises pour eviter les doubles slashs ou URLs incoherentes.

5. **Metadonnees sociales minimales**

   **Given** une page avec titre et description  
   **When** le SEO centralise est rendu  
   **Then** des metadonnees Open Graph minimales peuvent etre produites de facon coherente (`og:title`, `og:description`, `og:type`, `og:url`)  
   **And** aucune image Open Graph n'est requise si aucun asset fiable n'existe encore.

6. **Respect du scope MVP**

   **Given** la story 1.4 est implementee  
   **When** les changements sont termines  
   **Then** aucune page metier n'est creee  
   **And** aucune content collection, sitemap, `robots.txt`, dependance, backend, CMS ou integration externe n'est ajoutee.

7. **Build statique valide**

   **Given** les changements SEO sont appliques  
   **When** `npm run build` est execute  
   **Then** le build passe sans erreur  
   **And** la sortie reste statique.

## Taches Techniques

1. **Lire le contexte existant**

   - Relire `src/layouts/Layout.astro`.
   - Relire `src/pages/index.astro`.
   - Verifier l'absence ou la presence d'un composant SEO existant dans `src/components/site/`.
   - Verifier qu'aucune configuration SEO utile n'existe deja dans `src/lib/`.

2. **Creer ou ameliorer le composant SEO centralise**

   - Creer `src/components/site/Seo.astro` si aucun composant equivalent n'existe.
   - Accepter au minimum les props :
     - `title`
     - `description`
     - `canonicalPath`
     - `ogImage?`
     - `noindex?`
   - Rendre au minimum :
     - `<title>`
     - `<meta name="description">`
     - `<link rel="canonical">`
     - `<meta property="og:title">`
     - `<meta property="og:description">`
     - `<meta property="og:type">`
     - `<meta property="og:url">`
   - Rendre `<meta name="robots" content="noindex,nofollow">` uniquement si `noindex` est fourni.
   - Garder le composant statique, sans client-side JavaScript.

3. **Centraliser les valeurs SEO de base**

   - Definir une valeur de site cible `https://amtta-mions.fr`.
   - Definir un titre par defaut sobre, par exemple `AMTTA Mions`.
   - Definir une description par defaut orientee club local.
   - Garder cette logique simple dans le composant ou dans `src/lib/seo.ts` si cela rend le code plus lisible.
   - Ne pas ajouter de dependance pour construire les URLs.

4. **Mettre a jour `Layout.astro`**

   - Remplacer la gestion directe du `<title>` par le composant SEO centralise.
   - Etendre l'interface `Props` avec :
     - `title?: string`
     - `description?: string`
     - `canonicalPath?: string`
     - `ogImage?: string`
     - `noindex?: boolean`
   - Conserver les balises techniques existantes :
     - `<meta charset="UTF-8">`
     - `<meta name="viewport" content="width=device-width">`
   - Conserver le shell global existant : lien d'evitement, `Header`, `main#contenu-principal`, `Footer`.

5. **Mettre a jour la page d'accueil**

   - Modifier uniquement l'appel a `Layout` dans `src/pages/index.astro` pour fournir :
     - un titre explicite,
     - une description locale concise,
     - `canonicalPath="/"`.
   - Exemple de titre acceptable : `AMTTA Mions - Club de tir a l'arc`.
   - Exemple de description acceptable : `Site de l'Association Mions Tir a l'Arc : decouvrir le club AMTTA a Mions, consulter les entrainements, inscriptions, activites et concours.`
   - Ne pas modifier la structure fonctionnelle de l'accueil au-dela de ce qui est necessaire pour les metadonnees.

6. **Controler le scope**

   - Ne pas creer de pages sous `/vie-sportive/`, `/infos-pratiques/`, `/le-club/` ou `/contact/`.
   - Ne pas creer `src/content.config.ts`.
   - Ne pas ajouter `@astrojs/sitemap` ou autre dependance.
   - Ne pas creer `public/robots.txt` dans cette story sauf s'il existe deja et doit etre preserve.
   - Ne pas integrer Google Agenda, galerie, formulaire de contact ou contenu metier.

7. **Valider**

   - Executer `npm run build`.
   - Si PowerShell bloque `npm.ps1`, executer `npm.cmd run build` et noter ce point dans le Dev Agent Record.
   - Verifier que le build reste statique.
   - Verifier que le HTML genere pour `/` contient un titre, une description et une canonical.

## Fichiers Concernés

### A lire

- `_bmad-output/planning-artifacts/prd.md`
- `_bmad-output/planning-artifacts/ux-design-specification.md`
- `_bmad-output/planning-artifacts/architecture.md`
- `_bmad-output/planning-artifacts/epics.md`
- `_bmad-output/implementation-artifacts/1-1-initialiser-socle-astro-mvp.md`
- `_bmad-output/implementation-artifacts/1-2-creer-layout-global-header-navigation-footer.md`
- `_bmad-output/implementation-artifacts/1-3-creer-la-page-daccueil-orientee-parcours.md`
- `src/layouts/Layout.astro`
- `src/pages/index.astro`
- `astro.config.mjs`
- `package.json`

### A modifier ou creer

- `src/components/site/Seo.astro`
- `src/layouts/Layout.astro`
- `src/pages/index.astro`
- `src/lib/seo.ts` uniquement si une petite aide partagee rend la normalisation plus propre.
- `_bmad-output/implementation-artifacts/1-4-mettre-en-place-les-composants-seo-et-les-metadonnees-de-base.md`

### Hors scope explicite

- Creation de pages metier.
- Creation de content collections.
- Creation de sitemap.
- Creation de `robots.txt`.
- Ajout de dependances.
- Integration Google Agenda complete.
- Galerie complete.
- Formulaire de contact.
- Dark mode.

## Developer Notes

### Architecture compliance

- Astro reste le rendu principal.
- Le SEO est rendu cote build dans le HTML statique.
- Vue n'est pas necessaire pour cette story.
- Tailwind n'est pas concerne sauf si une modification mineure existante l'exige, non attendue ici.
- Ne pas ajouter de librairie SEO externe.
- Ne pas ajouter d'adapter SSR.
- Ne pas ajouter de routeur client.
- Ne pas creer de content collections.
- Ne pas creer de pages metier completes.

### SEO attendu

- Les titres doivent etre lisibles par des humains, pas seulement optimises moteurs.
- Les descriptions doivent rester courtes et naturelles.
- Les termes locaux importants sont :
  - AMTTA
  - Mions
  - tir a l'arc
  - club
  - entrainements
  - inscriptions
  - activites
  - concours
- Eviter le bourrage de mots-cles.
- Ne pas promettre une information qui n'existe pas encore dans les pages metier.

### Canonical et domaine

- Le domaine cible a conserver est `amtta-mions.fr`.
- Utiliser `https://amtta-mions.fr` pour les URLs canoniques absolues.
- `canonicalPath` doit accepter des chemins simples comme `/`, `/vie-sportive/` ou `/infos-pratiques/nous-rejoindre/`.
- Normaliser les chemins sans logique complexe.

### Previous Story Intelligence

- Story 1.2 fournit deja un seul `main#contenu-principal` dans `Layout.astro`; ne pas dupliquer le `main`.
- Story 1.2 a centralise la navigation ; Story 1.4 ne doit pas modifier la navigation.
- Story 1.3 a cree l'accueil orientee parcours ; Story 1.4 ne doit pas refondre son layout.
- Story 1.3 utilise deja les routes Vie Sportive realignees sous `/vie-sportive/`; ne pas revenir aux anciennes routes `/activites/`, `/concours/` ou `/galerie/`.
- Le repo peut contenir les changements de Story 1.3 non encore commites ; les respecter.

### Build et validation

- `npm run build` est obligatoire en fin d'implementation.
- Si `npm run build` est bloque par la policy PowerShell, utiliser `npm.cmd run build` et documenter le contournement.
- Le build ne doit pas necessiter de reseau.
- Les liens internes vers pages futures ne bloquent pas le build Astro et ne doivent pas pousser a creer ces pages.

### References

- [PRD] `_bmad-output/planning-artifacts/prd.md` : NFR14, NFR15, NFR17, objectifs SEO local et maintenabilite.
- [UX] `_bmad-output/planning-artifacts/ux-design-specification.md` : structure semantique, responsive, accessibilite pragmatique et orientation des parcours.
- [Architecture] `_bmad-output/planning-artifacts/architecture.md` : SEO et Metadonnees, Architecture des Composants, Structure Projet et Frontieres.
- [Epics] `_bmad-output/planning-artifacts/epics.md` : Epic 1, Story 1.4.
- [Story 1.1] `_bmad-output/implementation-artifacts/1-1-initialiser-socle-astro-mvp.md` : socle statique et garde-fous.
- [Story 1.2] `_bmad-output/implementation-artifacts/1-2-creer-layout-global-header-navigation-footer.md` : shell global et navigation.
- [Story 1.3] `_bmad-output/implementation-artifacts/1-3-creer-la-page-daccueil-orientee-parcours.md` : page d'accueil et routes utilisees.

## Definition of Done

- Un composant SEO centralise existe ou une integration equivalent clairement isolee est en place.
- `Layout.astro` accepte `title`, `description` et `canonicalPath`.
- `Layout.astro` conserve le shell global existant sans regression visible.
- La page d'accueil fournit un titre, une description et `canonicalPath="/"`.
- Le HTML genere pour `/` contient un `<title>`, une meta description et une canonical.
- Les metadonnees soutiennent la recherche locale AMTTA, Mions, tir a l'arc, club, entrainements, inscriptions et concours.
- Aucune page metier n'est creee.
- Aucune content collection n'est creee.
- Aucun sitemap ou `robots.txt` n'est ajoute dans cette story.
- Aucune dependance n'est ajoutee.
- Aucune integration Google Agenda, galerie complete ou formulaire de contact n'est introduite.
- `npm run build` passe sans erreur ou `npm.cmd run build` passe si PowerShell bloque `npm.ps1`.
- Les fichiers touches et choix d'implementation sont listes dans le Dev Agent Record.

## Risques et Points d'Attention

- **Sur-architecture :** garder le SEO centralise simple ; ne pas creer un systeme complet de templates SEO avant les pages metier.
- **Domaine canonique :** utiliser le domaine cible connu `https://amtta-mions.fr`, mais garder la normalisation facile a ajuster plus tard.
- **Duplicate head tags :** ne pas laisser un `<title>` direct dans `Layout.astro` en plus du composant SEO.
- **Descriptions generiques :** eviter des descriptions trop vagues qui ne mentionnent pas le contexte local du club.
- **Keyword stuffing :** integrer les termes SEO naturellement.
- **Scope creep sitemap/robots :** l'architecture les recommande plus tard si necessaire ; ils restent hors scope Story 1.4.
- **Pages futures :** ne pas creer les pages metier pour completer les metadonnees ; le contrat SEO les preparera seulement.
- **Encodage :** rester coherent avec les fichiers existants et eviter les changements d'encodage inutiles.

## Questions Ouvertes

- Aucune question bloquante pour Story 1.4.
- L'image Open Graph officielle du club pourra etre ajoutee plus tard lorsqu'un asset fiable sera selectionne.
- La strategie sitemap/robots pourra etre traitee dans une story dediee si le deploiement et le domaine sont stabilises.

## Dev Agent Record

### Agent Model Used

GPT-5 Codex

### Debug Log References

- `npm run build` a echoue sous PowerShell car `npm.ps1` est bloque par la policy d'execution Windows.
- `npm.cmd run build` execute avec succes.
- Sortie Astro confirmee : `output: "static"`, `mode: "static"`, generation dans `dist/`.
- Build termine avec 1 page generee : `/index.html`.
- Verification HTML effectuee sur `dist/index.html` : `<title>`, meta description, canonical, `og:title`, `og:description`, `og:type`, `og:url` et `og:site_name` presents.
- Controle scope effectue : `src/content.config.ts` absent, `public/robots.txt` absent et seule page dans `src/pages` = `index.astro`.

### Completion Notes List

- Composant SEO centralise cree dans `src/components/site/Seo.astro`.
- `Seo.astro` gere les props `title`, `description`, `canonicalPath`, `ogImage?` et `noindex?`.
- `Seo.astro` rend `<title>`, meta description, canonical absolue, Open Graph minimal et robots `noindex,nofollow` uniquement si demande.
- Domaine canonique centralise sur `https://amtta-mions.fr` avec normalisation simple des chemins.
- `Layout.astro` accepte et transmet les props SEO sans modifier le shell global existant.
- L'appel `Layout` de la page d'accueil fournit maintenant un titre, une description locale et `canonicalPath="/"`.
- Aucune page metier n'a ete creee.
- Aucune content collection, sitemap, `robots.txt`, dependance, integration Google Agenda, galerie complete ou formulaire de contact n'a ete ajoute.

### File List

- `_bmad-output/implementation-artifacts/1-4-mettre-en-place-les-composants-seo-et-les-metadonnees-de-base.md`
- `src/components/site/Seo.astro`
- `src/layouts/Layout.astro`
- `src/pages/index.astro`

### Change Log

- 2026-05-12: Story 1.4 creee et prete pour implementation.
- 2026-05-12: Implementation du composant SEO centralise, branchement dans le layout, metadonnees d'accueil et validation du build statique.
