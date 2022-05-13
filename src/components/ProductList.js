import Product from "./Product";

export default function ProductList({ products, setBasket, basket }) {
    return (
        <section className="product_list">
            {products.map(p => (
                <Product key={p.id} setBasket={setBasket} basket={basket} product={p}/>
            ))}
        </section>
    );
}