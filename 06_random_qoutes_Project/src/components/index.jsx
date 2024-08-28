import { useEffect, useState } from "react";

function Quote() {
  const [quote, setquote] = useState("click to generate random quote");

  async function generateRandomQuote() {
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      setquote(data.quote);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Random Quotes</h1>
        <button onClick={generateRandomQuote} style={{ height: 40 }}>
          Generate
        </button>
      </div>
      <div
        style={{
          fontSize: "1.2rem",
          fontFamily: "Arial, sans-serif",
          color: "black",
          backgroundColor: "lightgray",
        }}
      >
        <p>{quote}</p>
      </div>
    </>
  );
}

export default Quote;
