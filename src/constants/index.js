import finderImg from "../public/images/finder.png";
import safariImg from "../public/images/safari.png";
import photosImg from "../public/images/photos.png";
import contactImg from "../public/images/contact.png";
import terminalImg from "../public/images/terminal.png";
import trashImg from "../public/images/trash.png";
import blog1Img from "../public/images/blog1.png";
import blog2Img from "../public/images/blog2.png";
import blog3Img from "../public/images/blog3.png";
import gal1Img from "../public/images/gal1.png";
import gal2Img from "../public/images/gal2.png";
import gal3Img from "../public/images/gal3.png";
import gal4Img from "../public/images/gal4.png";
import folderImg from "../public/images/folder.png";
import txtImg from "../public/images/txt.png";
import imageImg from "../public/images/image.png";
import project1Img from "../public/images/project-1.png";
import plainImg from "../public/images/plain.png";
import project2Img from "../public/images/project-2.png";
import project3Img from "../public/images/project-3.png";
import adrianImg from "../public/images/adrian.jpg";
import adrian2Img from "../public/images/adrian-2.jpg";
import adrian3Img from "../public/images/adrian-3.jpeg";
import pdfImg from "../public/images/pdf.png";
import trash1Img from "../public/images/trash-1.png";
import trash2Img from "../public/images/trash-2.png";

import githubIcon from "../public/icons/github.svg";
import atomIcon from "../public/icons/atom.svg";
import twitterIcon from "../public/icons/twitter.svg";
import linkedinIcon from "../public/icons/linkedin.svg";
import gicon1 from "../public/icons/gicon1.svg";
import gicon2 from "../public/icons/gicon2.svg";
import fileIcon from "../public/icons/file.svg";
import gicon4 from "../public/icons/gicon4.svg";
import gicon5 from "../public/icons/gicon5.svg";
import wifiIcon from "../public/icons/wifi.svg";
import searchIcon from "../public/icons/search.svg";
import userIcon from "../public/icons/user.svg";
import modeIcon from "../public/icons/mode.svg";
import workIcon from "../public/icons/work.svg";
import infoIcon from "../public/icons/info.svg";
import trashIcon from "../public/icons/trash.svg";

const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: wifiIcon,
  },
  {
    id: 2,
    img: searchIcon,
  },
  {
    id: 3,
    img: userIcon,
  },
  {
    id: 4,
    img: modeIcon,
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: finderImg,
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: safariImg,
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: photosImg,
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: contactImg,
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: terminalImg,
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: trashImg,
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: blog1Img,
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: blog2Img,
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: blog3Img,
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    items: ["MongoDB"],
  },
  {
    category: "Blockchain & Web3",
    items: [
      "Blockchain Fundamentals",
      "Smart Contract Development",
      "Web3 Application Development",
      "Internet Computer Protocol (ICP)",
      "dApp Development",
    ],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: githubIcon,
    bg: "#f4656b",
    link: "https://github.com/JavaScript-Mastery-Pro",
  },
  {
    id: 2,
    text: "Platform",
    icon: atomIcon,
    bg: "#4bcb63",
    link: "https://jsmastery.com/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: twitterIcon,
    bg: "#ff866b",
    link: "https://x.com/jsmasterypro",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: linkedinIcon,
    bg: "#05b6f6",
    link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: gicon1,
    title: "Library",
  },
  {
    id: 2,
    icon: gicon2,
    title: "Memories",
  },
  {
    id: 3,
    icon: fileIcon,
    title: "Places",
  },
  {
    id: 4,
    icon: gicon4,
    title: "People",
  },
  {
    id: 5,
    icon: gicon5,
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: gal1Img,
  },
  {
    id: 2,
    img: gal2Img,
  },
  {
    id: 3,
    img: gal3Img,
  },
  {
    id: 4,
    img: gal4Img,
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: workIcon,
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Nike Ecommerce Website Application",
      icon: folderImg,
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Nike Project.txt",
          icon: txtImg,
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
            "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
            "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
            "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: "nike.com",
          icon: safariImg,
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "nike.png",
          icon: imageImg,
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: project1Img,
        },
        {
          id: 5,
          name: "Design.fig",
          icon: plainImg,
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI Resume Analyzer",
      icon: folderImg,
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "AI Resume Analyzer Project.txt",
          icon: txtImg,
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "ai-resume-analyzer.com",
          icon: safariImg,
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "ai-resume-analyzer.png",
          icon: imageImg,
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: project2Img,
        },
        {
          id: 5,
          name: "Design.fig",
          icon: plainImg,
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Food Delivery App",
      icon: folderImg,
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Food Delivery App Project.txt",
          icon: txtImg,
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
            "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
            "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
            "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: safariImg,
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "food-delivery-app.png",
          icon: imageImg,
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: project3Img,
        },
        {
          id: 5,
          name: "Design.fig",
          icon: plainImg,
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: infoIcon,
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: imageImg,
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: adrianImg,
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: imageImg,
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: adrian2Img,
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: imageImg,
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: adrian3Img,
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: txtImg,
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: adrianImg,
      description: [
        "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: fileIcon,
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: pdfImg,
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: trashIcon,
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: imageImg,
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: trash1Img,
    },
    {
      id: 2,
      name: "trash2.png",
      icon: imageImg,
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: trash2Img,
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
