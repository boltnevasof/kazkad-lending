// Шторка перелистывания: четыре прямоугольника поднимаются снизу, накрывают экран
// и уходят вверх. Тайминги совпадают с константами в App.jsx.

const PANELS = [0, 1, 2, 3];

export default function SlideCurtain({ phase }) {
  return (
    <div className={`kz-curtain${phase === 'idle' ? '' : ` is-${phase}`}`} aria-hidden="true">
      {PANELS.map((i) => (
        <span className="kz-curtain__panel" key={i} style={{ '--kz-i': i, '--kz-last': PANELS.length - 1 - i }} />
      ))}
    </div>
  );
}
