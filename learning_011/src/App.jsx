import ProductItem from "./components/productItems";

const productnames = ["product1", "product2", "product3"];
function App() {
  return <ProductItem name="srujan" city="Hassan" list={productnames} />;
}

export default App;
