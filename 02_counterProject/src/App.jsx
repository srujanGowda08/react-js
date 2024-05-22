import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  const addCount = () => {
    if (count === 20) {
      alert("Max Count Reached");
      return;
    }
    count = count + 1;
    setCount(count);
  };
  const removeCount = () => {
    if (count === 0) {
      alert("Min Count Reached");
      return;
    }
    count = count - 1;
    setCount(count);
  };
  return (
    <>
      <h1>
        welcome to the React JS <br /> Counter Project
      </h1>
      <p>count : {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={removeCount}>Remove</button>
    </>
  );
}

export default App;
