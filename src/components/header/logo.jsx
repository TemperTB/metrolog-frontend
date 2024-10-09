import Link from "next/link";
import { SVG_Logo } from "./svg-logo";

export function Logo() {
  return (
    <Link className="flex items-center" href="#">
      <div className="border">
        <SVG_Logo />
      </div>
      <div className="ml-3 text-xl font-semibold uppercase">Метролог</div>
    </Link>
  );
}