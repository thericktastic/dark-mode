import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

// This function
export const useDarkMode = (key, initialValue) => {
  // This calls useLocalStorage and passes in the key I want to use to store whether or not dark mode is enabled.
  // This hook returns an array with a value and a setter in an array, exactly like the state hook.
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

  useEffect(() => {
    if (darkMode) {
      document.querySelector("body").classList.add("dark-mode");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
