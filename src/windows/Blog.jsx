import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControl } from "#components";
import useWindowStore from "#store/window.js";

const Blog = () => {
  const { windows } = useWindowStore();
  const data = windows.blog?.data;

  console.log("Blog component rendered, data:", data);
  console.log("Blog window state:", windows.blog);

  if (!data) return null;

  const { title, date, image, content } = data;

  return (
    <div className="flex flex-col h-full max-sm:h-[100dvh]">
      <div id="window-header" className="flex-shrink-0">
        <WindowControl target="blog" />
        <h2 className="max-sm:text-xs max-sm:truncate max-sm:max-w-[200px]">
          {title}
        </h2>
      </div>

      <div
        className="p-8 space-y-6 bg-white overflow-y-auto flex-1 overscroll-contain pb-24 max-sm:p-4"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* Blog Header */}
        <div className="space-y-3">
          <p className="text-sm text-gray-500">{date}</p>
          <h1 className="text-3xl font-bold text-gray-900 max-sm:text-xl">
            {title}
          </h1>
        </div>

        {/* Featured Image */}
        {image && (
          <div className="w-full">
            <img
              src={image}
              alt={title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none max-sm:prose-sm">
          {Array.isArray(content) ? (
            content.map((section, idx) => {
              // If section is a string, render as paragraph
              if (typeof section === "string") {
                return (
                  <p key={idx} className="text-gray-800 leading-relaxed mb-4">
                    {section}
                  </p>
                );
              }

              // If section is an object with heading and text
              if (section.heading) {
                return (
                  <div key={idx} className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                      {section.heading}
                    </h2>
                    <p className="text-gray-800 leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                );
              }

              // If section has a list
              if (section.list) {
                return (
                  <div key={idx} className="mb-6">
                    {section.listTitle && (
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {section.listTitle}
                      </h3>
                    )}
                    <ul className="list-disc list-inside space-y-2 text-gray-800">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              }

              // If section has a YouTube video
              if (section.video) {
                return (
                  <div key={idx} className="mb-6">
                    {section.videoTitle && (
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {section.videoTitle}
                      </h3>
                    )}
                    <div
                      className="relative w-full"
                      style={{ paddingBottom: "56.25%" }}
                    >
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src={section.video}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                );
              }

              return null;
            })
          ) : (
            <p className="text-gray-800 leading-relaxed">{content}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const BlogWindow = WindowWrapper(Blog, "blog");

export default BlogWindow;
