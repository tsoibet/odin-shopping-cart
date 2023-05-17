import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import './App.css';

export default function App() {

  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => updateQuantityAndAmount(), [cart]);

  function updateQuantityAndAmount() {
    let quantity = 0;
    let amount = 0;
    for (let cartItem of cart) {
      quantity += Number(cartItem.quantity);
      amount += Number(cartItem.item.price) * Number(cartItem.quantity);
    }
    setQuantity(quantity);
    setAmount(amount);
  }

  function addToCart(product) {
    let newCart = [...cart];
    for (let cartItem of newCart) {
      if (cartItem.item.id === product.id) {
        cartItem.quantity += 1;
        setCart(newCart);
        return;
      }
    }
    newCart = [...cart, {item: product, quantity: 1}];
    setCart(newCart);
  }

  function updateCart(id, quantity) {
    if (quantity) {
      const newCart = [...cart];
      for (let cartItem of newCart) {
        if (cartItem.item.id === id) {
          cartItem.quantity = quantity;
          break;
        }
      }
      setCart(newCart);
    } else {
      const newCart = cart.filter(cartItem => cartItem.item.id !== id);
      setCart(newCart);
    }
  }

  function resetCart() {
    setCart([]);
  }

  return (
    <div className={useLocation().pathname === '/' ? "App home" : "App"}>
      <NavBar 
        number={quantity} 
        amount={amount} 
      />
      <div className="main">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={
            <Products 
              addToCart={addToCart} 
            />} />
          <Route path="/cart" element={
            <Cart 
              cart={cart} 
              amount={amount} 
              updateCart={updateCart} 
            />} />
          <Route path="/checkout" element={
            <Checkout 
              resetCart={resetCart} 
            />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className="footer">
        Created by tsoibet @ The Odin Project 2023
      </div>
    </div>
  );
}
