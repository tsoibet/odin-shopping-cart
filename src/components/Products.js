import { useState, useEffect } from 'react';

export default function Products(props) {

  const [products, setProducts] = useState([]);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL + '/data/data.json'}`)
    .then(response => response.json())
    .then(data => {
      setProducts(data);
      setFetchError(false);
    })
    .catch(error => {
      setFetchError(true);
    });
  }, []);

  return (
    <div className="Products">
      <div className="title">
        Products
      </div>
      {fetchError && <div>Oops, something went wrong. Please try again later.</div>}
      {!fetchError && !products.length && <div>No products yet. Coming soon!</div>}
      <div className="products">
        {!fetchError && products.map(product =>
        <Product 
          key={product.id} 
          product={product} 
          addToCart={props.addToCart} 
        />
        )}
      </div>
    </div>
  );
}

function Product(props) {
  
  const imgPath = process.env.PUBLIC_URL + props.product.src;
  const name = props.product.name;
  const price = props.product.price;
  const product = props.product;
  const addToCart = props.addToCart;

  return (
    <div className="Product">
      <img src={imgPath} alt={name} />
      <div className="name">
        {name}
      </div>
      <div className="price">
        ${price}
      </div>
      <div className="add button">
        <button onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
  );
}