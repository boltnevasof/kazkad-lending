const TG_URL = 'https://t.me/kazkad';

function Site() {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState('#top');
  const scrollerRef = React.useRef(null);

  React.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      setScrolled(el.scrollTop > 24);
      const ids = ['#top', '#method', '#stages', '#cases', '#contact'];
      let cur = '#top';
      ids.forEach((id) => {
        const s = el.querySelector(id);
        if (s && s.getBoundingClientRect().top <= 120) cur = id;
      });
      setActive(cur);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href) => {
    const el = scrollerRef.current;
    const target = el && el.querySelector(href);
    if (el && target) el.scrollTo({ top: href === '#top' ? 0 : target.offsetTop - 88, behavior: 'smooth' });
  };

  const openTelegram = () => window.open(TG_URL, '_blank', 'noopener');

  return (
    <div ref={scrollerRef} style={{ height: '100vh', overflowY: 'auto', background: 'var(--surface-page)' }}>
      <Hero onEnquiry={openTelegram} onNavigate={go} activeHref={active} scrolled={scrolled} />
      <Method />
      <Stages />
      <Cases />
      <Contact />
      <Footer />
    </div>
  );
}
window.Site = Site;
