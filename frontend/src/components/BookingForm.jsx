import React, { useState } from "react";

export default function BookingForm({ onBook }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    duration: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook(form);
    setForm({ name: "", email: "", date: "", time: "", duration: 1 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a DJ</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input type="date" name="date" value={form.date} onChange={handleChange} required />
      <input type="time" name="time" value={form.time} onChange={handleChange} required />
      <input type="number" name="duration" value={form.duration} onChange={handleChange} min="1" />
      <button type="submit">Submit</button>
    </form>
  );
}
