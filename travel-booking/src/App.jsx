import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppRoutes from "./routes/AppRoutes";
import SplashScreen from "./components/Common/SplachScreen";


function App() {
  //  console.log("App Mounted");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
    });

    // Splash screen timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return <AppRoutes />;
}

export default App;