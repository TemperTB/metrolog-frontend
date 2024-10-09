"use client";

import { Header_first_row } from "./header-first-row";
import { Header_second_row } from "./header-second-row";

export function Header() {
  return (
    <header>
      <Header_first_row />
      <Header_second_row />
    </header>
  );
}
