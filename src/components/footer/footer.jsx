import Image from "next/image";
import GPN_ES from "./GPN-ES-logo.png";

export function Footer() {
  return (
    <footer className="h-20 flex justify-center items-center shrink-0 bg-color-bg-default border-t-4 border-color-bg-brand">
      <Image src={GPN_ES} alt="GPN-ES Logo" />
    </footer>
  );
}
