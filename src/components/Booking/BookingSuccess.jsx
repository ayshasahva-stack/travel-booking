import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
const BookingSuccess = ({ destination, bookingData }) => {
    const totalPrice =
        destination.price *
        (Number(bookingData.adults) + Number(bookingData.children) || 1);
    return (
        <section className="bg-stone-50 min-h-screen flex items-center justify-center px-6 py-20">
            <div className="bg-white max-w-2xl w-full rounded-3xl shadow-lg p-10 text-center">

                {/* Success Icon */}
                <FaCheckCircle
                    className="mx-auto text-green-500 text-7xl mb-6"
                />

                {/* Heading */}
                <h1 className="text-4xl font-bold text-stone-900">
                    Booking Confirmed!
                </h1>

                <p className="text-stone-500 mt-3">
                    Thank you for choosing TravelEase.
                </p>

                {/* Booking Details */}
                <div className="bg-stone-50 rounded-2xl p-6 mt-8 text-left space-y-4">

                    <div className="flex justify-between">
                        <span className="text-stone-500">Destination</span>
                        <span className="font-semibold">
                            {destination.name}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-stone-500">Country</span>
                        <span className="font-semibold">
                            {destination.country}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-stone-500">Traveler</span>
                        <span className="font-semibold">
                            {bookingData.firstName} {bookingData.lastName}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-stone-500">Departure</span>
                        <span className="font-semibold">
                            {bookingData.departDate}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-stone-500">Return</span>
                        <span className="font-semibold">
                            {bookingData.returnDate}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-stone-500">Total Paid</span>
                        <span className="font-bold text-teal-700">
                            ${totalPrice.toLocaleString()}
                        </span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4 mt-8">

                    <Link
                        to="/"
                        className="px-6 py-3 bg-teal-700 text-white rounded-xl hover:bg-teal-600 transition"
                    >
                        Back to Home
                    </Link>

                    <Link
                        to="/destinations"
                        className="px-6 py-3 border border-stone-300 rounded-xl hover:bg-stone-100 transition"
                    >
                        Explore More
                    </Link>

                </div>

            </div>
        </section>
    );
};

export default BookingSuccess;