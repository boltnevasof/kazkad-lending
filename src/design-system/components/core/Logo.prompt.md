The Kazkad logo, served from the supplied artwork in assets/. Never redraw or recolour it.

```jsx
<Logo variant="wordmark" height={28} />
<Logo variant="wordmark-white" height={24} />
```

Set `window.KZ_ASSET_BASE = '../../assets/'` per page. The image pins itself with `align-self: flex-start`, so a column flex parent can never stretch it out of ratio. Minimum clear space around the mark equals the height of the small navy square.
