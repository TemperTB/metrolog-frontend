import { Ui_Button } from "../ui-button";
import { SVG_login } from "./svg-login";

export function Button_login() {
  return (
    <div className="ml-auto">
      <Ui_Button icon={<SVG_login />}>Войти</Ui_Button>
    </div>
  );
}
