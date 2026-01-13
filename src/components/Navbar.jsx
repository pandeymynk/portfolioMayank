import React from "react";
import dayjs from "dayjs";
import { navLinks } from "#constants";
import { navIcons } from "../constants";
import useWindowStore from "#store/window.js";

function Navbar() {
  const { openWindow } = useWindowStore();

  return (
    <>
      {/* Desktop macOS-style navbar */}
      <nav className="max-sm:hidden">
        <div>
          <img src="/src/public/images/logo.svg" alt="" />
          <p className="font-bold">Mayank's Portfolio</p>
          <ul>
            {navLinks.map(({ id, name, type }) => (
              <li key={id} onClick={() => openWindow(type)}>
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {navIcons.map(({ id, img }) => (
              <li key={id}>
                <img src={img} className="icon-hover" alt={`icon-${id}`} />
              </li>
            ))}
          </ul>
          <time>{dayjs().format("ddd MMM D h:mm")}</time>
        </div>
      </nav>

      {/* Mobile iPhone-style status bar */}
      <div className="hidden max-sm:flex max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:right-0 max-sm:z-50 max-sm:items-center max-sm:justify-between max-sm:px-6 max-sm:py-2 max-sm:bg-transparent">
        <time className="text-xs font-semibold text-white drop-shadow-md">
          {dayjs().format("h:mm")}
        </time>
        <div className="flex items-center gap-1">
          <svg
            className="w-4 h-4 text-white drop-shadow-md"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 3C7.46 3 3.34 4.78.29 7.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l11 11c.39.39 1.02.39 1.41 0l11-11c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71C20.66 4.78 16.54 3 12 3z" />
          </svg>
          <svg
            className="w-4 h-4 text-white drop-shadow-md"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Navbar;
