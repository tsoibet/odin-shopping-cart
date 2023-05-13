export default function Products(props) {

  const products = props.products;

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
  
  const name = props.product.name;
  const price = props.product.price;
  const product = props.product;
  const addToCart = props.addToCart;

  return (
    <div className="Product">
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