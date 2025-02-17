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
    icon: "material-symbols:globe",
  },
  {
    name: "GitHub",
    background: "bg-github hover:bg-github/80",
    href: "https://github.com/xHyroM",
    icon: "mdi:github",
  },
  {
    name: "SourceHut",
    background: "bg-sourcehut hover:bg-sourcehut/80",
    href: "https://sr.ht/~hyro/",
    icon: "simple-icons:sourcehut",
  },
  {
    name: "User",
    background: "bg-discord hover:bg-discord/80",
    href: "https://s.xhyrom.dev/discord-user",
    icon: "ic:baseline-discord",
  },
  {
    name: "Guild",
    background: "bg-discord hover:bg-discord/80",
    href: "https://s.xhyrom.dev/discord",
    icon: "ic:baseline-discord",
  },
  {
    name: "Ko-fi",
    background: "bg-kofi hover:bg-kofi/80",
    href: "https://ko-fi.com/xhyrom",
    icon: "cib:ko-fi",
  },
  {
    name: "HackerOne",
    background: "bg-hackerone hover:bg-hackerone/80",
    href: "https://hackerone.com/xhyrom",
    icon: "cib:hackerone",
  },
  {
    name: "Instagram",
    background: "bg-instagram hover:bg-instagram/80",
    href: "https://instagram.com/hyro.dev",
    icon: "mdi:instagram",
  },
  {
    name: "Twitter",
    background: "bg-twitter hover:bg-twitter/80",
    href: "https://twitter.com/hyrousek",
    icon: "mdi:twitter",
  },
  {
    name: "Threads",
    // todo: use bg-threads
    background: "bg-github hover:bg-github/80",
    href: "https://threads.net/@hyro.dev",
    icon: "mingcute:threads-line",
  },
  {
    name: "Chess.com",
    background: "bg-chess hover:bg-chess/80",
    href: "https://www.chess.com/member/Hyriik",
    icon: "fluent-emoji-flat:chess-pawn",
  },
  {
    name: "Reddit",
    background: "bg-reddit hover:bg-reddit/80",
    href: "https://reddit.com/u/xHyroM",
    icon: "ic:baseline-reddit",
  },
  {
    name: "Wakatime",
    background: "bg-wakatime hover:bg-wakatime/80",
    href: "https://wakatime.com/@xhyrom",
    icon: "simple-icons:wakatime",
  },
  {
    name: "Modrinth",
    background: "bg-modrinth hover:bg-modrinth/80",
    href: "https://modrinth.com/user/xHyroM",
    icon: "simple-icons:modrinth",
  },
  {
    name: "Printables",
    background: "bg-printables hover:bg-printables/80",
    href: "https://www.printables.com/@xhyrom_2962034",
    icon: "simple-icons:printables",
  },
  {
    name: "Gerlach Snežka",
    background: "bg-gerlachsnezka hover:bg-gerlachsnezka/80",
    href: "https://gerlachsnezka.github.io",
    icon: "gerlachsnezka",
  },
  {
    name: "Minecraft Mappings",
    background: "bg-minecraft hover:bg-minecraft/80",
    href: "https://mappings.xhyrom.dev/",
    icon: "mdi:minecraft",
  },
  {
    name: "Hyro Blobs",
    background: "bg-github hover:bg-github/80",
    href: "https://github.com/Hyro-Blobs/blobs",
    icon: "mdi:github",
  },
  {
    name: "Hyro's Forks",
    background: "bg-github hover:bg-github/80",
    href: "https://github.com/xhyrom-forks",
    icon: "mdi:github",
  },
  {
    name: "Hyro's Utils",
    background: "bg-github hover:bg-github/80",
    href: "https://github.com/xhyrom-utils",
    icon: "mdi:github",
  },
  {
    name: "Hyro's Archive",
    background: "bg-github hover:bg-github/80",
    href: "https://github.com/xhyrom-archive",
    icon: "mdi:github",
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
