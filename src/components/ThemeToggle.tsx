import React, { useState } from "react";
import { ThemeContext, themes } from "../theme/themeContext";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(themes.dark);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeContext.Consumer>
      {({ changeTheme }) => (
        <button
          className=" bg-green-500 p-1 ml-1 rounded"
          color="link"
          onClick={() => {
            setDarkMode(!darkMode);
            changeTheme(darkMode ? themes.light : themes.dark);
          }}
        >
          {darkMode ? (
            <RiMoonFill size={20} color="#072A6C" />
          ) : (
            <RiSunLine size={20} color="#fff" />
          )}
        </button>
      )}
    </ThemeContext.Consumer>
  );
}
