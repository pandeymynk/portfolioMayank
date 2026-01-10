import React from "react";
import dayjs from "dayjs";
import { navLinks } from "#constants";
import { navIcons } from "../constants";
import useWindowStore from "#store/window.js";
function Navbar() {
  const { openWindow } = useWindowStore();

  return (
    <div>
      <nav className="max-sm:flex-col max-sm:gap-3 max-sm:py-3">
        <div className="max-sm:flex-col max-sm:w-full max-sm:gap-2">
          <img
            src="/src/public/images/logo.svg"
            alt=""
            className="max-sm:w-6"
          />
          <p className="font-bold max-sm:text-sm">Mayank's Portfolio</p>
          <ul className="max-sm:justify-start max-sm:gap-2">
            {navLinks.map(({ id, name, type }) => (
              <li key={id} onClick={() => openWindow(type)}>
                <p className="max-sm:text-xs">{name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-sm:w-full max-sm:justify-between max-sm:gap-2">
          <ul className="max-sm:gap-2">
            {navIcons.map(({ id, img }) => (
              <li key={id}>
                <img
                  src={img}
                  className="icon-hover max-sm:w-5"
                  alt={`icon-${id}`}
                />
              </li>
            ))}
          </ul>
          <time className="max-sm:text-xs">
            {dayjs().format("ddd MMM D h:mm")}
          </time>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
