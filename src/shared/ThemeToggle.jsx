// components/ThemeToggle.js
import React, { useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button
      className={`rounded-full w-8 h-8 flex items-center justify-center ${
        isDarkMode ? "bg-gray-800" : "bg-gray-200"
      }`}
      onClick={toggleTheme}
    >
      {isDarkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
