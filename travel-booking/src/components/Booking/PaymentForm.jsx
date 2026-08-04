import Input from "../Common/Input";

const PaymentForm = ({
  bookingData,
  setBookingData,
  errors,
  setErrors,
}) => {
  const handleChange = (e) => {
    let { name, value } = e.target;

    // Card Number
    if (name === "cardNumber") {
      // Keep only digits
      value = value.replace(/\D/g, "");

      // Limit to 16 digits
      value = value.slice(0, 16);

      // Add a space after every 4 digits
      value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    }

    // CVV
    if (name === "cvv") {
      value = value.replace(/\D/g, "").slice(0, 4);
    }
    // Expiry Date
    if (name === "expiry") {
      // Keep only digits
      value = value.replace(/\D/g, "");

      // Limit to 4 digits
      value = value.slice(0, 4);

      // Add "/" after the month
      if (value.length > 2) {
        value = value.slice(0, 2) + "/" + value.slice(2);
      }
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
        Payment Details
      </h2>

      {/* Demo Notice */}

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8">
        <p className="text-amber-700 text-sm">
          🔒 Demo Payment Only. No real payment will be processed.
        </p>
      </div>

      {/* Cardholder Name */}

      <Input
        label="Cardholder Name"
        name="cardName"
        value={bookingData.cardName}
        onChange={handleChange}
        placeholder="John Doe"
        error={errors.cardName}
      />

      <Input
        label="Card Number"
        name="cardNumber"
        value={bookingData.cardNumber}
        onChange={handleChange}
        placeholder="1234567812345678"
        error={errors.cardNumber}
      />

      {/* Expiry + CVV */}

      <div className="grid md:grid-cols-2 gap-5">
        <Input
          label="Expiry Date"
          name="expiry"
          value={bookingData.expiry}
          onChange={handleChange}
          placeholder="MM/YY"
          error={errors.expiry}
        />

        <Input
          label="CVV"
          type="password"
          name="cvv"
          value={bookingData.cvv}
          onChange={handleChange}
          placeholder="123"
          maxLength={4}
          error={errors.cvv}
        />
      </div>
    </div>
  );
};

export default PaymentForm;