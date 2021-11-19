//Import product data and for each here
import data from "../data/productData";
import formatPrice from "../helpers/formatPrice";
const Item = (props) => {
let arrayItem = [];
data.forEach((item) => {
    arrayItem.push(
    <div className="product">
        <h2>{item.name}</h2>
        <p>Price: {formatPrice(item.price)}</p>
        <button
        type="submit"
        onClick={props.addToCart}
        name={item.name}
        value={item.price}>

        Add To Cart
        
        </button>
        <p/>
        <img src={item.img} alt={item.id}/>
        <p>{item.description}</p>
    </div>
    );
});
return <div className="products">{arrayItem} </div>;
};

export default Item;