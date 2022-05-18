import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  return (
    <div>
        <h1>Welcome to my Simple shop</h1>
        <button onClick={() =>{navigate("/Products")}}>Let's go shopping!</button>
    </div>
  );
}