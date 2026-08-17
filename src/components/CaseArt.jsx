// Тематическая графика кейса вместо скриншота.
//
// Скриншот чужого интерфейса в маленькой плитке нечитаем, а ссылка на живой
// сайт и так стоит на странице кейса. Поэтому рисуем схему предметной области
// из тех же прямоугольников, что и весь сайт.
//
// Цвета приходят переменными --kz-art-*, которые переопределяются на тёмных
// плитках, поэтому одна и та же графика ложится и на светлую, и на синюю.
// variant задаёт только рамку: в плитке графика уходит вниз, под заголовок,
// на странице кейса стоит по центру полосы.

// АкПак: сетка каталога, над ней категории. Одна карточка и одна категория
// синие — то, что компания завела через админку сама.
function CatalogArt() {
  return (
    <div className="kz-art__inner">
      <div className="kz-art__chips">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={i === 1 ? 'is-accent' : ''} />
        ))}
      </div>
      <div className="kz-art__grid">
        {Array.from({ length: 8 }, (_, i) => (
          <span className={`kz-art__card${i === 5 ? ' is-accent' : ''}`} key={i}>
            <span className="kz-art__thumb" />
            <span className="kz-art__line" />
          </span>
        ))}
      </div>
    </div>
  );
}

// TrendTrade: столбцы рынка и два исхода под ними. Правые столбцы синие —
// котировка идёт вверх.
const BARS = [26, 42, 34, 56, 46, 68, 60, 82, 72, 94];

function MarketArt() {
  return (
    <div className="kz-art__inner">
      <div className="kz-art__bars">
        {BARS.map((h, i) => (
          <span key={h} className={i >= BARS.length - 3 ? 'is-accent' : ''} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="kz-art__outcomes">
        <span className="is-accent">да</span>
        <span>нет</span>
      </div>
    </div>
  );
}

// Пилигрим: состав на рельсе, под ним строки заявок с документами.
// Один вагон и одна строка синие — та отгрузка, которую клиент открыл.
function LogisticsArt() {
  return (
    <div className="kz-art__inner">
      <div className="kz-art__train">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className={i === 2 ? 'is-accent' : ''} />
        ))}
      </div>
      <span className="kz-art__rail" />
      <div className="kz-art__rows">
        {[0, 1, 2].map((i) => (
          <span className={`kz-art__row${i === 1 ? ' is-accent' : ''}`} key={i}>
            <span className="kz-art__cell kz-art__cell--id" />
            <span className="kz-art__cell kz-art__cell--name" />
            <span className="kz-art__cell kz-art__cell--mark" />
          </span>
        ))}
      </div>
    </div>
  );
}

// PinFin: карта сверху, под ней разобранные транзакции с суммами.
function LedgerArt() {
  return (
    <div className="kz-art__inner">
      <span className="kz-art__card-strip">
        <span />
      </span>
      <div className="kz-art__rows">
        {[0, 1, 2, 3].map((i) => (
          <span className={`kz-art__row${i === 2 ? ' is-accent' : ''}`} key={i}>
            <span className="kz-art__cell kz-art__cell--name" />
            <span className="kz-art__cell kz-art__cell--sum" />
          </span>
        ))}
      </div>
    </div>
  );
}

// Matchmove Machine: сам дисторшн-грид. Ячейки к центру крупнее, к краям мельче —
// так выглядит бочкообразная дисторсия объектива, и рисуется она одними
// прямоугольниками, без единой кривой.
function GridArt() {
  return (
    <div className="kz-art__inner">
      <div className="kz-art__grid-chart">
        {Array.from({ length: 25 }, (_, i) => (
          <span key={i} className={i === 12 ? 'is-accent' : ''} />
        ))}
      </div>
    </div>
  );
}

// Фото Детство: кадры съёмки и код под ними. Открыт только один кадр —
// тот, что привязан к коду родителя.
function PhotoArt() {
  return (
    <div className="kz-art__inner">
      <div className="kz-art__frames">
        {Array.from({ length: 6 }, (_, i) => (
          <span key={i} className={i === 3 ? 'is-accent' : ''} />
        ))}
      </div>
      <div className="kz-art__code">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} />
        ))}
      </div>
    </div>
  );
}

const ART = {
  akpack: CatalogArt,
  trendtrade: MarketArt,
  piligrim: LogisticsArt,
  pinfin: LedgerArt,
  grids: GridArt,
  photodetstvo: PhotoArt,
};

export default function CaseArt({ slug, variant = 'tile' }) {
  const Art = ART[slug];
  if (!Art) return null;
  return (
    <span className={`kz-art kz-art--${variant} kz-art--${slug}`} aria-hidden="true">
      <Art />
    </span>
  );
}
