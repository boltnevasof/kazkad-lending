import { useEffect } from 'react';
import ArrowButton from '../components/ArrowButton.jsx';
import Footer from '../sections/Footer.jsx';
import { CASES } from '../content/site.js';
import { useNav } from '../lib/nav.js';

// Любой адрес, которого на сайте нет. Раньше на его месте открывалась главная
// с кодом 200, и поисковик копил дубли. Теперь сервер отвечает 404 этой
// страницей, а посетитель видит, куда идти дальше.
export default function NotFoundPage() {
  const { goSection, goPath } = useNav();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="kz-page">
        <div className="kz-container kz-measure">
          <h1 className="kz-title">Такой страницы нет</h1>
          <p className="kz-lead" style={{ marginTop: 16 }}>
            Возможно, ссылка устарела или в адресе опечатка.
          </p>
          <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <ArrowButton
              href="/"
              onClick={(e) => {
                e.preventDefault();
                goPath('/');
              }}
            >
              на главную
            </ArrowButton>{' '}
            <ArrowButton
              variant="ghost"
              href="/cases"
              onClick={(e) => {
                e.preventDefault();
                goPath('/cases');
              }}
            >
              {CASES.allLabel}
            </ArrowButton>
          </div>
        </div>
      </section>
      <Footer onNavigate={goSection} />
    </>
  );
}
