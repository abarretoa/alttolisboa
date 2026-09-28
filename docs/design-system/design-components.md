# ALTTO Components

> Full specifications for all 9 components (intentionally few). Grouped by workflow.
> For tokens see [design.md](design.md). For rules & accessibility see [design-guidelines.md](design-guidelines.md).

The site is composition-led: most chapters are one-off editorial layouts and are **not** components (see "Chapters" at the end). Only genuinely repeated primitives are specified here.

## Actions

### Text link (`.link`)

**Types:** Resting (hairline underline), Accent (`.link--accent`, brass underline always drawn). Label type, uppercase.
Height 44px minimum. There is no filled button anywhere in the system.

| Property | Value |
|---|---|
| Type | Archivo 500, 12px, wdth 112, tracking 0.16em, uppercase |
| Colour | `--text-primary` → hover `--accent-soft` |
| Underline | 1px `--hairline-strong` at rest; brass line draws left→right on hover (`scaleX`, 900ms `--ease-out`) |
| Arrow | → internal (moves 3px right), ↗ external (moves 2px up-right), `--accent`, `aria-hidden` |
| States | Rest, Hover, Focus-visible (2px brass outline, 4px offset) |
| Touch target | ≥ 44px tall |

**Do:** use a verb or place ("Ver preços", "Como chegar", "Ligar").
**Don't:** use "Reservar mesa", or put more than two text links side by side outside the Visit list.

---

### Phone link (`.visit-phone`)

Fraunces heading-md, lining numerals, no wrapping, with a 1px `--hairline-strong` underline that turns brass on hover. Links to `tel:+351912398756`. It sits under the label "Reservas por telefone", which comes from the official Instagram bio.

---

## Navigation

### Rail (`.rail`)

Wordmark on the left; up to four label links on the right. It is not sticky, not boxed and not a pill.

| Property | Value |
|---|---|
| Wordmark | "ALTTO", Archivo 500, wdth 125, tracking 0.34em (set typographically; the official logo file is not yet supplied, so do not imitate it) |
| Links | Experiência · Preços · Localização · Instagram ↗ |
| ≤ 1180px | Drops "Experiência" |
| ≤ 760px | "Localização" shortens to "Local" (the `.rail-long` span is hidden); 11px, wdth 100 |
| Over photos | `text-shadow: 0 1px 10px rgb(17 13 10 / .8)` |

---

### Skip link (`.skip-link`)

Hidden above the viewport; on focus it appears at top-left with inverted colours. The target is `#precos`.

---

## Containment

### Plate (`.hero-plate`, `.experience-plate`, `.moment-plate`)

A free-standing photograph that dissolves into the ground. It has no border, radius or shadow.

| Property | Value |
|---|---|
| Image | `object-fit: cover`, graded raster (blacks = #110d0a) |
| Edge | CSS mask on the frame: `--fade-l` / `--fade-r` / `--fade-t` / `--fade-b` (defaults 18 / 12 / 12 / 16%). The hero sets top 0% because it bleeds off the top |
| Aspect | Set per slot (`aspect-ratio`). Any photo can be swapped in without layout change |
| Motion | Reveal: scale 1.045 → 1 over 1400ms |

**Do:** give every slot an explicit aspect ratio so official photos drop in without edits.
**Don't:** add frames or captions that make a plate look like a card.

---

### Shot (`.shot`)

A photograph inside the Atmosphere spread. Hard-edged (not masked) with a baked vignette. Five slots, each with its own size and aspect: 3/2 bleeding left, 3/4, 4/5, 2/3, and 3/4 bleeding right.

---

### Hairline (`border-top: 1px solid var(--hairline[-strong])`)

The only divider. It separates chapters (`--hairline`) and menu rows (`--hairline-strong`). No other borders exist.

---

## Data Display

### Price row (`.menu-row`)

A `dl` row made of a `dt` (day, Archivo body-lg, with an optional brass perk label underneath) and a `dd.price` (Fraunces display-lg, lining tabular numerals, brass "€" at 0.42em raised 0.95em). Rows are separated by a strong hairline. **Equal prices use equal sizes.** Groups are headed by the meal period (`h3`, Fraunces heading-md upright) with the hours as a label on the right.

---

### Rating (`.rating`)

"4,7" in Fraunces at `clamp(7rem, 17vw, 16rem)`, followed by: a five-star SVG (track `--hairline-strong`, fill `--accent` clipped to 94%), "Google · 196 avaliações" in muted body text, and a "Ver no Google ↗" link. The number and review count come from the official Google listing (23 Sep 2026) and must be updated before launch. **Never** add review quotes.

---

### Hours list (`.visit-hours dl`)

Two rows of `dt` (muted) and `dd` (tabular numerals), laid out as a flex row with `space-between` and a hairline under each row.

---

## Feedback

None. The site has no forms, loading states or errors. If a booking or contact form is ever added, it must be designed in this language: square corners, hairline inputs, label type, brass focus.

---

## Chapters (compositions, not components)

These are documented so that they are not turned into components:

| Chapter | Composition |
|---|---|
| Hero | Phrase as a staircase (indents `--l2`, `--l3` in em); a portrait plate hung from the top, its left edge computed from `--hero-size` so "vibe." crosses it; hours at bottom-right. On phones the plate goes on top and the phrase climbs onto it |
| Experience | Portrait plate opens the chapter on the left; statement one step lower and closer, ending inside the plate's height |
| Moment | "Sushi" (serif, huge) / "DRINKS" (expanded brass caps across a drink photo) / "boa vibe" (serif, italic accent), landing on one cue |
| Pricing | "Preços" top-left at display-lg; menu on the right; one warm light pool |
| Atmosphere | Three-frame spread: dominant sushi platter, compact salmon, offset salmon tacos |
| Rating | One number off-centre with its source beside it |
| Visit | Address as the headline; hours, phone and actions set small |
| Footer | One line plus the proposal note |
