import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero.jsx';
import Method from '../sections/Method.jsx';
import Stages from '../sections/Stages.jsx';
import Cases from '../sections/Cases.jsx';
import Faq from '../sections/Faq.jsx';
import Contact from '../sections/Contact.jsx';
import Footer from '../sections/Footer.jsx';
import { useNav } from '../lib/nav.js';

export default function Landing() {
  const { goSection, openTelegram } = useNav();
  const location = useLocation();

  // Переход «страница кейсов → раздел лендинга» приносит якорь в state:
  // разметки в момент навигации ещё нет, поэтому доскролливаем уже здесь.
  // Слой раскладки, а не эффект: прыжок должен случиться до первой отрисовки.
  useLayoutEffect(() => {
    const anchor = location.state && location.state.anchor;
    const target = anchor && anchor !== '#top' ? document.querySelector(anchor) : null;
    if (target) target.scrollIntoView({ block: 'start', behavior: 'auto' });
    else window.scrollTo(0, 0);
  }, [location.key, location.state]);

  return (
    <>
      <Hero onEnquiry={openTelegram} />
      <Cases />
      <Method />
      <Stages />
      <Faq />
      <Contact />
      <Footer onNavigate={goSection} />
    </>
  );
}
