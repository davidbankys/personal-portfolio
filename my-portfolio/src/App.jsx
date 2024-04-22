import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Headbar from "./components/headbar/Headbar";
import Intro from "./components/intro/Intro";
import Sidenav from "./components/sidenav/Sidenav";
import Portfolio from "./components/port/Portfolio";
import Skills from "./components/skills/Skills";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Headbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Sidenav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Skills />
      </div>
    </div>
  );
}

export default App;
