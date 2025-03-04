import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className=" p-2">
        <div className="d-flex justify-content-center gap-4 text-white text-lg">
          <Link to="/" className="text-decoration-none fs-5">
            <span>Form</span>
          </Link>
          <Link to="/show" className="text-decoration-none fs-5">
            <span>Show</span>
          </Link>
          {/* <Link to="/test">Test</Link> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
