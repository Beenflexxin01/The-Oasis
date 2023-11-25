import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkMode4Context = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-schema: dark").matchesr,
    "isDarkMode"
  );

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <DarkMode4Context.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkMode4Context.Provider>
  );
}

function useDaarkMode() {
  const context = useContext(DarkMode4Context);
  if (context === undefined)
    throw new Error("Dark mode context was used outside of dark mode provider");

  return context;
}

export { DarkModeProvider, useDaarkMode };
