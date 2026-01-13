import { dockApps } from "#constants";
import useWindowStore from "#store/window.js";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const MobileAppGrid = () => {
  const { openWindow } = useWindowStore();
  const gridRef = useRef(null);

  const handleOpenApp = (appId) => {
    if (appId === "trash") return;
    openWindow(appId);
  };

  useEffect(() => {
    // Animate apps on mount (iPhone style staggered animation)
    if (gridRef.current && window.innerWidth < 640) {
      const apps = gridRef.current.querySelectorAll(".mobile-app-icon");
      gsap.fromTo(
        apps,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(1.7)",
        }
      );
    }
  }, []);

  const handleAppClick = (app) => {
    if (!app.canOpen) return;

    // Animate the clicked app icon
    const target = document.querySelector(`[data-app-id="${app.id}"]`);
    if (target) {
      gsap.to(target, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
        onComplete: () => handleOpenApp(app.id),
      });
    } else {
      handleOpenApp(app.id);
    }
  };

  return (
    <div className="hidden sm:hidden max-sm:block max-sm:fixed max-sm:inset-0 max-sm:z-10 max-sm:pt-14 max-sm:pb-24 max-sm:px-6 max-sm:overflow-y-auto">
      <div ref={gridRef} className="grid grid-cols-4 gap-y-6 gap-x-4">
        {dockApps
          .filter((app) => app.canOpen)
          .map((app) => (
            <div
              key={app.id}
              data-app-id={app.id}
              className="mobile-app-icon flex flex-col items-center gap-1.5 cursor-pointer active:scale-90 transition-transform"
              onClick={() => handleAppClick(app)}
            >
              <div className="w-14 h-14 rounded-[14px] overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <img
                  src={app.icon}
                  alt={app.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[11px] text-center font-medium text-white drop-shadow-md truncate w-full px-1">
                {app.name}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MobileAppGrid;
