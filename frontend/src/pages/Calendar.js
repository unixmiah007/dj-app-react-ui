import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";

export default function CalendarPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch bookings from backend API
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/booking");
        // Map backend data to FullCalendar event format
        const calendarEvents = res.data.map((booking) => ({
          id: booking.id,
          title: booking.name,
          start: booking.date,
          // optional: you can add end date/time if you have it
          // end: booking.endDate,
          extendedProps: {
            details: booking.details,
          },
        }));
        setEvents(calendarEvents);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load bookings", error);
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Optional: handle clicking on an event
  const handleEventClick = (clickInfo) => {
    alert(
      `Booking: ${clickInfo.event.title}\nDate: ${clickInfo.event.start.toLocaleString()}\nDetails: ${clickInfo.event.extendedProps.details || "No details"}`
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Booking Calendar</h1>
      {loading ? (
        <p>Loading bookings...</p>
      ) : (
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={events}
          eventClick={handleEventClick}
          height="auto"
          eventColor="#2563eb" // Tailwind blue-600
          eventTextColor="#fff"
          nowIndicator={true}
          selectable={true}
        />
      )}
    </div>
  );
}
