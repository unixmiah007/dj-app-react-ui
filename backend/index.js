import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
    process.exit(1);
  }
  console.log("MySQL connected.");
});


// Format ISO string to MySQL DATETIME (YYYY-MM-DD HH:MM:SS)
function formatToMySQLDatetime(dateString) {
  const date = new Date(dateString);
  const pad = (n) => (n < 10 ? "0" + n : n);

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ` +
         `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}


// Get calendar events for FullCalendar (all bookings)
app.get("/calendar-events", (req, res) => {
  db.query("SELECT id, name AS title, date AS start FROM bookings", (err, results) => {
    if (err) {
      console.error("Error fetching calendar events:", err);
      return res.status(500).json({ error: "Database query failed" });
    }

    // Format results for FullCalendar
    const formatted = results.map(event => ({
      ...event,
      allDay: true, // treat as all-day events
    }));

    res.json(formatted);
  });
});

// GET all bookings
app.get("/booking", (req, res) => {
  db.query("SELECT * FROM bookings ORDER BY date ASC", (err, results) => {
    if (err) {
      console.error("DB query error in GET /booking:", err);
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});

// GET booking by ID
app.get("/booking/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM bookings WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error(`DB query error in GET /booking/${id}:`, err);
      return res.status(500).json({ error: "Database query failed" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.json(results[0]);
  });
});

// POST create new booking
app.post("/booking", (req, res) => {
  const { name, email, date, details } = req.body;

  if (!name || !email || !date) {
    return res.status(400).json({ error: "Missing required fields: name, email, date" });
  }

  const formattedDate = formatToMySQLDatetime(date);

  db.query(
    "INSERT INTO bookings (name, email, date, details) VALUES (?, ?, ?, ?)",
    [name, email, formattedDate, details || ""],
    (err, result) => {
      if (err) {
        console.error("DB query error in POST /booking:", err);
        return res.status(500).json({ error: "Database insert failed" });
      }
      res.status(201).json({ id: result.insertId, name, email, date: formattedDate, details });
    }
  );
});

// PUT update booking by ID
app.put("/booking/:id", (req, res) => {
  const { id } = req.params;
  const { name, date, details } = req.body;
  if (!name || !date) {
    return res.status(400).json({ error: "Missing required fields: name, date" });
  }
  db.query(
    "UPDATE bookings SET name = ?, date = ?, details = ? WHERE id = ?",
    [name, date, details || "", id],
    (err, result) => {
      if (err) {
        console.error(`DB query error in PUT /booking/${id}:`, err);
        return res.status(500).json({ error: "Database update failed" });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Booking not found" });
      }
      res.json({ id, name, date, details });
    }
  );
});

// DELETE booking by ID
app.delete("/booking/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM bookings WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error(`DB query error in DELETE /booking/${id}:`, err);
      return res.status(500).json({ error: "Database delete failed" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.sendStatus(204); // No Content
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
