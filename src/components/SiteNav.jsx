// Шапка сайта. Повторяет NavBar из дизайн-системы, но всё оформление вынесено
// в классы: подчёркивания пунктов и стрелка CTA живут в motion.css, а inline-стили
// из DS-версии перебить оттуда было бы нечем.
//
// Живёт в корне страницы, а не внутри Hero: sticky-элемент обрезается любым
// предком с overflow, а у секции героя он есть.
//
// На телефоне пункты и CTA уезжают в меню под бургером — рядом с логотипом
// в 360px помещается ровно один орган управления.

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Icon, Logo } from '../design-system/index.js';
import { CASES, CONTACTS } from '../content/site.js';

export default function SiteNav({ links = [], activeHref, cta, onCtaClick, onNavigate, onOpenCases }) {
  const listRef = useRef(null);
  const [marker, setMarker] = useState({ x: 0, w: 0, visible: false });
  const [menuOpen, setMenuOpen] = useState(false);

  // Синяя черта переезжает под активный раздел. Позицию снимаем с самого
  // пункта, чтобы она не разъезжалась при смене ширины окна или шрифта.
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;

    const measure = () => {
      const el = list.querySelector('.kz-nav__link.is-active');
      if (!el) {
        setMarker((m) => ({ ...m, visible: false }));
        return;
      }
      setMarker({ x: el.offsetLeft, w: el.offsetWidth, visible: true });
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [activeHref, links]);

  // Manrope грузится асинхронно: до подмены шрифта ширины пунктов другие.
  useEffect(() => {
    if (!document.fonts) return;
    document.fonts.ready.then(() => {
      const el = listRef.current?.querySelector('.kz-nav__link.is-active');
      if (el) setMarker({ x: el.offsetLeft, w: el.offsetWidth, visible: true });
    });
  }, []);

  // Открытое меню держит экран: страница под ним не должна уезжать.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const pick = (action) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    action();
  };

  return (
    <>
      <header className={`kz-nav${menuOpen ? ' is-menu' : ''}`}>
        <div className="kz-nav__inner">
          <a
            className="kz-nav__logo"
            href="#top"
            aria-label="Kazkad — наверх"
            onClick={pick(() => onNavigate('#top'))}
          >
            <Logo variant={menuOpen ? 'wordmark-white' : 'wordmark'} height={24} />
          </a>

          <nav className="kz-nav__links" ref={listRef}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`kz-nav__link${activeHref === l.href ? ' is-active' : ''}`}
                onClick={pick(() => onNavigate(l.href))}
              >
                {l.label}
              </a>
            ))}
            <span
              className={`kz-nav__marker${marker.visible ? ' is-on' : ''}`}
              style={{ '--kz-x': `${marker.x}px`, '--kz-w': `${marker.w}px` }}
              aria-hidden="true"
            />
          </nav>

          {cta && (
            <button type="button" className="kz-nav__cta" onClick={onCtaClick}>
              <span className="kz-nav__cta-label">{cta}</span>
              <span className="kz-nav__cta-arrow">
                <Icon name="arrow-right" size={16} />
                <Icon name="arrow-right" size={16} />
              </span>
            </button>
          )}

          <button
            type="button"
            className="kz-nav__burger"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {/* Полоски, а не иконка из набора: глиф можно только подменить,
                а здесь нужен переход из бургера в крестик. */}
            <span className="kz-burger" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {/* Полотно всегда в разметке: атрибут hidden снимался бы одновременно
          с классом is-open, элемент выходил бы из display:none уже в конечном
          состоянии и переходу неоткуда было бы стартовать. Закрытое меню
          убирает visibility — из фокуса и от скринридера оно тоже уходит. */}
      <div className={`kz-menu${menuOpen ? ' is-open' : ''}`}>
        <nav className="kz-menu__links">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} style={{ '--kz-i': i }} onClick={pick(() => onNavigate(l.href))}>
              {l.label}
            </a>
          ))}
          <a href="/cases" style={{ '--kz-i': links.length }} onClick={pick(onOpenCases)}>
            {CASES.allLabel}
          </a>
        </nav>

        <div className="kz-menu__foot" style={{ '--kz-i': links.length + 1 }}>
          <a className="kz-menu__cta" href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer">
            {CONTACTS.telegramLabel}
            <Icon name="arrow-right" size={18} />
          </a>
          <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
          <a href={CONTACTS.phoneHref}>{CONTACTS.phone}</a>
        </div>
      </div>
    </>
  );
}
