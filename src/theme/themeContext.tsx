import { createContext } from "react";
import React, { useState, useEffect } from "react";

export const themes = {
  dark: "",
  light: "light-theme",
};

export const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: () => {},
});

export default function ThemeContextWrapper(props: any) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme: any) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add("light-theme");
        break;
      case themes.dark:
      default:
        document.body.classList.remove("light-theme");
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
