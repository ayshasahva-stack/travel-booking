import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppRoutes from "./routes/AppRoutes";
import SplashScreen from "./components/Common/SplachScreen";

function App() {
 useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
}, []);

return <AppRoutes />;
}

export default App;