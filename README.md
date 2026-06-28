# Moharm — AI/ML Engineer Portfolio

A production-grade, dark-themed personal portfolio for an AI/ML Engineer, built with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**.

---

## 1. Tech Stack

| Tool | Purpose |
|---|---|
| **Vite** | Build tool / dev server |
| **React 19** | UI library |
| **Tailwind CSS 3** | Utility-first styling, design tokens |
| **Framer Motion** | Scroll reveals, stagger animations, micro-interactions |
| **React Icons** | Icon set (Fa, Si, Tb, Hi families) |

---

## 2. Getting Started

### Prerequisites
- Node.js 18+ and npm installed.

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → open http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

That's it — no environment variables, no backend, no API keys required. The contact form uses frontend-only validation and a simulated submit (no network call), exactly as scoped.

---

## 3. Project Structure

```
moharm-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/                 # (reserved for images/icons you add later)
│   ├── components/             # Reusable, generic UI building blocks
│   │   ├── AnimatedBackground.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── FormField.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── SectionWrapper.jsx
│   │   └── Tag.jsx
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for all content
│   ├── hooks/
│   │   ├── useActiveSection.js # IntersectionObserver-based nav highlighting
│   │   └── useScrollPosition.js# Navbar blur-on-scroll trigger
│   ├── sections/                # One file per page section (composed in App.jsx)
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx                  # Composition root — imports & orders sections
│   ├── index.css                # Tailwind directives + global styles
│   └── main.jsx                  # React entry point
├── index.html
├── tailwind.config.js            # Design system tokens (colors, glow, radius, anim)
├── postcss.config.js
├── package.json
└── README.md
```

### Why this structure?

- **`/components`** holds *generic, reusable* pieces with no section-specific content hardcoded in — `Button`, `Card`, `Tag`, `FormField`, `SectionWrapper`, `SectionHeading` are all used across multiple sections. `Navbar`, `AnimatedBackground`, and `ProjectCard` also live here since, while feature-specific, they're self-contained UI units, not page sections.
- **`/sections`** holds one component per page section (`Hero`, `About`, `Skills`, etc.), each composed from the reusable `/components`. `App.jsx` simply imports and stacks them — this keeps `App.jsx` a clean composition root with zero layout logic of its own.
- **`/data/portfolioData.js`** centralizes all real content (skills, projects, experience, nav links, social links) as plain JS objects/arrays. Sections map over this data rather than hardcoding JSX per item — so adding a 4th project or a new skill category means editing one array, not touching component code.
- **`/hooks`** isolates two pieces of cross-cutting browser-state logic (scroll position, active section via `IntersectionObserver`) so `Navbar.jsx` stays declarative and readable.

---

## 4. Design System

Strictly matching the brief:

| Token | Value |
|---|---|
| Background | `#0B0F1A` |
| Primary neon | `#7C3AED` (violet) |
| Accent | `#22D3EE` (cyan) |
| Text primary | `#E5E7EB` |
| Text muted | `#9CA3AF` |

All tokens are defined once in `tailwind.config.js` (`colors`, `boxShadow.glow-*`, `borderRadius.xl2/xl3`, `backgroundImage.grid-pattern/radial-glow`) — no hardcoded hex values scattered through components.

- **Glassmorphism**: `.glass` / `.glass-strong` utility classes in `index.css` (`backdrop-blur` + low-opacity background + hairline border), applied via the `Card` component.
- **Neon glow on hover only**: cards and buttons are flat/borderless at rest; `hover:shadow-glow-primary` / `hover:shadow-glow-accent` only activate on interaction — never a constant glow, per the "subtle" rule.
- **Border radius**: consistently `16px` (`rounded-xl2`) or `20px` (`rounded-xl3`) — never default Tailwind `rounded-lg/xl`.
- **Spacing**: Tailwind's default scale is already 4px-based and multiples of 8 (`gap-4`=16px, `gap-6`=24px, `py-20`=80px, etc.) are used throughout; no arbitrary one-off pixel values.

---

## 5. Section-by-Section Design Rationale

**Navbar** — Transparent over the Hero, then crossfades into a blurred glass bar (`backdrop-blur-xl` + `bg-bg/70`) once scrolled past 24px, tracked by the `useScrollPosition` hook. The active link gets an animated "pill" background using Framer Motion's `layoutId`, so it slides between links instead of popping — a small touch that reads as polished rather than flashy. Mobile collapses into a hamburger with a height/opacity expand animation and staggered link entrance.

**Hero** — The grid + glowing orbs + drifting particles in `AnimatedBackground` are pure CSS/SVG/Framer Motion (no canvas/particle library), keeping the bundle small while still feeling "alive." Content uses a staggered container so the eyebrow badge, name, title, intro, and CTAs cascade in sequentially rather than all popping at once. The CTA buttons map directly to the two things a recruiter wants to do first: see the work, or get in touch.

**About** — Deliberately avoids buzzword soup. The narrative is written as a real, specific story — actual project names, actual coursework, actual training (ITI) — rather than generic "passionate about AI" language. A 3-card "how I think / build / aim" sidebar gives structure without turning the section into a wall of text.

**Skills** — Grouped by category (not just a flat tag cloud) because recruiters scan in chunks — "this person knows ML frameworks, data tools, *and* has frontend awareness" reads better than 15 unsorted icons. Animated progress bars fill on scroll-into-view for a satisfying, non-gimmicky reveal.

**Projects** — Each card follows a strict, scannable template: title → description → key highlights → tech stack tags → a distinct "Impact" callout box → action buttons. The "Impact" box specifically exists because recruiters skim for outcomes, not implementation details — surfacing it visually (separate bordered block) instead of burying it in prose makes it harder to miss.

**Experience** — A center-line timeline alternating left/right on desktop (collapsing to a single left-aligned column on mobile) gives a sense of chronological progression — education, training, and freelance work — without needing a heavy library.

**Contact** — Real frontend validation (required fields, email regex, minimum message length) with inline error messages that animate in/out by height rather than jumping the layout. The submit button shows a spinner state and a success screen with a checkmark — so it feels like a real product interaction even though no backend is wired up, as scoped ("frontend validation only").

**Footer** — Intentionally minimal: logo, three icon links, one copyright line. No newsletter signup, no sitemap — recruiters don't need it, and an over-built footer undercuts the "premium minimal" aesthetic the rest of the page establishes.

---

## 6. Animation Principles Applied

- Every section uses the same `SectionWrapper` fade+slide-up reveal (`opacity 0→1`, `y: 40→0`), triggered once via `whileInView` — consistent motion language across the whole site instead of a different animation per section.
- Grids (`Skills`, `Projects`) use a parent `staggerChildren` container so cards cascade in rather than appearing simultaneously.
- All hover/tap feedback (`Button`, social icons, nav links) uses spring transitions (`type: "spring", stiffness: 400, damping: 17`) for a natural, non-linear feel rather than default ease curves.
- Nothing animates continuously at a distracting speed — the Hero's floating/orb/particle motion is slow (6–14s loops) so it reads as ambient, not busy.

---

## 7. Customization Notes

- **All text content** (name, bio, projects, skills, experience, social links) lives in `src/data/portfolioData.js` — edit that file to update content without touching any component.
- **Colors / spacing / radii** live in `tailwind.config.js` under `theme.extend` — change a token once, it propagates everywhere.
- **GitHub links** in `portfolioData.js` currently point to placeholder URLs (`github.com/moharm/...`) — update them to your real repo URLs before publishing.
- To add a 4th project, simply add a new object to the `PROJECTS` array in `portfolioData.js` — `Projects.jsx` and `ProjectCard.jsx` require no changes.
