import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const { cart, increase, decrease, removeItem } = useCart();
  const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
  const navigate = useNavigate();

  return (
    <div className="container mt-5 bg-secondary w-75 rounded-3" style={{ minHeight: "75vh" }}>
      <h2 className="text-center py-4">Cart</h2>
 
      {cart.length === 0 ? (
        <h4 className="text-center py-5">Your cart is empty</h4>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="d-flex justify-content-between text-center rounded-4  border p-3 mb-3">

              <img src={item.image} width="80" />

              <div>
                <h6>{item.title}</h6>
                <p>${item.price}</p>
              </div>

              <div>
                <button onClick={() => decrease(item.id)}>-</button>
                <span className="mx-3">{item.quantity}</span>
                <button onClick={() => increase(item.id)}>+</button>
              </div>

              <button onClick={() => removeItem(item.id)}>
                Remove
              </button>

            </div>
          ))}

          <h4 className="text-center py-3">Total: ${total}</h4>
          <div className="d-flex justify-content-center">
              <button
                className="btn btn-dark"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
        </div>
        </>
      )}
    </div>
  );
};

export default Cart;