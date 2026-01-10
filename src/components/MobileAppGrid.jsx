import { dockApps } from "#constants";
import useWindowStore from "#store/window.js";

const MobileAppGrid = () => {
  const { openWindow } = useWindowStore();

  const handleOpenApp = (appId) => {
    if (appId === "trash") return;
    openWindow(appId);
  };

  return (
    <div className="hidden max-sm:fixed max-sm:inset-0 max-sm:bg-white/95 max-sm:backdrop-blur-sm max-sm:z-10 max-sm:overflow-y-auto max-sm:pb-24">
      <div className="max-sm:pt-6 max-sm:px-4">
        <h1 className="max-sm:text-2xl max-sm:font-bold max-sm:text-gray-800 max-sm:mb-6 max-sm:text-center">
          All Apps
        </h1>
        <div className="max-sm:grid max-sm:grid-cols-4 max-sm:gap-4">
          {dockApps.map((app) => (
            <div
              key={app.id}
              className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-2 max-sm:cursor-pointer max-sm:p-2 max-sm:rounded-lg max-sm:hover:bg-gray-200 max-sm:transition-colors"
              onClick={() => handleOpenApp(app.id)}
            >
              <img
                src={app.icon}
                alt={app.name}
                className="max-sm:w-16 max-sm:h-16 max-sm:object-contain"
              />
              <p className="max-sm:text-xs max-sm:text-center max-sm:font-medium max-sm:text-gray-800 max-sm:truncate max-sm:w-full">
                {app.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileAppGrid;
