// CalendarPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";

const CalendarPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/calendar-events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Booking Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
        eventColor="#6366f1" // Tailwind indigo-500
      />
    </div>
  );
};

export default CalendarPage;
