import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind or other styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

app.get("/booking", (req, res) => {
  db.query("SELECT * FROM bookings", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.post("/booking", (req, res) => {
  const { name, date } = req.body;
  db.query(
    "INSERT INTO bookings (name, date) VALUES (?, ?)",
    [name, date],
    (err) => {
      if (err) return res.status(500).send(err);
      res.sendStatus(201);
    }
  );
});
