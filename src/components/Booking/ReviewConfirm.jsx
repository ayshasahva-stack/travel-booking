const ReviewConfirm = ({ destination, bookingData }) => {
  const travelers =
    Number(bookingData.adults) + Number(bookingData.children);

  const totalPrice =
    destination.price * (travelers || 1);

  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-900 mb-8">
        Review & Confirm
      </h2>

      <div className="bg-stone-50 rounded-2xl p-6 space-y-4">

        <div className="flex justify-between border-b pb-3">
          <span className="text-stone-500">Destination</span>
          <span className="font-semibold">
            {destination.name}, {destination.country}
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="text-stone-500">Duration</span>
          <span className="font-semibold">
            {destination.duration}
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="text-stone-500">Departure</span>
          <span className="font-semibold">
            {bookingData.departDate}
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="text-stone-500">Return</span>
          <span className="font-semibold">
            {bookingData.returnDate}
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="text-stone-500">Traveler</span>
          <span className="font-semibold">
            {bookingData.firstName} {bookingData.lastName}
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="text-stone-500">Room Type</span>
          <span className="font-semibold capitalize">
            {bookingData.roomType}
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="text-stone-500">Travelers</span>
          <span className="font-semibold">
            {travelers}
          </span>
        </div>

        <div className="flex justify-between pt-4">
          <span className="text-xl font-bold">
            Total
          </span>

          <span className="text-2xl font-bold text-teal-700">
            ${totalPrice.toLocaleString()}
          </span>
        </div>

      </div>
    </div>
  );
};

export default ReviewConfirm;   