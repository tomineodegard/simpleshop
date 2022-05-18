import React from 'react'
import { useNavigate } from "react-router-dom";

import BasketContainer from '../components/BasketContainer';

export default function YourBasket() {

    let navigate = useNavigate();

    return (   
        <div>
            <button onClick={() =>{navigate("/Products")}}>Go back to products</button>
            <BasketContainer />
        </div>
    );
}