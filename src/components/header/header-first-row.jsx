import { Header_nav } from "./header-nav";
import { Logo } from "./logo";

export function Header_first_row() {
  return (
    <div className="flex items-center px-20 py-3 bg-color-bg-default text-color-typo-primary border-b-4 border-color-bg-brand">
      <Logo />
      <div className="mx-4 h-6 w-px bg-color-bg-ghost"></div>
      <Header_nav />
      <button className="ml-auto inline-flex items-center h-10 px-4 rounded bg-color-control-bg-primary hover:bg-color-control-bg-primary-hover text-color-control-typo-primary hover:text-color-control-typo-primary-hover">
        <span>Войти</span>
        <span className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
