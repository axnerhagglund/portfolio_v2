# portfolio_v2 — CLAUDE.md

Axner Hägglund's personal portfolio website (v2). A fully static SPA showcasing frontend skills and projects.

## Tech Stack

- **React 19** + **Vite 6** (dev server on `http://localhost:5173`)
- **React Router DOM 7** — client-side routing with view transitions
- **Three.js + Vanta** — animated 3D blob background (CornerBlob component)
- **Swiper 11** — used by the unused `Slider` component (see Known Status)
- **Vanilla CSS** — no Tailwind/CSS-in-JS; each component has its own `.css` file
- **Remixicon** — icons loaded via CDN in `index.html`
- **Poppins** font via Google Fonts (also in `index.html`)
- **JavaScript only** — no TypeScript

`package.json` also lists `framer-motion` and `react-intersection-observer` but neither is imported anywhere in `src/` as of this revision.

## Local Development

```bash
npm install       # first time only
npm run dev       # starts dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build
npm run lint      # ESLint
```

No `.env` file needed — all data is hardcoded in `src/data.js` and `src/quickInfoData.js`.

## Project Structure

```
src/
  main.jsx              # React root entry
  App.jsx               # Router (3 routes)
  data.js               # Project card data (3 projects)
  quickInfoData.js      # Skills/tools cards data
  index.css             # Global styles
  components/           # Reusable UI components (each with own CSS)
    Hero/               # used by HomePage
    InfoBox/            # used by Hero
    IconGroup/          # used by Hero — primary nav
    CornerBlob/         # Vanta animated background
    ProjectsShowcase/   # grid + filters; collapses to single column ≤699px
  pages/
    Homepage/HomePage.jsx
    WhoAmIPage/WhoAmI.jsx       # long-scroll about page with rAF parallax + progress bar
    ProjectDetailPage/ProjectDetail.jsx
public/
  images/               # project screenshots + portraits (axner.png, babes.jpg)
```

## Routes

| Path | Page | Notes |
|---|---|---|
| `/` | HomePage | Hero + ProjectsShowcase (no filters) |
| `/who-am-i` | WhoAmI | Long-scroll about page |
| `/projects/:slug` | ProjectDetail | Per-project detail page driven by `data.js` slugs |

## Styling Conventions

- Dark theme: background `#0A0A0A`, white text
- Mobile breakpoint at `699px` (some components also use `750px`)
- CSS class naming: BEM-like (`.hero__title`, `.ps-grid-item`)
- No global state library — local `useState`/`useEffect` only
- Respect `prefers-reduced-motion` for scroll-driven effects

## Known Status

- `node_modules/` not committed — always run `npm install` after cloning
- Several components are present but unused: `Slider`, `Card`, `CardList`, `SectionOne/Two/Three`, `QuickInfoCard`, `QuickInfoCardList`, `ComingSoon`. Safe to delete in a cleanup pass.
- All three projects in `data.js` are currently marked `IN PROGRESS` — portfolio could use at least one shipped item with a real link.
