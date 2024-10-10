import Link from "next/link";

export function Header_nav() {
  return (
    <nav className="flex items-center gap-8 uppercase">
      <Link href="#" className="hover:text-color-typo-brand transition-colors">
        Оборудование
      </Link>
      <Link href="#" className="hover:text-color-typo-brand transition-colors">
        Тип СИ
      </Link>
      <Link href="#" className="hover:text-color-typo-brand transition-colors">
        График поверки
      </Link>
    </nav>
  );
}
