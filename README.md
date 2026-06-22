# Rise — Website

Marketing site for **Rise** ("Make it unreal") — a team of technical and design
specialists HQ'd in Lisbon. Built from the Figma source
[_Rise — Website v2.0_](https://www.figma.com/design/gJ0vSUdSDn5x5mKbIE8EZH/Rise-%E2%80%94-Website--v2.0).

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **Tailwind CSS v4** (tokens defined in `src/app/globals.css`)
- **TypeScript**
- Fonts via `next/font`: **Fraunces** (display serif, standing in for PP Eiko)
  and **Inter** (UI/grotesque, standing in for ABC Diatype)

## Design tokens

| Token             | Value     | Use                         |
| ----------------- | --------- | --------------------------- |
| `--color-page`    | `#ebe5e1` | Warm page background        |
| `--color-ink`     | `#220b39` | Blue-black text             |
| `--color-magenta` | `#fa32a0` | Accent (hero gradient, CTA) |
| `--color-dark`    | `#16131a` | Dark subscription band      |

The hero artwork and case-study panels are recreated as pure SVG/CSS gradients
(`HeroBlob`, `CaseArt`) — no external image assets required.

## Structure

```
src/
├─ app/                     # routes
│  ├─ page.tsx              # home (hero, sectors, stats, testimonials, team,
│  │                        #       services, clients, subscription, contact)
│  ├─ about/  services/  pricing/  contact/  terms/
│  ├─ work/                 # outcomes index
│  └─ work/[slug]/          # case study detail (SSG)
├─ components/
│  ├─ layout/               # SiteNav, SiteFooter
│  ├─ hero/                 # Hero, HeroBlob
│  ├─ sections/             # page sections
│  └─ ui/                   # primitives (Button, Marquee, WorldClocks, …)
└─ lib/
   └─ content.ts            # all copy + case-study data in one place
```

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

All content lives in `src/lib/content.ts` — edit there to update copy, services,
team, pricing or case studies.
