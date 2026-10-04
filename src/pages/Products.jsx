import { Link, useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");
  const price = searchParams.get("price");

  let filteredProducts = products.filter((product) => {
    const categoryMatch = category
      ? product.category.toLowerCase() === category.toLowerCase()
      : true;

    let priceMatch = true;
    if (price === "low") priceMatch = product.price < 100000;
    if (price === "high") priceMatch = product.price >= 100000;

    return categoryMatch && priceMatch;
  });

  const activeFilter =
    category || price
      ? [category && `category: ${category}`, price && `price: ${price}`]
          .filter(Boolean)
          .join(" • ")
      : "All products";

  function clearFilters() {
    setSearchParams({});
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-heading">
          <div>
            <span className="eyebrow">PRODUCT CATALOG</span>
            <h1>Products</h1>
            <p>Use URL parameters to filter the products.</p>
          </div>
          <span className="filter-badge">{activeFilter}</span>
        </div>

        <div className="filter-panel">
          <strong>Filters:</strong>
          <Link to="/products" className="filter-link">All</Link>
          <Link to="/products?category=electronics" className="filter-link">
            Electronics
          </Link>
          <Link to="/products?category=fashion" className="filter-link">
            Fashion
          </Link>
          <Link to="/products?category=home" className="filter-link">
            Home
          </Link>
          <Link to="/products?price=low" className="filter-link">
            Low price
          </Link>
          <Link to="/products?price=high" className="filter-link">
            High price
          </Link>
          {(category || price) && (
            <button className="filter-clear" onClick={clearFilters}>
              Clear
            </button>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>No products found</h2>
            <p>Try another category or price filter.</p>
            <button className="btn btn-primary" onClick={clearFilters}>
              Show All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}