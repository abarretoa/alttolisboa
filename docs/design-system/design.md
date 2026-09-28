# ALTTO Design System — Token Reference

> Always read this file first. For component specs see [design-components.md](design-components.md). For accessibility and do's/don'ts see [design-guidelines.md](design-guidelines.md).

The ALTTO web language is **a dark table under one warm lamp**: warm near-black ground, warm off-white type, and muted brass used only where light would fall. Display type is Fraunces (optical size 144), UI and data type is Archivo (width axis). Spacing uses a 4px base. There is no radius, no elevation and no component chrome. Coverage is a one-page responsive website from 320px to 1920px.

Source of truth: `css/tokens.css`. All values are **provisional for the proposal**; no official brand guide exists yet (see CLAUDE.md, `.claude/skills/altto-art-direction/SKILL.md`).

---

## Colors

### Surface & Neutral

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| background | `--background` | `#110d0a` | The table. Page ground, and the colour that photo blacks are graded to |
| surface | `--surface` | `#17120e` | One step up: the pricing chapter |
| surface-secondary | `--surface-secondary` | `#1f1812` | Deepest lift; reserved |
| text-primary | `--text-primary` | `#efe7da` | Headlines, prices, body |
| text-muted | `--text-muted` | `#a3978a` | Secondary copy, hours labels, footer |
| hairline | `--hairline` | `rgb(239 231 218 / .13)` | Chapter dividers, hours rules |
| hairline-strong | `--hairline-strong` | `rgb(239 231 218 / .26)` | Menu rows, resting link underline |

### Accent — Warm light

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| accent | `--accent` | `#c9a36b` | Muted brass. Link underline (active), arrows, € sign, "DRINKS", label text, focus ring, the price light pool (7.5% alpha) |
| accent-soft | `--accent-soft` | `#e4d2ad` | Champagne. Hover text, italic word in the Experience title |

There is no semantic or status palette. The site has no forms, errors or alerts. If one is ever needed, derive it from the brass family; never add red, blue or green.

---

## Typography

Display: `"Fraunces", "Iowan Old Style", Georgia, serif`, variable axes `opsz 9–144` and `wght 300–500`, with italic.
Body and UI: `"Archivo", "Helvetica Neue", Arial, sans-serif`, variable axes `wdth 62–125` and `wght 300–600`.
Both are loaded from Google Fonts with `display=swap`.

| Style | Token | Size (min → max) | Face / weight | Line height | Tracking |
|-------|-------|------------------|---------------|-------------|----------|
| Display XL (hero) | `--display-xl` | `clamp(3.4rem, 8.4vw, 8rem)`, 54 → 128px | Fraunces 340, opsz 144 | 0.9 | -0.028em |
| Display LG (statements, prices) | `--display-lg` | `clamp(2.6rem, 5.6vw, 5.6rem)`, 42 → 90px | Fraunces 330–340, opsz 144 | 0.95–1.02 | -0.024 to -0.03em |
| Heading LG | `--heading-lg` | `clamp(2.1rem, 3.9vw, 4rem)`, 34 → 64px | Fraunces 340 | 1 | -0.02em |
| Heading MD | `--heading-md` | `clamp(1.45rem, 2.1vw, 2.1rem)`, 23 → 34px | Fraunces 350–400, opsz 48–72 | 1.1–1.3 | 0 |
| Body LG | `--body-lg` | `clamp(1.0625rem, 1.2vw, 1.1875rem)`, 17 → 19px | Archivo 400 | 1.5 | 0 |
| Body | `--body` | 1rem (16px) | Archivo 400 | 1.6 | 0 |
| Label | `--label` | 0.75rem (12px) | Archivo 500, wdth 112, UPPERCASE | 1.2 | 0.16em |
| Micro | `--micro` | 0.6875rem (11px) | Archivo 400–500 | 1.4 | 0.08–0.12em |

Special sizes that belong to a single chapter (not tokens): "Sushi" at `clamp(6rem, 21vw, 22rem)`, "DRINKS" (Archivo wdth 125, weight 300) at `clamp(2.6rem, 7.6vw, 8rem)`, "boa vibe" at `clamp(4.6rem, 15vw, 15.5rem)`, and the rating "4,7" at `clamp(7rem, 17vw, 16rem)`.

Numerals: prices use `lining-nums tabular-nums`; hours use `tabular-nums`.

---

## Shape

| Token | Radius | Components |
|-------|--------|------------|
| `--radius` | 0 | Everything. No rounded corners anywhere |

Photographs have no frame. Free-standing plates (hero, experience, moment) dissolve into the ground through a CSS mask (`--fade-l/r/t/b`) plus feathering baked into the raster.

---

## Elevation

| Level | Shadow | Usage |
|-------|--------|-------|
| 0 | none | Everything |

Depth comes only from light: warm-graded photography, the brass light pool behind prices (`radial-gradient` at 7.5% alpha), and 5% grain on the ground. `text-shadow: 0 1px 10px rgb(17 13 10 / .8)` protects nav text where it crosses a photo; it is not elevation.

---

## Spacing

4px base.

| Token | rem | px |
|-------|-----|----|
| `--s-1` | 0.25 | 4 |
| `--s-2` | 0.5 | 8 |
| `--s-3` | 0.75 | 12 |
| `--s-4` | 1 | 16 |
| `--s-5` | 1.5 | 24 |
| `--s-6` | 2 | 32 |
| `--s-7` | 3 | 48 |
| `--s-8` | 4 | 64 |
| `--s-9` | 6 | 96 |
| `--s-10` | 8 | 128 |
| `--s-11` | 12 | 192 |

Chapter rhythm is deliberately uneven:

| Token | Value | Used for |
|-------|-------|----------|
| `--chapter-quiet` | `clamp(5rem, 10vw, 9.5rem)` | Space before quiet chapters (Experience, Atmosphere) |
| `--chapter-normal` | `clamp(4rem, 7.5vw, 7rem)` | Default chapter padding |
| `--chapter-tight` | `clamp(3rem, 5vw, 4.5rem)` | Where a chapter continues the previous one (Moment, Rating) |

---

## Layout

| Token | Value |
|-------|-------|
| `--page-max` | 1680px (reference; the page runs full-bleed) |
| `--gutter` | `clamp(1.25rem, 5.4vw, 6rem)`, 20px on mobile → 96px on wide desktop |
| `--col-gap` | `clamp(0.75rem, 1.6vw, 1.5rem)` |
| `--measure` | 34rem (body text column) |

Grid: 12 columns inside the gutters. **The grid is a framework, not a cage.** Frames may bleed past the gutter to the viewport edge (`margin-inline: calc(var(--gutter) * -1)`).

| Class | Width | Behaviour |
|-------|-------|-----------|
| Mobile | ≤ 760px | Single column. Chapters are re-art-directed, not stacked (see guidelines) |
| Tablet portrait | 761–860px | Hero uses the phone composition; other chapters use the 12-column grid |
| Tablet landscape / small desktop | 861–1180px | Shallower hero staircase; nav drops "Experiência" |
| Desktop | > 1180px | Full composition; baseline 1440px |

---

## Motion

| Token | Value | Use |
|-------|-------|-----|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | All motion |
| `--dur-hover` | 280ms | Colour and arrow nudges |
| `--dur-reveal` | 900ms | Text reveals, underline draw |
| `--dur-image` | 1400ms | Image settle (scale 1.045 → 1) |
| `--rise` | 24px | Reveal travel |

Transitions:
- **Hero:** a single settle on load. The lines stagger by 70ms and the plate fades up from scale 1.04.
- **Chapters:** reveal once via IntersectionObserver (`js/reveal.js`). Content is visible without JS.
- **Moment chapter:** all three words land together on one cue.
- **Reduced motion:** `prefers-reduced-motion: reduce` disables all of it.

---

## Icons

None. Arrows are typographic (→ internal, ↗ external) in brass. The only drawn mark is the five-star rating SVG (`#star` path, clipped fill at 94% = 4,7).

---

## Design Tokens

Naming: flat CSS custom properties by role (`--background`, `--text-muted`, `--display-lg`, `--s-7`, `--chapter-quiet`). Component-local custom properties are lowercase and scoped to their component (`--hero-size`, `--l2`, `--l3`, `--plate-left`, `--fade-l`).
