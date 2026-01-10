import { locations } from "#constants";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "#store/window.js";
import useLocationStore from "#store/Location.js";
import folderImg from "../public/images/folder.png";

const projects = locations.work?.children ?? [];

const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  return (
    <section
      id="home"
      className="w-full h-full p-4 md:p-8 lg:p-12 overflow-auto"
    >
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx(
              "group folder flex flex-col items-center justify-center gap-2 p-3 md:p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer",
              project.windowPosition
            )}
            onClick={() => handleOpenProjectFinder(project)}
          >
            <img
              src={folderImg}
              alt={project.name}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
            />
            <p className="text-xs sm:text-sm md:text-base text-center font-medium truncate w-full">
              {project.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
