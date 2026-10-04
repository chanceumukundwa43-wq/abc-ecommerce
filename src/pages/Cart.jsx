import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-heading">
          <div>
            <span className="eyebrow">SHOPPING CART</span>
            <h1>Your Cart</h1>
          </div>
        </div>

        <div className="empty-state cart-state">
          <div className="large-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add products from the product catalog to see them here.</p>
          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}