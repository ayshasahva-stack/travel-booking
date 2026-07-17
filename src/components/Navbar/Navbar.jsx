import { FaPlaneDeparture } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaPlaneDeparture className="text-blue-600 text-2xl" />
          <h1 className="text-2xl font-bold text-blue-600">
            TravelEase
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8">
         <NavLink to='/' className={({isActive})=>isActive?"text-blue-600 font-semibold":"text-gray-700"}>Home</NavLink>
         <NavLink to='/destinations' className={({isActive})=>isActive?"text-blue-600 font-semibold":"text-gray-700"}>Destinations</NavLink>
         <NavLink to='/hotels' className={({isActive})=>isActive?"text-blue-600 font-semibold":"text-gray-700"}>Hotels</NavLink>
         <NavLink to='/about' className={({isActive})=>isActive?"text-blue-600 font-semibold":"text-gray-700"}>About</NavLink>
         <NavLink to='/contact' className={({isActive})=>isActive?"text-blue-600 font-semibold":"text-gray-700"}>Contact</NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;