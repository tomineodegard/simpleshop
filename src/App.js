import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import BasketContainer from "./components/BasketContainer";
import styles from "./App.css";

function App() {
  return (
    <div className="App">
      <Nav/>
      <ProductList/>
      <BasketContainer/>
    </div>
  );
}

export default App;
