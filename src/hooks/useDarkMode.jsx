import useLocalStorage from './useLocalStorage';

// This function 
export const useDarkMode = key => {

    // This calls useLocalStorage and passes in the key I want to use to store whether or not dark mode is enabled.
    // This hook returns an array with a value and a setter in an array, exactly like the state hook.
    const [value, setValue] = useLocalStorage(key)
}