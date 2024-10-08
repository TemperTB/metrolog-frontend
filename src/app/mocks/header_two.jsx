"use client";

import { useState } from "react";

export function Header_two() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-800 text-gray-100 body-font mb-4 shadow-sm">
      {/* :FIRST ROW HEADER */}
      <div className="container mx-auto flex justify-between items-center py-5 px-5">
        {/* ::Site logo and Name */}
        <a
          href="#link"
          className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-white p-2 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          <span className="ml-3 text-xl text-gray-100 font-semibold uppercase antialiased">
            Метролог
          </span>
        </a>
        {/* ::Navbar */}
        <nav className="hidden md:mr-auto md:ml-4 md:pl-4 md:border-l md:border-gray-500 md:flex flex-wrap items-center justify-center text-base tracking-wide">
          <a href="#link" className="mr-8 hover:text-yellow-300">
            Оборудование
          </a>
          <a href="#link" className="mr-8 hover:text-yellow-300">
            Типы СИ
          </a>
          <a href="#link" className="mr-8 hover:text-yellow-300">
            График поверки СИ
          </a>
        </nav>
        {/* ::Avatar */}
        <div className="hidden sm:flex sm:items-center	ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
          <a
            className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
            href="#"
          >
            Войти
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        {/* ::Burger icon standard */}
        <button
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-yellow-500 hover:to-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* :MOBILE MENU */}
      {isOpen && (
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-800 text-base uppercase text-center font-semibold">
          <a
            href="#link"
            className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Оборудование
          </a>
          <a
            href="#link"
            className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Типы СИ
          </a>
          <a
            href="#link"
            className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            График поверки СИ
          </a>
        </div>
      )}

      {/* :SECOND ROW HEADER */}
      <div className="container mx-auto flex justify-center items-center text-center py-3 px-5">
        Это строка для фильтра, добавления оборудования, и избранного
      </div>
    </header>

    
  );
}
