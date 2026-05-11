export type NavigationItem = {
  label: string;
  href: string;
  children?: NavigationItem[];
};

export const mainNavigation: NavigationItem[] = [
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

export const footerNavigation: NavigationItem[] = [
  { label: "Contact", href: "/contact/" },
  { label: "Infos pratiques", href: "/infos-pratiques/" },
  { label: "Activites", href: "/vie-sportive/activites/" },
  { label: "Concours", href: "/vie-sportive/concours/" },
];
