The case tile from the concept board: a square, flat-filled panel with the title inside the top-left, the link inside the bottom-left, and a blue arrow square in the bottom-right — the same motif as the header CTA.

```jsx
<CaseCard title="Разработка продуктовых страниц для яндекса" fill="tint" />
<CaseCard title="Личный кабинет для платёжного сервиса" fill="blue" size="sm" />
<CaseCard title="Разработка сайта для строительной компании" image="assets/photo-landscape.jpg" />
```

`size="md"` fills a four-across grid in the 1280 container; `size="sm"` is the compact 210px row the concept board sets under the hero. Gap is 12px either way. No radius, no shadow — the hairline border darkens to ink on hover and the image scales 1.04 inside the fixed square. When `image` is set the tile lays `--scrim-image` over the whole picture and sets the copy in white — a uniform veil, not a plate behind the text, so nothing reads as a black box.
