// MacBook Pro 14, вид спереди с открытой крышкой. Крышка, кант, вырез
// камеры и планка корпуса с выемкой нарисованы в src/styles/devices.css
// по размерам Apple, сюда подставляется только снимок экрана.
//
//   <Macbook14 src="/assets/cases/akpack-admin.jpg" alt="Админка каталога" />

export default function Macbook14({ src, alt = '', className = '', ...rest }) {
  return (
    <span className={`kzd-macbook ${className}`.trim()} {...rest}>
      <span className="kzd-macbook__lid">
        <span className="kzd-macbook__screen">
          <img className="kzd-macbook__shot" src={src} alt={alt} loading="lazy" />
          <span className="kzd-macbook__notch" aria-hidden="true" />
        </span>
      </span>
      <span className="kzd-macbook__base" aria-hidden="true" />
    </span>
  );
}
