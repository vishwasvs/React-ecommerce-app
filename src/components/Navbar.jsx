import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="d-flex justify-content-center mt-3">
      <div className="bg-secondary px-5 py-3 w-50 d-flex justify-content-between rounded-pill shadow-sm">

        <NavLink className="text-decoration-none text-light text-center" to="/">Home</NavLink>
        <NavLink className="text-decoration-none text-light text-center" to="/products">Product </NavLink>
        <NavLink className="text-decoration-none text-light text-center" to="/cart">Cart </NavLink>
        <NavLink className="text-decoration-none text-light text-center" to="/About">About</NavLink>
        <NavLink className="text-decoration-none text-light text-center" to="/contact">Contact</NavLink>

      </div>
    </nav>
  );
};