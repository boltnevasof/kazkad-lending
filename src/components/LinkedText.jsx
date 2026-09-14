import { useNav } from '../lib/nav.js';

// Текст, в котором часть слов ведёт на другую страницу сайта. Ссылка встроена
// в само предложение, а не стоит отдельной кнопкой под абзацем, и переход идёт
// через ту же шторку, что и остальная навигация.
export default function LinkedText({ text, link, to }) {
  const { goPath } = useNav();
  const at = link ? text.indexOf(link) : -1;
  if (at < 0) return text;

  return (
    <>
      {text.slice(0, at)}
      <a
        className="kz-inline-link"
        href={to}
        onClick={(e) => {
          e.preventDefault();
          goPath(to);
        }}
      >
        {link}
      </a>
      {text.slice(at + link.length)}
    </>
  );
}
