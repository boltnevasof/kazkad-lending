import { useEffect, useState } from 'react';
import Wordmark from './Wordmark.jsx';

// Вход на страницу: чёрное полотно, по центру проявляются буквы Kazkad,
// затем полотно расходится вверх и вниз и уносит их с собой.
//
// Логотип лежит в обеих половинах: стык проходит ровно по его середине,
// поэтому при раскрытии надпись разрезается пополам (разметка — в motion.css).
//
// onReady зовётся раньше, чем половины доедут до краёв: заголовок героя должен
// начать выезжать, пока полотно ещё в кадре — иначе между анимациями видна пауза.
const LOGO_AT = 40;
const OPEN_AT = 900;
const READY_AT = 1180;
const DONE_AT = 1720;

export default function Preloader({ onReady }) {
  const [phase, setPhase] = useState('idle');
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('logo'), LOGO_AT),
      setTimeout(() => setPhase('open'), OPEN_AT),
      setTimeout(() => onReady(), READY_AT),
      setTimeout(() => setGone(true), DONE_AT),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onReady]);

  if (gone) return null;

  return (
    <div className={`kz-preloader is-${phase}`} aria-hidden="true">
      <span className="kz-preloader__half kz-preloader__half--top">
        <span className="kz-preloader__logo">
          <Wordmark height={44} />
        </span>
      </span>
      <span className="kz-preloader__half kz-preloader__half--bottom">
        <span className="kz-preloader__logo">
          <Wordmark height={44} />
        </span>
      </span>
    </div>
  );
}
