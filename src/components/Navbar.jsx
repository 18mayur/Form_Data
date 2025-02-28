import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-cyan-500 p-2">
        <ul className="flex justify-center gap-4 text-white text-lg">
          <li>
            <Link to="/">Form</Link>
          </li>
          <li>
            <Link to="/show">show</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
