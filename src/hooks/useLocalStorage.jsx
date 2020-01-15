import { useState } from "react";

// This code creates the localStorage function and passes it the key and initialValue parameters.
// While this was built to be used inside our dark mode hook, it can be used anywhere for any kind of localStorage needs I may have in my apps.

export const localStorage = (key, initialValue) => {
  // Within the function, state is set up as storedValue.
  // This state property takes a function as its initial Value.
  // This is the value function - below the value function is the setter function.
  const [storedValue, setStoredValue] = useState(() => {
    // Whatever the callback function returns is what gets set as the initialValue for the state property (storedValue)

    const item = window.localStorage.getItem(key);

    // In the callback function, we check to see if the item we passed in already exists in localStorage, and return that value, otherwise we return whatever initialValue was passed in.
    return item ? JSON.parse(item) : initialValue;
    // To pass in arrays or objects to localStorage, we need to parse it into JSON. Then when we retrieve it, we need to parse it back into regular Javascript.
  });

  // This is the setter function
  const setValue = value => {
    // Save state based on value parameter
    setStoredValue(value);

    // Set value to localStorage using the same key passed into the hook itself.
    value = window.localStorage.setItem(key, JSON.stringify(value));
  };

  // Now we return storedValue and setValue from this hook in an array.
  return [storedValue, setValue];
};
