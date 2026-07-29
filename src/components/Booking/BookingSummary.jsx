const BookingSummary = ({ destination, bookingData }) => {
  const travelers =
    Number(bookingData.adults) + Number(bookingData.children);

  const totalTravelers = travelers || 1;

  const totalPrice =
    destination.price * totalTravelers;

  return (
    <aside className="lg:sticky lg:top-28 h-fit">
      <div className="bg-white rounded-3xl shadow-sm p-6">

        {/* Image */}

        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-52 object-cover rounded-2xl"
        />

        {/* Destination */}

        <div className="mt-5">

          <h3 className="text-2xl font-bold text-stone-900">
            {destination.name}
          </h3>

          <p className="text-stone-500 mt-1">
            {destination.country}
          </p>

        </div>

        {/* Summary */}

        <div className="border-t border-b border-stone-200 my-6 py-5 space-y-4">

          <div className="flex justify-between">
            <span className="text-stone-500">
              Duration
            </span>

            <span className="font-semibold">
              {destination.duration}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-stone-500">
              Price
            </span>

            <span className="font-semibold">
              ${destination.price.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-stone-500">
              Travelers
            </span>

            <span className="font-semibold">
              {totalTravelers}
            </span>
          </div>

        </div>

        {/* Total */}

        <div className="flex justify-between items-center">

          <h3 className="text-xl font-bold">
            Total
          </h3>

          <h3 className="text-2xl font-bold text-teal-700">
            ${totalPrice.toLocaleString()}
          </h3>

        </div>

        {/* Footer */}

        <div className="mt-6 bg-stone-50 rounded-2xl p-4">

          <p className="text-sm text-stone-500">
            ✅ Taxes Included
          </p>

          <p className="text-sm text-stone-500 mt-2">
            🔒 Secure Booking
          </p>

          <p className="text-sm text-stone-500 mt-2">
            ❌ Free Cancellation
          </p>

        </div>

      </div>
    </aside>
  );
};

export default BookingSummary;