import { Button_login } from "./button-login";
import { Header_nav } from "./header-nav";
import { Logo } from "./logo";

export function Header_first_row() {
  return (
    <div className="flex items-center px-20 py-3 bg-color-bg-default text-color-typo-primary border-b-4 border-color-bg-brand">
      <Logo />
      <div className="mx-4 h-6 w-px bg-color-bg-ghost"></div>
      <Header_nav />
      <Button_login />
    </div>
  );
}
