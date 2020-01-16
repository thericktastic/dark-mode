import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

// This function
export const useDarkMode = (key, initialValue) => {
  // This calls useLocalStorage and passes in the key I want to use to store whether or not dark mode is enabled.
  // This hook returns an array with a value and a setter in an array, exactly like the state hook.
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);
  console.log("This is darkMode: ", darkMode)
  console.log("This is setDarkMode: ", setDarkMode)

  //  useEffect is implemented here to add/remove the dark-mode class to the body element.
  // The if statement checks to see if (darkMode === true), which represents the switch being turned on (false = turned off).
  // If the switch is on/true, the if statement attaches the dark-mode class to the body element. If the switch is off/false, the if statement removes the dark-mode class.
  useEffect(() => {
    if (darkMode) {
      document.querySelector("body").classList.add("dark-mode");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
    }
    // the dependency array is set to darkMode so useEffect is watching the value of darkMode to render the DOM
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
