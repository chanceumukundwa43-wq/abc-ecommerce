import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="not-found">
          <div className="error-number">404</div>
          <h1>Page Not Found</h1>
          <p>The URL you entered does not match any page in ABC E-commerce.</p>
          <Link to="/" className="btn btn-primary">
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
}