# Personal Portfolio

A personal portfolio built with React and Tailwind CSS, designed around a single visual idea — a **"constellation" system** of nodes, lines, and a traveling signal — that ties every section together instead of treating each one as an isolated block.

## ✦ Concept

Hero introduces the full "constellation" language once, at full intensity. Every other section echoes a restrained piece of it instead of repeating the same showpiece: a quiet connector, a cluster of nodes, a line that a signal travels along. The rule throughout the build: **one real "wow" moment (Hero), everything else a calm echo.**

## Tech Stack

- **React** — component architecture
- **Tailwind CSS** — utility styling, class-based dark/light mode
- **Framer Motion** — scroll-linked animation, shared-element transitions, drag interactions
- **react-icons** (`si` set) — real brand-colored technology logos
- **lucide-react** — generic (non-brand) icons

## Project Structure

```
src/
├── data/
│   ├── siteContent.js       → Hero content, tech/socials, pillars, contact links
│   ├── projects.js          → Projects data
│   └── skills.js            → Skills grouped into clusters
├── hooks/
│   ├── useTheme.js              → dark/light state, persisted, toggles .dark on <html>
│   ├── useReducedMotion.js      → reactive OS "reduce motion" tracking
│   ├── useInView.js             → IntersectionObserver, powers every scroll reveal
│   └── useTravelingParticle.js  → animates a dot along {from, to} segments, cycling
├── components/
│   ├── common/          → Reveal.jsx, MorphingAvatar.jsx
│   ├── constellation/   → constellationConfig.js, ConstellationNode.jsx, Constellation.jsx
│   ├── about/           → PillarCard.jsx
│   ├── projects/        → ProjectCard.jsx, ProjectGallery.jsx, ProjectModal.jsx, ProjectNode.jsx
│   ├── testimonials/    → TestimonialCard.jsx
│   ├── skills/          → SkillCluster.jsx
│   ├── layout/          → Layout.jsx, Navbar.jsx, Footer.jsx, ui/ThemeToggle.jsx
│   └── sections/        → Hero.jsx, About.jsx, Projects.jsx, Testimonials.jsx, Skills.jsx, Contact.jsx
└── App.jsx               → owns cross-section state, mounts everything
```

**Guiding rule:** a piece of UI gets its own file only if it carries real behavior (state, hooks, animation triggers). Thin wrappers around a single element get inlined into their parent instead.

## Sections

| Section | Idea |
|---|---|
| **Hero** | Full constellation on load — avatar hub, radiating tech nodes, traveling signal, ambient drift |
| **About** | Quiet vertical connector thread, cascading bio + pillar cards |
| **Projects** | Vertical timeline; each project is a node; clicking a card morphs into the detail modal via a shared `layoutId` |
| **Testimonials** | Deliberate break from the node/line pattern — a slow, draggable horizontal marquee of cards, tied back in only through a tiny traveling-particle detail on a decorative node row |
| **Skills** | Technologies grouped into small, separate constellations (Frontend, Backend, Mobile, Data, Tools) rather than one giant web — real brand logos, two node sizes (main/small) |
| **Contact** | A radial hub echoing the Hero — a central "Say hi" node with GitHub, LinkedIn, WhatsApp, Telegram, and Email as satellites, connected by lines with a midpoint dot each |

## Design System

All colors are CSS custom properties — **never hardcoded** — switched via a `.dark` class on `<html>`:

```css
:root {
  --bg: #faf6f9;
  --surface: #ffffff;
  --border: #e7dff0;
  --text: #241f35;
  --text-muted: #6c6480;
  --node-fill: #efe8f7;
  --node-border: #9b8ac4;
  --node-icon: #4b3f72;
  --line: #b3a4de;
  --accent: #8b7fd1;
  --accent-rose: #c97fa0;
}
```

The one deliberate exception: **real brand logo colors** (React blue, MongoDB green, WhatsApp green, etc.) are hardcoded per icon, since the whole point of a technology or contact node is to be recognizable by its real color.

**Node visual recipe**, reused everywhere a "node" appears: a `--node-fill`/`--surface` circular badge, a `--node-border` ring, and (for the largest node in a cluster) a soft blurred `--accent` glow behind it.

`prefers-reduced-motion` is respected everywhere animation happens — ambient loops, the traveling particle, marquees, reveals.

## Getting Started

```bash
npm install
npm run dev
```

## To Do / Open Items

- Reconcile `--muted` vs `--text-muted` naming between older and newer components
- Add real contact links (GitHub, LinkedIn, WhatsApp number, Telegram, email) in `siteContent.js`
- Decide on Contact section's final spacing/radius at intermediate desktop widths