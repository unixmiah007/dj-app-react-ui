import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaSpotify, FaApple, FaSoundcloud, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        {/* Left Side: Menu + Social Icons */}
        <div className="flex flex-col items-center md:items-start">
          {/* Footer Menu */}
          <ul className="flex space-x-6 mb-4">
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

          {/* Social Icons */}
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.instagram.com/brownboiblue" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <FaInstagram />
            </a>
            <a href="https://open.spotify.com/artist/2kIqscPQnM71I0vLQ5y8uH" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <FaSpotify />
            </a>
            <a href="https://music.apple.com/us/artist/brownboiblue/1685829162" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <FaApple />
            </a>
            <a href="https://soundcloud.com/brownboiblue" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <FaSoundcloud />
            </a>
            <a href="https://x.com/brownboiblue" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Right Side: Copyright */}
        <p className="text-sm mt-4 md:mt-0 md:text-right">
          © {new Date().getFullYear()} Brown Boi Blue. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
