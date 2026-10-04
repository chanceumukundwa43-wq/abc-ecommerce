import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home-page">
      <div className="container">
        <div className="hero">
          <div>
            <span className="eyebrow">ABC E-COMMERCE • KAYONZA</span>
            <h1>Shop smart. Shop simple. Shop with ABC.</h1>
            <p>
              Discover electronics, fashion and home products from an easy-to-use
              ReactJS e-commerce experience built for customers in Rwanda.
            </p>

            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">
                Browse Products
              </Link>
              <Link to="/products?category=electronics" className="btn btn-secondary">
                View Electronics
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-icon">🛍️</div>
            <h2>Quality products</h2>
            <p>Simple navigation, product filtering and detailed product pages.</p>
          </div>
        </div>

        <div className="feature-grid">
          <div className="feature">
            <span>🚚</span>
            <h3>Easy Shopping</h3>
            <p>Find products quickly with categories and price filters.</p>
          </div>
          <div className="feature">
            <span>🔒</span>
            <h3>Simple Profile</h3>
            <p>Keep your account information in one convenient place.</p>
          </div>
          <div className="feature">
            <span>⭐</span>
            <h3>Product Reviews</h3>
            <p>Read customer reviews and product specifications.</p>
          </div>
        </div>
      </div>
    </section>
  );
}