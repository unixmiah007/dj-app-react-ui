import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());
  const [details, setDetails] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/booking");
      setBookings(res.data);
    } catch (err) {
      console.error("Failed to load bookings:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/booking", {
        name,
        email,
        date: date.toISOString().slice(0, 19).replace("T", " "),
        details,
      });
      setMessage("Booking created successfully!");
      setName("");
      setEmail("");
      setDate(new Date());
      setDetails("");
      setShowForm(false);
      fetchBookings();
    } catch (err) {
      setMessage("Error creating booking.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/booking/${id}`);
      setMessage("Booking deleted successfully.");
      fetchBookings();
    } catch (err) {
      console.error("Error deleting booking:", err);
      setMessage("Error deleting booking.");
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setDate(new Date());
    setShowForm(true);
  };

  const today = new Date();
  const pastBookings = bookings.filter((b) => new Date(b.date) < today);
  const futureBookings = bookings.filter((b) => new Date(b.date) >= today);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Booking Calendar</h1>

      <div
        className="p-6 border rounded shadow-sm bg-gray-100 text-center cursor-pointer"
        onContextMenu={handleRightClick}
      >
        <p className="text-lg">Right-click here to create a booking</p>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 border p-4 rounded bg-white shadow">
          <h2 className="text-xl font-semibold">New Booking</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <DatePicker
            selected={date}
            onChange={(d) => setDate(d)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="Time"
            className="border p-2 rounded w-full"
          />
          <textarea
            placeholder="Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Booking
          </button>
        </form>
      )}

      {message && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">{message}</div>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">Upcoming Bookings</h2>
        {futureBookings.length === 0 ? (
          <p>No upcoming bookings.</p>
        ) : (
          <ul className="space-y-2">
            {futureBookings.map((b) => (
              <li key={b.id} className="border p-3 rounded bg-white">
                <p><strong>Name:</strong> {b.name}</p>
                <p><strong>Email:</strong> {b.email}</p>
                <p><strong>Date:</strong> {new Date(b.date).toLocaleString()}</p>
                <p><strong>Details:</strong> {b.details}</p>
                <button
                  onClick={() => handleDelete(b.id)}
                  className="mt-2 text-red-600 hover:underline"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}

        <h2 className="text-2xl font-semibold mt-6 mb-3">Past Bookings</h2>
        {pastBookings.length === 0 ? (
          <p>No past bookings.</p>
        ) : (
          <ul className="space-y-2">
            {pastBookings.map((b) => (
              <li key={b.id} className="border p-3 rounded bg-gray-50">
                <p><strong>Name:</strong> {b.name}</p>
                <p><strong>Email:</strong> {b.email}</p>
                <p><strong>Date:</strong> {new Date(b.date).toLocaleString()}</p>
                <p><strong>Details:</strong> {b.details}</p>
                <button
                  onClick={() => handleDelete(b.id)}
                  className="mt-2 text-red-600 hover:underline"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Booking;
