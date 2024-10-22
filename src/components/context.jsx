import React, { createContext, useContext, useState } from 'react';

// Create a context
const MyContext = createContext();

// Create a provider component
export const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState('');  // Add state for word

  return (
    <MyContext.Provider value={{ count, setCount, word, setWord }}>
      {children}
    </MyContext.Provider>
  );
};

// Create a custom hook to use the context
export const useMyContext = () => {
  return useContext(MyContext);
};

// Example component using the context
export const Counter = () => {
  const { count, setCount, word, setWord } = useMyContext();

  const displayWord = () => {
    setWord('Hello World!');  // Set a word when the button is clicked
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <button onClick={displayWord}>Display Word</button>
      {word && <p>{word}</p>} {/* Show the word when it's not an empty string */}
    </div>
  );
};

// Usage in a parent component
const App = () => {
  return (
    <MyContextProvider>
      <Counter />
    </MyContextProvider>
  );
};

export default App;
