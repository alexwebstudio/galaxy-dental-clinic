import { site } from "@/content/site";

// Чистый CSS: работает до загрузки JS. Синий слой заливает экран слева направо
// и открывает светлую копию названия, поэтому текст контрастен фону на каждом кадре.
export function Preloader() {
  return (
    <div className="preloader" aria-hidden="true">
      <div className="preloader-layer">
        <span className="preloader-name">{site.brand}</span>
      </div>
      <div className="preloader-layer preloader-fill">
        <span className="preloader-name">{site.brand}</span>
      </div>
    </div>
  );
}
