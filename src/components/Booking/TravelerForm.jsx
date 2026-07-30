import Input from "../Common/Input";

const TravelerForm = ({
  bookingData,
  setBookingData,
  errors,
  setErrors,
}) => {
  const handleChange = (e) => {
  let { name, value } = e.target;

  // Phone Number
  if (name === "phone") {
    value = value.replace(/\D/g, "").slice(0, 10);
  }

  setBookingData({
    ...bookingData,
    [name]: value,
  });

  if (errors[name]) {
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }
};
  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-900 mb-8">
        Traveler Details
      </h2>

      {/* Name */}

      <div className="grid md:grid-cols-2 gap-5">
        <Input
          label="First Name"
          name="firstName"
          value={bookingData.firstName}
          onChange={handleChange}
          placeholder="John"
          error={errors.firstName}
        />

        <Input
          label="Last Name"
          name="lastName"
          value={bookingData.lastName}
          onChange={handleChange}
          placeholder="Doe"
          error={errors.lastName}
        />
      </div>

      {/* Phone */}

      <Input
        label="Phone Number"
        type="tel"
        name="phone"
        value={bookingData.phone}
        onChange={handleChange}
        placeholder="+91 9876543210"
        error={errors.phone}
      />


      <div className="grid md:grid-cols-2 gap-5">
        <Input
          label="Adults"
          type="number"
          min={1}
          name="adults"
          value={bookingData.adults}
          onChange={handleChange}
          error={errors.adults}
        />

        <Input
          label="Children"
          type="number"
          name="children"
          value={bookingData.children}
          onChange={handleChange}
        />
      </div>

      {/* Special Requests */}

      <div className="mt-5">

        <Input
          label="Special Requests"
          as="textarea"
          name="specialRequests"
          value={bookingData.specialRequests}
          onChange={handleChange}
          placeholder="Any dietary requirements, accessibility needs, or special occasions..."
        />
      </div>
    </div>
  );
};

export default TravelerForm;