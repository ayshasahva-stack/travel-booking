import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllDestinations } from "../../services/destinationService";


export const fetchDestinations = createAsyncThunk(
  "destination/fetchDestinations",
  async (_, {rejectWithValue}) => {
    try {
      return await getAllDestinations();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);