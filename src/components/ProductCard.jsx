import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // use context here

  return (
    <div className="card border-0 shadow-sm h-100">

      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          style={{ height: "200px", objectFit: "cover" }}
        />
      </Link>

      <div className="card-body text-center d-flex flex-column">

        <Link
          to={`/product/${product.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <h6 className="card-title">{product.title}</h6>
        </Link>

        <p className="card-text fw-bold">${product.price}</p>

        <div className="mt-auto d-flex gap-2 justify-content-center">

          <Link
            to={`/product/${product.id}`}
            className="btn btn-outline-dark btn-sm"
          >
            View
          </Link>

          <button
            className="btn btn-dark btn-sm"
            onClick={() => addToCart(product)} 
          >
            Add
          </button>

        </div>
      </div>
    </div>
  );
};