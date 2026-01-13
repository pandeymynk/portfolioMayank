import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControl from "#components/WindowControl.jsx";
import { blogPosts } from "#constants/index.js";
import useWindowStore from "#store/window.js";
import {
  ChevronLeft,
  ChevronRight,
  PanelLeft,
  ShieldHalf,
  Search,
  Share,
  Plus,
  Copy,
  MoveRight,
} from "lucide-react";

const Safari = () => {
  const { openWindow } = useWindowStore();

  const handleBlogClick = (post) => {
    console.log("Blog clicked:", post);
    openWindow("blog", post);
  };
  return (
    <div className="flex flex-col h-full max-sm:h-[100dvh]">
      <div
        id="window-header"
        className="flex-shrink-0 max-sm:flex-wrap max-sm:gap-2"
      >
        <WindowControl target="safari" />
        <h2 className="hidden max-sm:block text-sm font-semibold text-gray-700 flex-1 text-center">
          Articles
        </h2>
        <PanelLeft className="ml-10 icon max-sm:hidden" />
        <div className="flex items-center gap-1 ml-5 max-sm:hidden">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>
        <div className="flex-1 flex-center gap-3 max-sm:hidden">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1"
            />
          </div>
        </div>
        <div className="flex items-center gap-5 max-sm:hidden">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div
        className="blog flex-1 overflow-y-auto overscroll-contain pb-24"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <h2>My Developer Blog</h2>

        <div className="space-y-8 max-sm:space-y-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="blog-post cursor-pointer hover:scale-[1.02] transition-transform max-sm:hover:scale-100 max-sm:active:bg-gray-50 max-sm:rounded-lg max-sm:p-2"
              onClick={() => handleBlogClick(post)}
            >
              <div className="col-span-2">
                <img src={post.image} alt={post.title} />
              </div>

              <div className="content">
                <p>{post.date}</p>
                <h3>{post.title}</h3>
                <div className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  Read full article <MoveRight className="icon-hover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
