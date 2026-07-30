import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Booking from "../pages/Booking/Booking";
import About from "../pages/About/About";
import Destinations from "../pages/Destinations/Destinations";
import Notfound from "../pages/Notfound/Notfound";
import MyBooking from "../pages/Mybooking/MyBooking";
import ProtectedRoute from "./ProtectedRoute";
import DestinationDetails from "../pages/DestinationDetails/DestinationDetails";
import BookingSuccess from "../components/Booking/BookingSuccess";


// import Register from "../components/Auth/Register";
// import Login from "../components/Auth/Login";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} /> */}

                <Route element={<MainLayout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/destinations" element={<Destinations />} />

                    <Route element={<ProtectedRoute />}>
                        <Route path="/booking" element={<Booking />} />
                        <Route path="/booking/:id" element={<Booking />} />
                         <Route path="/booking-success" element={<BookingSuccess />} />
                         <Route path="/my-bookings" element={<MyBookings />} />
                    </Route>

                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/destinations/:id" element={<DestinationDetails />} />
                </Route>

                <Route path="/*" element={<Notfound />} />
            </Routes>
        </BrowserRouter>

    )

}
export default AppRoutes