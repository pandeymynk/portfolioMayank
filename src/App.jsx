import React from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

import Terminal from "./windows/Terminal";
import { Navbar, Welcome, Dock } from "./components/index";
function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
    </main>
  );
}

export default App;
