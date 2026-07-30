import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice'
import uiReducer from "./ui/uiSlice";
import destinationReducer from "./destination/destinationSlice";
import bookingReducer from './booking/bookingSlice'


const store = configureStore({
    reducer: {
        auth: authReducer,
        ui: uiReducer,
        destination: destinationReducer,
         booking: bookingReducer,
    }
})
export default store;