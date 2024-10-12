import clsx from "clsx";

/**
 * Button
 *
 * @typedef {object} ButtonProps
 * @property {string} children Текст кнопки
 * @property {jsx.element} [icon] Компонент для иконки
 * @property {"md"} [size] Размер иконки (default: md)
 * @property {"default"} [variant] Стилизация кнопки
 * @property {string} [className] Дополнительные классы для стилизации
 *
 * @param {ButtonProps} props
 * @returns {JSX.Element}
 */

export function Ui_Button({
  children,
  className = "",
  icon = null,
  size = "md",
  variant = "default",
}) {
  const buttonClassName = clsx(
    "transition-colors",
    icon && "inline-flex items-center",
    {
      md: "px-4 py-2 rounded text-base leading-normal",
    }[size],
    {
      default:
        "bg-color-control-bg-primary hover:bg-color-control-bg-primary-hover text-color-control-typo-primary hover:text-color-control-typo-primary-hover",
    }[variant],
    className,
  );

  return (
    <button className={buttonClassName}>
      <span>{children}</span>
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}
