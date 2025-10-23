import React, { useState, useEffect } from "react";
import styles from "../styles/themeToggle.module.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === "dark" ? "light" : "dark");

  return (
    <button onClick={toggleTheme} className={styles.toggle} aria-label="Toggle Theme">
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
