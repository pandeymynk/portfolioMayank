import { WindowControl } from "#components";
import { Search, ChevronLeft } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { locations } from "#constants";
import useLocationStore from "#store/Location.js";
import useWindowStore from "#store/window.js";
import clsx from "clsx";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  const renderList = (name, items) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              item.id === activeLocation?.id ? "active" : "not-active"
            )}
          >
            <img src={item.icon} className="w-4" alt={item.name} />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  // Go back to parent folder (for mobile navigation)
  const goBack = () => {
    if (activeLocation?.type !== "work") {
      setActiveLocation(locations.work);
    }
  };

  return (
    <div className="flex flex-col h-full max-sm:h-[100dvh]">
      <div id="window-header" className="flex-shrink-0">
        <WindowControl target="finder" />
        {/* Mobile back button */}
        <button
          className="hidden max-sm:flex items-center gap-1 text-blue-500 font-medium"
          onClick={goBack}
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Back</span>
        </button>
        <h2 className="hidden max-sm:block text-sm font-semibold text-gray-700 flex-1 text-center">
          {activeLocation?.name || "Finder"}
        </h2>
        <Search className="icon" />
      </div>

      <div className="bg-white flex flex-1 min-h-0 max-sm:flex-col">
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}
          {renderList("Work", locations.work.children)}
        </div>

        {/* Desktop: scrollable content with positioned items */}
        <div className="content max-sm:hidden overflow-y-auto">
          <ul className="relative min-h-[400px]">
            {activeLocation?.children.map((item) => (
              <li
                key={item.id}
                className={item.position}
                onClick={() => openItem(item)}
              >
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile: grid layout content */}
        <div
          className="hidden max-sm:block flex-1 p-4 overflow-y-auto overscroll-contain pb-28"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <ul className="grid grid-cols-3 gap-4">
            {activeLocation?.children.map((item) => (
              <li
                key={item.id}
                className="flex flex-col items-center gap-2 p-2 rounded-lg active:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => openItem(item)}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-14 h-14 object-contain"
                />
                <p className="text-xs text-center font-medium text-gray-700 truncate w-full">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
