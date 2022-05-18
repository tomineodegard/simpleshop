import { BasketContext } from "../contexts/BasketContext";
import { useContext } from "react";

export default function Product(props) {
    const { basket, setBasket } = useContext(BasketContext);


    function buy(){
        if (basket.find(item => item.id === props.product.id)) {
            setBasket(old => old.map(item => {
                if (item.id === props.product.id) {
                    const copy = { ... item};
                    copy.amount++;
                    return copy;
                }

                return item;
            }))
            }  else {
            setBasket((oldState) => [
                ... oldState, 
                { ... props.product, amount:1 }
            ]);
        }
    }

    return (
    <article className="product_card">
        <img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.product.id}.webp`} alt="product image"></img>
        <h2>{props.product.productdisplayname}</h2>
        <div className="product_info">
            <p>{props.product.price}</p>
            <button onClick={buy} >Add to basket</button>
        </div>
    </article>
    );
}