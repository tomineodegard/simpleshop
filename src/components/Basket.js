import { BasketContext } from "../contexts/BasketContext";
import { useContext } from "react";
import BasketItem from "../components/BasketItem";

export default function Basket() {
    
    const { basket, setBasket } = useContext(BasketContext);

    // calculates the total price
    const initialValue = 0;
    const sumWithInitial = basket.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount * currentValue.price,
    initialValue
    );

    
    function remove(id){
        setBasket((old) => old.filter((item) => item.id !== id));
    }

    return (
        <div>
          <h3>
            {basket
              .map((product) => product.amount)
              .reduce((previousValue, currentValue) => previousValue + currentValue, 0)}{" "}
              items in your basket
          </h3>
          <article>
            {basket.map((item) => (
              <BasketItem key={item.id} item={item} />
            ))}
          </article>
          <div>
            {basket.map((item) => (
              <table>
                <tr>
                  <th>{item.productdisplayname}</th>
                </tr>
                <tr>
                  <td>
                    {item.price} * {item.amount} = {item.price * item.amount} DKK
                  </td>
                </tr>
              </table>
            ))}
            <p>
              Total price: <strong>{sumWithInitial} DKK</strong> 
            </p>
          </div>
        </div>
      );
    }