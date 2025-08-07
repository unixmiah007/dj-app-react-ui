import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Brown Boi Blue</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/calendar" className="hover:text-blue-400">
              Calendar
            </Link>
          </li>
          <li>
            <Link to="/booking" className="hover:text-blue-400">
              Booking
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
