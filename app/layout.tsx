import "tailwindcss/tailwind.css";
import "./style.css";

import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="dark">
      <head />
      <body className="dark:bg-gray-900 dark:text-sky-200">{children}</body>
    </html>
  );
}
