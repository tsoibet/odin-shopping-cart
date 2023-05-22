import { Link } from "react-router-dom";

export default function Cart(props) {

  const amount = props.amount;
  const cart = props.cart;
  const updateCart = props.updateCart;

  return (
    <div className="Cart">
      <div className="title">
        Shopping Cart
      </div>
      {cart.length === 0 && <div>Your cart is empty.</div>}
      {cart.map(cartItem =>
      <CartItem 
        key={cartItem.item.id} 
        item={cartItem.item} 
        quantity={cartItem.quantity} 
        updateCart={updateCart}
      />
      )}
      <div className="amount">
        Total: ${amount} 
      </div>
      {cart.length > 0 && 
      <Link to="/checkout">
        <button className="checkout button">Check out</button>
      </Link>}
    </div>
  );
}

function CartItem(props) {
  
  const id = props.item.id;
  const imgPath = process.env.PUBLIC_URL + props.item.src;
  const name = props.item.name;
  const price = props.item.price;
  const quantity = props.quantity;
  const updateCart = props.updateCart;

  return (
    <div className="CartItem">
      <img src={imgPath} alt={name} />
      <div className="name">
        {name}
      </div>
      <div className="price">
        ${price}
      </div>
      <div className="quantity">
        <button onClick={() => {
          if (quantity > 1) {
            updateCart(id, quantity - 1);
          }
        }}>-</button>
        <input type="text" value={quantity} onChange={(event) => {
          if (Number(event.target.value) > 0) {
            updateCart(id, Number(event.target.value));
          }
        }} />
        <button onClick={() => updateCart(id, quantity + 1)}>+</button>
      </div>
      <div className="delete button">
        <button onClick={() => updateCart(id, 0)}>Delete</button>
      </div>
    </div>
  );
}