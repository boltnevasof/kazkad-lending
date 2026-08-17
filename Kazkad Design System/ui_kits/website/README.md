# UI kit — сайт Kazkad

A click-through recreation of the studio's marketing site, built entirely from this design system's components.

Open `index.html`. Everything is fake but interactive: section nav scrolls and tracks the active link, the header frosts after 24px of scroll, case tabs filter the horizontally scrolling tile row, and every CTA opens Telegram. There is no enquiry form — the studio takes briefs in Telegram, so the contact section is one large link.

## Sections

| File | Section | Blocks from the brief |
| --- | --- | --- |
| `Hero.jsx` | Главная | staggered three-line headline, guarantee line, CTA, three 210px case tiles |
| `Method.jsx` | Суть концепта | conveyor graphic + two short paragraphs |
| `Stages.jsx` | Этапы работы | 21-day ruler coloured by phase, three stage columns |
| `Cases.jsx` | Кейсы | tabs + right-bleeding horizontal scroller of square tiles |
| `Contact.jsx` | Контакты | statement + one large Telegram link, mail and phone below |
| `Footer.jsx` | — | dark footer via `.kz-dark` |
| `Site.jsx` | — | scroll state, active-section tracking, Telegram handoff |

## Notes

- Components come from the bundle as `window.KZ` (aliased from the generated namespace) — nothing is reimplemented here.
- Case imagery is the screenshot and photograph extracted from the supplied concept PDF. Real case shots should replace them.
- Contact details are placeholders, including the Telegram handle: `TG` in `Contact.jsx` and `TG_URL` in `Site.jsx` both point at `https://t.me/kazkad`. Replace with the real one.
