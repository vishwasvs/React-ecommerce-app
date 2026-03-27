import { useParams } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const products = [
  {
    id: 1,
    title: "Shoes",
    price: 100,
    image: "https://th.bing.com/th/id/OIP.VjGpdDhQBcHOSVgnIuLPUAHaE8"
  },
  {
    id: 2,
    title: "Watch",
    price: 200,
    image: "https://th.bing.com/th?id=OIF.6xWsnAwpfR1B0WI28M%2fanQ"
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="container mt-5">
      <img src={product.image} width="300" />
      <h2>{product.title}</h2>
      <h4>${product.price}</h4>

      <button
        className="btn btn-dark"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;