// Логотип одними буквами.
//
// Отдельного ассета «только буквы» в дизайн-системе нет, а рисовать надпись
// шрифтом — это уже приближение чужого логотипа. Поэтому берём исходный
// wordmark и обрезаем марку: в файле 384×86 звезда со ступенями занимает
// x=5…84, буквы начинаются с x=88. Пропорции вынесены в CSS.

export default function Wordmark({ height = 44, tone = 'white', className = '' }) {
  const src = tone === 'white' ? '/assets/logo-wordmark-white.png' : '/assets/logo-wordmark.png';
  return (
    <span
      className={`kz-wordmark ${className}`.trim()}
      style={{ '--kz-wm-h': `${height}px` }}
      role="img"
      aria-label="Kazkad"
    >
      <img src={src} alt="" />
    </span>
  );
}
