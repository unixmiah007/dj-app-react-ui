import React, { useState } from "react";
import axios from "axios";

const BookingPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // null | "success" | "error"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.date) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/booking", form);
      setStatus("success");
      setForm({ name: "", email: "", date: "", message: "" });
    } catch (error) {
      console.error("Booking error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Book a DJ Gig</h1>

      {status === "success" && (
        <div className="mb-4 p-3 bg-green-200 text-green-800 rounded">
          Booking successful! I will get back to you soon.
        </div>
      )}
      {status === "error" && (
        <div className="mb-4 p-3 bg-red-200 text-red-800 rounded">
          Oops, something went wrong. Please try again later.
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          className="border p-2 rounded"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email *"
          className="border p-2 rounded"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="date"
          placeholder="Booking Date & Time *"
          className="border p-2 rounded"
          value={form.date}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Additional details or message"
          className="border p-2 rounded h-24"
          value={form.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
