import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import './App.css';

import product00 from './resources/product-00.jpeg';
import product01 from './resources/product-01.jpeg';
import product02 from './resources/product-02.jpeg';
import product03 from './resources/product-03.jpeg';
import product04 from './resources/product-04.jpeg';
import product05 from './resources/product-05.jpeg';
import product06 from './resources/product-06.jpeg';
import product07 from './resources/product-07.jpeg';
import product08 from './resources/product-08.jpeg';
// import product09 from './resources/product-09.jpeg';

export default function App() {

  const products = [
    {id: 0, src: product00, name: "Tomato bib", price: 10}, 
    {id: 1, src: product01, name: `"I'm very hungry" bib`, price: 10}, 
    {id: 2, src: product02, name: "Duck duck duck Bib", price: 5}, 
    {id: 3, src: product03, name: "Yellow duck bib", price: 5}, 
    {id: 4, src: product04, name: "Grey bib", price: 5}, 
    {id: 5, src: product05, name: "Japanese onigiri cap", price: 30}, 
    {id: 6, src: product06, name: "Light blue denim cap", price: 30}, 
    {id: 7, src: product07, name: "Denim and yellow-dotted sun hat", price: 30}, 
    {id: 8, src: product08, name: "Sailor style bandana", price: 5} 
    // {id: 9, src: product09, name: "A", price: 5}
  ];
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
    <div className="App">
      <NavBar 
        number={quantity} 
        amount={amount} 
      />
      <div className="main">    
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={
            <Products 
              products={products} 
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
