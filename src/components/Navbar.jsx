import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

// This code renders the NavBar element and contains the switch for dark mode functionality.
const Navbar = () => {
  // Rather than using setState,
  const [darkMode, setDarkMode] = useDarkMode('key');
  console.log(darkMode);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  // This code returns the Navbar component 
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
