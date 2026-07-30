const BookingCard = ({ booking, onCancelBooking }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">
      <img
        src={booking.image}
        alt={booking.destinationName}
        className="w-full md:w-72 h-56 object-cover"
      />

      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold">
          {booking.destinationName}
        </h2>

        <p className="text-stone-500">
          {booking.country}
        </p>

        <div className="mt-4 space-y-2 text-sm">
          <p>
            <strong>Traveler:</strong>{" "}
            {booking.firstName} {booking.lastName}
          </p>

          <p>
            <strong>Departure:</strong> {booking.departDate}
          </p>

          <p>
            <strong>Return:</strong> {booking.returnDate}
          </p>

          <p>
            <strong>Room:</strong> {booking.roomType}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            <span className="text-green-600 font-semibold">
              {booking.status}
            </span>
            
          </p>
          <div className="mt-6">
  <button
    onClick={() => onCancelBooking(booking.id)}
    className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
  >
    Cancel Booking
  </button>
</div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;