import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Footer Menu */}
        <ul className="flex space-x-6 mb-4 md:mb-0">
          <li>
            <Link to="/" className="hover:text-blue-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/calendar" className="hover:text-blue-200">
              Calendar
            </Link>
          </li>
          <li>
            <Link to="/booking" className="hover:text-blue-200">
              Booking
            </Link>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-sm text-center md:text-right">
          © {new Date().getFullYear()} Brown Boi Blue. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
