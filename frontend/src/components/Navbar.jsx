import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaSpotify, FaApple, FaSoundcloud } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Logo = () => {
  return (
    <svg viewBox="0 0 300 120" className="h-20 w-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="brownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#D4A574", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#CD853F", stopOpacity:1}} />
        </linearGradient>
        <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#FFD700", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#FFA500", stopOpacity:1}} />
        </linearGradient>
        <linearGradient id="lightBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#87CEEB", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#B0E0E6", stopOpacity:1}} />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#00000040"/>
        </filter>
      </defs>
      
      {/* Background circle with white outline */}
      <circle cx="60" cy="60" r="47" fill="#FFFFFF" opacity="0.1"/>
      <circle cx="60" cy="60" r="45" fill="url(#brownGradient)" filter="url(#shadow)"/>
      
      {/* Stylized "BB" monogram */}
      <text x="35" y="75" fontFamily="Arial Black, sans-serif" fontSize="36" fontWeight="900" fill="#FFFFFF" stroke="#2E86C1" strokeWidth="1">BB</text>
      
      {/* Gold accent dot instead of blue */}
      <circle cx="85" cy="45" r="8" fill="url(#goldAccent)" stroke="#FFFFFF" strokeWidth="1"/>
      
      {/* Text "Brown Boi Blue" with better contrast */}
      <text x="120" y="45" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="url(#brownGradient)" stroke="#FFFFFF" strokeWidth="0.5">Brown Boi</text>
      <text x="120" y="75" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="url(#lightBlue)" stroke="#2E86C1" strokeWidth="0.5">Blue</text>
      
      {/* Decorative underline in gold */}
      <rect x="120" y="80" width="120" height="3" fill="url(#goldAccent)" rx="1.5"/>
    </svg>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Logo />
          </Link>
          <div className="flex flex-col items-end space-y-3">
            {/* Navigation Menu */}
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-blue-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="hover:text-blue-300 transition-colors">
                  Calendar
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-blue-300 transition-colors">
                  Booking
                </Link>
              </li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex justify-between w-full text-lg text-white">
              <a href="https://www.instagram.com/brownboiblue" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-200">
                <FaInstagram />
              </a>
              <a href="https://open.spotify.com/artist/2kIqscPQnM71I0vLQ5y8uH" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-200">
                <FaSpotify />
              </a>
              <a href="https://music.apple.com/us/artist/brownboiblue/1685829162" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-200">
                <FaApple />
              </a>
              <a href="https://soundcloud.com/brownboiblue" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-200">
                <FaSoundcloud />
              </a>
              <a href="https://x.com/brownboiblue" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-200">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;