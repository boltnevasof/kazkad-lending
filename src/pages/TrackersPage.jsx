// Лендинг для партнёров-трекеров: /trackers.
//
// Отдельная страница со своей шапкой и подвалом: общая навигация сайта здесь
// не показывается (см. App.jsx). Вёрстка повторяет макет «Kazkad x trackers»
// из Claude Design: десктоп 1440, планшет 834, телефон 375. Компоненты и моушен
// те же, что на главной: заставка, заголовки выезжают по словам, блоки
// проявляются при прокрутке, шапка набирает стекло и ведёт синюю черту под
// активным разделом, переходы по разделам идут под шторкой.
//
// Блока «Когда клиенту нужны мы» в макете не было. Он собран из тех же
// деталей, что и вопросы: сетка с заголовком слева и ряды через волосяные линии.

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ArrowButton from '../components/ArrowButton.jsx';
import CaseArt from '../components/CaseArt.jsx';
import Shot from '../components/Shot.jsx';
import SplitText from '../components/SplitText.jsx';
import { Icon } from '../design-system/index.js';
import { LEGAL_ENTITY } from '../content/legal.js';
import { useNav } from '../lib/nav.js';
import {
  TRACKERS_CLIENT,
  TRACKERS_CONTACT,
  TRACKERS_CTA,
  TRACKERS_FAQ,
  TRACKERS_HERO,
  TRACKERS_HOW,
  TRACKERS_NAV,
  TRACKERS_TRUST,
  TRACKERS_WHEN,
  TRACKERS_YOU,
} from '../content/trackers.js';

// Знак целиком, со звездой: в logo-mark.png звезда обрезана справа.
const MARK = '/assets/logo-mark-star.png';
const GLOW = '/assets/star-glow.webp';
const EXTERNAL = { target: '_blank', rel: 'noopener noreferrer' };

// Разделы по порядку на странице: по ним шапка решает, какой пункт активен.
// Блока «когда нужны мы» в меню нет, но он стоит в списке: пока читаешь его,
// черта не должна висеть под соседним пунктом.
const SECTIONS = ['#top', '#when', '#client', '#you', '#how', '#cases', '#faq', '#contact'];

// Поля под схему кейса, у которого ещё нет снимков. Те же, что в списке кейсов.
const FILLS = {
  blue: 'var(--surface-accent)',
  tint: 'var(--surface-tint)',
  grey: 'var(--ink-500)',
};

const caseHref = (slug) => `/cases/${slug}`;

// Раздел активен, когда его верх ушёл под шапку. Порог тот же, что на главной.
const SPY_EDGE = 120;

const delay = (ms) => ({ '--kz-delay': `${ms}ms` });

// Ссылка внутри сайта уходит под шторку, как на главной. Клик с модификатором
// или средней кнопкой открывает ссылку как обычно, в новой вкладке.
const plainClick = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;

function Lockup({ className = '', ...rest }) {
  return (
    <span className={`kzt-lockup ${className}`.trim()} {...rest}>
      <span className="kzt-lockup__brand">
        <img className="kzt-lockup__mark" src={MARK} alt="" />
        <span className="kzt-lockup__name">Kazkad</span>
      </span>
      <span className="kzt-lockup__x">×</span>
      <span className="kzt-lockup__who">трекеры</span>
    </span>
  );
}

function Header({ menuOpen, active, onToggle, onGo }) {
  const listRef = useRef(null);
  const [marker, setMarker] = useState({ x: 0, w: 0, visible: false });

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
    // Manrope грузится асинхронно: до подмены шрифта ширины пунктов другие.
    if (document.fonts) document.fonts.ready.then(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [active]);

  const go = (href) => (e) => {
    e.preventDefault();
    onGo(href);
  };

  return (
    <header className={`kzt-header${menuOpen ? ' is-menu' : ''}`}>
      <a className="kzt-header__logo" href="#top" aria-label="Kazkad × трекеры, наверх" onClick={go('#top')}>
        <Lockup className="kzt-lockup--header" />
      </a>

      <nav className="kzt-header__nav" aria-label="Разделы страницы" ref={listRef}>
        {TRACKERS_NAV.map((link) => (
          <a
            key={link.href}
            className={`kz-nav__link${active === link.href ? ' is-active' : ''}`}
            href={link.href}
            onClick={go(link.href)}
          >
            {link.label}
          </a>
        ))}
        <span
          className={`kz-nav__marker${marker.visible ? ' is-on' : ''}`}
          style={{ '--kz-x': `${marker.x}px`, '--kz-w': `${marker.w}px` }}
          aria-hidden="true"
        />
      </nav>

      <div className="kzt-header__cta">
        <a className="kz-nav__cta" href={TRACKERS_CTA.href} {...EXTERNAL}>
          <span className="kz-nav__cta-label">
            <span className="kzt-cta-long">{TRACKERS_CTA.navLabel}</span>
            <span className="kzt-cta-short">{TRACKERS_CTA.navLabelShort}</span>
          </span>
          <span className="kz-nav__cta-arrow">
            <Icon name="arrow-right" size={16} />
            <Icon name="arrow-right" size={16} />
          </span>
        </a>
      </div>

      <button
        type="button"
        className="kzt-header__menu"
        aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={menuOpen}
        onClick={onToggle}
      >
        {/* Полоски, а не иконка: глиф можно только подменить, а здесь нужен
            переход из бургера в крестик, как в шапке главной. */}
        <span className="kz-burger" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
    </header>
  );
}

// Меню телефона — то же чёрное полотно, что на главной, только открывается под
// шапкой: белая шапка со знаком остаётся на месте, бургер становится крестиком.
function MobileMenu({ open, onGo, onClose }) {
  return (
    <div className={`kz-menu kzt-menu${open ? ' is-open' : ''}`}>
      <nav className="kz-menu__links" aria-label="Разделы страницы">
        {TRACKERS_NAV.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            style={{ '--kz-i': i }}
            onClick={(e) => {
              e.preventDefault();
              onGo(link.href);
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="kz-menu__foot" style={{ '--kz-i': TRACKERS_NAV.length }}>
        <a className="kz-menu__cta" href={TRACKERS_CTA.href} {...EXTERNAL} onClick={onClose}>
          {TRACKERS_CTA.label}
          <Icon name="arrow-right" size={18} />
        </a>
        {TRACKERS_CONTACT.links.slice(1, 3).map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="kzt-hero">
      <img className="kzt-glow kzt-hero__glow" src={GLOW} alt="" aria-hidden="true" fetchpriority="high" />
      <div className="kzt-hero__body">
        <Lockup className="kzt-lockup--hero" data-reveal="" />
        <SplitText as="h1" text={TRACKERS_HERO.title} className="kzt-hero__title" delay={140} />
        <p className="kzt-hero__lead" data-reveal="" style={delay(520)}>
          {TRACKERS_HERO.lead}
        </p>
        <div className="kzt-hero__cta" data-reveal="" style={delay(640)}>
          <ArrowButton size="xl" arrowSize={20} href={TRACKERS_CTA.href} {...EXTERNAL}>
            {TRACKERS_CTA.label}
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}

// Узнаваемые ситуации рядами, как вопросы: заголовок слева едет за прокруткой,
// справа строки через волосяные линии. У каждой строки ссылка на кейс.
function When({ onOpen }) {
  return (
    <section id="when" className="kzt-section kzt-when">
      <div className="kzt-head">
        <SplitText as="h2" text={TRACKERS_WHEN.title} className="kzt-h2" />
        <p className="kzt-lead" data-reveal="" style={delay(260)}>
          {TRACKERS_WHEN.lead}
        </p>
      </div>

      <ul className="kzt-when__list">
        {TRACKERS_WHEN.items.map((item, i) => (
          <li key={item.slug} className="kzt-when__item" data-reveal="" style={delay(i * 80)}>
            <p className="kzt-when__text">{item.text}</p>
            <a className="kzt-when__case" href={caseHref(item.slug)} onClick={onOpen(caseHref(item.slug))}>
              {item.label}
              <Icon name="arrow-right" size={14} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Client() {
  const { main, tiles } = TRACKERS_CLIENT;
  return (
    <section id="client" className="kzt-section kzt-client">
      <div className="kzt-head">
        <SplitText as="h2" text={TRACKERS_CLIENT.title} className="kzt-h2" />
        <p className="kzt-lead" data-reveal="" style={delay(260)}>
          {TRACKERS_CLIENT.lead}
        </p>
      </div>

      {/* Плитки въезжают сеткой целиком: по отдельности между ними на время
          входа проглядывала бы серая подложка линий. Содержимое плиток идёт
          следом лесенкой. */}
      <div className="kzt-tiles" data-reveal="">
        <div className="kzt-tile kzt-tile--main">
          <span className="kzt-tile__icon" data-reveal="" style={delay(160)}>
            <Icon name={main.icon} size={26} />
          </span>
          <div className="kzt-tile__main-body" data-reveal="" style={delay(240)}>
            <h3 className="kzt-tile__main-title">{main.title}</h3>
            <p className="kzt-tile__main-text">{main.text}</p>
          </div>
        </div>

        {tiles.map((tile, i) => (
          <div key={tile.title} className={`kzt-tile kzt-tile--${tile.tone}`}>
            <span className="kzt-tile__icon" data-reveal="" style={delay(120 + i * 90)}>
              <Icon name={tile.icon} size={26} />
            </span>
            <div className="kzt-tile__body" data-reveal="" style={delay(200 + i * 90)}>
              <h3 className="kzt-tile__title">{tile.title}</h3>
              {tile.text ? <p className="kzt-tile__text">{tile.text}</p> : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function You() {
  return (
    <section id="you" className="kzt-section kzt-you">
      <SplitText as="h2" text={TRACKERS_YOU.title} className="kzt-h2" />
      <div className="kzt-you__grid">
        {TRACKERS_YOU.items.map((item, i) => (
          <div key={item.icon + item.title} className="kzt-you__item" data-reveal="" style={delay(i * 80)}>
            <Icon name={item.icon} size={32} className="kzt-you__icon" />
            <div className="kzt-you__body">
              <h3 className="kzt-h3">
                {item.accent ? <span className="kzt-accent">{item.accent}</span> : null}
                {item.title}
              </h3>
              {item.text ? <p className="kzt-text">{item.text}</p> : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function How() {
  return (
    <section id="how" className="kzt-section kzt-how">
      <div className="kzt-how__head">
        <SplitText as="h2" text={TRACKERS_HOW.title} className="kzt-h2" />
        <div className="kzt-how__cta" data-reveal="" style={delay(200)}>
          <ArrowButton size="lg" href={TRACKERS_CTA.href} {...EXTERNAL}>
            {TRACKERS_CTA.label}
          </ArrowButton>
        </div>
      </div>

      {/* Линия прочерчивается слева направо, пройденная часть синим следом за
          ней, а шаги встают по очереди, пока линия до них доходит. */}
      <div className="kzt-how__track">
        <span className="kzt-how__line" data-reveal="" aria-hidden="true" />
        <span className="kzt-how__line kzt-how__line--done" data-reveal="" style={delay(380)} aria-hidden="true" />
        <ol className="kzt-how__steps">
          {TRACKERS_HOW.steps.map((step, i) => (
            <li key={step.title} className="kzt-how__step" data-reveal="" style={delay(120 + i * 150)}>
              <span className={`kzt-how__num${i < 2 ? ' is-done' : ''}`}>{i + 1}</span>
              <div className="kzt-how__body">
                <span className={`kzt-how__who${step.mine ? ' is-mine' : ''}`}>{step.who}</span>
                <h3 className="kzt-h3">{step.title}</h3>
                <p className="kzt-text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="kzt-how__prices">
        {TRACKERS_HOW.steps.map((step, i) => (
          <span
            key={step.title}
            className={`kzt-how__price${step.accent ? ' is-accent' : ''}`}
            data-reveal=""
            style={delay(240 + i * 150)}
          >
            {step.price}
          </span>
        ))}
      </div>
    </section>
  );
}

// Кадр кейса: снимок в окне браузера, а пока снимков нет, схема кейса на поле
// бренда, как в списке кейсов. На синем и сером поле схема рисуется белым.
function CaseMedia({ item }) {
  if (item.shot) {
    return (
      <span className="kzt-case__media">
        <Shot preset="browser" src={item.shot} alt={item.title} style={{ '--kzp-bg': item.bg }} />
      </span>
    );
  }
  const dark = item.fill === 'blue' || item.fill === 'grey';
  return (
    <span
      className={`kzt-case__media kzt-case__media--art${dark ? ' is-dark' : ''}`}
      style={{ background: FILLS[item.fill] || FILLS.tint }}
    >
      <CaseArt slug={item.slug} variant="square" />
    </span>
  );
}

function Trust({ onOpen }) {
  const { stages, cases, also, guarantee } = TRACKERS_TRUST;
  return (
    <section id="cases" className="kzt-section kzt-trust kz-dark">
      <div className="kzt-head">
        <SplitText as="h2" text={TRACKERS_TRUST.title} className="kzt-h2" />
        <p className="kzt-lead" data-reveal="" style={delay(260)}>
          {TRACKERS_TRUST.lead}
        </p>
      </div>

      <div className="kzt-trust__stages">
        {stages.map((stage, i) => (
          <p key={stage.days} className="kzt-trust__stage" data-reveal="" style={delay(i * 100)}>
            <span>{stage.days}</span> {stage.text}
          </p>
        ))}
      </div>

      <div className="kzt-trust__cases">
        {cases.map((item, i) => (
          <a
            key={item.slug}
            className="kzt-case"
            href={caseHref(item.slug)}
            data-reveal=""
            style={delay(i * 120)}
            onClick={onOpen(caseHref(item.slug))}
          >
            <CaseMedia item={item} />
            {item.metric ? (
              <span className="kzt-case__metric">
                <span className="kzt-case__metric-value">{item.metric.value}</span>{' '}
                <span className="kzt-case__metric-caption">{item.metric.caption}</span>
              </span>
            ) : null}
            <span className="kzt-case__title">{item.title}</span>
            <span className="kzt-case__text">{item.text}</span>
            <span className="kzt-case__site">kazkad.digital{caseHref(item.slug)}</span>
          </a>
        ))}
      </div>

      {also ? (
        <p className="kzt-trust__also" data-reveal="">
          {also.text}{' '}
          <a className="kzt-trust__also-link" href={caseHref(also.slug)} onClick={onOpen(caseHref(also.slug))}>
            {also.label}
            <Icon name="arrow-right" size={14} />
          </a>
        </p>
      ) : null}

      <div className="kzt-guarantee">
        <div className="kzt-guarantee__num" data-reveal="">
          <span className="kzt-guarantee__big">{guarantee.number}</span>
          <span className="kzt-guarantee__unit">{guarantee.unit}</span>
        </div>
        <p className="kzt-guarantee__text" data-reveal="" style={delay(160)}>
          {guarantee.text} <span>{guarantee.accent}</span>
        </p>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="kzt-section kzt-faq">
      <SplitText as="h2" text={TRACKERS_FAQ.title} className="kzt-h2" />
      <div className="kz-faq">
        {TRACKERS_FAQ.items.map((item, i) => (
          <details key={item.question} className="kz-faq__item" data-reveal="" style={delay(i * 60)}>
            <summary className="kz-faq__question">
              <h3 className="kz-faq__title">{item.question}</h3>
              <span className="kz-faq__icon" aria-hidden="true" />
            </summary>
            <p className="kz-faq__answer">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact({ onOpen }) {
  return (
    <section id="contact" className="kzt-section kzt-contact">
      <img className="kzt-glow kzt-contact__glow" src={GLOW} alt="" aria-hidden="true" />
      <div className="kzt-contact__grid">
        <div className="kzt-contact__main">
          <SplitText as="h2" text={TRACKERS_CONTACT.title} className="kzt-contact__title" />
          <p className="kzt-lead" data-reveal="" style={delay(420)}>
            {TRACKERS_CONTACT.lead}
          </p>
          <div className="kzt-contact__cta" data-reveal="" style={delay(520)}>
            <ArrowButton size="xl" arrowSize={20} href={TRACKERS_CTA.href} {...EXTERNAL}>
              {TRACKERS_CTA.label}
            </ArrowButton>
          </div>
        </div>
        <div className="kzt-contact__links" data-reveal="" style={delay(600)}>
          {TRACKERS_CONTACT.links.map((link) => (
            <a
              key={link.href}
              className="kz-grow-link"
              href={link.href}
              {...(link.external ? EXTERNAL : null)}
              {...(link.href.startsWith('/') ? { onClick: onOpen(link.href) } : null)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <footer className="kzt-footer" data-reveal="">
        <span className="kzt-footer__company">
          <img className="kzt-footer__mark" src={MARK} alt="" />
          {TRACKERS_CONTACT.company}
        </span>
        {/* В макете здесь заглушка «[реквизиты ИП]». Реквизиты берём из того же
            места, что и главная; пока они не заполнены, строка не выводится. */}
        {LEGAL_ENTITY ? (
          <span className="kzt-footer__legal">
            {LEGAL_ENTITY.name}, ИНН {LEGAL_ENTITY.inn}
          </span>
        ) : null}
      </footer>
    </section>
  );
}

export default function TrackersPage() {
  const { goSection, goPath } = useNav();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#top');

  // Открытое меню закрывается по Escape и не даёт странице прокручиваться под собой.
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

  // Активный раздел — последний, чей верх уже ушёл под шапку. Считаем раз
  // в кадр и только на прокрутке и смене размера окна.
  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;
      let current = SECTIONS[0];
      SECTIONS.forEach((id) => {
        const el = document.querySelector(id);
        if (el && el.getBoundingClientRect().top <= SPY_EDGE) current = id;
      });
      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(read);
    };

    read();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Переход к разделу идёт под шторкой, как на главной; меню при этом закрывается.
  const go = (href) => {
    setMenuOpen(false);
    goSection(href);
  };

  const open = (path) => (e) => {
    if (!plainClick(e)) return;
    e.preventDefault();
    goPath(path);
  };

  return (
    <div className="kzt-page">
      <Header menuOpen={menuOpen} active={active} onToggle={() => setMenuOpen((v) => !v)} onGo={go} />
      <MobileMenu open={menuOpen} onGo={go} onClose={() => setMenuOpen(false)} />
      <main>
        <Hero />
        <When onOpen={open} />
        <Client />
        <You />
        <How />
        <Trust onOpen={open} />
        <Faq />
        <Contact onOpen={open} />
      </main>
    </div>
  );
}
