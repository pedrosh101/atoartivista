import type { Dictionary } from "./index";

export const en: Dictionary = {
  meta: {
    title: "ATO Artivista",
    description:
      "ATO Artivista uses art as a tool for social transformation: an archive of artists, cultural projects and initiatives with communities in vulnerable situations.",
  },

  nav: {
    home: "Home",
    about: "About",
    vunje: "Vunje Project",
    collection: "Collection",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    switchTo: "Mudar para Português",
  },

  footer: {
    navLabel: "Footer navigation",
    tagline: "ATO Artivista · founded in May 2023",
  },

  home: {
    illustrationLabel: "Interactive illustration",
    logoAlt: "ATO Artivista logo",
    slices: {
      residencies: "Artist Residencies",
      vunje: "Vunje Project",
      casaAzul: "Casa Azul Occupation",
      collection: "Collection",
    },
  },

  about: {
    eyebrow: "ATO Artivista",
    title: "Art as a tool for social transformation",
    lead: "We encourage, produce and carry out artistic and cultural projects, focusing on groups in situations of socioeconomic vulnerability.",
    heroAlt: "An ATO Artivista initiative",
    index: [
      { href: "#missao", label: "Mission" },
      { href: "#estrategias", label: "Strategies" },
      { href: "#historia", label: "History" },
      { href: "#relatorios", label: "Reports" },
    ],
    mission: {
      eyebrow: "Mission",
      text: "We act as an agent of change in the artistic and social landscape, promoting social justice through concrete actions that democratize access to art.",
      principles: [
        "Social and racial justice",
        "Gender equity",
        "Ecological awareness",
      ],
    },
    strategies: {
      eyebrow: "Strategies",
      items: [
        {
          n: "01",
          t: "Direct investment",
          d: "Direct, individual support for artists: training, mentoring, paid opportunities and projects dedicated to temporary artistic residencies.",
        },
        {
          n: "02",
          t: "Investment at scale",
          d: "Broader impact through projects that collectively benefit communities and vulnerable groups, with a focus on children and young audiences.",
        },
      ],
    },
    history: {
      eyebrow: "Our history",
      p1: "Since our founding in May 2023, we have worked to use art as a tool for creating meaningful change in our society.",
      p2: "We believe in the power of art to inspire, educate and bring communities together. With this conviction we lead our initiatives and support collaborative projects, expanding the possibilities for creation, exchange of experiences and impact on the local community.",
      imageAlt: "Community supported by ATO Artivista",
    },
    reports: {
      eyebrow: "Activity reports",
      view: "View report ↗",
    },
  },

  vunje: {
    heroAlt: "Children of the Vunje Project during an activity",
    place: "Gongombira · Ilhéus, BA",
    eyebrow: "Vunje Project",
    title: "Children making art",
    project: {
      eyebrow: "The project",
      text: "Based in the Alto da Conquista neighborhood in Ilhéus (BA), Vunje offers capoeira, Afro dance, percussion, film and visual arts to 50 children and teenagers — a place for gathering, community and artistic learning that broadens their life perspectives and strengthens their cultural identity.",
    },
    partner: {
      imageAlt: "Artistic activity at the Vunje Project",
      eyebrow: "Implementing partner",
      title: "Gongombira de Cultura e Cidadania",
      text: "A community organization in Alto da Conquista that promotes Afro-Brazilian culture and strengthens citizenship. Founded to preserve and share Afro-descendant traditions, Gongombira designs and runs the Vunje Project with support from ATO.",
    },
    schedule: {
      eyebrow: "Schedule",
      title: "Saturdays, 8 am to 5 pm",
      morning: "Morning",
      morningItems: ["Art workshops", "Theater", "Percussion"],
      afternoon: "Afternoon",
      afternoonItems: ["Capoeira", "Dance"],
      imageAlt: "Capoeira circle at the Vunje Project",
      extras: [
        {
          t: "Film & discussion",
          d: "A space for reflection and conversation after film screenings.",
        },
        {
          t: "Outings and events",
          d: "Activities outside the project that broaden participants' cultural horizons.",
        },
        {
          t: "Weekly rehearsals",
          d: "Preparation for cultural and artistic performances.",
        },
        {
          t: "Pedagogical meeting",
          d: "Every Wednesday, the team plans and reviews the week's activities.",
        },
      ],
    },
    expansion: {
      eyebrow: "Expansion in 2025",
      title: "Psychosocial support",
      p1: "Started in late 2024, the psychosocial support program offers emotional and psychological care to children and teenagers, strengthening self-esteem, mental health and the ability to face everyday challenges. Psychology students already volunteer 4 hours a week, and a scholarship student will be supervised by Professor Mariana Gois of the Faculdade de Ilhéus.",
      p2: "The year will also see a strategic fundraising effort — grants, institutional partnerships and support from companies and individuals — to ensure Vunje's long-term sustainability.",
      imageAlt: "Care for the children of the Vunje Project",
    },
    ancestry: {
      eyebrow: "Ancestry and anti-racist education",
      text: "Children and teenagers are encouraged to recognize and value their African and Indigenous roots — art as a tool to discuss and dismantle racial stereotypes, promoting self-esteem, equality and respect for diversity.",
      altDance: "Afro dance at the Vunje Project",
      altPercussion: "Percussion at the Vunje Project",
      altKids: "Children of the Vunje Project",
    },
    credits: {
      realization: "Produced by: Gongombira de Cultura e Cidadania",
      support: "Support: ATO",
      place: "Alto da Conquista · Ilhéus, BA",
    },
  },

  collection: {
    eyebrow: "ATO Artivista",
    title: "Collection",
    intro:
      "Works and artists that are part of ATO. Choose an artist to learn about their path and their work.",
    artistsOne: "1 artist",
    artistsMany: "{n} artists",
    worksOne: "1 work",
    worksMany: "{n} works",
    viewAll: "See all artists",
    sheetTitle: "Artists",
    sheetDescription: "The full collection, in alphabetical order.",
  },

  notFound: {
    title: "Page not found",
    back: "Back to home",
  },

  artist: {
    eyebrow: "Artist",
    backToCollection: "← Back to the collection",
    portraitAlt: "Portrait of {name}",
    works: "Works",
    contact: "Contact",
    labels: {
      technique: "Technique",
      dimensions: "Dimensions",
      date: "Date",
      frame: "Frame",
      certificate: "Certificate",
      credit: "Image credit",
    },
    yes: "Yes",
    no: "No",
    certificateAlt: "Certificate of authenticity — {title}",
    untitled: "[Untitled]",
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's talk",
    lead: "To explore the collection, support projects, propose partnerships or get in touch with the artists, reach out to ATO.",
    email: "Email",
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    location: "Location",
    form: {
      title: "Send a message",
      name: "Your name",
      email: "Your email",
      message: "Message",
      send: "Send message",
      note: "When you send, your email app will open with the message filled in.",
      subject: "Message from the ATO Artivista website",
    },
  },
};
