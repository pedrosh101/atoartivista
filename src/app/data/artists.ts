import type { Localized } from "@/i18n/config";

/**
 * Modelo do acervo — espelha as colunas da planilha "ACERVO ATO":
 *
 *  ARTISTA ............ Artist.name
 *  MINI BIO ........... Artist.bio
 *  RETRATO ARTISTA .... Artist.portrait
 *  CONTATO ............ Artist.contact
 *
 *  OBRA ............... Work.title
 *  FOTO DA OBRA ....... Work.image
 *  DIMENSÕES .......... Work.dimensions
 *  DATA ............... Work.date
 *  TÉCNICA ............ Work.technique
 *  MOLDURA ............ Work.framed        (true | false | omitido = não informado)
 *  CERTIFICADO ........ Work.certificate    (true | false | omitido = não informado)
 *  FOTO DA OBRA/CRÉDITO Work.imageCredit
 *  FOTO DO CERTIFICADO  Work.certificateImage
 *  DESCRIÇÃO .......... Work.description
 *
 * Na planilha cada linha é uma obra; aqui as obras ficam agrupadas dentro do
 * artista. Todo campo opcional que ficar vazio simplesmente não aparece no site.
 * Textos que precisam de tradução usam { pt, en } — se faltar `en`, o site usa `pt`.
 */

export type SiteImage = {
  src: string;
  width: number;
  height: number;
};

export type Work = {
  title?: Localized;
  image: SiteImage;
  dimensions?: string;
  date?: string;
  technique?: Localized;
  framed?: boolean;
  certificate?: boolean;
  imageCredit?: string;
  certificateImage?: SiteImage;
  description?: Localized;
};

export type Artist = {
  slug: string;
  name: string;
  portrait: SiteImage;
  bio?: Localized;
  contact?: {
    email?: string;
    instagram?: string;
    phone?: string;
    website?: string;
  };
  works: Work[];
};

export const artists: Artist[] = [
  {
    slug: "aj-fosik",
    name: "AJ FOSIK",
    portrait: { src: "/acervo/a2/profile.jpg", width: 730, height: 732 },
    bio: {
      pt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris sapien, egestas ut rutrum sit amet, ultricies at risus. Praesent feugiat ex diam, at elementum erat molestie sit amet. Sed suscipit viverra diam, at luctus augue imperdiet a. Mauris ac laoreet dui. Maecenas nunc odio",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris sapien, egestas ut rutrum sit amet, ultricies at risus. Praesent feugiat ex diam, at elementum erat molestie sit amet. Sed suscipit viverra diam, at luctus augue imperdiet a. Mauris ac laoreet dui. Maecenas nunc odio",
    },
    contact: { email: "", instagram: "", phone: "", website: "" },
    works: [
      {
        title: { pt: "QUINTESSENCE OF DUST", en: "QUINTESSENCE OF DUST" },
        image: { src: "/acervo/ac1.jpg", width: 974, height: 650 },
        dimensions: "44.45 x 44x45 x 30,48",
        date: "2011",
        technique: { pt: "ESCULTURA EM MADEIRA & PINTURA", en: "" },
        framed: false,
        certificate: true,
        imageCredit: "",
        certificateImage: { src: "", width: 0, height: 0 },
        description: { pt: "", en: "" },
      },
    ],
  },
  {
    slug: "albano-afonso",
    name: "ALBANO AFONSO",
    portrait: { src: "/acervo/a2/profile.jpg", width: 730, height: 732 },
    bio: {
      pt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris sapien, egestas ut rutrum sit amet, ultricies at risus. Praesent feugiat ex diam, at elementum erat molestie sit amet. Sed suscipit viverra diam, at luctus augue imperdiet a. Mauris ac laoreet dui. Maecenas nunc odio",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris sapien, egestas ut rutrum sit amet, ultricies at risus. Praesent feugiat ex diam, at elementum erat molestie sit amet. Sed suscipit viverra diam, at luctus augue imperdiet a. Mauris ac laoreet dui. Maecenas nunc odio",
    },
    contact: { email: "", instagram: "", phone: "", website: "" },
    works: [
      {
        title: { pt: "ETERNO (2018)", en: "ETERNO (2018)" },
        image: { src: "/acervo/ac1.jpg", width: 974, height: 650 },
        dimensions: "50x50",
        date: "",
        technique: { pt: "IMPRESSÃO JATO DE TINTA SOBRE TECIDO", en: "" },
        framed: false,
        certificate: false,
        imageCredit: "",
        certificateImage: { src: "", width: 0, height: 0 },
        description: {
          pt: "Albano Afonso e Sandra Cinto, Eterno, 2018, 92",
          en: "",
        },
      },
    ],
  },
  {
    slug: "alecio-de-andrade",
    name: "ALECIO DE ANDRADE",
    portrait: { src: "/acervo/a2/profile.jpg", width: 730, height: 732 },
    bio: {
      pt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris sapien, egestas ut rutrum sit amet, ultricies at risus. Praesent feugiat ex diam, at elementum erat molestie sit amet. Sed suscipit viverra diam, at luctus augue imperdiet a. Mauris ac laoreet dui. Maecenas nunc odio",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris sapien, egestas ut rutrum sit amet, ultricies at risus. Praesent feugiat ex diam, at elementum erat molestie sit amet. Sed suscipit viverra diam, at luctus augue imperdiet a. Mauris ac laoreet dui. Maecenas nunc odio",
    },
    contact: { email: "", instagram: "", phone: "", website: "" },
    works: [
      {
        title: { pt: "VINICIUS DE MORAES", en: "VINICIUS DE MORAES" },
        image: { src: "/acervo/ac1.jpg", width: 974, height: 650 },
        dimensions: "",
        date: "",
        technique: { pt: "FOTOGRAFIA", en: "" },
        framed: true,
        certificate: false,
        imageCredit: "",
        certificateImage: { src: "", width: 0, height: 0 },
        description: { pt: "", en: "" },
      },
    ],
  },
  {
    slug: "alessandra-duarte",
    name: "ALESSANDRA DUARTE",
    portrait: { src: "/acervo/a2/profile.jpg", width: 730, height: 732 },
    bio: {
      pt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris sapien, egestas ut rutrum sit amet, ultricies at risus. Praesent feugiat ex diam, at elementum erat molestie sit amet. Sed suscipit viverra diam, at luctus augue imperdiet a. Mauris ac laoreet dui. Maecenas nunc odio",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris sapien, egestas ut rutrum sit amet, ultricies at risus. Praesent feugiat ex diam, at elementum erat molestie sit amet. Sed suscipit viverra diam, at luctus augue imperdiet a. Mauris ac laoreet dui. Maecenas nunc odio",
    },
    contact: { email: "", instagram: "", phone: "", website: "" },
    works: [
      {
        title: { pt: "A MARÉ EM TÚLIO", en: "A MARÉ EM TÚLIO" },
        image: { src: "/acervo/ac1.jpg", width: 974, height: 650 },
        dimensions: "190X320",
        date: "2013",
        technique: { pt: "OLÉO SOBRE TELA", en: "" },
        framed: true,
        certificate: false,
        imageCredit: "",
        certificateImage: { src: "", width: 0, height: 0 },
        description: { pt: "", en: "2013. Oil on canvas, 290 x 160 cm." },
      },
    ],
  },
  {
    slug: "aline-motta",
    name: "ALINE MOTTA",
    portrait: { src: "/acervo/a2/profile.jpg", width: 730, height: 732 },
    bio: {
      pt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris sapien, egestas ut rutrum sit amet, ultricies at risus. Praesent feugiat ex diam, at elementum erat molestie sit amet. Sed suscipit viverra diam, at luctus augue imperdiet a. Mauris ac laoreet dui. Maecenas nunc odio",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris sapien, egestas ut rutrum sit amet, ultricies at risus. Praesent feugiat ex diam, at elementum erat molestie sit amet. Sed suscipit viverra diam, at luctus augue imperdiet a. Mauris ac laoreet dui. Maecenas nunc odio",
    },
    contact: { email: "", instagram: "", phone: "", website: "" },
    works: [
      {
        title: { pt: "VARAL DO MEU VIZINHO", en: "VARAL DO MEU VIZINHO" },
        image: { src: "/acervo/ac1.jpg", width: 974, height: 650 },
        dimensions: "20x30",
        date: "2008-2012",
        technique: { pt: "FOTOGRAFIA", en: "" },
        framed: false,
        certificate: true,
        imageCredit: "",
        certificateImage: { src: "", width: 0, height: 0 },
        description: { pt: "", en: "" },
      },
    ],
  },
  {
    slug: "allann-seabra",
    name: "ALLANN SEABRA",
    portrait: { src: "/acervo/a2/profile.jpg", width: 730, height: 732 },
    bio: {
      pt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris sapien, egestas ut rutrum sit amet, ultricies at risus. Praesent feugiat ex diam, at elementum erat molestie sit amet. Sed suscipit viverra diam, at luctus augue imperdiet a. Mauris ac laoreet dui. Maecenas nunc odio",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris sapien, egestas ut rutrum sit amet, ultricies at risus. Praesent feugiat ex diam, at elementum erat molestie sit amet. Sed suscipit viverra diam, at luctus augue imperdiet a. Mauris ac laoreet dui. Maecenas nunc odio",
    },
    contact: { email: "", instagram: "", phone: "", website: "" },
    works: [
      {
        title: {
          pt: "A ARTE DO QUERER ESTAR PRÓXIMO",
          en: "A ARTE DO QUERER ESTAR PRÓXIMO",
        },
        image: { src: "/acervo/ac1.jpg", width: 974, height: 650 },
        dimensions: "",
        date: "",
        technique: { pt: "SERIGRAFIA", en: "" },
        framed: false,
        certificate: false,
        imageCredit: "",
        certificateImage: { src: "", width: 0, height: 0 },
        description: { pt: "", en: "" },
      },
    ],
  },

  {
    slug: "p-da-silva",
    name: "P. Da Silva",
    portrait: { src: "/acervo/a1/profile.jpg", width: 730, height: 732 },
    works: [
      { image: { src: "/acervo/a1/art1.webp", width: 1023, height: 682 } },
    ],
  },

  {
    slug: "cabelo",
    name: "Cabelo",
    portrait: { src: "/acervo/a2/profile.jpg", width: 730, height: 732 },
    bio: {
      pt: "Artista visual com trajetória em pintura e colagem, explora memória, território e identidade em obras de grande formato. (Texto temporário.)",
      en: "Visual artist working in painting and collage, exploring memory, territory and identity in large-format pieces. (Placeholder text.)",
    },
    contact: {
      email: "cabelo@exemplo.com",
      instagram: "cabelo.arte",
      phone: "+55 73 99999-9999",
      website: "https://exemplo.com/cabelo",
    },
    works: [
      {
        title: {
          pt: "Título temporário da obra",
          en: "Placeholder artwork title",
        },
        image: { src: "/acervo/a2/art2.png", width: 974, height: 650 },
        dimensions: "120 x 80 cm",
        date: "2024",
        technique: { pt: "Óleo sobre tela", en: "Oil on canvas" },
        framed: true,
        certificate: true,
        imageCredit: "Nome do Fotógrafo",
        certificateImage: {
          src: "/acervo/a2/certificado.png",
          width: 1000,
          height: 700,
        },
        description: {
          pt: "Descrição temporária da obra. Aqui entra o texto curatorial: o processo criativo, os materiais e o contexto em que a obra foi produzida.",
          en: "Placeholder description of the work. This is where the curatorial text goes: the creative process, the materials and the context in which the piece was made.",
        },
      },
    ],
  },
  {
    slug: "deborah-engel",
    name: "Deborah Engel",
    portrait: { src: "/acervo/a3/profile.jpg", width: 730, height: 732 },
    works: [
      { image: { src: "/acervo/a3/art3.webp", width: 1024, height: 774 } },
    ],
  },
];

export const artistsSorted: Artist[] = [...artists].sort((a, b) =>
  a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" }),
);

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug);
}
