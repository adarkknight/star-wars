import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/" className="navbar bg-yellow-300 justify-center">
      <button className="btn btn-ghost text-xl font-bold">
        STAR WARS DATA
      </button>
    </Link>
  );
};

export default Navbar;
