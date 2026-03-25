# Portfolio Template — RIZKI

Portofolio personal dengan arsitektur statis yang ringan, UI brutalist, dan fokus pada kecepatan serta keterbacaan.

**Fullstack developer portfolio** with a bold, brutalist visual direction: fast static pages, clear typography, and focused sections for work, play, and contact.

---

## Highlights

- **Multi-page experience** — Home, career timeline, achievements, mini games, guestbook, and contact.
- **Performance-first** — Built with [Astro](https://astro.build/) for minimal client JS and snappy loads.
- **Modern styling** — [Tailwind CSS v4](https://tailwindcss.com/) via Vite, with a cohesive brutalist aesthetic.
- **Icons** — [Lucide](https://lucide.dev/) for consistent, lightweight iconography.
- **PWA-ready** — Web app manifest for installable / standalone display (`public/site.webmanifest`).

---

## Tech stack

| Area      | Choice                               |
| --------- | ------------------------------------ |
| Framework | Astro 6                              |
| Styling   | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Tooling   | TypeScript, Vite                     |
| Runtime   | Node.js **≥ 22.12**                  |

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 22.12 or newer (see `package.json` → `engines`)

### Install & run

```bash
npm install
npm run dev
```

The dev server defaults to `http://localhost:4321` (Astro default).

### Production build

```bash
npm run build
npm run preview
```

`preview` serves the output of `dist/` locally so you can verify the production bundle before deploy.

---

## Environment

For correct **Open Graph** and absolute URLs in production, set your public site URL:

| Variable          | Purpose                                                                |
| ----------------- | ---------------------------------------------------------------------- |
| `PUBLIC_SITE_URL` | e.g. `https://yourdomain.com` — passed to `astro.config.mjs` as `site` |

Create a `.env` in the project root (not committed) and define `PUBLIC_SITE_URL` for production builds. See the comment in `astro.config.mjs`.

---

## Project layout

```
src/
├── components/     # UI sections (home, header, footer, feature pages)
├── layouts/        # Shared `Layout.astro` (meta, OG, shell)
├── pages/          # File-based routes (`index`, career, achievements, etc.)
├── styles/         # Global CSS
├── assets/         # Data (`data.json`), media, resume PDF
└── types/          # TypeScript definitions
public/             # Static assets, service worker, manifest
```

---

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Development server       |
| `npm run build`   | Static output to `dist/` |
| `npm run preview` | Preview production build |

---

## Ikuti & dukung

Kalau repo ini membantu atau kamu suka isinya, jangan lupa **kasih Star** di GitHub — itu sangat membantu visibilitas project ini.

Jangan lupa ikuti juga di:

- [GitHub — @rzkir20](https://github.com/rzkir20)
- [Instagram — @rzkir.20](https://www.instagram.com/rzkir.20/)
- [TikTok — @rzkir.20](https://www.tiktok.com/@rzkir.20)

---

## License & credits

Source code is licensed under the [MIT License](LICENSE) (Copyright © 2026 Rizki Ramadhan).

Copy, images, resume PDF, and other personal content remain the author’s; reuse of those materials is not granted by the software license alone.
