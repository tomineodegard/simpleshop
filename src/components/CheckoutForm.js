import {useRef} from "react"

export default function CheckoutForm() {
    const formElement = useRef(null);

    function submitted (e) {
        e.preventDefault();
        console.log(formElement.current.elements.fullname.value);
        console.log(formElement.current.elements.email.value);
    }

    return (
        <div className="checkout_form">
            <h5>* Please enter your contact info to complete the checkout</h5>
            <form ref={formElement} onSubmit={submitted}>
                
                <label htmlFor="fullname">Full name</label>
                <input  required type="text" name="fullname" id="fullname" />

                <label htmlFor="email">Email</label>
                <input required type="text" name="email" id="email" />
                <button>Proceed to checkout</button>
            </form>
        </div>
    );
}