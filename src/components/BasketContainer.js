import Basket from "./Basket";
import CheckoutForm from "./CheckoutForm";

export default function BasketContainer(props) {
    return (
        
        <section className="basket_container">
            <Basket setBasket={props.setBasket} basket={props.basket} />
            <CheckoutForm/>
        </section>
    );
}