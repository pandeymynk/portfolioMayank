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
    <>
      <div id="window-header">
        <WindowControl target="safari" />
        <PanelLeft className="ml-10 icon" />
        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>
        <div className="flex-1 flex-center gap-3">
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
        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="blog">
        <h2>My Developer Blog</h2>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="blog-post cursor-pointer hover:scale-[1.02] transition-transform"
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
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
