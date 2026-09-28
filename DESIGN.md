---
name: ALTTO Lisboa
description: "Sushi, drinks e boa vibe." A dark table seen under one warm lamp.
colors:
  table-black: "#110d0a"
  lamp-surface: "#17120e"
  warm-paper: "#efe7da"
  smoke: "#a3978a"
  brass: "#c9a36b"
  champagne: "#e4d2ad"
  hairline: "rgb(239 231 218 / 0.13)"
  hairline-strong: "rgb(239 231 218 / 0.26)"
typography:
  display:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(3.4rem, 8.4vw, 8rem)"
    fontWeight: 340
    lineHeight: 0.9
    letterSpacing: "-0.028em"
    fontVariation: "\"opsz\" 144"
  headline:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.6rem, 5.6vw, 5.6rem)"
    fontWeight: 330
    lineHeight: 1.02
    letterSpacing: "-0.028em"
    fontVariation: "\"opsz\" 144"
  title:
    fontFamily: "Fraunces, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.45rem, 2.1vw, 2.1rem)"
    fontWeight: 350
    lineHeight: 1.2
    fontVariation: "\"opsz\" 48"
  body-lg:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1.2vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.5
    fontVariation: "\"wdth\" 100"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "\"wdth\" 100"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.16em"
    fontVariation: "\"wdth\" 112"
  micro:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.08em"
rounded:
  none: "0"
spacing:
  s-1: "4px"
  s-2: "8px"
  s-3: "12px"
  s-4: "16px"
  s-5: "24px"
  s-6: "32px"
  s-7: "48px"
  s-8: "64px"
  s-9: "96px"
  s-10: "128px"
  s-11: "192px"
  gutter: "clamp(1.25rem, 5.4vw, 6rem)"
  col-gap: "clamp(0.75rem, 1.6vw, 1.5rem)"
  chapter-quiet: "clamp(5rem, 10vw, 9.5rem)"
  chapter-normal: "clamp(4rem, 7.5vw, 7rem)"
  chapter-tight: "clamp(3rem, 5vw, 4.5rem)"
components:
  text-link:
    textColor: "{colors.warm-paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "44px"
  text-link-hover:
    textColor: "{colors.champagne}"
  text-link-accent:
    textColor: "{colors.warm-paper}"
    typography: "{typography.label}"
    height: "44px"
  price:
    textColor: "{colors.warm-paper}"
    typography: "{typography.headline}"
  phone-link:
    textColor: "{colors.warm-paper}"
    typography: "{typography.title}"
    padding: "8px 0"
  phone-link-hover:
    textColor: "{colors.champagne}"
  rail-link:
    textColor: "{colors.warm-paper}"
    typography: "{typography.label}"
    height: "44px"
  lamp-chapter:
    backgroundColor: "{colors.lamp-surface}"
    textColor: "{colors.warm-paper}"
    padding: "clamp(4rem, 7.5vw, 7rem) clamp(1.25rem, 5.4vw, 6rem)"
---

# Design System: ALTTO Lisboa

<!-- Recorded from the shipped build (index.html + css/*.css), 2026-09-23.
     All colour values are provisional: no official ALTTO brand guide exists.
     Photography: the official ALTTO image set in assets/altto-official/ (sources) and
     assets/altto-official/web/ (WebP derivatives), since 2026-09-28.
     Supplementary detail: docs/design-system/design.md, design-guidelines.md, design-components.md. -->

## Overview

**Creative North Star: "The Table Under One Lamp"**

The page is a dark table seen under one warm lamp. Every chapter is lit, not boxed: type and photographs sit directly on a grained, warm near-black ground, and the only colour that behaves like colour is brass, placed where light would land (a price's euro sign, an underline, a star, a field label). Nothing is contained in a card, a pill or a panel; the one tonal lift in the whole page is the pricing chapter, and it is lit by a soft radial pool rather than framed.

Composition is editorial, not modular. A 12-column grid is used to break alignment on purpose: photographs are placed at unequal sizes and proportions, bleed off the page edges, and dissolve into the ground through masked edges. Display type is large, set in Fraunces at its largest optical size, and does the work other sites give to icons and boxes. Chapter padding is deliberately uneven (quiet, normal, tight) so the scroll has pace rather than a metronome.

Motion is a single settle: things rise 24px and fade in on one easing curve, the hero phrase and plate arrive together, and the Sushi / Drinks / boa vibe spread resolves on one shared cue. Everything is visible without JavaScript and without motion.

Colour values are provisional. They were chosen for the proposal in the absence of an official brand guide and should be re-checked against official ALTTO material when it arrives. All photography comes from the official ALTTO image set (assets/altto-official/) and is shown as supplied: its own warm blacks and gold light already sit on the table colour, so it gets no CSS filter, overlay or re-grade. Frames that stand free dissolve through masked edges; the Atmosphere frames stay clean rectangles.

**Key Characteristics:**
- Warm, grained near-black ground; warm off-white type; brass only where light falls.
- Fraunces (opsz 144, light weights) for everything spoken; Archivo on its width axis for everything read as data.
- Zero radius, zero box shadows, no containers; hairlines are the only rules.
- Unequal, bleeding, edge-masked photographs on a 12-column grid.
- One easing curve, one rise distance, one cue per moment; reduced motion honoured.

## Colors

A warm monochrome of lamp-lit browns with a single brass accent; the provisional palette reads as one light source, not a scheme.

### Primary
- **Lamp Brass** (#c9a36b): the light itself. The euro sign in prices, the drawn underline on primary text links, the arrow glyph in links, the filled stars, field labels in the visit chapter, the perk line in pricing, the "DRINKS" word in the moment spread, the focus ring and the text selection. Never a fill for a large area.
- **Champagne** (#e4d2ad): brass at its brightest. The hover and focus colour for every link, and the one italic word of the experience heading.

### Neutral
- **Table Black** (#110d0a): the ground of the whole page, with a 5%-alpha warm fractal-noise grain baked into the body background so the dark never reads as flat UI black. Also the `theme-color`.
- **Lamp Surface** (#17120e): one step up. Used only for the pricing chapter, under a radial brass pool (`rgb(201 163 107 / 0.075)` fading to transparent at 72%).
- **Warm Paper** (#efe7da): primary text, display type, prices.
- **Smoke** (#a3978a): secondary text: sublines, notes, hours labels, the city line, footer text. Measured 6.8:1 on Table Black and 6.5:1 on Lamp Surface.
- **Hairline** (Warm Paper at 13%): chapter borders, footer rule, hours-row rules.
- **Hairline Strong** (Warm Paper at 26%): price-row rules, the resting underline of text links, the phone underline, the empty star track.

### Named Rules
**The Where-Light-Lands Rule.** Brass marks a point of light (a currency sign, a line, a label, a star, a focus ring), never a surface, a button fill or a background block. If brass covers more than a few words or a hairline, it is wrong.

**The One Lift Rule.** The page has one tonal surface above the ground (Lamp Surface, the pricing chapter). Other chapters sit directly on Table Black and are separated by space or a hairline, not by alternating bands.

## Typography

**Display Font:** Fraunces (with Iowan Old Style, Georgia, serif)
**Body Font:** Archivo (with Helvetica Neue, Arial, sans-serif)

**Character:** A soft, high-contrast optical-size serif at light weights (300 to 350) carries every statement, price and number; an expanded grotesque in small tracked caps carries everything the visitor scans as data. The contrast is voice versus information.

### Hierarchy
- **Display** (340, clamp 3.4rem to 8rem, line-height 0.9, -0.028em, opsz 144): the hero phrase only, set in stepped lines that move right like a staircase. Oversized spread words (Sushi at up to 22rem, boa vibe at up to 15.5rem, the 4,7 rating at up to 16rem, weights 300 to 330, tracking -0.04 to -0.05em, line-height 0.78 to 0.8) are one-off scale moments of this same role.
- **Headline** (330 to 340, clamp 2.6rem to 5.6rem, line-height 1.02, -0.02 to -0.03em, opsz 144): chapter statements (experience, atmosphere), the "Preços" title, the street address, and prices. Headings are capped at 11 to 14ch and balanced.
- **Title** (350 to 400, clamp 1.45rem to 2.1rem, line-height 1.1 to 1.3, opsz 48 to 72): the lede line, meal-period headings in pricing, the city line, the phone number.
- **Body** (400, 1rem / body-lg clamp 1.0625rem to 1.1875rem, line-height 1.6 / 1.5, wdth 100): short supporting sentences in Smoke, kept to about 22rem wide. Price-row descriptions and hours rows use body-lg.
- **Label** (500, 0.75rem, 0.16em tracking, uppercase, wdth 112): navigation, text links, pricing qualifier and perk, visit field labels, hero hours, footer. Times use tabular numerals.
- **Micro** (0.6875rem, 0.08em tracking, sentence case): reserved for small factual notes; not currently used on the page.

### Named Rules
**The One Italic Rule.** Italic appears on at most one word per chapter (hero "vibe.", experience "pouco.", the spread's "vibe"), at a light weight (300). It is an inflection, never a style for whole lines.

**The Voice and Data Rule.** Anything spoken is Fraunces; anything scanned (times, labels, links, navigation) is Archivo caps on the width axis. Prices are spoken: they are Fraunces, the biggest type in their chapter, with lining tabular numerals and a brass euro sign at 0.42em raised to the cap line.

**The Typeset Name Rule.** The name ALTTO is set typographically (Archivo, wdth 125, weight 500, 0.34em tracking) because the official logo file is not in the project. This is a stand-in, not a logo; do not redraw or imitate the official mark.

## Layout

A 12-column grid (`column-gap` clamp 0.75rem to 1.5rem) inside a gutter that grows from 20px on phones to 96px on wide desktops. Content does not centre in a max-width box; chapters span the viewport and their contents are placed on deliberately offset column spans (the experience plate on columns 2 to 5, its text on 7 to 12; the pricing title on 1 to 4, the menu on 6 to 12; the rating number ending on column 8, its source starting on 9).

Photographs break the grid on purpose: they bleed off the left or right page edge by a negative gutter margin, hang from the top edge of the viewport, sit at five sizes and three proportions (3:2, 4:5, 3:4, 2:3), and never share a baseline with their neighbour unless intended. Type may overlap a photograph: the hero plate's left edge is computed from the headline size so the last word always crosses onto it.

Vertical rhythm is uneven by design: three chapter paddings (quiet clamp 5rem to 9.5rem, normal 4rem to 7rem, tight 3rem to 4.5rem) on a 4px spacing scale. Breakpoints at 1180px (shallower hero staircase), 1080px (tablet column shifts), 860px (hero re-stacks with the plate first and the phrase climbing onto its lower edge) and 760px (single column; the atmosphere spread becomes a vertical sequence of differing widths, still bleeding to the edges). All interactive targets hold a 44px minimum height.

### Named Rules
**The Two-Language Rule.** English is art-directed, not poured into the Portuguese coordinates: the hero's last step is shallower in English (--l3 3.6 / 2.1 at ≤1180px) and --boa-vibe grows to match, so "vibes." lands on the plate exactly where "vibe." does and the plate never moves. The PT / EN control is nav label type: the active language at full Warm Paper, the inactive one at 50%, 200ms opacity, 44px tap height. Below 560px Instagram leaves the top rail to make room (it stays in the visit links and the footer).

**The Unequal Frames Rule.** No two photographs in a spread share size and proportion, and at least one frame per spread touches a page edge. A spread has one lead frame and at most two supporting ones (the atmosphere spread, an editorial split on the 12-column grid with no bleeds on desktop: brass ATMOSFERA label + two-line heading on columns 1 to 8, 48px above the photographs; the sushi platter 4:3 on 1 to 8; the salmon on 9 to 12, sharing the platter's top and bottom edges; the salmon tacos 4:3 on 3 to 8, ending on the platter's right edge; @altto.lisboa closing on the grid's right edge at the tacos' bottom line; 64 to 128px between moments. Phones: platter full-bleed 6:5, salmon 4:5 at 72% right, tacos 90% bleeding left). Equal image grids are the category default this system refuses.

## Elevation & Depth

The system is flat: no `box-shadow` anywhere. Depth is conveyed by light, not lift: the warm grain in the ground, one radial brass pool on the pricing chapter, photographs whose edges dissolve into the table through linear-gradient masks (roughly 18 to 24% feather on each open edge), and type overlapping photographs. On narrow screens the hero plate gains a bottom gradient into Table Black so the phrase has a dark floor where it crosses the image. The only shadow is a soft legibility halo on the top navigation links over the hero photograph (`text-shadow: 0 1px 10px` Table Black at 80%), which is functional, not elevation.

### Named Rules
**The Lit, Not Boxed Rule.** A chapter or image is separated from the ground by light, masking or space, never by a shadow, a border box or a card.

**The Dissolving Plate Rule.** Free-standing photographs are masked into the ground on every edge that does not bleed off the page. The grade lives in the raster (deep warm blacks just under the table colour, never lifted into a grey veil); there is no CSS filter or overlay.

## Shapes

Square everywhere (radius 0). There are no rounded corners, pills, chips or circular avatars. Lines are 1px hairlines in Warm Paper at 13% or 26%, used horizontally only: chapter borders, price rows, hours rows, and link underlines. The only non-rectangular form is the five-star rating, drawn as an inline SVG clip with a Hairline Strong track and a brass fill cut to the exact score.

## Components

### Text Links (the only buttons)
Quiet, typographic and lit on contact.
- **Shape:** no box, no fill, radius 0; 44px minimum height.
- **Default:** Label type in Warm Paper, a resting Hairline Strong underline 9px above the bottom, and a trailing arrow glyph in brass: → for in-page targets, ↗ for links that leave the page.
- **Accent variant:** the brass underline is already drawn at rest. Used for the one primary action in a group ("Ver preços" in the hero, "Como chegar" in the visit chapter).
- **Hover / Focus:** text turns Champagne, a brass line draws left to right across the underline (900ms, ease-out `cubic-bezier(0.16, 1, 0.3, 1)`), the arrow nudges 3px (diagonally for external links). Focus-visible uses a 2px brass outline at 4px offset.

### Navigation (top rail)
- Wordmark left, three Label links plus Instagram ↗ right, all 44px targets, over the hero photograph with the soft legibility halo. Hover to Champagne. At 1180px the Experiência link drops; at 760px "Localização" shortens to "Local" and labels go to Micro size at wdth 100.

### Price Rows (signature)
Typeset like the card on the table, not a plan comparison.
- Grouped by meal (Fraunces title with the hours in tabular Label, Smoke) then by day. Each row: a Hairline Strong top rule, the day description in body-lg left, the price in Headline right with a brass raised euro sign; all prices share one right edge. A perk line sits under its description in brass Label caps. Set on Lamp Surface under the brass pool.

### Hours List
- Label heading in brass, then definition rows (meal in Smoke, time in tabular Warm Paper) separated by Hairline bottom rules.

### Phone Link
- Title-size Fraunces number with lining numerals and a Hairline Strong underline; hover turns the text Champagne and the underline brass.

### Rating Figure (signature)
- One number in oversized light Fraunces as the anchor (columns 2 to 5), SVG stars and source beside it, a hairline 5→1 distribution (1px track, 2px brass fill) and the Google link beneath. Columns 7 to 12 hold three verbatim Google excerpts as editorial rows divided only by 1px hairlines: small muted-brass SVG stars (72px, 72% opacity), the quote in Fraunces (the first larger), then the reviewer name in Archivo 13px and "Google Reviews" (plus language) in 12px Smoke. Serif body was tested against Archivo body and kept: the sans version read as a SaaS testimonial. Section padding clamp 5rem to 10.5rem; the visit chapter's top hairline is the transition to the address. No cards, no avatars, no carousel.

### Word Spread (signature)
- The brand phrase broken into three voices at three scales: a giant Fraunces noun, an expanded Archivo caps word in brass, and a Fraunces phrase with one italic word, set over a masked photograph. The three words resolve together on a single cue.

### Motion
- One curve (`cubic-bezier(0.16, 1, 0.3, 1)`), three durations (280ms hover, 900ms reveal, 1400ms image), one rise (24px). Scroll reveals fade and rise once; images settle from 1.045 scale. With `prefers-reduced-motion: reduce` or without JavaScript, everything is shown at rest.

## Do's and Don'ts

### Do:
- **Do** keep brass to points of light: a euro sign, a drawn underline, a star, a label, a focus ring (The Where-Light-Lands Rule).
- **Do** set statements, prices and big numbers in Fraunces at opsz 144 and light weights (300 to 350), and all data in Archivo Label caps (0.75rem, 500, 0.16em, wdth 112).
- **Do** use at most one italic word per chapter.
- **Do** place photographs at unequal sizes and proportions, let at least one bleed off an edge, and mask free-standing plates into the ground.
- **Do** separate chapters with space, one of the three chapter paddings, or a 13% hairline.
- **Do** keep every interactive target at least 44px high and give it a 2px brass focus outline.
- **Do** use only the official ALTTO image set (assets/altto-official/) for restaurant imagery; never stock or remote images.

### Don't:
- **Don't** add rounded corners, pills, cards, bordered boxes or box shadows.
- **Don't** fill buttons or backgrounds with brass; there are no filled buttons in this system.
- **Don't** introduce a second tonal surface or alternating section bands (The One Lift Rule).
- **Don't** lay photographs in equal-size grids or carousels.
- **Don't** stagger many small elements as decorative confetti; a moment resolves on one cue.
- **Don't** redraw or imitate the official ALTTO logo; set the name typographically until the file is supplied.
- **Don't** treat the current hex values or the stock photographs as final; both are provisional.
