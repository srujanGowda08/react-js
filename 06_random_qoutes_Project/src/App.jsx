import { useState } from "react";
import Quote from "./components";

function App() {
  return (
    <div
      style={{
        margin: "0 auto",
        marginTop: "10%",
        height: "200px",
        width: "600px",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "10px",
        maxWidth: "600px",
      }}
    >
      <Quote />
    </div>
  );
}

export default App;
