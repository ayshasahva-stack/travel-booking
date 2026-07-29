const TravelerForm = ({ bookingData, setBookingData }) => {
  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-900 mb-8">
        Traveler Details
      </h2>

      {/* Name */}

      <div className="grid md:grid-cols-2 gap-5 mb-6">
        <div>
          <label className="block mb-2 font-medium">
            First Name
          </label>

          <input
            type="text"
            name="firstName"
            value={bookingData.firstName}
            onChange={handleChange}
            placeholder="John"
            className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Last Name
          </label>

          <input
            type="text"
            name="lastName"
            value={bookingData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Phone */}

      <div className="mb-6">
        <label className="block mb-2 font-medium">
          Phone Number
        </label>

        <input
          type="tel"
          name="phone"
          value={bookingData.phone}
          onChange={handleChange}
          placeholder="+91 9876543210"
          className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      {/* Travelers */}

      <div className="grid md:grid-cols-2 gap-5 mb-6">

        <div>
          <label className="block mb-2 font-medium">
            Adults
          </label>

          <input
            type="number"
            min="1"
            name="adults"
            value={bookingData.adults}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Children
          </label>

          <input
            type="number"
            min="0"
            name="children"
            value={bookingData.children}
            onChange={handleChange}
            className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

      </div>

      {/* Special Requests */}

      <div>
        <label className="block mb-2 font-medium">
          Special Requests
        </label>

        <textarea
          rows="4"
          name="specialRequests"
          value={bookingData.specialRequests}
          onChange={handleChange}
          placeholder="Any dietary requirements, accessibility needs, or special occasions..."
          className="w-full border border-stone-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
    </div>
  );
};

export default TravelerForm;