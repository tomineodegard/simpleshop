import { useContext } from "react";
import { BasketContext } from "../contexts/BasketContext";

export default function BasketItem(props) {
  const { basket, setBasket } = useContext(BasketContext);

  function removeProduct(id) {
    setBasket((oldState) => oldState.filter((item) => item.id !== id));
  }
  console.log(basket);

  function changeCount(operator, id) {
    setBasket((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          const copy = {
            ...item,
            amount:
              operator === "plus"
                ? item.amount + 1
                : item.amount > 1
                ? item.amount - 1
                : item.amount,
          };

          return copy;
        }
        return item;
      })
    );
  }

  return (
    <article>
        <img
          src={`https://kea-alt-del.dk/t7/images/webp/640/${props.item.id}.webp`}
          alt="product image in basket"
        />

          <div>
            <h4>{props.item.articletype}</h4>
            <p>{props.item.productdisplayname}</p>
            <p>
              <strong>{props.item.price * props.item.amount}</strong> DKK
            </p>
          </div>

          <div>
            <div>
              <button
                data-task="minus"
                onClick={() => changeCount("minus", props.item.id)}
              >
                -
              </button>
              <span>{props.item.amount}</span>
              <button
                data-task="plus"
                onClick={() => changeCount("plus", props.item.id)}
              >
                +
              </button>
            </div>
            <button onClick={() => removeProduct(props.item.id)}>
              Remove item from basket
            </button>
          </div>
    </article>
  );
}