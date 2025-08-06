import React, { useEffect, useState } from "react";
import Calendar from "./components/Calendar";
import BookingForm from "./components/BookingForm";
import { getBookings, createBooking } from "./api";

export default function App() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    const data = await getBookings();
    setBookings(data);
  };

  const handleBook = async (formData) => {
    await createBooking(formData);
    loadBookings();
  };

  return (
    <div className="app-container">
      <h1>DJ Booking Calendar</h1>
      <Calendar bookings={bookings} />
      <BookingForm onBook={handleBook} />
    </div>
  );
}
