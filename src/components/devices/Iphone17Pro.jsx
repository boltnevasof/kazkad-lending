// iPhone 17 Pro, вид спереди. Корпус, кант, кнопки, остров с объективом и
// полоска домой нарисованы в src/styles/devices.css по размерам Apple,
// сюда подставляется только снимок экрана.
//
//   <Iphone17Pro src="/assets/cases/akpack-app.jpg" alt="Экран каталога" />

export default function Iphone17Pro({ src, alt = '', className = '', ...rest }) {
  return (
    <span className={`kzd-iphone ${className}`.trim()} {...rest}>
      <span className="kzd-iphone__body">
        <span className="kzd-iphone__btn kzd-iphone__btn--action" aria-hidden="true" />
        <span className="kzd-iphone__btn kzd-iphone__btn--volup" aria-hidden="true" />
        <span className="kzd-iphone__btn kzd-iphone__btn--voldown" aria-hidden="true" />
        <span className="kzd-iphone__btn kzd-iphone__btn--side" aria-hidden="true" />
        <span className="kzd-iphone__btn kzd-iphone__btn--camera" aria-hidden="true" />
        <span className="kzd-iphone__screen">
          <img className="kzd-iphone__shot" src={src} alt={alt} loading="lazy" />
          <span className="kzd-iphone__island" aria-hidden="true" />
          <span className="kzd-iphone__home" aria-hidden="true" />
        </span>
      </span>
    </span>
  );
}
