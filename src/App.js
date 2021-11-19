import react from "react";
import "./App.css";
import UserCart from "./components/UserCart";
import Product from "./components/Product";
import formatPrice from "./helpers/formatPrice";
import CheckoutCartForm from "./components/CheckoutCartForm";

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      subTotal: 0,
      userCart: [],
    };
  }

  
  checkout = (event) => {
    event.preventDefault();
    let check = true;
    let invalid = "Input is not valid";
    let complete = `Purchase complete. You will be charged ${formatPrice(
      this.state.subTotal)}.`;
      if (!event.target.first.value || !event.target.last.value) {
        invalid += "Please enter a name";
        check = false;
      } else if (event.target.credit.value.length !== 16) {
        invalid += "Credit card number is not valid";
        check = false;
      } else if (event.target.zip.value.length < 5) {
        invalid += "Zip code is not valid";
        check = false;
      } else if (check) {
        alert(complete);
      } else {
        alert(invalid);
      }
    };



    addToCart = (event) => {
      this.setState({
        userCart: [...this.state.userCart,
          { name: event.target.name, price: event.target.value },],
        subTotal: (this.state.subTotal += Number(event.target.value)),
      });
    };


    
  render() {
    return (
      <div className="app" id="app-container">
        <div className="left">
          <h1>Shopping Bag</h1>
          <Product addToCart={this.addToCart} />
        </div>
        <div className="right">
          <UserCart items={this.state.userCart} />
          <CheckoutCartForm checkout={this.checkout} />
        </div>
      </div>
    );
  }
}

export default App;