const CheckoutCartForm = (props) => {
    return (
        <div className="checkout-Container">
        <h2>Checkout</h2>
        <form id="checkout" onSubmit={props.checkoutCartForm}>
                <label for="first">First Name </label>
                <input type="text" id="first" name="first" />
                <label for="last">Last Name </label>
                <input type="text" id="last" name="last" />
                <label for="email">Email </label>
                <input type="email" id="email" name="email" />
                <label for="credit">Credit Card</label>
                <input type="number" id="credit" name="credit" />
                <label for="zip">Zip Code</label>
                <input type="number" id="zip" name="zip" />
                <button type="submit" className="buy">
            Buy Now
        </button>
        </form>
    </div>
    );
};

export default CheckoutCartForm;