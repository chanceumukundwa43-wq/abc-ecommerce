import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="page-section">
        <div className="container empty-state">
          <h1>Product Not Found</h1>
          <p>The product you requested does not exist.</p>
          <Link to="/products" className="btn btn-primary">
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="container">
        <Link to="/products" className="back-link">← Back to Products</Link>

        <div className="details-card">
          <div className="details-image">{product.emoji}</div>
          <div>
            <span className="category">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="details-description">{product.description}</p>
            <div className="details-price">
              {new Intl.NumberFormat("en-RW").format(product.price)} RWF
            </div>
            <div className="rating">⭐ {product.rating} / 5</div>
          </div>
        </div>

        <div className="nested-nav">
          <NavLink
            to={`/products/${product.id}/reviews`}
            className={({ isActive }) => isActive ? "nested-link active" : "nested-link"}
          >
            Reviews
          </NavLink>
          <NavLink
            to={`/products/${product.id}/specs`}
            className={({ isActive }) => isActive ? "nested-link active" : "nested-link"}
          >
            Specifications
          </NavLink>
        </div>

        <div className="nested-content">
          <Outlet context={{ product }} />
        </div>
      </div>
    </section>
  );
}