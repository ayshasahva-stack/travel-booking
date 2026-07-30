import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MyBookings = () => {
  const dispatch = useDispatch();

  const { bookings, loading, error } = useSelector(
    (state) => state.booking
  );

  useEffect(() => {
    // We'll fetch bookings here in the next step
  }, [dispatch]);

  return (
    <section className="pt-28 pb-20 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">
          My Bookings
        </h1>

        <p>Total Bookings: {bookings.length}</p>
      </div>
    </section>
  );
};

export default MyBookings;