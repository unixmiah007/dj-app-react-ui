import React, { useState, useEffect } from "react";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());
  const [details, setDetails] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Pagination states
  const [upcomingPage, setUpcomingPage] = useState(1);
  const [pastPage, setPastPage] = useState(1);
  const bookingsPerPage = 5;

  // Mock data for demonstration
  useEffect(() => {
    const mockBookings = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Tomorrow
        details: "Business meeting"
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // Yesterday
        details: "Consultation"
      }
    ];
    setBookings(mockBookings);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate API call
      const newBooking = {
        id: Date.now(),
        name,
        email,
        date: date.toISOString(),
        details
      };
      setBookings(prev => [...prev, newBooking]);
      setMessage("Booking created successfully!");
      setName("");
      setEmail("");
      setDate(new Date());
      setDetails("");
      setShowForm(false);
    } catch (err) {
      setMessage("Error creating booking.");
    }
  };

  const handleDelete = async (id) => {
    try {
      setBookings(prev => prev.filter(b => b.id !== id));
      setMessage("Booking deleted successfully.");
    } catch (err) {
      console.error("Error deleting booking:", err);
      setMessage("Error deleting booking.");
    }
  };



  const today = new Date();
  const pastBookings = bookings.filter((b) => new Date(b.date) < today);
  const futureBookings = bookings.filter((b) => new Date(b.date) >= today);

  // Pagination logic for upcoming
  const upcomingIndexOfLast = upcomingPage * bookingsPerPage;
  const upcomingIndexOfFirst = upcomingIndexOfLast - bookingsPerPage;
  const currentUpcoming = futureBookings.slice(upcomingIndexOfFirst, upcomingIndexOfLast);

  // Pagination logic for past
  const pastIndexOfLast = pastPage * bookingsPerPage;
  const pastIndexOfFirst = pastIndexOfLast - bookingsPerPage;
  const currentPast = pastBookings.slice(pastIndexOfFirst, pastIndexOfLast);

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    
    <div className="max-w-3xl mx-auto p-6">
      {/* About DJ Blue Graphic Header */}
      <div className="mb-8">
        <svg viewBox="0 0 800 200" className="w-full h-auto rounded-lg shadow-lg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Gradient backgrounds */}
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#1e3a8a", stopOpacity:1}} />
              <stop offset="50%" style={{stopColor:"#3b82f6", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#60a5fa", stopOpacity:1}} />
            </linearGradient>
            
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#f59e0b", stopOpacity:1}} />
              <stop offset="50%" style={{stopColor:"#fbbf24", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#fde047", stopOpacity:1}} />
            </linearGradient>
            
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#7c3aed", stopOpacity:1}} />
              <stop offset="50%" style={{stopColor:"#a855f7", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#c084fc", stopOpacity:1}} />
            </linearGradient>
            
            {/* Glowing effect */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Shadow effect */}
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="#00000060"/>
            </filter>
            
            {/* Grid pattern */}
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.1"/>
            </pattern>
          </defs>
          
          {/* Background with dynamic shapes */}
          <rect width="800" height="200" fill="url(#blueGradient)" rx="15"/>
          
          {/* Decorative circles */}
          <circle cx="100" cy="50" r="30" fill="url(#goldGradient)" opacity="0.3" filter="url(#glow)"/>
          <circle cx="700" cy="150" r="25" fill="url(#purpleGradient)" opacity="0.4" filter="url(#glow)"/>
          <circle cx="650" cy="40" r="15" fill="#ffffff" opacity="0.6"/>
          
          {/* Sound wave graphics */}
          <g transform="translate(50, 120)">
            <rect x="0" y="0" width="4" height="40" fill="url(#goldGradient)" rx="2">
              <animateTransform attributeName="transform" type="scale" values="1,0.5; 1,1.2; 1,0.7; 1,1" dur="1.5s" repeatCount="indefinite"/>
            </rect>
            <rect x="8" y="10" width="4" height="20" fill="url(#goldGradient)" rx="2">
              <animateTransform attributeName="transform" type="scale" values="1,0.8; 1,1.5; 1,0.6; 1,1.1" dur="1.2s" repeatCount="indefinite"/>
            </rect>
            <rect x="16" y="5" width="4" height="30" fill="url(#goldGradient)" rx="2">
              <animateTransform attributeName="transform" type="scale" values="1,1.2; 1,0.4; 1,1.8; 1,0.9" dur="1.8s" repeatCount="indefinite"/>
            </rect>
            <rect x="24" y="12" width="4" height="16" fill="url(#goldGradient)" rx="2">
              <animateTransform attributeName="transform" type="scale" values="1,0.6; 1,1.4; 1,0.8; 1,1.2" dur="1.4s" repeatCount="indefinite"/>
            </rect>
          </g>
          
          {/* Main text "About" */}
          <text x="180" y="80" fontFamily="Arial Black, Impact, sans-serif" fontSize="48" fontWeight="900" fill="#ffffff" filter="url(#shadow)">
            Create
          </text>
          
          {/* "DJ" with special styling */}
          <text x="180" y="140" fontFamily="Arial Black, Impact, sans-serif" fontSize="56" fontWeight="900" fill="#ffffff" filter="url(#glow)">
            DJ
          </text>
          
          {/* "Blue" text */}
          <text x="280" y="140" fontFamily="Arial Black, Impact, sans-serif" fontSize="56" fontWeight="900" fill="#ffffff" filter="url(#shadow)">
            Booking
          </text>
          
          {/* Decorative vinyl record */}
          <g transform="translate(600, 100)">
            <circle cx="0" cy="0" r="45" fill="#1a1a1a" filter="url(#shadow)"/>
            <circle cx="0" cy="0" r="40" fill="#2a2a2a"/>
            <circle cx="0" cy="0" r="35" fill="#1a1a1a"/>
            <circle cx="0" cy="0" r="30" fill="#2a2a2a"/>
            <circle cx="0" cy="0" r="25" fill="#1a1a1a"/>
            <circle cx="0" cy="0" r="8" fill="url(#goldGradient)"/>
            <circle cx="0" cy="0" r="4" fill="#1a1a1a"/>
            <animateTransform attributeName="transform" type="rotate" values="0 600 100; 360 600 100" dur="8s" repeatCount="indefinite"/>
          </g>
          
          {/* Musical notes floating */}
          <g fill="url(#goldGradient)" opacity="0.7">
            <text x="500" y="60" fontFamily="Arial" fontSize="24">♪</text>
            <text x="520" y="45" fontFamily="Arial" fontSize="18">♫</text>
            <text x="480" y="75" fontFamily="Arial" fontSize="20">♪</text>
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="3s" repeatCount="indefinite"/>
          </g>
          
          {/* Subtle grid pattern overlay */}
          <rect width="800" height="200" fill="url(#grid)" rx="15"/>
        </svg>
      </div>
      {/* Interactive SVG header */}

      {/* Add booking button */}
      <div className="mb-6">
        <button
          onClick={() => {
            setDate(new Date());
            setShowForm(true);
          }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Create New Booking
        </button>
      </div>

      {/* Booking Form */}
      {showForm && (
        <div className="mt-6 p-6 border rounded-lg bg-white shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">New Booking</h2>
            <button
              onClick={() => setShowForm(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="datetime-local"
              value={date.toISOString().slice(0, 16)}
              onChange={(e) => setDate(new Date(e.target.value))}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full p-3 border rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create Booking
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Message */}
      {message && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg border border-green-200">
          {message}
          <button 
            onClick={() => setMessage("")}
            className="float-right text-green-600 hover:text-green-800"
          >
            ✕
          </button>
        </div>
      )}

      {/* Upcoming Bookings */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Bookings</h2>
        {currentUpcoming.length === 0 ? (
          <p className="text-gray-500 italic">No upcoming bookings.</p>
        ) : (
          <div className="space-y-3">
            {currentUpcoming.map((b) => (
              <div key={b.id} className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><span className="font-semibold">Name:</span> {b.name}</p>
                    <p><span className="font-semibold">Email:</span> {b.email}</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Date:</span> {formatDateTime(b.date)}</p>
                    <p><span className="font-semibold">Details:</span> {b.details}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(b.id)}
                  className="mt-3 text-red-600 hover:text-red-800 hover:underline text-sm"
                >
                  Delete Booking
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Pagination for Upcoming */}
        {futureBookings.length > 0 && (
          <div className="flex justify-between items-center mt-6">
            <button
              disabled={upcomingPage === 1}
              onClick={() => setUpcomingPage(upcomingPage - 1)}
              className={`px-4 py-2 rounded-lg ${
                upcomingPage === 1 
                  ? "bg-gray-300 cursor-not-allowed text-gray-500" 
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Previous
            </button>
            <span className="px-4 py-2 bg-gray-100 rounded-lg">
              Page {upcomingPage} of {Math.ceil(futureBookings.length / bookingsPerPage) || 1}
            </span>
            <button
              disabled={upcomingIndexOfLast >= futureBookings.length}
              onClick={() => setUpcomingPage(upcomingPage + 1)}
              className={`px-4 py-2 rounded-lg ${
                upcomingIndexOfLast >= futureBookings.length 
                  ? "bg-gray-300 cursor-not-allowed text-gray-500" 
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Past Bookings */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Past Bookings</h2>
        {currentPast.length === 0 ? (
          <p className="text-gray-500 italic">No past bookings.</p>
        ) : (
          <div className="space-y-3">
            {currentPast.map((b) => (
              <div key={b.id} className="border rounded-lg p-4 bg-gray-50 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><span className="font-semibold">Name:</span> {b.name}</p>
                    <p><span className="font-semibold">Email:</span> {b.email}</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Date:</span> {formatDateTime(b.date)}</p>
                    <p><span className="font-semibold">Details:</span> {b.details}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(b.id)}
                  className="mt-3 text-red-600 hover:text-red-800 hover:underline text-sm"
                >
                  Delete Booking
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Pagination for Past */}
        {pastBookings.length > 0 && (
          <div className="flex justify-between items-center mt-6">
            <button
              disabled={pastPage === 1}
              onClick={() => setPastPage(pastPage - 1)}
              className={`px-4 py-2 rounded-lg ${
                pastPage === 1 
                  ? "bg-gray-300 cursor-not-allowed text-gray-500" 
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Previous
            </button>
            <span className="px-4 py-2 bg-gray-100 rounded-lg">
              Page {pastPage} of {Math.ceil(pastBookings.length / bookingsPerPage) || 1}
            </span>
            <button
              disabled={pastIndexOfLast >= pastBookings.length}
              onClick={() => setPastPage(pastPage + 1)}
              className={`px-4 py-2 rounded-lg ${
                pastIndexOfLast >= pastBookings.length 
                  ? "bg-gray-300 cursor-not-allowed text-gray-500" 
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;