import { useNavigate } from "react-router-dom";

export const Main = ({ setCategory }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid bg-secondary text-center text-white w-75 py-5 my-5 rounded-5 shadow-sm">
        <h1>Big Sale is Live</h1>
        <p>Up to 50% off on all items</p>
        <button
          className="btn btn-light"
          onClick={() => navigate("/products")}
        >
          Shop Now
        </button>
      </div>

      <div className="container mt-5">
        <h4 className="mb-3">Shop by Category</h4>

       <div className="d-flex gap-3 flex-wrap">
          <button onClick={() => setCategory("Shoes")} className="btn btn-outline-dark">Shoes</button>
          <button onClick={() => setCategory("Watches")} className="btn btn-outline-dark">Watches</button>
          <button onClick={() => setCategory("Clothing")} className="btn btn-outline-dark">Clothing</button>
          <button onClick={() => setCategory("Electronics")} className="btn btn-outline-dark">Electronics</button>
        </div>
      </div>
    </>
  );
};