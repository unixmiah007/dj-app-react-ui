// src/api.js
const API_URL = "http://localhost:5000";

import axios from "axios";

export const getBookings = async () => {
  const res = await axios.get(`${API_URL}/booking`);
  return res.data;
};

export const createBooking = async (bookingData) => {
  const res = await axios.post(`${API_URL}/booking`, bookingData);
  return res.data;
};
