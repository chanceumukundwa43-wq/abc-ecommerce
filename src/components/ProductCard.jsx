import { Link } from "react-router-dom";

const money = (value) => new Intl.NumberFormat("en-RW").format(value);

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image">{product.emoji}</div>

      <div className="product-card-body">
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-meta">
          <strong>{money(product.price)} RWF</strong>
          <span>⭐ {product.rating}</span>
        </div>

        <Link to={`/products/${product.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </article>
  );
}