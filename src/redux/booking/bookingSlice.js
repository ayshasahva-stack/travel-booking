import { createSlice } from "@reduxjs/toolkit";
import {
  createBookingThunk,
  getBookingsThunk,
  deleteBookingThunk,
} from "./bookingThunk";

const initialState = {
  bookings: [],
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // Create Booking
      .addCase(createBookingThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(createBookingThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings.push(action.payload);
      })

      .addCase(createBookingThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get Bookings
      .addCase(getBookingsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getBookingsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload;
      })

      .addCase(getBookingsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete Booking
      .addCase(deleteBookingThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(deleteBookingThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = state.bookings.filter(
          (booking) => booking.id !== action.payload
        );
      })

      .addCase(deleteBookingThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bookingSlice.reducer;