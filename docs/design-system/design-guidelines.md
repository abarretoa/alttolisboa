# ALTTO Guidelines — Accessibility & Do's/Don'ts

> See [design.md](design.md) for token values. See [design-components.md](design-components.md) for component specs.

## Accessibility

### Contrast Requirements

| Requirement | Ratio |
|-------------|-------|
| Body text (WCAG 2.2 AA) | ≥ 4.5:1 |
| Large text ≥ 24px / 19px bold | ≥ 3:1 |
| Focus indicator vs adjacent colour | ≥ 3:1 |

Measured pairs:

| Foreground | Background | Ratio |
|------------|-----------|-------|
| `--text-primary` #efe7da | `--background` #110d0a | 15.8:1 |
| `--text-primary` | `--surface` #17120e | 15.2:1 |
| `--text-muted` #a3978a | `--background` | 6.8:1 |
| `--text-muted` | `--surface` | 6.5:1 |
| `--accent` #c9a36b | `--background` | 8.2:1 |
| `--accent` | `--surface` | 7.9:1 |
| `--accent-soft` #e4d2ad | `--background` | 13.0:1 |

| Element | 3:1 against |
|---------|-------------|
| Focus ring (2px `--accent`, offset 4px) | `--background`: 8.2:1 |
| Link underline (active, `--accent`) | `--background` |

Text over photographs is allowed only where the graded photo is darker than about 20% luminance. On phones the hero adds a ground-coloured floor gradient under the headline.

### Touch Targets

- Every link has `min-height: 44px` (text links, rail links, wordmark, Instagram handle).
- Mobile action lists stack vertically (Como chegar / Ligar / Instagram), each 44px tall with no gap smaller than 0.
- The phone number is a large serif link with a 1px underline. The whole number is the target.

### Keyboard Navigation

| Key | Action |
|-----|--------|
| Tab | Skip link ("Saltar para os preços") → wordmark → nav → hero actions → … → footer |
| Shift+Tab | Reverse |
| Enter | Follow link; the skip link jumps to `#precos` |

Focus: `:focus-visible` draws a 2px brass outline with a 4px offset on every interactive element. Nothing is reachable only by hover.

### Assistive Technology

- Landmarks: `header` (hero, containing `nav[aria-label="Principal"]`), `main`, `footer`.
- Headings: one `h1` (the phrase); `h2` per chapter (visually hidden for Rating and Visit, where the content itself is the headline); `h3` for Almoço / Jantar.
- Prices are a `dl` of `dt` (day) and `dd` (price). The meal period is the group's `h3`.
- Rating: the visible "4,7" is followed by hidden text "de 5 estrelas"; the stars SVG is `aria-hidden`.
- Arrows ↗ / → are `aria-hidden`; the link text carries the meaning.
- Alt text describes what is visible and never claims the scene is ALTTO's ("Uramaki com sésamo…", not "O nosso uramaki").
- `lang="pt-PT"` on `html`.

### Motion

`prefers-reduced-motion: reduce` sets all durations to about 0, and `reveal.js` marks every element as shown immediately. Content is visible by default without JS; motion is only added on top.

## Gestures

| Gesture | Use |
|---------|-----|
| Tap | Links only (nav, CTAs, phone, Google, Instagram) |
| Scroll | Vertical page scroll; triggers one-time reveals |
| Double tap / Long press / Swipe / Drag / Pinch | Not used. No carousels, sliders or hijacked scroll |

## Content Design

- Portuguese (pt-PT) only. Short, confident, social. No marketing adjectives.
- Only facts from approved sources: official Instagram, Google Business listing, project brief. See PRODUCT.md.
- Official lines that may be quoted: "Sushi, drinks e boa vibe." · "Mais que um restaurante, uma experiência." · "Bom sushi. Boa companhia. Bons momentos." · "Sushi & gastronomia asiática contemporânea".
- Prices: comma decimal, € before the number (`€17,50`), "Rodízio · por pessoa" stated once.
- Labels: uppercase is only for Archivo labels (nav, CTAs, small data headers). Headlines are sentence case.
- Italic: at most one word per chapter (e.g. "vibe.", "experiência.").
- Links name their action: "Ver preços", "Como chegar", "Ligar", "Instagram", "Ver no Google".
- Never: "Reservar mesa" (no booking system exists), invented dishes, chefs, history, awards, events, delivery, testimonials.
- Photography is the official ALTTO image set only (assets/altto-official/), so no photo disclaimer appears on the page.

## Do's and Don'ts

### Color
- **Do** keep brass for places where light would land: underlines, €, arrows, a label, one price light pool.
- **Don't** fill areas with brass, use it for large text blocks, or add a second accent hue.
- **Do** grade every photograph so its deepest blacks sit just under the ground (~#0c0907), warm, never lifted into a grey veil.
- **Don't** place a cool or pure-black photo on the warm ground; it reads as a box.

### Photography
Grounded in ALTTO's own Instagram (captures of 24 Sep 2026 in `docs/references/images/`): 2–4 pieces on dark slate or dark ceramic, one warm directional light, gold chopsticks, warm pendant lamps, shared tables.

| Target | Rule |
|---|---|
| Blacks | Deep but not crushed; warm (~#0c0907) |
| Shadows | Rich, brown-neutral — never grey |
| Midtones | Clear enough to read rice grain, sesame, fish texture |
| Highlights | Warm, directional, one light pool per frame; soft shoulder, no clipping |
| Saturation | Restrained, not desaturated; orange/salmon held back (never fluorescent) |
| Rice | Warm-neutral white, never yellow |

- **Do** replace a weak source image rather than rescue it with grading.
- **Don't** darken with overlays, opacity or CSS filters; do the work with black point, curve, highlights and saturation.
- **Do** prefer 2–4 pieces, a real table or counter, hands without posed faces, and negative space the headline can use.
- **Don't** use white-studio or catalogue food, giant single-piece macros, cut-outs on pure black, staged smiling groups, neon, or tablecloth fine dining.
- **Do** give every spread one dominant frame and at most two supporting moments.
- **Don't** add stock, remote or placeholder photography; every restaurant image comes from assets/altto-official/.

### Shape
- **Do** keep every corner square.
- **Don't** introduce pills, rounded buttons or rounded images.

### Elevation
- **Do** create depth with light, grain and photography.
- **Don't** use box-shadows, glass, blur panels or cards.

### Interaction
- **Do** use text links with a drawn underline and a 2–3px arrow nudge.
- **Don't** add filled buttons, hover-only content or magnetic or cursor effects.

### Layout
- **Do** give each chapter its own composition, and let frames bleed off an edge where it helps.
- **Don't** repeat "label + centred title + paragraph + 3 cards" or give images equal sizes.
- **Do** tie overlaps to type size (the hero plate edge is computed from `--hero-size`) so they never become tangents.
- **Don't** leave large empty columns with no compositional job.

### Typography
- **Do** set statements in Fraunces at opsz 144 with tight tracking, and data in Archivo.
- **Don't** set body copy in Fraunces italic, use uppercase headlines, or outline text.
- **Do** set equal prices at equal sizes, because size implies value.

### Motion
- **Do** use one orchestrated moment per chapter (the hero settle, the Moment downbeat).
- **Don't** use parallax, scroll hijacking, looping motion, or an identical entrance on every element.

### Components
- **Do** build only the few primitives listed in design-components.md.
- **Don't** import UI kits (shadcn defaults, Magic UI, Aceternity) for visible elements.
