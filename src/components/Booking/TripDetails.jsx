const roomTypes = [
  {
    id: "standard",
    title: "Standard",
    icon: "🏨",
  },
  {
    id: "deluxe",
    title: "Deluxe",
    icon: "🌟",
  },
  {
    id: "suite",
    title: "Suite",
    icon: "👑",
  },
];

const TripDetails = ({ bookingData, setBookingData }) => {
  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoom = (room) => {
    setBookingData({
      ...bookingData,
      roomType: room,
    });
  };

  return (
    <div>

      <h2 className="text-2xl font-bold text-stone-900 mb-8">
        Trip Details
      </h2>

      {/* Departure */}

      <div className="mb-6">
        <label className="block mb-2 font-medium">
          Departure Date
        </label>

        <input
          type="date"
          name="departDate"
          value={bookingData.departDate}
          onChange={handleChange}
          min={new Date().toISOString().split("T")[0]}
          className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      {/* Return */}

      <div className="mb-8">
        <label className="block mb-2 font-medium">
          Return Date
        </label>

        <input
          type="date"
          name="returnDate"
          value={bookingData.returnDate}
          onChange={handleChange}
          min={bookingData.departDate}
          className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      {/* Room Type */}

      <h3 className="text-xl font-semibold mb-5">
        Select Room Type
      </h3>

      <div className="grid md:grid-cols-3 gap-5">

        {roomTypes.map((room) => (
          <button
            key={room.id}
            type="button"
            onClick={() => handleRoom(room.id)}
            className={`border-2 rounded-2xl p-5 transition
            ${
              bookingData.roomType === room.id
                ? "border-teal-600 bg-teal-50"
                : "border-stone-200 hover:border-teal-300"
            }`}
          >
            <div className="text-4xl mb-3">
              {room.icon}
            </div>

            <h4 className="font-semibold">
              {room.title}
            </h4>

          </button>
        ))}

      </div>

    </div>
  );
};

export default TripDetails;