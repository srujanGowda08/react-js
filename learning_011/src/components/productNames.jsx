const ProductName = ({ itemnames, index }) => {
  return (
    <div
      key={index}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <p>{itemnames}</p>
      <button style={{ height: 30, width: 50 }}>click</button>
    </div>
  );
};

export default ProductName;
