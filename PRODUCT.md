# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML + CSS, no build step, served locally by `server.js` (port 5173). No framework, no UI or animation libraries — CSS solves it or it is not built.

## Users

- **Primary:** people in Lisbon (residents, office workers near Saldanha/Arroios, visitors) deciding where to eat sushi today — usually on a phone, often reached from Instagram or Google Maps. Their job: understand in seconds what ALTTO is, what it costs, when it's open, and how to get there or call.
- **Secondary (proposal stage):** the ALTTO owners, who will judge whether this "already feels like us".

## Product Purpose

A one-page website for ALTTO Lisboa, an existing sushi restaurant. It extends the existing brand digitally (not a rebrand). Success = a visitor knows the price for their meal period, the hours, the address, and calls or navigates there; the owners recognise their restaurant in it.

Current status: **commercial design proposal**. Official high-res photography has not been supplied yet.

## Positioning

Sushi rodízio (all-you-can-eat, price per person) with a social, contemporary tone: "Sushi, drinks e boa vibe." Fixed, simple pricing per meal period; free drink refills at weekday lunch.

## Capabilities and Constraints

- Verified facts (approved sources: official Instagram @altto.lisboa, Google Business listing, project brief):
  - Address: Rua da Escola de Medicina Veterinária 3, 1000-127 Lisboa, Portugal
  - Phone: +351 912 398 756 — the official Instagram bio lists this number for reservations ("Reservas: 912 398 756")
  - Open every day. Lunch 12:00–15:00, dinner 19:00–23:00.
  - Rodízio, per person (verified 24 Sep 2026 on ALTTO's own Instagram: posts of 25 May and 6 Jul 2026 say "Sushi Rodízio" / "Rodízio de sushi"; the official price table of 15 Jun 2026 prints "/ PESSOA" under each price and "O rodízio é pessoal"; capture in docs/references/images/instagram-precos-2026-06-15.png): weekday lunch (Mon–Fri) €17,50 with free drink refills; dinner (Mon–Sun) €21,95; weekend & holiday lunch €21,95.
  - Google: 4,7 ★ from 197 reviews; distribution 169 / 14 / 6 / 4 / 4 (5→1 ★) (seen on the listing 24 Sep 2026 — update before launch).
- No online booking system exists in the project. Never build one; "Reservar mesa" is not a CTA. Calling is.
- Do not invent dishes, ingredients, chefs, history, awards, events, delivery, takeaway, promotions, testimonials.
- Portuguese first (pt-PT), English second. A typographic PT / EN control sits at the end of the nav (no flags, no dropdown); the choice is saved in localStorage as `altto-language` and restored on every visit. All copy lives in one dictionary, `js/i18n.js`. Never translated: prices (€17,50 / €21,95), hours, the address, "Lisboa", the phone number, the rating and review count. Google review excerpts stay verbatim in their original language in both modes; only their language label changes.

## Brand Commitments

- Name/wordmark: **ALTTO** (all caps; the official logo draws the second T with crossed chopsticks — the logo file is not in the project, so the site sets the name typographically and must not imitate or redraw the mark).
- Core phrase: "Sushi, drinks e boa vibe."
- Official Instagram lines usable as copy: "Bom sushi. Boa companhia. Bons momentos." ("Mais que um restaurante, uma experiência." is also official but was retired from the site as too generic; the experience headline is now "Há noites que pedem mais um pouco." and the "Bom sushi…" line was removed there as redundant)
- Tone: short, confident, natural, social; sophisticated without luxury or corporate language.
- Instagram visual evidence (captures 24 Sep 2026 in docs/references/images/): small groups of 2–4 pieces — gunkan, hosomaki, uramaki, nigiri — on dark slate or dark ceramic under one warm directional light; gold chopsticks; warm pendant lamps in the room; social tables; soft drinks.

## Evidence on Hand

- Photography: the official ALTTO image set in `assets/altto-official/` (source PNGs) with WebP derivatives in `assets/altto-official/web/`. `altto-gunkan.png` is kept for future use (menu, dish feature) and is not on the landing page. No logo files in the project yet.
- Only verbatim excerpts of real public Google reviews of the listing may be quoted, in their original language, with first name + surname initial, star rating and source. Currently (read 24 Sep 2026, chosen to cover food / atmosphere / service): André P. (5★, pt, food), Laura M. (5★, es, atmosphere), Xanyar K. (4★, en, service). Logged-out Google Maps shows only 5 reviews; these are the only positive ones that can be quoted without changing meaning. Never paraphrase, translate as a quote, or invent.

## Product Principles

1. Price, hours, address and phone must be findable within one scroll on mobile.
2. Never claim what the approved sources don't say.
3. Temporary imagery is never presented as ALTTO's own.
4. The page should feel like ALTTO, not like "a sushi restaurant".

## Accessibility & Inclusion

WCAG 2.2 AA: contrast, keyboard access, visible focus, reduced-motion support, meaningful alt text.
