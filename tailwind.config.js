/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // ЦВЕТА ФОНОВ
        "color-bg-default": "#22272b", // Базовый (основной) цвет фона
        "color-bg-secondary": "#161a1d", // Дополнительный (второстепенный) цвет фона
        "color-bg-brand": "#0071b2", // Цвет фона для брендовых блоков
        "color-bg-link": "#0078d2", // Цвет фона для ссылочных или CTA блоков
        "color-bg-ghost": "rgba(246,251,253,0.1)", // Полупрозрачный цвет для дополнительного выделения или разделения блоков или секций. Обычно используется поверх основных фонов (default или secondary)
        "color-bg-stripe": "rgba(246,251,253,0.06)", // Цвет для едва заметного разделения, например чтобы разделить строки в таблицах
        "color-bg-border": "hsla(0,0%,100%,0.2)", // Цвет большинства бордеров и тонких разделителей
        "color-bg-system": "#4d525b", // Цвет для фона системных сообщений, состояний, уведомлений, и прочего
        "color-bg-tone": "rgba(6,20,25,0.85)", // Тёмный цвет подложки (оверлея) под высплывающими окнами
        "color-bg-soft": "hsla(0,0%,100%,0.9)", // Светлый цвет подложки (оверлея) под высплывающими окнами
        "color-bg-normal": "#0aa5ff", // Цвет фона для блоков, сообщающих об нормальном (нейтральном) состоянии системы
        "color-bg-success": "#22c38e", // Цвет фона для блоков, сообщающих об успешном действии/статусе
        "color-bg-caution": "#f2c94c", // Цвет фона для блоков, сообщающих об осторожном действии/статусе
        "color-bg-warning": "#f38b00", // Цвет фона для блоков, сообщающих об предупреждающем действии/статусе
        "color-bg-alert": "#fe4343", // Цвет фона для блоков, сообщающих об опасном (ошибочном) действии/статусе
        "color-bg-critical": "#33000f", // Цвет фона для блоков, сообщающих об критичном действии/статусе
        // ЦВЕТА ТИПОГРАФИКИ
        "color-typo-primary": "#fafafa", // Основной текст
        "color-typo-secondary": "hsla(0,0%,100%,0.6)", // Второстепенный текст
        "color-typo-brand": "#0071b2", // Брендовый текст
        "color-typo-ghost": "hsla(0,0%,100%,0.3)", // Третьестепенный текст
        "color-typo-link": "#0f9fff", // Ссылка
        "color-typo-link-hover": "#6fa5c8", // При наведении на ссылку
        "color-typo-link-minor": "#57bcff", // Второстепенная ссылка
        "color-typo-system": "#636e83", // Для системных сообщений, состояний, уведомлений
        "color-typo-normal": "#009bf5", // Текст, сообщающий о нормальном (нейтральном) состоянии системы
        "color-typo-success": "#0fae79", // Текст об успехе
        "color-typo-caution": "#f8c735", // Осторожный текст
        "color-typo-warning": "#e68200", // Предупреждающий текст
        "color-typo-alert": "#f73b3b", // Текст об ошибке
        "color-typo-critical": "#61001d", // Сообщения критического характера
        // ЦВЕТА СКРОЛЛБАРА
        "color-scroll-bg": "rgba(246,251,253,0.06)", // Цвет фонового трека
        "color-scroll-thumb": "rgba(246,251,253,0.24)", // Цвет ползунка
        "color-scroll-thumb-hover": "rgba(246,251,253,0.32)", // Цвет ползунка по наведению
        // ЦВЕТА КОНТРОЛОВ
        // DEFAULT Цвета для большинства нейтральных контролов
        "color-control-bg-default": "#22272b", // Фоновый цвет
        "color-control-typo-default": "hsla(0,0%,100%,0.8)", // Цвет текста
        "color-control-typo-placeholder": "hsla(0,0%,100%,0.35)", // Цвет плейсхолдера
        "color-control-bg-border-default": "rgba(246,251,253,0.28)", // Цвет бордеров
        "color-control-bg-border-default-hover": "rgba(246,251,253,0.52)", // Цвет бордеров по наведению
        "color-control-bg-border-focus": "#0593ff", // Цвет бордеров в состоянии фокуса
        "color-control-bg-focus": "rgba(0,120,210,0.4)", // Цвет тени в состонии фокуса
        "color-control-bg-active": "rgba(0,120,210,0.7)", // Цвет тени в состонии нажатия
        // PRIMARY Цвета для акцентных контролов и состояний
        "color-control-bg-primary": "#0078d2", // Фоновый цвет
        "color-control-bg-primary-hover": "#0091ff", // Фоновый цвет по наведению
        "color-control-typo-primary": "#fff", // Цвет текста
        "color-control-typo-primary-hover": "#fff", // Цвет текста по наведению
        // SECONDARY Цвета для второстепенных контролов (преимущественно кнопки)
        "color-control-bg-secondary": "rgba(34,39,43,0)", // Фоновый цвет
        "color-control-typo-secondary": "#0f9fff", // Цвет текста
        "color-control-typo-secondary-hover": "#57bcff", // Цвет текста по наведению
        "color-control-bg-border-secondary": "#0078d2", // Цвет бордеров
        "color-control-bg-border-secondary-hover": "#0091ff", // Цвет бордеров по наведению
        // GHOST Цвета для третьестепенных контролов, часто идущих в паре с Primary
        "color-control-bg-ghost": "hsla(0,0%,98%,0.16)", // Фоновый цвет
        "color-control-bg-ghost-hover": "hsla(0,0%,98%,0.23)", // Фоновый цвет по наведению
        "color-control-typo-ghost": "hsla(0,0%,100%,0.75)", // Цвет текста
        "color-control-typo-ghost-hover": "hsla(0,0%,100%,0.9)", // Цвет текста по наведению
        // CLEAR Цвета для «невидимых» контролов (примущественно кнопки без явной границы)
        "color-control-bg-clear": "hsla(0,0%,98%,0)", // Фоновый цвет
        "color-control-bg-clear-hover": "hsla(0,0%,98%,0.23)", // Фоновый цвет по наведению
        "color-control-typo-clear": "hsla(0,0%,100%,0.75)", // Цвет текста
        "color-control-typo-clear-hover": "hsla(0,0%,100%,0.9)", // Цвет текста по наведению
        // DISABLE Цвета для недоступных контролов
        "color-control-bg-disable": "hsla(0,0%,98%,0.16)", // Фоновый цвет
        "color-control-typo-disable": "hsla(0,0%,100%,0.24)", // Цвет текста
        "color-control-bg-border-disable": "hsla(0,0%,98%,0)", // Цвет бордеров
      },
      fontFamily: {
        sans: "Roboto, system-ui, sans-serif",
      },
    },
  },
  plugins: [],
};
