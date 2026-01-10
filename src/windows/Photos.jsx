import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControl } from "#components";
import { gallery } from "#constants";
import useWindowStore from "#store/window.js";

const Photos = () => {
  const { openWindow } = useWindowStore();

  const handleOpenPhoto = (photo) => {
    openWindow("imgfile", {
      id: photo.id,
      name: `Photo ${photo.id}`,
      imageUrl: photo.img,
    });
  };

  return (
    <>
      <div id="window-header">
        <WindowControl target="photos" />
        <h2>Gallery</h2>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-2 gap-4">
          {gallery.map((photo) => (
            <div
              key={photo.id}
              className="overflow-hidden rounded-lg cursor-pointer"
              onClick={() => handleOpenPhoto(photo)}
            >
              <img
                src={photo.img}
                alt={`Gallery ${photo.id}`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
