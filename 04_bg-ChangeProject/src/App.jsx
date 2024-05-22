import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className=" fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-xl ">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 text-white rounded-full py-1"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 text-white rounded-full py-1"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 text-white rounded-full py-1"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 text-white rounded-full py-1"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 text-white rounded-full py-1"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
    //
  );
}

export default App;