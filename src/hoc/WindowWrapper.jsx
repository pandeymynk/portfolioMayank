import useWindowStore from "#store/window.js";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, closeWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const touchStartY = useRef(0);

    // Detect mobile on mount and resize
    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 640);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Handle swipe down to close on mobile (iPhone-like gesture) - only on header
    useEffect(() => {
      const el = ref.current;
      if (!el || !isMobile) return;

      const header = el.querySelector("#window-header");
      if (!header) return;

      const handleTouchStart = (e) => {
        touchStartY.current = e.touches[0].clientY;
      };

      const handleTouchEnd = (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchEndY - touchStartY.current;

        // Swipe down more than 80px on header to close
        if (diff > 80 && isOpen) {
          gsap.to(el, {
            y: "100%",
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              closeWindow(windowKey);
              gsap.set(el, { y: 0 });
            },
          });
        }
      };

      header.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      header.addEventListener("touchend", handleTouchEnd, { passive: true });

      return () => {
        header.removeEventListener("touchstart", handleTouchStart);
        header.removeEventListener("touchend", handleTouchEnd);
      };
    }, [isMobile, isOpen, closeWindow, windowKey]);

    // Opening animation
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      if (isMobile) {
        // iPhone-like slide up animation
        gsap.fromTo(
          el,
          { y: "100%", opacity: 1 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
        );
      } else {
        // macOS-like scale animation
        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0, y: 40 },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
        );
      }
    }, [isOpen, isMobile]);

    // Desktop-only dragging
    useGSAP(() => {
      const el = ref.current;
      if (!el || isMobile) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
        trigger: el.querySelector("#window-header") || el,
      });
      return () => instance.kill();
    }, [isMobile]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      // Use flex on mobile, block on desktop
      if (isOpen) {
        el.style.display = isMobile ? "flex" : "block";
      } else {
        el.style.display = "none";
      }
    }, [isOpen, isMobile]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute max-sm:!fixed max-sm:!inset-0 max-sm:!w-full max-sm:!h-[100dvh] max-sm:!top-0 max-sm:!left-0 max-sm:!translate-x-0 max-sm:!translate-y-0 max-sm:z-[100] max-sm:flex-col"
      >
        <Component {...props} />
        {/* Mobile home indicator bar */}
        {isMobile && isOpen && (
          <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/30 rounded-full z-[101]" />
        )}
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;
