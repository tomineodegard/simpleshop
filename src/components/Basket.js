export default function Basket(props) {

    const initialValue = 0;
    const sumWithInitial = props.basket.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount * currentValue.price,
    initialValue
    );

    
    function remove(id){
        props.setBasket((old) => old.filter((item) => item.id !== id));
    }


    return (
        <div>
            <h3>Your basket</h3>
            <ul>
                {props.basket.map(item => {
                    return (
                        <li key={item.id}>
                                <button onClick={()=>remove(item.id)}>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="16" height="16" 
                                        fill="currentColor" 
                                        className="bi bi-bag-x" 
                                        viewBox="0 0 16 16"
                                    >
                                        <path 
                                            fillRule="evenodd" 
                                            d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 0 1 0-.708z"
                                        />
                                        
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                        </svg>
                                </button>
                            <div className="basket_div">
                                <h4>{item.productdisplayname}</h4>  
                            </div>
                            <div className="basket_div">
                                <p>${item.price}</p>
                                <p>{item.amount}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <p>Total sum: ${sumWithInitial}</p>
            <hr></hr>
        </div>
    );
}