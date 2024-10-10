"use client";

export function Main({ children }) {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="mx-20">{children}</div>
    </main>
  );
}
