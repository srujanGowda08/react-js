import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";

function App() {
  let arr = [0, 1, 2];
  let obj = {
    name: "srujan",
    age: 20,
  };
  return (
    <>
      <h1 className=" bg-green-700 text-black p-4 rounded-xl mb-10">
        Hello Tailwind!!
      </h1>
      <Card name="srujan" btntext="SUBSCRIBE"></Card>
      <Card name="Lilly"></Card>
    </>
  );
}

export default App;
