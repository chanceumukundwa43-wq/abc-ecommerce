import { useOutletContext } from "react-router-dom";

export default function Reviews() {
  const { product } = useOutletContext();

  return (
    <div>
      <h2>Customer Reviews</h2>
      <div className="reviews-list">
        {product.reviews.map((review, index) => (
          <article className="review-card" key={index}>
            <div className="review-top">
              <strong>{review.name}</strong>
              <span>{"⭐".repeat(review.rating)}</span>
            </div>
            <p>{review.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}