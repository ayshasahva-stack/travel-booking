import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserByEmail, registerUser } from "../../services/authService";


export const registerThunk = createAsyncThunk(
    "auth/register",
    async (userData, { rejectWithValue }) => {

        try {
            const existingUser = await getUserByEmail(userData.email);

            if (existingUser) {
                return rejectWithValue("Email already exists");
            }
            const newUser = await registerUser(userData);

            return newUser;
        }
        catch (error) {

            return rejectWithValue(error.message);

        }
    }
)