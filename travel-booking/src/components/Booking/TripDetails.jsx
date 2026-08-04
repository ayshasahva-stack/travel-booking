import Input from "../Common/Input";

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

const TripDetails = ({
  bookingData,
  setBookingData,
  errors,
  setErrors,
}) => {
  const handleChange = (e) => {
  const { name, value } = e.target;

  let updatedData = {
    ...bookingData,
    [name]: value,
  };

  // If departure date changes and return date becomes invalid
  if (
    name === "departDate" &&
    bookingData.returnDate &&
    bookingData.returnDate <= value
  ) {
    updatedData.returnDate = "";
  }

  setBookingData(updatedData);

  if (errors[name]) {
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }
};
const handleRoom = (roomType) => {
  setBookingData((prev) => ({
    ...prev,
    roomType,
  }));
};
  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-900 mb-8">
        Trip Details
      </h2>

      {/* Departure Date */}

      <Input
        label="Departure Date"
        type="date"
        name="departDate"
        value={bookingData.departDate}
        onChange={handleChange}
        min={new Date().toISOString().split("T")[0]}
        error={errors.departDate}
      />

      {/* Return Date */}
      <Input
        label="Return Date"
        type="date"
        name="returnDate"
        value={bookingData.returnDate}
        onChange={handleChange}
        min={bookingData.departDate}
        error={errors.returnDate}
      />

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
            className={`border-2 rounded-2xl p-5 transition ${bookingData.roomType === room.id
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