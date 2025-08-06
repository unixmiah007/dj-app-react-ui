import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-6 justify-center">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/about" className="hover:underline">
        About
      </Link>
      <Link to="/calendar" className="hover:underline">
        Calendar
      </Link>
      <Link to="/booking" className="hover:underline">
        Booking
      </Link>
    </nav>
  );
};

export default Navbar;
