import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControl } from "#components";
import useWindowStore from "#store/window.js";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <div className="flex flex-col h-full max-sm:h-[100dvh]">
      <div id="window-header" className="flex-shrink-0">
        <WindowControl target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div
        className="p-5 bg-white flex-1 overflow-y-auto overscroll-contain flex items-center justify-center"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {imageUrl ? (
          <div className="w-full">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-auto max-h-[70vh] max-sm:max-h-none object-contain rounded"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
