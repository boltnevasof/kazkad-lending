// Карточка проекта в списке кейсов. Наверху тот же квадрат, что стоит в ряду
// на главной: снимок в кадре, если он уже есть, и схема кейса на цветном поле,
// пока снимков нет. Под квадратом название и ссылка.
//
// Раньше здесь был снимок во всю плитку с тёмной вуалью и заголовком поверх.
// Кадр показывает проект честнее: интерфейс не тонет под вуалью, а поле
// вокруг него задаёт гамму проекта.

import { Icon } from '../design-system/index.js';
import CaseArt from './CaseArt.jsx';
import Shot from './Shot.jsx';

const FILLS = {
  grey: 'var(--ink-500)',
  tint: 'var(--surface-tint)',
  blue: 'var(--surface-accent)',
  subtle: 'var(--surface-subtle)',
};

export default function CaseCard({ item, href, onClick, delay = 0, linkLabel = 'посмотреть кейс' }) {
  // Первый экран проекта и есть его лицо: в ряду на главной он стоит первым.
  const screen = (item.screens || []).find((s) => s.shot);
  const dark = !screen && (item.fill === 'blue' || item.fill === 'grey');

  return (
    <a
      className="kz-case-card"
      href={href}
      onClick={onClick}
      data-reveal=""
      style={{ '--kz-delay': `${delay}ms` }}
    >
      <span
        className={`kz-case-card__frame${dark ? ' is-dark' : ''}`}
        style={screen ? undefined : { background: FILLS[item.fill] || FILLS.tint }}
      >
        {screen ? (
          <Shot preset={screen.preset} src={screen.shot} style={screen.frame} />
        ) : (
          <CaseArt slug={item.slug} variant="square" />
        )}
      </span>
      {/* Пробел для тех, кто читает HTML без стилей: иначе последнее слово
          заголовка склеивалось с «посмотреть». */}
      <span className="kz-case-card__title">{item.title}</span>{' '}
      <span className="kz-case-card__link">
        {linkLabel}
        <Icon name="arrow-right" size={14} />
      </span>
    </a>
  );
}
