import Link from "next/link";

import { Header } from '../components/header'

export default function EquipmentsPage() {
  return (
    <>
      <Header></Header>
      <main className="flex-1 overflow-y-auto">
        <table class="mx-20 w-full table-fixed border-collapse border border-color-bg-stripe bg-color-bg-default text-color-typo-primary">
          <thead>
            <tr className="">
              <th class="w-auto p-2 border border-color-bg-stripe align-middle text-xs">
                Подразделение
              </th>
              <th class="w-auto p-2 border border-color-bg-stripe align-middle text-xs">
                Расположение
              </th>
              <th class="w-auto p-2 border border-color-bg-stripe align-middle text-xs">
                Тип СИ
              </th>
              <th class="w-1/12 p-2 marker:border border-color-bg-stripe align-middle text-xs">
                Модель
              </th>
              <th class="w-1/12 p-2 border border-color-bg-stripe align-middle text-xs">
                Зав. номер
              </th>
              <th class="w-1/12 p-2 border border-color-bg-stripe align-middle text-xs">
                Предыдущая дата поверки
              </th>
              <th class="w-1/12 p-2 border border-color-bg-stripe align-middle text-xs">
                МПИ (лет)
              </th>
              <th class="w-1/12 p-2 border border-color-bg-stripe align-middle text-xs">
                Следующая дата поверки
              </th>
              <th class="w-1/12 p-2 border border-color-bg-stripe align-middle text-xs">
                Свидетельство
              </th>
              <th class="w-24 p-2 border border-color-bg-stripe align-middle text-xs"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-color-bg-secondary">
              <td class="p-2 border border-color-bg-stripe align-middle text-xs">
                ПТВС-1
                <br />
                ПрЭО МН
                <br />
                АО Ноябрьскнефтегаз
              </td>
              <td class="p-2 border border-color-bg-stripe align-middle text-xs">
                ДНС Карамовское
                <br />
                Котельная
                <br />
                Котел №1
                <br />
                На выходе котла
              </td>
              <td class="p-2 border border-color-bg-stripe align-middle text-xs">
                Манометр технический
                <br />
                <a
                  className="text-color-typo-link hover:text-color-typo-link-hover transition-colors underline italic"
                  href="#"
                >
                  1077-81
                </a>
              </td>
              <td class="p-2 border border-color-bg-stripe align-middle text-xs text-center">
                МП-4
              </td>
              <td class="p-2 border border-color-bg-stripe align-middle text-xs text-center">
                700087932114
              </td>
              <td class="p-2 border border-color-bg-stripe align-middle text-xs text-center">
                01.09.2024
              </td>
              <td class="p-2 border border-color-bg-stripe align-middle text-xs text-center">
                1
              </td>
              <td class="p-2 border border-color-bg-stripe align-middle text-xs text-center">
                01.09.2025
              </td>
              <td class="p-2 border border-color-bg-stripe align-middle text-xs text-center">
                <a
                  href="#"
                  className="text-color-typo-link hover:text-color-typo-link-hover transition-colors underline"
                >
                  Свидетельствооповрке
                </a>
              </td>
              <td class="p-2 border border-color-bg-stripe align-middle text-xs">
                <div className="flex gap-2 ">
                  <button className="text-color-typo-link hover:text-color-typo-link-hover transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6 hover:fill-current hover:text-color-typo-link-hover transition-colors"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>
                  <Link
                    href="#"
                    className="text-color-typo-link hover:text-color-typo-link-hover transition-colors"
                  >
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
                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                      />
                    </svg>
                  </Link>
                  <div className="text-color-typo-link hover:text-color-typo-link-hover transition-colors">
                    <a href="#">
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
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
      <footer className="h-10 shrink-0">Оп-оп</footer>
    </>
  );
}
