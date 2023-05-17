import { useEffect } from "react";

export default function Checkout(props) {

  const resetCart = props.resetCart;
  useEffect(resetCart, []);

  return (
    <div className="Checkout">
      <h1>
        Thank you for your order!
      </h1>
    </div>
  );
}