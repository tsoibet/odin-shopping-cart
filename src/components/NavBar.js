import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className="NavBar">
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="cart">
                <div>
                  Cart:
                </div>
                <div className="number">
                  {props.number}
                </div>
                <div className="amount">
                  (${props.amount})
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}