import { useOutletContext } from "react-router-dom";

export default function Specs() {
  const { product } = useOutletContext();

  return (
    <div>
      <h2>Product Specifications</h2>
      <ul className="spec-list">
        {product.specs.map((spec, index) => (
          <li key={index}>
            <span>✓</span>
            {spec}
          </li>
        ))}
      </ul>
    </div>
  );
}