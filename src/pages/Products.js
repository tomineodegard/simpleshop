import React from 'react'

import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BasketContext } from "../contexts/BasketContext";

import ProductList from '../components/ProductList';

function Products() {
    const { basket } = useContext(BasketContext);
    const [ products, setProducts ] = useState([]);

  useEffect(() => {
    async function getProducts(){
      const res = await fetch("https://kea-alt-del.dk/t7/api/products")
      const data = await res.json();
      setProducts(data);
    }
    getProducts();
  }, [])


let navigate = useNavigate();

  return (
    <div>

      <h3>In your basket (
        {basket
          .map((product) => product.amount)
          .reduce((previousValue, currentValue) => previousValue + currentValue, 0)}{" "}
        items)
      </h3>
        <button onClick={() =>{navigate("/YourBasket")}}>See your basket</button>
        <h1>Simple shop - products</h1>
        <ProductList products={products} />
    </div>
  );
}

export default Products