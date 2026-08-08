import api from "./api";

// const API_URL = "http://localhost:3000/bookings";

export const createBooking = async (bookingData) => {
  const response = await api.post("/bookings", bookingData);
  return response.data;
};

export const getBookings = async () => {
  const response = await api.get("/bookings");
  return response.data;
};

export const deleteBooking = async (id) => {
  await api.delete(`${"/bookings"}/${id}`);
  return id;
};

export const updateBooking = async (id, bookingData) => {
  const response = await api.patch(`${"/bookings"}/${id}`, bookingData);
  return response.data;
};