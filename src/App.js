import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import './App.css';

export default function App() {

  const products = [
    {id: 0, name:"A", price: 5}, 
    {id: 1, name:"B", price: 20}, 
    {id: 2, name:"C", price: 1},
    {id: 3, name:"DD", price: 5}, 
    {id: 4, name:"EE", price: 20}, 
    {id: 5, name:"FF", price: 1}
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className="footer">
        Created by tsoibet @ The Odin Project 2023
      </div>
    </div>
  );
}
