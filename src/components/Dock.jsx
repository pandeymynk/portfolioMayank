import React, { useRef } from "react";
import gsap from "gsap";
import { dockApps } from "../constants";
import { Tooltip } from "react-tooltip";
const Dock = () => {
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
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", resetIcons);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  const toggleApp = (app) => {};
  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
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
              onClick={() => toggleApp({ id, canOpen })}
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
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
