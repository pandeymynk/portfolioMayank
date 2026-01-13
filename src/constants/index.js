import finderImg from "../public/images/finder.png";
import safariImg from "../public/images/safari.png";
import photosImg from "../public/images/photos.png";
import contactImg from "../public/images/contact.png";
import terminalImg from "../public/images/terminal.png";
import trashImg from "../public/images/trash.png";
import blog1Img from "../public/images/blog1.png";
import blog2Img from "../public/images/blog2.png";
import blog3Img from "../public/images/blog3.png";
import gal1Img from "../public/images/gal1.jpg";
import gal2Img from "../public/images/gal2.jpg";
import gal3Img from "../public/images/gal3.jpg";
import gal4Img from "../public/images/gal4.jpg";
import gal5Img from "../public/images/gal5.jpg";
import gal6Img from "../public/images/gal6.jpg";
import gal7Img from "../public/images/gal7.jpg";
import gal8Img from "../public/images/gal8.JPG";
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
import journeyImg from "../public/images/journeyImg.png";
import hackathonImg from "../public/images/hackathon-workshop.jpg";
import systemsImg from "../public/images/thinking-systems.jpg";
import aiWeb3Img from "../public/images/ai-web3-impact.jpg";

import githubIcon from "../public/icons/github.svg";
import atomIcon from "../public/icons/atom.svg";
import twitterIcon from "../public/icons/twitter.svg";
import linkedinIcon from "../public/icons/linkedin.svg";
import mailIcon from "../public/icons/share.svg";
import telegramIcon from "../public/icons/share.svg";
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
    id: "resume",
    name: "Resume",
    icon: pdfImg,
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
    date: "Jan 12, 2026",
    title: "From Curiosity to Code: How My Tech Journey Began",
    image: journeyImg,
    content: [
      "My journey into tech didn't start with a roadmap or a startup idea—it started with curiosity. I was fascinated by how applications worked behind the scenes and how software quietly powers almost everything we use daily.",
      {
        videoTitle: "Watch My Journey",
        video: "https://www.youtube.com/embed/T8303t4nMTc",
      },
      {
        heading: "Discovering Programming & Problem Solving",
        text: "I began with core programming fundamentals—logic building, understanding how code executes, and translating real-world problems into software solutions. This phase shaped the way I think: break problems down, solve step by step, and always focus on clarity.",
      },
      {
        heading: "Why Blockchain Caught My Attention",
        text: "Blockchain stood out because it challenged traditional centralized systems. Concepts like decentralization, transparency, and trustless execution pushed me to think beyond basic CRUD applications and toward systems that scale globally.",
      },
      {
        listTitle: "Key Learnings from This Phase:",
        list: [
          "Strong fundamentals matter more than frameworks",
          "Learning by building beats passive learning",
          "Curiosity is the best long-term motivator",
          "Breaking things is part of real growth",
        ],
      },
      "This phase laid the foundation for everything that followed. Instead of chasing trends, I focused on understanding how systems work—and that mindset still guides me today.",
    ],
  },
  {
    id: 2,
    date: "Jan 18, 2026",
    title: "Learning by Doing: Workshops, Hackathons & Community Building",
    image: hackathonImg,
    content: [
      "At some point, learning alone wasn't enough. I wanted to test my skills in real environments—with deadlines, teamwork, and real users. That's where hackathons and workshops changed everything.",
      {
        heading: "From Participant to Mentor",
        text: "Starting as a participant, I later moved into mentoring and leading blockchain workshops. Teaching others forced me to simplify complex ideas and strengthened my own understanding of core concepts.",
      },
      {
        heading: "The Power of Community",
        text: "Organizing sessions, helping developers debug projects, and collaborating with different teams taught me that great products are rarely built in isolation. Communities accelerate learning and innovation.",
      },
      {
        listTitle: "What I Gained Beyond Technical Skills:",
        list: [
          "Clear technical communication",
          "Leadership under pressure",
          "Confidence in real-world problem solving",
          "Experience working with diverse teams",
        ],
      },
      "Winning hackathons felt great, but the real reward was confidence—the belief that I could walk into any technical room and contribute meaningfully.",
    ],
  },
  {
    id: 3,
    date: "Jan 24, 2026",
    title: "Thinking in Systems: My Shift to Full-Stack Development",
    image: systemsImg,
    content: [
      "As my projects grew, I stopped thinking in terms of frontend or backend. I started thinking in systems—how data flows, how APIs scale, and how users actually experience products.",
      {
        heading: "Exploring the Full Stack",
        text: "I worked with modern frontends using React and built backends using multiple languages and frameworks. This helped me understand trade-offs in performance, scalability, and maintainability.",
      },
      {
        heading: "Designing for Users, Not Just Developers",
        text: "I learned that clean architecture and good UX go hand in hand. The best solutions are often the simplest ones—clear APIs, predictable behavior, and fast interfaces.",
      },
      {
        listTitle: "Core Principles I Follow Now:",
        list: [
          "Simplicity over complexity",
          "Scalable design from day one",
          "Readable code beats clever code",
          "User experience is part of engineering",
        ],
      },
      "This shift transformed how I build products. I now approach every project with a system-level mindset rather than isolated features.",
    ],
  },
  {
    id: 4,
    date: "Jan 30, 2026",
    title: "Where I Am Now: AI, Web3 & Building for Real Impact",
    image: aiWeb3Img,
    content: [
      "Today, my focus sits at the intersection of AI, Web3, and real-world product growth. I'm no longer building just to learn—I'm building to solve problems that actually matter.",
      {
        heading: "AI as a Practical Tool",
        text: "Rather than treating AI as a buzzword, I use it to enhance products—automation, insights, and smarter user experiences. Prompt design and system integration matter as much as the model itself.",
      },
      {
        heading: "Beyond Code: Distribution & Trust",
        text: "Through marketing, community building, and startup-oriented projects, I learned that technology alone isn't enough. Distribution, storytelling, and trust decide whether a product succeeds.",
      },
      {
        listTitle: "What I'm Focused on Going Forward:",
        list: [
          "Building market-ready products",
          "Combining AI with scalable systems",
          "Growing developer and user communities",
          "Learning fast and adapting faster",
        ],
      },
      "This journey is still unfolding. I don't aim to know everything—I aim to keep building, learning, and improving. That's the mindset I carry into every project today.",
    ],
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
    text: "GitHub",
    icon: githubIcon,
    bg: "#f4656b",
    link: "https://github.com/pandeymynk",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: linkedinIcon,
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/mayank-pnd",
  },
  {
    id: 3,
    text: "Email",
    icon: mailIcon,
    bg: "#4bcb63",
    link: "mailto:mayankpandey8171@gmail.com",
  },
  {
    id: 4,
    text: "Telegram",
    icon: telegramIcon,
    bg: "#ff866b",
    link: "https://t.me/systwm",
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
  {
    id: 5,
    img: gal5Img,
  },
  {
    id: 6,
    img: gal6Img,
  },
  {
    id: 7,
    img: gal7Img,
  },
  {
    id: 8,
    img: gal8Img,
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
    // ▶ Project 1 - PushMeet
    {
      id: 5,
      name: "PushMeet - Web3 Messaging",
      icon: folderImg,
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "PushMeet Project.txt",
          icon: txtImg,
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "PushMeet is a decentralized Web3 messaging and networking platform built on Push Protocol for seamless blockchain-based communication.",
            "Connect, message, and tip builders in Web3 with on-chain messaging stored on Push Chain with full transparency.",
            "Features include crypto tips to appreciate builders by sending instant crypto directly to their wallet, and Web3 networking with verified wallet-based identities.",
            "Built with React, Vite, Tailwind, Hardhat, and Solidity smart contracts deployed on Push Devnet.",
          ],
        },
        {
          id: 2,
          name: "pushmeet.vercel.app",
          icon: safariImg,
          kind: "file",
          fileType: "url",
          href: "https://pushmeet.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "pushmeet.png",
          icon: imageImg,
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: project1Img,
        },
        {
          id: 5,
          name: "GitHub.url",
          icon: plainImg,
          kind: "file",
          fileType: "url",
          href: "https://github.com/pandeymynk/pushmeet",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2 - BookingWay
    {
      id: 6,
      name: "BookingWay - Movie Tickets",
      icon: folderImg,
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "BookingWay Project.txt",
          icon: txtImg,
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "BookingWay is a full-stack movie ticket booking application inspired by BookMyShow, with a beautiful and modern UI.",
            "Features include user authentication (signup & login), movie selection, time slot selection, seat selection (A1-A4, D1-D2), and booking history.",
            "The frontend is built with React.js 18 using React Router DOM and Context API for state management with CSS3 animations.",
            "Backend uses Node.js with Express.js and MongoDB with Mongoose for data storage.",
          ],
        },
        {
          id: 2,
          name: "View on GitHub",
          icon: safariImg,
          kind: "file",
          fileType: "url",
          href: "https://github.com/pandeymynk/BOOKING-WAY-",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "bookingway.png",
          icon: imageImg,
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: project2Img,
        },
        {
          id: 5,
          name: "GitHub.url",
          icon: plainImg,
          kind: "file",
          fileType: "url",
          href: "https://github.com/pandeymynk/BOOKING-WAY-",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3 - ReviewOnChain
    {
      id: 7,
      name: "ReviewOnChain - Decentralized Reviews",
      icon: folderImg,
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "ReviewOnChain Project.txt",
          icon: txtImg,
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "ReviewOnChain is a fully decentralized review platform built on Internet Computer Protocol (ICP), ensuring transparency and authenticity.",
            "Unlike traditional systems where many reviews are influenced by companies with fake reviews, this platform provides customers with accurate and trustworthy results.",
            "The project decentralizes the review system, eliminating the manipulation common in centralized platforms.",
            "Built with Motoko programming language for backend canisters and React/JavaScript for the frontend, deployed on the Internet Computer.",
          ],
        },
        {
          id: 2,
          name: "View on GitHub",
          icon: safariImg,
          kind: "file",
          fileType: "url",
          href: "https://github.com/pandeymynk/reviewonchain",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "reviewonchain.png",
          icon: imageImg,
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: project3Img,
        },
        {
          id: 5,
          name: "GitHub.url",
          icon: plainImg,
          kind: "file",
          fileType: "url",
          href: "https://github.com/pandeymynk/reviewonchain",
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
      imageUrl: gal3Img,
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: imageImg,
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: gal4Img,
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: imageImg,
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: gal5Img,
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: txtImg,
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: gal1Img,
      description: [
        "Hey! I'm Mayank Pandey 👋, a passionate web developer who loves crafting sleek, interactive websites that deliver great user experiences.",
        "I specialize in JavaScript, React, and modern web technologies—building applications that are smooth, fast, and delightful to use.",
        "I'm passionate about clean UI, intuitive UX, and writing maintainable code that scales well.",
        "When I'm not coding, you'll find me exploring new tech, learning something new, or enjoying a good cup of coffee ☕",
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

// Check if we're on mobile - Finder should not auto-open on mobile
const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

const WINDOW_CONFIG = {
  finder: { isOpen: !isMobile, zIndex: INITIAL_Z_INDEX + 1, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  blog: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
