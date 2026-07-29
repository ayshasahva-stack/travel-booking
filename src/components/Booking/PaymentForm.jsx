const PaymentForm = ({ bookingData, setBookingData }) => {
  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
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

      <div className="mb-6">
        <label className="block mb-2 font-medium">
          Cardholder Name
        </label>

        <input
          type="text"
          name="cardName"
          value={bookingData.cardName}
          onChange={handleChange}
          placeholder="John Doe"
          className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      {/* Card Number */}

      <div className="mb-6">
        <label className="block mb-2 font-medium">
          Card Number
        </label>

        <input
          type="text"
          name="cardNumber"
          value={bookingData.cardNumber}
          onChange={handleChange}
          maxLength={16}
          placeholder="1234567812345678"
          className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      {/* Expiry + CVV */}

      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="block mb-2 font-medium">
            Expiry Date
          </label>

          <input
            type="text"
            name="expiry"
            value={bookingData.expiry}
            onChange={handleChange}
            placeholder="MM/YY"
            className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            CVV
          </label>

          <input
            type="password"
            name="cvv"
            value={bookingData.cvv}
            onChange={handleChange}
            maxLength={4}
            placeholder="123"
            className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

      </div>
    </div>
  );
};

export default PaymentForm;