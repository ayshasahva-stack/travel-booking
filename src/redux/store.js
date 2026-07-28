import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice'
import uiReducer from "./ui/uiSlice";
import destinationReducer from "./destination/destinationSlice";


const store = configureStore({
    reducer: {
        auth: authReducer,
        ui: uiReducer,
        destination: destinationReducer,
    }
})
export default store;