import Link from "next/link";
import { SVG_logo } from "./svg-logo";

export function Logo() {
  return (
    <Link className="flex items-center" href="#">
      <div className="border">
        <SVG_logo />
      </div>
      <div className="ml-3 text-xl font-semibold uppercase">Метролог</div>
    </Link>
  );
}
