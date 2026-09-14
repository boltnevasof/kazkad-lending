// Конвейер в разделе «метод», вид сбоку.
//
// Анатомия взята с обычных схем конвейеров: полотно с торцевыми валами, под
// ним опоры и пол, сверху едут квадраты. Квадраты одинаковые и цвет не меняют —
// в этом и мысль раздела: на каждом проекте одни и те же этапы, роли
// и инструменты, лента идёт ровно.
//
// Только прямоугольники: скруглений в системе нет нигде, включая схемы,
// поэтому валы и опоры — бруски, а не круги.

const RIDERS = 6;
const TREADS = 30;
const LEGS = 4;

export default function Conveyor() {
  return (
    <figure className="kz-conveyor" data-reveal="">
      <div className="kz-conveyor__machine">
        {/* Дорожка. Каждый квадрат едет в своей полосе во всю ширину ленты:
            сдвиг на 100% — это длина ленты, а не ширина квадрата. */}
        <div className="kz-conveyor__lane" aria-hidden="true">
          {Array.from({ length: RIDERS }, (_, i) => (
            <span className="kz-conveyor__rider" key={i} style={{ '--kz-i': i }}>
              <span className="kz-conveyor__box" />
            </span>
          ))}
        </div>

        <div className="kz-conveyor__belt" aria-hidden="true">
          <div className="kz-conveyor__treads">
            {Array.from({ length: TREADS }, (_, i) => (
              <span key={i} />
            ))}
          </div>
        </div>

        <div className="kz-conveyor__legs" aria-hidden="true">
          {Array.from({ length: LEGS }, (_, i) => (
            <span key={i} style={{ '--kz-i': i }} />
          ))}
        </div>

        <span className="kz-conveyor__floor" aria-hidden="true" />
      </div>

      <figcaption className="kz-conveyor__caption">
        <span className="kz-eyebrow">вход</span>{' '}
        <span className="kz-eyebrow">запуск</span>
      </figcaption>
    </figure>
  );
}
