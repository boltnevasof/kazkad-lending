import { Fragment } from 'react';

// Заголовок, который выезжает по словам из-под собственной строки.
//
// Каждое слово лежит в маске с overflow:hidden и поднимается снизу со сдвигом
// по времени. Это редакционный приём, а не разлетающиеся буквы: движение одно
// на всю строку, читается как «текст встал на место», а не как эффект.

const STEP = 62;

export default function SplitText({
  text,
  as: Tag = 'span',
  className = '',
  delay = 0,
  stagger = STEP,
  reveal = true,
  ...rest
}) {
  const words = text.split(' ');

  return (
    <Tag className={`kz-split ${className}`.trim()} {...(reveal ? { 'data-reveal': '' } : null)} {...rest}>
      {words.map((word, i) => (
        // Пробел — отдельный текстовый узел между масками: внутри .kz-word он бы
        // схлопнулся (там white-space: nowrap), и слова слиплись бы.
        <Fragment key={`${word}-${i}`}>
          <span className="kz-word">
            <span className="kz-word__in" style={{ '--kz-delay': `${delay + i * stagger}ms` }}>
              {word}
            </span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </Tag>
  );
}

// Сколько миллисекунд занимает выезд строки — чтобы следующую пустить следом.
export function splitDuration(text, stagger = STEP) {
  return text.split(' ').length * stagger;
}
