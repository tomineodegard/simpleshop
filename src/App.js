import {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { BasketProvider } from "./contexts/BasketContext";


import styles from "./App.css";

// ---- importing pages/routes
import YourBasket from "./pages/YourBasket";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ErrorPage from "./pages/ErrorPage";

function App() {

  return (
    <div className="App">

      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Products">Products</Link>
          <Link to="/YourBasket">Basket</Link>
        </nav>
      <BasketProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/YourBasket" element={<YourBasket/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BasketProvider>
      </Router>
    </div>
  );
}

export default App;
