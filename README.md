# ATO Artivista

Site institucional da **ATO Artivista** — organização que usa a arte como ferramenta de transformação social. O site apresenta a organização, o Projeto Vunje, o **Acervo** de artistas e obras, e os canais de contato.

Disponível em **Português** (padrão) e **English**.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com) + componentes [shadcn/ui](https://ui.shadcn.com) (`button`, `sheet`)
- Fontes: Urbanist e Open Sans (via `next/font`)

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run start    # serve o build
npm run lint
```

## Páginas

| Rota                | Conteúdo                                                  |
| ------------------- | --------------------------------------------------------- |
| `/`                 | Home interativa (ilustração com atalhos)                  |
| `/sobre`            | Missão, estratégias, história e relatórios                |
| `/projeto-vunje`    | Projeto Vunje, em parceria com a Gongombira               |
| `/acervo`           | Grade de artistas + barra lateral "Ver todos os artistas" |
| `/artists/[slug]`   | Página do artista e de suas obras (ex.: `/artists/cabelo`)|
| `/contato`          | Canais de contato e formulário (abre o e-mail do visitante)|

A Navbar aparece em todas as páginas; o Footer de navegação, em todas **exceto** a home.

## Estrutura

```
src/
├── app/
│   ├── globals.css        # paleta de cores e tokens do tema
│   ├── layout.tsx         # fontes, idioma e metadados
│   ├── data/
│   │   ├── artists.ts     # acervo (artistas e obras)
│   │   └── contact.ts     # canais de contato
│   └── <rotas>/page.tsx
├── components/            # navbar, footer, container, front (home), etc.
│   └── ui/                # componentes shadcn
├── i18n/
│   ├── dictionaries/      # pt.ts e en.ts — todos os textos do site
│   ├── actions.ts         # troca de idioma (grava cookie)
│   ├── server.ts          # getI18n() para Server Components
│   └── client.tsx         # useI18n() para Client Components
└── lib/                   # utilitários e lista de rotas (nav.ts)
```

## Cores

As cores do site ficam em **um único lugar**: o bloco `PALETA DO SITE` em
[`src/app/globals.css`](src/app/globals.css).

| Variável | Classe Tailwind          | Uso                                 |
| -------- | ------------------------ | ----------------------------------- |
| `--clr1` | `bg-clr1`, `text-clr1`…  | Bege — fundos, cor predominante     |
| `--clr2` | `bg-clr2`, `text-clr2`…  | Verde escuro — cor principal        |
| `--clr3` | `bg-clr3`, `text-clr3`…  | Branco                              |
| `--clr4` | `bg-clr4`, `text-clr4`…  | Marrom — textos secundários, linhas |
| `--clr5` | `bg-clr5`, `text-clr5`…  | Amarelo — detalhes e CTAs           |

Não use cores fixas (`#hex`, `text-white`, `bg-black`) nos componentes: use sempre as classes `clr*`.

A largura máxima do conteúdo das páginas internas também é centralizada, em `--container-page` (componente `<Container />`).

## Idiomas (i18n)

- O idioma padrão é o português. O visitante troca para inglês em **PT | EN** na Navbar; a escolha fica salva em um cookie (`ato-locale`).
- **Todos os textos fixos** estão em `src/i18n/dictionaries/pt.ts` e `en.ts`. O TypeScript avisa se uma chave existir em um idioma e faltar no outro.
- Em Server Components: `const { t, locale } = await getI18n()`. Em Client Components: `const { t, locale } = useI18n()`.
- Para um novo idioma: crie o dicionário, registre-o em `dictionaries/index.ts` e adicione o código em `locales` (`i18n/config.ts`).

## Acervo: como cadastrar artistas e obras

Tudo fica em [`src/app/data/artists.ts`](src/app/data/artists.ts), seguindo as colunas da planilha **ACERVO ATO**:

| Coluna da planilha     | Campo                    |
| ---------------------- | ------------------------ |
| ARTISTA                | `name` (e `slug` na URL) |
| MINI BIO               | `bio`                    |
| RETRATO ARTISTA        | `portrait`               |
| CONTATO                | `contact`                |
| OBRA                   | `works[].title`          |
| FOTO DA OBRA           | `works[].image`          |
| DIMENSÕES / DATA       | `works[].dimensions` / `works[].date` |
| TÉCNICA                | `works[].technique`      |
| MOLDURA / CERTIFICADO  | `works[].framed` / `works[].certificate` |
| FOTO DA OBRA/CRÉDITO   | `works[].imageCredit`    |
| FOTO DO CERTIFICADO    | `works[].certificateImage` |
| DESCRIÇÃO              | `works[].description`    |

Exemplo:

```ts
{
  slug: "aj-fosik", // vira /artists/aj-fosik
  name: "AJ Fosik",
  portrait: { src: "/acervo/aj-fosik/retrato.jpg", width: 800, height: 800 },
  bio: { pt: "Mini bio em português.", en: "Short bio in English." },
  works: [
    {
      title: { pt: "Quintessence of Dust" },
      image: { src: "/acervo/aj-fosik/quintessence.webp", width: 1600, height: 1200 },
      dimensions: "44,45 x 44,45 x 30,48 cm",
      date: "2011",
      technique: { pt: "Escultura em madeira e pintura", en: "Wood sculpture and painting" },
      certificate: true,
    },
  ],
}
```

- Campos vazios não aparecem no site. Textos `{ pt, en }` usam o português quando falta o `en`.
- As imagens devem ficar em `public/` (os links do Google Drive da planilha não funcionam direto no site). Informe `width` e `height` reais de cada arquivo.
- Na página da obra, a imagem nunca ultrapassa `100vh` de altura.

## Contato

Preencha [`src/app/data/contact.ts`](src/app/data/contact.ts) (e-mail, Instagram, WhatsApp, localização). Itens vazios não aparecem; o formulário só aparece se houver e-mail.

## Deploy

O projeto é compatível com [Vercel](https://vercel.com). Como o idioma é lido de um cookie, as páginas são renderizadas sob demanda (não são 100% estáticas).
