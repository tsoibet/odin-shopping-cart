import product00 from '../resources/product-00.jpeg';
import product01 from '../resources/product-01.jpeg';
import product02 from '../resources/product-02.jpeg';
import product03 from '../resources/product-03.jpeg';
import product04 from '../resources/product-04.jpeg';
import product05 from '../resources/product-05.jpeg';
import product06 from '../resources/product-06.jpeg';
import product07 from '../resources/product-07.jpeg';
import product08 from '../resources/product-08.jpeg';
// import product09 from './resources/product-09.jpeg';

export default function Products(props) {

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

  return (
    <div className="Products">
      <div className="title">
        Products
      </div>
      <div className="products">
        {products.length === 0 && <div>No products yet. Coming soon!</div>}
        {products.map(product =>
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
  
  const img = props.product.src;
  const name = props.product.name;
  const price = props.product.price;
  const product = props.product;
  const addToCart = props.addToCart;

  return (
    <div className="Product">
      <img src={img} alt={name} />
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