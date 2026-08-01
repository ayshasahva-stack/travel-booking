import { FaPlaneDeparture, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../redux/auth/authSlice'
import { openAuthModal } from "../../redux/ui/uiSlice";
import ThemeToggle from "../Common/ThemeToggle";


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const currentUser = useSelector((state) => state.auth.user);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const isHomePage = location.pathname === "/";



  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = () => {
    dispatch(openAuthModal());
  }

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    dispatch(logout());
    navigate("/");
  };

  const handleBooking = () => {
    if (currentUser) {
      navigate("/booking");
    } else {
      dispatch(openAuthModal());
    }
  };


  return (
   <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isHomePage && !scrolled
      ? "bg-transparent"
      : "bg-white dark:bg-stone-900 shadow-md"
  }`}
>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


        {/* Logo */}
        < div className="flex items-center gap-2">
          <FaPlaneDeparture className="text-teal-600 text-2xl" />
          <h2 className="text-3xl font-bold text-amber-400">
            Travel<span className="text-teal-600">Ease</span>
          </h2>
        </div>


        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLink to='/'
            className={({ isActive }) =>
              `transition-colors duration-500 ${isActive ?
                "text-yellow-500 font-semibold" :
                "text-stone-800 dark:text-stone-200 hover:text-yellow-400"}`}>Home</NavLink>
          <NavLink to='/destinations'
            className={({ isActive }) =>
              `transition-colors duration-500 ${isActive ?
                "text-yellow-500 font-semibold" :
                "text-stone-800 dark:text-stone-200 hover:text-yellow-400"}`}>Destinations</NavLink>
          <NavLink to='/about'
            className={({ isActive }) =>
              `transition-colors duration-500 ${isActive ?
                "text-yellow-500 font-semibold" :
                "text-stone-800 dark:text-stone-200 hover:text-yellow-400"}`}>About</NavLink>
          <NavLink to='/contact'
            className={({ isActive }) =>
              `transition-colors duration-500 ${isActive ?
                "text-yellow-500 font-semibold" :
                "text-stone-800 dark:text-stone-200 hover:text-yellow-400"}`}>Contact</NavLink>
          {currentUser && (
            <NavLink
              to="/my-bookings"
              className={({ isActive }) =>
                `transition-colors duration-500 ${isActive
                  ? "text-yellow-500 font-semibold"
                  : "text-stone-800 dark:text-stone-200 hover:text-yellow-400"
                }`
              }
            >
              My Booking
            </NavLink>
          )}
          <ThemeToggle />

          {currentUser ? (<button onClick={handleLogout} className=" text-teal-600">
            {currentUser.username} Logout
          </button>
          ) : (<button
            onClick={openModal}
            className="text-stone-800 dark:text-stone-200 hover:text-yellow-400 transition-colors duration-300">Log in</button>)}

        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
           <FaTimes className="text-2xl text-stone-800 dark:text-white" />
            ) : (
             <FaBars className="text-2xl text-stone-800 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
      <div className="md:hidden bg-white dark:bg-stone-900 shadow-md transition-colors duration-300 px-6 py-4 flex flex-col gap-4">
          <NavLink to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `py-2 transition-colors duration-500 ${isActive ?
                "text-yellow-500 font-semibold" :
                "text-stone-700 dark:text-stone-200 hover:text-yellow-400"}`}> Home</NavLink>

          <NavLink to="/destinations"
            onClick={closeMenu}
            className={({ isActive }) =>
              `py-2 transition-colors duration-500 ${isActive ?
                "text-yellow-500 font-semibold" :
                "text-stone-700 dark:text-stone-200 hover:text-yellow-400"}`}>Destinations</NavLink>


          <NavLink to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              `py-2 transition-colors duration-500 ${isActive ?
                "text-yellow-500 font-semibold" :
                "text-stone-700 dark:text-stone-200 hover:text-yellow-400"}`}>About</NavLink>

          <NavLink to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              `py-2 transition-colors duration-500 ${isActive ?
                "text-yellow-500 font-semibold" :
                "text-stone-700 dark:text-stone-200 hover:text-yellow-400"}`}>Contact</NavLink>
          {currentUser && (
            <NavLink
              to="/my-bookings"
              onClick={closeMenu}
              className={({ isActive }) =>
                `py-2 transition-colors duration-500 ${isActive
                  ? "text-yellow-500 font-semibold"
                  : "text-stone-700 dark:text-stone-200 hover:text-yellow-400"
                }`
              }
            >
              My Booking
            </NavLink>
          )}
          <div className="py-2">
            <ThemeToggle />
          </div>

          {currentUser ? (
            <button
              onClick={() => {
                closeMenu();
                handleLogout();
              }}
              className="text-left py-2 text-teal-600 dark:text-teal-400"
            >
              Hi, {currentUser.username} (Logout)
            </button>
          ) : (
            <button
              onClick={() => {
                closeMenu();
                openModal();
              }}
              className="text-left py-2 text-stone-700 dark:text-stone-200 hover:text-teal-6000"
            >
              Log in
            </button>
          )}

          <button
            onClick={() => {
              closeMenu();
              handleBooking();
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center"
          >
            Book Now
          </button>

        </div>
      )}
    </nav>
  );
}

export default Navbar;