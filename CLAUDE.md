# portfolio_v2 — CLAUDE.md

Axner Hägglund's personal portfolio website (v2). A fully static, multi-page SPA showcasing frontend skills and projects.

## Tech Stack

- **React 19** + **Vite 6** (dev server on `http://localhost:5173`)
- **React Router DOM 7** — client-side routing, three routes
- **Framer Motion 12** — scroll-triggered entrance animations
- **Three.js + Vanta** — animated 3D blob background (CornerBlob component)
- **Swiper 11** — carousel/slider component
- **React Intersection Observer** — triggers Framer Motion animations on scroll
- **Vanilla CSS** — no Tailwind/CSS-in-JS; each component has its own `.css` file
- **Remixicon** — icons loaded via CDN in `index.html`
- **Poppins** font via Google Fonts (also in `index.html`)
- **JavaScript only** — no TypeScript

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
  App.jsx               # Router with three routes
  data.js               # Project card data (4 projects)
  quickInfoData.js      # Skills/tools cards data
  index.css             # Global styles
  components/           # Reusable UI components (each with own CSS)
    Hero/
    InfoBox/
    IconGroup/
    Card/ CardList/
    Slider/
    QuickInfoCard/ QuickInfoCardList/
    CornerBlob/         # Vanta animated background
    SectionOne/ SectionTwo/ SectionThree/
    ComingSoon/
  pages/
    Homepage/HomePage.jsx
    WhoAmIPage/WhoAmI.jsx       # scroll-snap layout, 3 animated sections
    MyProjectsPage/             # "Coming Soon" placeholder
public/
  images/               # project screenshots + profile photo (babes.jpg = profile)
```

## Routes

| Path | Page | Notes |
|---|---|---|
| `/` | HomePage | Hero, Quick Info cards |
| `/who-am-i` | WhoAmI | Full-screen scroll-snap, 3 Framer Motion sections |
| `/my-projects` | MyProjectsPage | Coming Soon placeholder |

## Styling Conventions

- Dark theme: background `#0A0A0A`, white text
- Responsive breakpoint at `750px`
- CSS class naming: BEM-like (`.hero__title`, `.experience-card`)
- No global state library — local `useState`/`useEffect` only

## Known Status

- `node_modules/` not committed — always run `npm install` after cloning
- My Projects page is a placeholder ("Coming Soon")
- One project in `data.js` has an empty `link` field ("Where it's @")
