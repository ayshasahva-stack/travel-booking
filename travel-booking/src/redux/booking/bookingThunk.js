import { createAsyncThunk } from "@reduxjs/toolkit";
import * as bookingService from "../../services/bookingService";


export const createBookingThunk = createAsyncThunk(
  "booking/createBooking",
  async (bookingData, {rejectWithValue}) => {
    try {
      return await bookingService.createBooking(bookingData);
    } catch (error) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to create booking"
      );
    }
  }
);


export const getBookingsThunk = createAsyncThunk(
  "booking/getBookings",
  async (_, {rejectWithValue}) => {
    try {
      return await bookingService.getBookings();
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch bookings"
      );
    }
  }
);


export const deleteBookingThunk = createAsyncThunk(
  "booking/deleteBooking",
  async (id, {rejectWithValue}) => {
    try {
      await bookingService.deleteBooking(id);
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete booking"
      );
    }
  }
);


export const updateBookingThunk = createAsyncThunk(
  "booking/updateBooking",
  async ({ id, bookingData }, { rejectWithValue }) => {
    try {
      return await bookingService.updateBooking(id, bookingData);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update booking"
      );
    }
  }
);
