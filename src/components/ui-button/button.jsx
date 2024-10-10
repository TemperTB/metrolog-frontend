
/**
 *Button
 *
 * @param children Текст кнопки
 * @param icon Компонент для иконки после текста
 */
export function Ui_Button({ children, icon }) {
  return (
    <button className="ml-auto inline-flex items-center h-10 px-4 rounded bg-color-control-bg-primary hover:bg-color-control-bg-primary-hover text-color-control-typo-primary hover:text-color-control-typo-primary-hover">
      <span>{children}</span>
      <span className="ml-2">{icon}</span>
    </button>
  );
}
