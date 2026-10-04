import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>ABC E-commerce</h3>
          <p>Online shopping made simple in Kayonza, Rwanda.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/profile">User Profile</Link>
          </div>
        </div>

        <div>
          <h4>Location</h4>
          <p>Kayonza District, Eastern Province, Rwanda</p>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} ABC E-commerce. All rights reserved.
      </div>
    </footer>
  );
}