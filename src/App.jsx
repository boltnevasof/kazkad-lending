import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import CasesPage from './pages/CasesPage.jsx';
import CasePage from './pages/CasePage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import MethodPage from './pages/MethodPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import TrackersPage from './pages/TrackersPage.jsx';
import Preloader from './components/Preloader.jsx';
import SiteNav from './components/SiteNav.jsx';
import SlideCurtain from './components/SlideCurtain.jsx';
import { applySeo } from './lib/head.js';
import { initReveal, prefersReducedMotion, replayReveal } from './lib/reveal.js';
import { NavContext } from './lib/nav.js';
import { CONTACTS, HERO, NAV_LINKS } from './content/site.js';
import { seoFor } from './content/seo.js';

const SECTION_IDS = ['#top', '#method', '#stages', '#cases', '#contact'];

// Должны совпадать с --kz-curtain-* в motion.css: панели закрываются за
// 300ms + 3 шага по 26ms, открываются за 360ms + столько же.
const COVER_MS = 380;
const HOLD_MS = 90;
const UNCOVER_MS = 440;

// На каком пути шапка набирает полную плотность. Примерно её собственная
// высота: к моменту, когда герой ушёл под шапку, стекло уже плотное.
const NAV_GLASS_RANGE = 88;

// Отдельные лендинги со своей шапкой и своими разделами: общая навигация сайта
// там не показывается, а переходы по разделам идут внутри той же страницы.
const STANDALONE = ['/trackers'];

export default function App() {
  const [booted, setBooted] = useState(() => prefersReducedMotion());
  const [section, setSection] = useState('#top');
  const [curtain, setCurtain] = useState('idle');
  const timers = useRef([]);
  const busy = useRef(false);

  const navigate = useNavigate();
  const location = useLocation();
  const onLanding = location.pathname === '/';
  const standalone = STANDALONE.includes(location.pathname.replace(/(.)\/+$/, '$1'));

  // Готовый HTML страницы уже несёт свои title и описание, но переход по
  // ссылке внутри сайта страницу не перезагружает, поэтому меняем их сами.
  useEffect(() => {
    applySeo(seoFor(location.pathname));
  }, [location.pathname]);

  // Пока идёт заставка, страница не скроллится и ничего не проявляется.
  useEffect(() => {
    if (booted) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [booted]);

  // Страховка. Запуск наблюдателя висит на отчёте заставки, и если тот не
  // придёт, содержимое останется под масками навсегда. Декоративная анимация
  // не имеет права держать страницу пустой.
  useEffect(() => {
    if (booted) return undefined;
    const timer = setTimeout(() => setBooted(true), 2600);
    return () => clearTimeout(timer);
  }, [booted]);

  // Разметка на новом маршруте своя — наблюдателя пересобираем. Лесенку входа
  // проигрываем только при первом появлении: при возврате на уже виденную
  // страницу содержимое должно стоять на месте сразу.
  const firstReveal = useRef(true);
  useEffect(() => {
    if (!booted) return undefined;
    const instant = !firstReveal.current;
    firstReveal.current = false;
    return initReveal({ instant });
  }, [booted, location.pathname]);

  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;

      // Плотность стекла в шапке — доля пройденного пути от 0 до её высоты.
      // Пишем прямо в CSS-переменную, а не в состояние: перерисовывать дерево
      // на каждый кадр прокрутки незачем, меняется одно свойство.
      const progress = Math.min(1, Math.max(0, window.scrollY / NAV_GLASS_RANGE));
      document.documentElement.style.setProperty('--kz-nav-p', String(progress));

      if (!onLanding) return;
      // Активна последняя секция, чей верх уже прошёл под шапкой.
      let current = '#top';
      SECTION_IDS.forEach((id) => {
        const el = document.querySelector(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      });
      setSection(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(read);
    };

    read();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [onLanding]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // Любой переход происходит под закрытой шторкой: сначала она накрывает экран,
  // потом выполняется action, и только затем панели уходят вверх.
  const runCurtain = useCallback((action) => {
    if (busy.current) return;

    if (prefersReducedMotion()) {
      action();
      return;
    }

    busy.current = true;
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setCurtain('cover');

    timers.current.push(
      setTimeout(() => {
        action();
        setCurtain('reveal');
      }, COVER_MS + HOLD_MS),
      setTimeout(() => {
        setCurtain('idle');
        busy.current = false;
      }, COVER_MS + HOLD_MS + UNCOVER_MS),
    );
  }, []);

  const goSection = useCallback(
    (href) => {
      runCurtain(() => {
        // С другой страницы возвращаемся на лендинг и передаём якорь через
        // state — доскроллит уже сам Landing, когда разметка появится.
        // Отдельный лендинг держит свои разделы у себя и никуда не уходит.
        if (location.pathname !== '/' && !standalone) {
          navigate('/', { state: { anchor: href } });
          return;
        }
        const target = href === '#top' ? null : document.querySelector(href);
        // Отступ под шапку даёт scroll-margin-top у секции.
        if (target) target.scrollIntoView({ block: 'start', behavior: 'auto' });
        else window.scrollTo({ top: 0, behavior: 'auto' });
        replayReveal(target || document.querySelector('#top'));
      });
    },
    [location.pathname, navigate, runCurtain, standalone],
  );

  const goPath = useCallback(
    (path) => {
      if (path === location.pathname) return;
      runCurtain(() => navigate(path));
    },
    [location.pathname, navigate, runCurtain],
  );

  const openTelegram = useCallback(() => {
    window.open(CONTACTS.telegram, '_blank', 'noopener');
  }, []);

  const onReady = useCallback(() => setBooted(true), []);

  const nav = useMemo(() => ({ goSection, goPath, openTelegram }), [goSection, goPath, openTelegram]);

  // На страницах кейсов подсвечиваем соответствующий пункт меню.
  const activeHref = location.pathname.startsWith('/cases') ? '#cases' : onLanding ? section : null;

  return (
    <NavContext.Provider value={nav}>
      <div className="kz-site">
        {standalone ? null : (
          <SiteNav
            links={NAV_LINKS}
            activeHref={activeHref}
            cta={HERO.cta}
            onCtaClick={openTelegram}
            onNavigate={goSection}
            onOpenCases={() => goPath('/cases')}
          />
        )}

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/cases/:slug" element={<CasePage />} />
          <Route path="/kaskadnaya-razrabotka" element={<MethodPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/trackers" element={<TrackersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <SlideCurtain phase={curtain} />
        {prefersReducedMotion() ? null : <Preloader onReady={onReady} />}
      </div>
    </NavContext.Provider>
  );
}
