import { useCart } from "../Context/CartContext";
import { useState } from "react";

const Checkout = () => {
  const { cart } = useCart();

  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    phone: "",
    payment: "COD"
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    if (!form.name || !form.address || !form.phone) {
      alert("Please fill all required fields");
      return;
    }

    alert("Order placed successfully!");
    console.log("Order Data:", { cart, form, total });
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>

      <div className="row mt-4">

        <div className="col-md-6">
          <h4>Shipping Details</h4>

          <input
            name="name"
            className="form-control mb-2"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            name="address"
            className="form-control mb-2"
            placeholder="Address"
            onChange={handleChange}
          />

          <input
            name="city"
            className="form-control mb-2"
            placeholder="City"
            onChange={handleChange}
          />

          <input
            name="pincode"
            className="form-control mb-2"
            placeholder="Pincode"
            onChange={handleChange}
          />

          <input
            name="phone"
            className="form-control mb-2"
            placeholder="Phone"
            onChange={handleChange}
          />

          <h4 className="mt-3">Payment Method</h4>

          <select
            name="payment"
            className="form-control mb-3"
            onChange={handleChange}
          >
            <option value="COD">Cash on Delivery</option>
            <option value="UPI">UPI</option>
            <option value="Card">Card</option>
          </select>

          <button className="btn btn-dark w-100" onClick={handleOrder}>
            Place Order
          </button>
        </div>

        <div className="col-md-6">
          <h4>Order Summary</h4>

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map(item => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between border-bottom py-2"
                >
                  <span>
                    {item.title} x {item.quantity}
                  </span>
                  <span>${item.price * item.quantity}</span>
                </div>
              ))}

              <h5 className="mt-3">Total: ${total}</h5>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default Checkout;