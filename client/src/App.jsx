import React from "react";
import { useState, useEffect } from "react";
import "./index.css";
import Dashboard from "./components/Dashboard";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  // Theme state initialization
  const [theme, setTheme] = useState(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Effect to apply theme class
  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app-container">
      <div className="dashboard-container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
