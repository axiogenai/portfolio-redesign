export interface ShowcaseProject {
  id: string;
  name: string;
  category: string;
  year: string;
  desc: string;
  image: string;
  link: string;
}

export const DEFAULT_SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "breadberry",
    name: "Breadberry",
    category: "Website",
    year: "2026",
    desc: "A focused three-page B2B site built to win restaurant and hotel accounts.",
    image: "/portfolio/breadberry.webp",
    link: "https://breadberry.co.in/",
  },
  {
    id: "kyoprep",
    name: "Kyoprep",
    category: "Web Design",
    year: "2026",
    desc: "An Edtech website crafted for modern learning and seamless onboarding.",
    image: "/portfolio/kyoprep.webp",
    link: "https://kyoprep.in/",
  },
  {
    id: "zraaya",
    name: "Zraya",
    category: "Website",
    year: "2026",
    desc: "A calm, premium showcase for an architecture and construction studio.",
    image: "/portfolio/zraya.webp",
    link: "https://zraaya.in/",
  },
  {
    id: "clorefy",
    name: "Clorefy",
    category: "Website",
    year: "2026",
    desc: "Product site for an AI platform that drafts business documents in seconds.",
    image: "/portfolio/clorefy.webp",
    link: "https://clorefy.com/",
  },
  {
    id: "addmenu",
    name: "Addmenu",
    category: "Website",
    year: "2026",
    desc: "A QR menu platform made simple for hotels and restaurants to run.",
    image: "/portfolio/addmenu.webp",
    link: "https://addmenu.in/",
  },
  {
    id: "id3cor",
    name: "iD3cor",
    category: "Website",
    year: "2026",
    desc: "An interior design portfolio with a short path from idea to consultation.",
    image: "/portfolio/id3cor.webp",
    link: "https://id3cor.com/",
  },
  {
    id: "rahaman",
    name: "Rahaman Construction",
    category: "Website",
    year: "2026",
    desc: "A construction and interiors site built on clarity, proof and trust.",
    image: "/portfolio/rahaman.webp",
    link: "https://rahamanconstruction.in/",
  },
  {
    id: "dhristi",
    name: "Dhristi services",
    category: "Website",
    year: "2026",
    desc: "A contracting platform spanning civil, electrical and telecom projects.",
    image: "/portfolio/dhristi.webp",
    link: "https://dhristi.co.in/",
  },
  {
    id: "pink-brasserie",
    name: "The Pink Brasserie",
    category: "Website",
    year: "2026",
    desc: "An immersive restaurant site covering menu, story and reservations.",
    image: "/portfolio/pink-brasserie.webp",
    link: "https://www.thepinkbrasserie.com/",
  },
];
