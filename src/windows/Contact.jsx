import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { socials } from "#constants";
import { WindowControl } from "#components";
import contactPhoto from "../public/images/mayank photo.jpeg";

const Contact = () => {
  return (
    <div className="flex flex-col h-full max-sm:h-[100dvh]">
      <div id="window-header" className="flex-shrink-0">
        <WindowControl target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div
        className="p-5 space-y-5 flex-1 overflow-y-auto overscroll-contain pb-24"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <img
          src={contactPhoto}
          alt="Mayank"
          className="w-20 rounded-full max-sm:w-24 max-sm:mx-auto"
        />

        <h3 className="max-sm:text-center">Let's Connect</h3>
        <p className="max-sm:text-center max-sm:text-gray-600">
          Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
        </p>
        <a
          href="mailto:mayankpandey8171@gmail.com"
          className="text-blue-600 hover:underline block max-sm:text-center"
        >
          mayankpandey8171@gmail.com
        </a>
        <p></p>
        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5 max-sm:size-6" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
