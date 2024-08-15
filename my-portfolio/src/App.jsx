import React, { useState, useEffect } from "react";
import "./App.scss";
import Headbar from "./components/headbar/Headbar";
import Intro from "./components/intro/Intro";
import Sidenav from "./components/sidenav/Sidenav";
import Portfolio from "./components/port/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contacts/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Apply dark mode class to <html> on initial load
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Headbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Sidenav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;