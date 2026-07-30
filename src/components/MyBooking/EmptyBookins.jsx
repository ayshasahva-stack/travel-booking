import { Link } from "react-router-dom";

const EmptyBookings = () => {
  return (
    <div className="text-center py-20">
      <h2 className="text-3xl font-semibold text-stone-700">
        No Bookings Found
      </h2>

      <p className="text-stone-500 mt-3">
        You haven't booked any trips yet.
      </p>

      <Link
        to="/destinations"
        className="inline-block mt-6 bg-teal-700 text-white px-6 py-3 rounded-xl hover:bg-teal-600 transition"
      >
        Explore Destinations
      </Link>
    </div>
  );
};

export default EmptyBookings;