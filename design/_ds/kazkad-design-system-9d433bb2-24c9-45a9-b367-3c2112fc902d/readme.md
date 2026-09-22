# Kazkad Design System

Kazkad (казкад) is a web development studio. The team builds websites, web services and interfaces on **Python** (backend) and **React** (frontend).

The studio sells on one promise, and the whole brand is arranged around it:

> Запускаем продукт за 3 недели после подписания договора. Не успели по нашей вине, вернём половину суммы.

Everything in this system exists to make that sentence credible: a stated method, a day-by-day timeline, cases with launch dates, and a form that asks for the task rather than the mood.

## Sources given

| Source | What it contained |
| --- | --- |
| `uploads/photo_2026-07-29_13-06-36.jpg` | The Kazkad logo — a blue eight-point star with two stepped navy squares, and the "Kazkad" wordmark in a neutral grotesque. |
| `uploads/концепт 1 (5).pdf` (copy at `uploads/concept.pdf`) | A single 1440×741 Figma frame: homepage hero + case section. Producer metadata says Figma; fonts are subset without names, so type had to be matched by eye. |

No codebase, no Figma link and no live site were provided. Colour values, type sizes and layout measurements below were read out of the PDF's own drawing operators (text matrices, fill colours, image placements), not guessed from a screenshot. Copy in the UI kit reuses the concept's wording verbatim where it existed; the method and stage sections are new copy written in the concept's voice.

Extracted from the concept, kept in `assets/`: the blurred blue star glow, a mobile-app case screenshot, a landscape photograph. A third embedded image (a 3D Yandex mark) was left out of `assets/` — it is a client's trademark, not Kazkad's.

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import` list only. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css` |
| `components/core/` | Logo, Icon, Button, IconButton, Badge, Tag, Card |
| `components/forms/` | Field, Input, Textarea, Select, Checkbox, Radio, Switch |
| `components/navigation/` | NavBar, Tabs |
| `components/feedback/` | Dialog, Toast, Tooltip |
| `components/marketing/` | SectionHeading, StatCounter, CaseCard, StepItem, GuaranteeCallout, GlowBackdrop |
| `ui_kits/website/` | Click-through recreation of the studio site — see its own README |
| `guidelines/` | 20 specimen cards for colour, type, spacing and brand |
| `assets/` | Logo crops, star glow, case imagery, Lucide icons, webfonts |
| `templates/landing/` | `Landing.dc.html` — the landing page as a copyable template |
| `SKILL.md` | Agent Skill wrapper so this folder works inside Claude Code |

## Components

**Core** — `Logo`, `Icon`, `Button`, `IconButton`, `Badge`, `Tag`, `Card`.
**Forms** — `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`.
**Navigation** — `NavBar`, `Tabs`.
**Feedback** — `Dialog`, `Toast`, `Tooltip`.
**Marketing** — `SectionHeading`, `StatCounter`, `CaseCard`, `StepItem`, `GuaranteeCallout`, `GlowBackdrop`.

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one specimen card.

### Intentional additions

The concept board defined no component library, so the standard primitive set was authored from scratch. These five are additions beyond the standard set, each one a shape the concept actually draws:

- `SectionHeading` — heading plus the concept's inline count ("кейсы 4"). It deliberately has no eyebrow slot.
- `StatCounter` — the "20 / все проекты" block.
- `CaseCard` — the concept's square case tile: flat fill, title inside the top-left, link inside the bottom-left.
- `StepItem` — the "этапы работы" block named in the brief.
- `GuaranteeCallout` — the three-week promise as a flat two-column ink band, one fixed presentation.
- `GlowBackdrop` — wraps the star glow so it is placed consistently rather than re-cropped per page.

`Icon` and `Logo` are wrappers over the copied assets, so nobody re-draws the mark or inlines SVG.

---

## Content fundamentals

**Language.** Russian, always. Latin appears only in the brand name and technology names (Python, React, PostgreSQL).

**Person.** The studio speaks as **мы**; the client is **вы**. Never "я", never a passive dodge. *"Фиксируем объём и дату запуска в договоре."* — the subject is understood to be us, and the verb comes first.

**No labels above headings.** A section opens with its heading. Never stack a small word — `метод`, `этапы работы`, `кейсы` — above a title as an eyebrow; that pattern is banned outright. Where a section genuinely needs a count or a marker, it goes **inline after the heading** (`Что мы уже запустили  кейсы 4`) or in the narrow left column beside it (`04 / принципа`), matching the concept board's asymmetric grid.

**Casing.** This is the brand's most distinctive habit and it comes straight from the concept:

- Navigation, buttons and text links are **lowercase**: `метод`, `этапы`, `кейсы`, `контакты`, `обсудить задачу`, `посмотреть кейс`, `все проекты`, `отправить заявку`.
- Headings and sentences are **sentence case**: `Запускаем продукт за 3 недели`. Never Title Case, never ALL CAPS in prose.
- Small mono labels are set uppercase by CSS (`text-transform`), not typed in caps — so the source copy stays lowercase.

**Sentence shape.** Short declaratives with concrete nouns. Numbers and dates do the persuading: *"дни 8–17"*, *"день 21"*, *"вернём половину суммы"*. Where a claim could be vague, it is made checkable instead: not "быстро запускаем", but "запуск за 3 недели после подписания договора".

**Register.** Plain business Russian. No agency poetry, no "команда профессионалов", no "инновационные решения". The concept's own line sets the tone by naming what the studio is *not* doing: *"…решают задачи бизнеса, а не просто выглядят красиво."* That contrast is allowed once per page, not as a tic.

**Punctuation.** Em dash (—) with spaces for the pause; typographic quotes «…»; non-breaking space before ₽ and after №.

**Emoji.** Never. Not in UI, not in copy, not in the footer. Status is carried by the icon set and the badge tones.

**CTA vocabulary.** Primary: `Обсудить задачу`. Secondary: `посмотреть кейс`, `посмотреть кейсы`, `все проекты`. Form submit: `Отправить заявку`. Never "Узнать больше", never "Оставить заявку сейчас!".

**Numbers.** Digits, not words: `3 недели`, `20`, `50%`. Ranges with an en dash: `дни 3–7`. Money with a space and the ruble sign: `500 000 ₽`.

---

## Visual foundations

**The single idea.** A white page, near-black text, one blue, and one blurred blue star. Nothing else decorates. The concept board is 90% white space; the brand's confidence comes from restraint, and the glow is the one moment of warmth.

**Colour.** Text is `#272727`, never pure black — this is measured from the concept, and it softens the whole page. The accent is `#1763e6` (concept) / `#1964e1` (logo star); treat `--blue-600` as the one true blue. Navy `#1e4a9b` and `#223a5c` come from the stepped squares of the mark and are used for depth: scrims, dialog overlays, shadow tint. Pale blue `#ebf2fa` backs case imagery and icon chips. Greys `#f5f5f5 / #d9d9d9 / #6f6f6f` handle surfaces, borders and secondary text. Status colours are three and only three (green, amber, red) and only appear in badges and form errors. One pairing to avoid: `--text-muted` on `--surface-tint` lands at 4.45:1 — on pale blue, step down to `--ink-600` (6.1:1) for anything at body size. Two background colours per page maximum: white plus either `--surface-subtle` or an ink band.

**Type.** One family does the work: **Manrope** — a geometric grotesque with full Cyrillic. Display sizes are 72 and 48px at weight 800 with −0.03em tracking; headings 36/24/18 at 700/600; body 18/16/14 at 400 with line-height 1.5. **Martian Mono** appears only at 12px, uppercase, +0.08em tracking, for eyebrows, day ranges and counters — it is the "engineering" voice in the layout and must never be used for a sentence. Headings use `text-wrap: balance`, paragraphs `text-wrap: pretty`, and body measure stays under 640px.

**Layout — the 34/66 split.** Every section on the site uses the concept board's asymmetric grid: a narrow left column at **34%** holding a marker, a small label or a sticky heading, and the content in the remaining **66%**. The hero takes it furthest — a 14px descriptor at far left, the headline occupying the right two thirds with its middle line indented 56px and set in blue. Container is 1280px inside 40px gutters; section rhythm is 120px vertical. Content is left-aligned; nothing centres. The header is the one fixed element: sticky at 88px, transparent over the hero, then `rgba(255,255,255,.72)` with a 16px backdrop blur once the page scrolls past 24px.

**Backgrounds.** No gradients as fills — ever. The only "gradient" in the system is the star glow PNG and a navy scrim over photography. Sections alternate white and `#f5f5f5`, closed by a light footer sitting under a 1px ink rule. The `.kz-dark` scope exists for ink bands, but the landing page deliberately uses none: at small sizes the logo mark loses its form on dark, and the page reads cleaner ending on white. No repeating patterns, no textures, no noise.

**The glow.** `assets/star-glow.png` — the logo's star, heavily blurred, in `--blue-500`. It is the only soft shape in an otherwise entirely square system. The concept board places it **behind the left edge of the hero headline** (frame coordinates x274–775, y31–546), not in a corner: 460px wide at 55% opacity, top ≈ −40px, left ≈ 17%. Elsewhere it may bleed out of a bottom corner at 38–45%. One per screen, never recoloured, never behind a paragraph it would fight.

**Corners: none.** Every radius token in the system is `0`. The concept board draws only sharp rectangles — a 34×34 nav square, 210×210 case tiles, hairline-ruled rows — and nothing anywhere may be rounded: not buttons, not inputs, not tags, not badges, not the dialog, not media panels. This is the single hardest rule in the system.

**Cards and separation.** Hairlines do the work, not boxes. Most groupings are a `1px #ebebeb` rule with 32px of padding above and below, not a bordered card. Where a real container is needed it is a white panel with a 1px `#ebebeb` border, 28px padding (20 dense, 40 for feature panels), and **no shadow**. Shadows are reserved for things that genuinely float — the dialog — and are navy-tinted (`rgba(34,58,92,…)`) rather than grey. `--shadow-accent` (blue, 24px) is only for a primary button sitting on imagery.

**Borders.** Hairlines are `#ebebeb`; a section-closing rule is `#272727`. A border darkens to `#272727` when its element is hovered or selected. Border width is 1px, 1.5px for the tab indicator.

**Imagery.** Case imagery fills a **square** tile edge to edge with a 1px `#d9d9d9` border and no radius; the title sits inside the top-left and "посмотреть кейс →" inside the bottom-left. Tiles carrying an image lay `--scrim-image` over the whole picture — a uniform ink veil, 74% at the edges and never lighter than 60% through the middle — and set the copy in white. The veil is deliberately heavy: it makes screenshots read as flat graphic panels rather than photographs, and it guarantees at least 4.9:1 on any source image without a visible plate behind the text. Tiles without a screenshot take a flat fill instead — pale blue `#ebf2fa`, solid `#1763e6`, grey `#6f6f6f` or `#f5f5f5` — exactly as the concept board does, four across with a 12px gap. Photography is cool and slightly underexposed — the concept's landscape is dusk, blue-grey shadows, no filter, no grain. Faces and stock-office imagery are avoided entirely; the studio shows work, not people. Media hover scales the image 1.03 inside a fixed frame, never the frame itself.

**Transparency and blur.** Two uses only: the scrolled header (`rgba(255,255,255,.72)` + `blur(16px)`) and the dialog scrim (navy at 44% + `blur(4px)`). Dark-section surfaces use white at 5–12% instead of a second grey. No frosted cards, no glassmorphism.

**Motion.** Fast and unshowy. 140ms for control states, 220ms for surfaces and the header, 420–600ms for section reveals, all on `cubic-bezier(.2,.8,.2,1)`; reveals use `cubic-bezier(.16,1,.3,1)`. Entrances are a 12–16px rise plus fade — never a scale-up, never a bounce, never a spring. Everything collapses to 0ms under `prefers-reduced-motion`.

**Hover states.** Primary button darkens `#1763e6 → #0f4bb8`. Secondary and tag borders darken to ink. Ghost buttons pick up an 8% blue tint and blue text. Text links go `--blue-600 → --blue-700`; on dark, `--blue-300 → white`. Cards lift 2px and deepen their shadow. Arrows in links translate 2px up-right. Opacity is never used as a hover state — only for disabled (0.4).

**Press states.** `scale(0.98)` on the whole control, 80ms. No colour change on press, no inner shadow.

**Focus.** 2px `#1763e6` outline at 2px offset for keyboard focus; form fields instead take a blue border plus a 3px `rgba(23,99,230,.35)` ring. Focus is never removed.

**Icons.** See below.

---

## Iconography

There were **no icons in the supplied sources** — the concept board draws only text, images and an arrow glyph. So the set is a flagged substitution:

**Lucide** (`lucide-static@0.469.0`), copied into `assets/icons/` as 28 individual SVGs. 24×24 viewBox, 2px stroke, round caps, no fills. Lucide was chosen because it is stroke-only and geometrically neutral, which matches the wordmark and the concept's arrow. **If Kazkad has its own icon set, this should be replaced** — it is the least evidenced decision in the system.

Icons are always rendered through the `Icon` component, which masks the SVG file and paints it with `currentColor`, so a glyph inherits the colour of the text beside it. Never inline SVG markup, never use an `<img>` for an icon, never recolour an icon differently from its label.

Sizes: 16px inline with 14px text, 20px inside buttons and fields, 22–24px in chips and callout markers. Icon chips are a 44px square, 8px radius, `--surface-tint` fill with `--blue-600` glyph.

Copied stems: arrow-right, arrow-up-right, arrow-left, check, x, plus, minus, chevron-down, chevron-right, menu, mail, phone, send, clock, zap, shield-check, code, layers, rocket, circle-check, circle-alert, info, star, external-link, file-text, users, trending-up, sparkles.

**Unicode as icons:** only the en dash in ranges and `→` inside body copy where a component would be overkill. **Emoji: never.**

**Logo.** `assets/logo-wordmark.png`, `logo-wordmark-white.png`, `logo-mark.png` — all three are crops of the supplied artwork with the white background knocked out to alpha; the white version inverts luminance for the ink pixels, turns the navy stepped squares near-white (#f2f6fd) and lifts the star to `--blue-300`, so the whole mark clears 7:1 on the ink surface. `logo-mark-white.png` is the same treatment cropped to the mark. The mark was **not** redrawn as SVG, because approximating a real logo is worse than shipping a bitmap. Minimum clear space equals the height of the small navy square. Height 26–28px in navigation, 24px in footers, 34px+ in specimens. Never stretch, rotate, recolour or place the ink wordmark on a dark background.

---

## Type substitution — needs your input

The concept PDF's fonts are subset with their names stripped, so the wordmark's grotesque could not be identified. **Manrope** was substituted as the closest Google Fonts match with full Cyrillic coverage, and **Martian Mono** was chosen for the mono role (nothing in the sources evidences a mono face at all).

If Kazkad has licensed brand fonts, send the files — swapping them is a two-line change in `tokens/fonts.css`.
