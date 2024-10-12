import { SVG_favourite } from "./svg-favourite";
import { SVG_filter } from "./svg-filter";

export function Header_second_row() {
  return (
    <div className="mx-20 py-3 flex items-center justify-between">
      {/* TODO, Разбить на компоненты (выделить в ui-kit button) */}
      <button className="ml-2 border border-color-bg-border  text-color-bg-border hover:text-color-typo-primary transition-colors">
        <SVG_filter />
      </button>
      <button className="mr-2 text-color-typo-primary hover:text-color-typo-primary transition-colors">
        <SVG_favourite />
      </button>
    </div>
  );
}
