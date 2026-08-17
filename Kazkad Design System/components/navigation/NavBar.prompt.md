Site header for every page. Copied from the concept: logo hard left, lowercase links set left of centre, and the CTA split into a light rectangle plus a 34×34 blue arrow square.

```jsx
<NavBar
  links={[{href:'#method',label:'метод'},{href:'#cases',label:'кейсы'}]}
  activeHref="#method" cta="обсудить задачу" scrolled
/>
```

CTA labels here are lowercase, like the links. `dark` swaps to the white wordmark for use on ink bands.
