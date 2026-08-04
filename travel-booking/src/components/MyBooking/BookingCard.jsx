import Button from "../Common/Button";
import {
  FaCalendarAlt,
  FaUsers,
  FaBed,
  FaMoneyBillWave,
  FaCheckCircle,
  FaPhoneAlt,
  FaGlobeEurope,
} from "react-icons/fa";

const BookingCard = ({ booking, onCancelBooking, onEditBooking }) => {


  return (
    <div className="  rounded-2xl  transition-all duration-300 overflow-hidden flex flex-col md:flex-row">

      {/* Image */}
      <img
        src={booking.image}
        alt={booking.destinationName}
        className="w-full md:w-[35%] h-100 object-cover mt-15 rounded-2xl me-5"
      />

      {/* Content */}
      <div className="w-full md:w-[65%] p-5">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-stone-900 dark:text-white">
          {booking.destinationName}
        </h2>

        <p className="flex items-center gap-2 mt-1 text-stone-500 dark:text-stone-400">
          <FaGlobeEurope className="text-teal-600" />
          {booking.country}
        </p>

        {/* Details */}
        <div className="mt-4 space-y-2 text-sm text-stone-700 dark:text-stone-300">

          <p className="flex items-center gap-2">
            <FaUsers className="text-teal-600" />
            <strong>Traveler:</strong>
            {booking.firstName} {booking.lastName}
          </p>

          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-teal-600" />
            <strong>Phone:</strong>
            {booking.phone}
          </p>

          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-teal-600" />
            <strong>Departure:</strong>
            {booking.departDate}
          </p>

          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-teal-600" />
            <strong>Return:</strong>
            {booking.returnDate}
          </p>


          <p className="flex items-center gap-2">
            <FaBed className="text-teal-600" />
            <strong>Room:</strong>
            {booking.roomType}
          </p>

          <p className="flex items-center gap-2">
            <FaUsers className="text-teal-600" />
            <strong>Adults:</strong>
            {booking.adults}
          </p>

          <p className="flex items-center gap-2">
            <FaUsers className="text-teal-600" />
            <strong>Children:</strong>
            {booking.children}
          </p>

          <p className="flex items-center gap-2">
            <FaUsers className="text-teal-600" />
            <strong>Total Travelers:</strong>
            {booking.totalTravelers}
          </p>


          {/* Status */}
          <div className="flex items-center gap-2 mt-2">
            <FaCheckCircle className="text-green-600" />

            <strong>Status:</strong>

            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${booking.status === "Confirmed"
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                  : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                }`}
            >
              {booking.status}
            </span>
          </div>

          {/* Price */}
          <div className="mt-3 rounded-xl bg-stone-100 dark:bg-stone-800 p-3">

            <p className="flex items-center gap-2">
              <FaMoneyBillWave className="text-green-600" />
              <strong>Price / Person:</strong>
              ₹{booking.pricePerPerson}
            </p>

            <p className="mt-2 text-xl font-bold text-teal-600">
              Total: ₹{booking.totalPrice}
            </p>

          </div>

          <p className="text-sm text-stone-500 dark:text-stone-400">
            <strong>Booked On:</strong>{" "}
            {new Date(booking.bookedAt).toLocaleDateString()}
          </p>

          {/* Buttons */}
          <div className="mt-4 flex flex-wrap gap-3">

            <Button
              variant="info"
              type="button"
              onClick={() => onEditBooking(booking)}
            >
              Edit Booking
            </Button>

            <Button
              variant="danger"
              type="button"
              onClick={() => onCancelBooking(booking.id)}
            >
              Cancel Booking
            </Button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default BookingCard;