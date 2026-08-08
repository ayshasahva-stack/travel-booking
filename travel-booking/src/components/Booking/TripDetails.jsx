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
      <h2 className="text-2xl font-bold text-stone-900 dark:text-white mb-8">
        Trip Details
      </h2>

     
      <Input
        label="Departure Date"
        type="date"
        name="departDate"
        value={bookingData.departDate}
        onChange={handleChange}
        min={new Date().toISOString().split("T")[0]}
        error={errors.departDate}
      />

      
      <Input
        label="Return Date"
        type="date"
        name="returnDate"
        value={bookingData.returnDate}
        onChange={handleChange}
        min={bookingData.departDate}
        error={errors.returnDate}
      />

     
      <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-5">
        Select Room Type
      </h3>

      <div className="grid md:grid-cols-3 gap-5">
        {roomTypes.map((room) => (
          <button
            key={room.id}
            type="button"
            onClick={() => handleRoom(room.id)}
            className={`rounded-2xl p-5 border-2 transition-all duration-300
              ${
                bookingData.roomType === room.id
                  ? "border-teal-600 bg-teal-50 dark:bg-teal-900/30 dark:border-teal-500"
                  : "border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 hover:border-teal-300 dark:hover:border-teal-500"
              }`}
          >
            <div className="text-4xl mb-3">
              {room.icon}
            </div>

            <h4 className="font-semibold text-stone-900 dark:text-white">
              {room.title}
            </h4>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TripDetails;