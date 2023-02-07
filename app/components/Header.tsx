// "use client";

import Link from "next/link";

import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <div className="flex items-center justify-between border-b border-gray-800 py-2 md:py-5 px-3">
      <Link
        href="/"
        className="p-2 text-2xl md:text-4xl font-bold text-transparent rounded bg-clip-text caret-pink-600 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-neutral-200 via-orange-300 to-rose-300"
      >
        Count Anything
      </Link>
      <HeaderNav />
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
