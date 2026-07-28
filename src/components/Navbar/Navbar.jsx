import { FaPlaneDeparture, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../redux/auth/authSlice'
import { openAuthModal } from "../../redux/ui/uiSlice";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const currentUser = useSelector((state) => state.auth.user);



  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

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
      setShowModal(true);
    }
  };


  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


        {/* Logo */}
        < div className="flex items-center gap-2">
          <FaPlaneDeparture className="text-blue-600 text-2xl" />
          <h1 className="text-2xl font-bold text-blue-600">
            TravelEase
          </h1>
        </div>


        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLink to='/'
            className={({ isActive }) =>
              `transition-colors duration-500 ${isActive ?
                "text-blue-600 font-semibold" :
                "text-gray-700 hover:text-blue-600"}`}>Home</NavLink>
          <NavLink to='/destinations'
            className={({ isActive }) =>
              `transition-colors duration-500 ${isActive ?
                "text-blue-600 font-semibold" :
                "text-gray-700 hover:text-blue-600"}`}>Destinations</NavLink>
          <NavLink to='/hotels'
            className={({ isActive }) =>
              `transition-colors duration-500 ${isActive ?
                "text-blue-600 font-semibold" :
                "text-gray-700 hover:text-blue-600"}`}>Hotels</NavLink>
          <NavLink to='/about'
            className={({ isActive }) =>
              `transition-colors duration-500 ${isActive ?
                "text-blue-600 font-semibold" :
                "text-gray-700 hover:text-blue-600"}`}>About</NavLink>
          <NavLink to='/contact'
            className={({ isActive }) =>
              `transition-colors duration-500 ${isActive ?
                "text-blue-600 font-semibold" :
                "text-gray-700 hover:text-blue-600"}`}>Contact</NavLink>

          {/* <button
            onClick={openModal}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Log in</button> */}

          {currentUser ? (<button onClick={handleLogout} className="text-blue-700">
            Hi, {currentUser.username} (Logout)
          </button>
          ) : (<button
            onClick={openModal}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Log in</button>)}


          {/* link for button */}
          <button
            onClick={handleBooking}
            className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4">

          <NavLink to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `py-2 transition-colors duration-500 ${isActive ?
                "text-blue-600 font-semibold" :
                "text-gray-700 hover:text-blue-600"}`}> Home</NavLink>

          <NavLink to="/destinations"
            onClick={closeMenu}
            className={({ isActive }) =>
              `py-2 transition-colors duration-500 ${isActive ?
                "text-blue-600 font-semibold" :
                "text-gray-700 hover:text-blue-600"}`}>Destinations</NavLink>

          <NavLink to="/hotels"
            onClick={closeMenu}
            className={({ isActive }) =>
              `py-2 transition-colors duration-500 ${isActive ?
                "text-blue-600 font-semibold" :
                "text-gray-700 hover:text-blue-600"}`}>Hotels</NavLink>

          <NavLink to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              `py-2 transition-colors duration-500 ${isActive ?
                "text-blue-600 font-semibold" :
                "text-gray-700 hover:text-blue-600"}`}>About</NavLink>

          <NavLink to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              `py-2 transition-colors duration-500 ${isActive ?
                "text-blue-600 font-semibold" :
                "text-gray-700 hover:text-blue-600"}`}>Contact</NavLink>

          {currentUser ? (
            <button
              onClick={() => {
                closeMenu();
                handleLogout();
              }}
              className="text-left py-2 text-blue-700"
            >
              Hi, {currentUser.username} (Logout)
            </button>
          ) : (
            <button
              onClick={() => {
                closeMenu();
                openModal();
              }}
              className="text-left py-2 text-gray-700 hover:text-blue-600"
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