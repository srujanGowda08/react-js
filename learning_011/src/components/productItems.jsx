import ProductName from "./productNames";
import { useEffect, useState } from "react";

const initialState = false;
function ProductItem({ name, city, list }) {
  const [toggle, setToggle] = useState(initialState);
  const renderText = () => {
    setToggle(!toggle);
  };

  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setToggle(!initialState);
  }, []);

  const [maxCount, setMaxCount] = useState(false);
  useEffect(() => {
    if (count >= 10) {
      setMaxCount(true);
    }
  }, [count]);

  return (
    <div style={{ width: 300 }}>
      <h1>PRODUCT NAMES</h1>
      <ul>
        {list.map((items, index) => (
          <ProductName itemnames={items} index={index} />
        ))}
      </ul>
      <button onClick={renderText}>Toggle</button>
      {toggle ? (
        <h1>
          {name} and {city}
        </h1>
      ) : (
        <h1>hello retry</h1>
      )}

      <div>
        <button
          onClick={increaseCount}
          style={{
            backgroundColor: maxCount ? "red" : null,
            color: maxCount ? "white" : null,
          }}
        >
          Increase Count
        </button>
        <p>count : {count}</p>
        {maxCount ? <h1>maximum Count Reached</h1> : null}
      </div>
    </div>
  );
}

export default ProductItem;
