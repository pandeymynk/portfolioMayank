import React from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

import Terminal from "./windows/Terminal";
import { Navbar, Welcome, Dock, Home, MobileAppGrid } from "./components/index";
import {
  Finder,
  Resume,
  Safari,
  Text,
  Image,
  Contact,
  Photos,
  Blog,
} from "#windows";
function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <MobileAppGrid />
      <Dock />
      <Home />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
      <Blog />
    </main>
  );
}

export default App;
