import axios from "axios";

const API_URL = "http://localhost:3000/bookings";

export const createBooking = async (bookingData) => {
  const response = await axios.post(API_URL, bookingData);
  return response.data;
};

export const getBookings = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const deleteBooking = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};

export const updateBooking = async (id, bookingData) => {
  const response = await axios.patch(`${API_URL}/${id}`, bookingData);
  return response.data;
};