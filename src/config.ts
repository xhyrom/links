export const OPEN_GRAPH = {
  image: {
    src: "/og_image.png",
    alt: "just a picture with my profile picture",
  },
  twitter: "hyrousek",
};

export const BUTTONS = [
  {
    name: "Website",
    background: "bg-website hover:bg-website/80",
    href: "https://xhyrom.dev",
  },
  {
    name: "GitHub (Personal)",
    background: "bg-github hover:bg-github/80",
    href: "https://github.com/xHyroM",
  },
  {
    name: "Discord (User)",
    background: "bg-discord hover:bg-discord/80",
    href: "https://s.xhyrom.dev/discord-user",
  },
  {
    name: "Discord (Guild)",
    background: "bg-discord hover:bg-discord/80",
    href: "https://s.xhyrom.dev/discord",
  },
  {
    name: "Ko-fi",
    background: "bg-kofi hover:bg-kofi/80",
    href: "https://ko-fi.com/xhyrom",
  },
  {
    name: "Instagram",
    background: "bg-instagram hover:bg-instagram/80",
    href: "https://instagram.com/hyro.dev",
  },
  {
    name: "Twitter",
    background: "bg-twitter hover:bg-twitter/80",
    href: "https://twitter.com/hyrousek",
  },
  {
    name: "Threads",
    // todo: use bg-threads
    background: "bg-github hover:bg-github/80",
    href: "https://threads.net/@hyro.dev",
  },
  {
    name: "Chess",
    background: "bg-chess hover:bg-chess/80",
    href: "https://www.chess.com/member/Hyriik",
  },
  {
    name: "Reddit",
    background: "bg-reddit hover:bg-reddit/80",
    href: "https://reddit.com/u/xHyroM",
  },
  {
    name: "Wakatime",
    background: "bg-wakatime hover:bg-wakatime/80",
    href: "https://wakatime.com/@xhyrom",
  },
  {
    name: "Modrinth",
    background: "bg-modrinth hover:bg-modrinth/80",
    href: "https://modrinth.com/user/xHyroM"
  },
  {
    name: "Hyro Blobs (GithUb)",
    background: "bg-github hover:bg-github/80",
    href: "https://github.com/Hyro-Blobs/blobs",
  },
  {
    name: "Hyro's Forks (GitHub)",
    background: "bg-github hover:bg-github/80",
    href: "https://github.com/xhyrom-forks",
  },
  {
    name: "Hyro's Utils (GitHub)",
    background: "bg-github hover:bg-github/80",
    href: "https://github.com/xhyrom-utils",
  },
  {
    name: "Hyro's Archive (GitHub)",
    background: "bg-github hover:bg-github/80",
    href: "https://github.com/xhyrom-archive",
  },
];

export const SITE = {
  title: "Hyro's Links",
  description:
    "Hyro's Links is a website that contains links to my social media accounts and other useful links.",
  url: "https://links.xhyrom.dev",
  themeColor: "#fbc119",
  schema: {
    "@context": "https://schema.org/",
    "@type": "ItemList",
    name: "Redirects",
    itemListElement: BUTTONS.map((button, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: button.name,
      url: button.href,
    })),
  },
  author: {
    name: "xHyroM",
    url: "https://xhyrom.dev",
  },
  originalAuthor: {
    name: "oliminator",
    url: "https://github.com/OLIMINATOR",
  },
  sourceCode: "https://github.com/xHyroM/links",
};
