import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControl } from "#components";
import useWindowStore from "#store/window.js";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <div className="flex flex-col h-full max-sm:h-[100dvh]">
      <div id="window-header" className="flex-shrink-0">
        <WindowControl target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 space-y-6 bg-white flex-1 overflow-y-auto overscroll-contain pb-24" style={{ WebkitOverflowScrolling: 'touch' }}>
        {image ? (
          <div className="w-full">
            <img src={image} alt={name} className="w-full h-auto rounded" />
          </div>
        ) : null}

        {subtitle ? (
          <h3 className="text-lg font-semibold max-sm:text-base">{subtitle}</h3>
        ) : null}

        {Array.isArray(description) && description.length > 0 ? (
          <div className="space-v-3 leading-relaxed text-base text-gray-800 max-sm:text-sm">
            {description.map((para, idx) => (
              <p key={idx} className="mb-3">
                {para}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
