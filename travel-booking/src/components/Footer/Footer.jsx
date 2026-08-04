import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPlaneDeparture
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
             {/* Logo */}
                    < div className="flex items-center gap-2">
                      <FaPlaneDeparture className="text-teal-600 text-2xl" />
                      <h2 className="text-3xl font-bold text-amber-400">
                        Travel<span className="text-teal-600">Ease</span>
                      </h2>
                    </div>

            <p className="mt-5 text-stone-400 leading-8 max-w-md">
              TravelEase helps you discover breathtaking destinations,
              book unforgettable trips, and create memories that last a
              lifetime. Your next adventure starts here.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-teal-700 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-teal-700 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-teal-700 transition flex items-center justify-center"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-teal-700 transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-amber-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/destinations" className="hover:text-amber-400 transition">
                  Destinations
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-amber-400 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-amber-400 transition">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/my-bookings" className="hover:text-amber-400 transition">
                  My Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-teal-500 mt-1" />
                <span>Kozhikode, Kerala, India</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-teal-500" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-teal-500" />
                <span>support@travelease.com</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-stone-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <p className="text-stone-500 text-center md:text-left">
            © 2026 TravelEase. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="hover:text-amber-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-amber-400 transition"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}