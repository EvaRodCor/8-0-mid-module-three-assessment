import formatPrice from "../helpers/formatPrice";

const UserCart = (props) => {
  let array = [];
  let total = 0;
  props.items.forEach((item) => {
    array.push(
      <li>
        {item.name}: {formatPrice(Number(item.price))}
      </li>
    );
    total += Number(item.price);
  });

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>{array}</ul>
      <h3>Total: {formatPrice(total)}</h3>
    </div>
  );
};

export default UserCart;