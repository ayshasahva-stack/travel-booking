import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Booking from "../pages/Booking/Booking";
import About from "../pages/About/About";
import Destinations from "../pages/Destinations/Destinations";
import Hotels from "../pages/Hotels/Hotels";
import Notfound from "../pages/Notfound/Notfound";

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
                    <Route path="/hotels" element={<Hotels />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>

                <Route path="/*" element={<Notfound />} />
            </Routes>
        </BrowserRouter>

    )

}
export default AppRoutes