import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { dockApps } from "../constants";
import useWindowStore from "#store/window";
import { Tooltip } from "react-tooltip";

const Dock = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const dockRef = useRef(null);

  const animationIcons = (mouseX) => {
    if (!dockRef.current) return;
    const icons = dockRef.current.querySelectorAll(".dock-icon");
    const { left } = dockRef.current.getBoundingClientRect();

    icons.forEach((icon) => {
      const { left: iconLeft, width } = icon.getBoundingClientRect();
      const center = iconLeft - left + width / 2;
      const distance = Math.abs(mouseX - center);

      const intensity = Math.exp(-(distance ** 2.5) / 20000);
      gsap.to(icon, {
        scale: 1 + 0.25 * intensity,
        y: -15 * intensity,
        duration: 0.2,
        ease: "power1.out",
      });
    });
  };

  const handleMouseMove = (e) => {
    if (!dockRef.current) return;
    const { left } = dockRef.current.getBoundingClientRect();
    animationIcons(e.clientX - left);
  };

  const resetIcons = () => {
    if (!dockRef.current) return;
    const icons = dockRef.current.querySelectorAll(".dock-icon");
    icons.forEach((icon) => {
      gsap.to(icon, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power1.out",
      });
    });
  };

  React.useEffect(() => {
    const container = dockRef.current;
    if (!container) return;
    // Only add hover animations on desktop, not mobile
    if (window.innerWidth >= 768) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", resetIcons);
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", resetIcons);
      };
    }
  }, []);

  const toggleApp = (app) => {
    if (!app.canOpen) return;

    const window = windows[app.id];
    if (!window) {
      console.error(`Window not Found for app : ${app.id}`);
      return;
    }
    if (window.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
    console.log(windows);
  };

  // Only show 4 favorite apps in mobile dock
  const mobileDockApps = dockApps.filter((app) =>
    ["finder", "safari", "contact", "terminal"].includes(app.id)
  );

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {/* Desktop: show all apps */}
        <div className="hidden sm:flex items-end gap-1.5">
          {dockApps.map(({ id, name, icon, canOpen }) => (
            <div key={id} className="relative flex justify-center">
              <button
                type="button"
                className="dock-icon"
                aria-label={name}
                data-tooltip-id="dock-tooltip"
                data-tooltip-content={name}
                data-tooltip-delay-show={150}
                disabled={!canOpen}
                onClick={() => toggleApp({ id, name, icon, canOpen })}
              >
                <img
                  src={icon}
                  alt={name}
                  loading="lazy"
                  className={canOpen ? "" : "opacity-60"}
                />
              </button>
            </div>
          ))}
        </div>

        {/* Mobile: iPhone-style dock with 4 apps */}
        <div className="sm:hidden flex items-center justify-around w-full">
          {mobileDockApps.map(({ id, name, icon, canOpen }) => (
            <button
              key={id}
              type="button"
              className="flex flex-col items-center gap-0.5 active:scale-90 transition-transform"
              aria-label={name}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, name, icon, canOpen })}
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={icon}
                  alt={name}
                  loading="lazy"
                  className={`w-full h-full object-contain ${
                    canOpen ? "" : "opacity-60"
                  }`}
                />
              </div>
            </button>
          ))}
        </div>

        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
