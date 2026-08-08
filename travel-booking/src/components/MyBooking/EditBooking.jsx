import { useState, useEffect } from "react";
import Button from "../Common/Button";
import { useDispatch } from "react-redux";
import { updateBookingThunk } from "../../redux/booking/bookingThunk";

const EditBooking = ({ booking, onClose }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    const [formData, setFormData] = useState({
        adults: booking.adults,
        children: booking.children,
        departDate: booking.departDate,
        returnDate: booking.returnDate,
        roomType: booking.roomType,
        phone: booking.phone,
        specialRequests: booking.specialRequests,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSave = async () => {
        const totalTravelers =
            Number(formData.adults) + Number(formData.children);

        const totalPrice =
            totalTravelers * booking.pricePerPerson;

        const updatedBooking = {
            ...booking,
            ...formData,

            totalTravelers,
            totalPrice,
        };

        const result = await dispatch(
            updateBookingThunk({
                id: booking.id,
                bookingData: updatedBooking,
            })
        );

        if (updateBookingThunk.fulfilled.match(result)) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-stone-900 p-4 sm:p-6 shadow-2xl transition-colors duration-300">

                <h2 className="text-xl sm:text-2xl font-bold mb-3 dark:text-white">
                    Edit Booking
                </h2>

                <p className="mb-1 dark:text-white">
                    <strong>Destination:</strong> {booking.destinationName}
                </p>

                <p className="mb-4 dark:text-white">
                    <strong>Traveler:</strong> {booking.firstName} {booking.lastName}
                </p>
                

                <label className="block mb-1 font-medium dark:text-white">
                    Adults
                </label>
                <input
                    type="number"
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    className="w-full border border-stone-300 dark:border-stone-700 bg-white  rounded-lg px-3 py-2 mb-3"
                />

               
                <label className="block mb-1 font-medium dark:text-white">
                    Children
                </label>
                <input
                    type="number"
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    className="w-full border border-stone-300 dark:border-stone-700 bg-white  rounded-lg px-3 py-2 mb-3"
                />

              
                <label className="block mb-1 font-medium dark:text-white">
                    Departure Date
                </label>
                <input
                    type="date"
                    name="departDate"
                    value={formData.departDate}
                    onChange={handleChange}
                    className="w-full border border-stone-300 dark:border-stone-700 bg-white rounded-lg px-3 py-2 mb-3"
                />

              
                <label className="block mb-1 font-medium dark:text-white">
                    Return Date
                </label>
                <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    className="w-full border border-stone-300 dark:border-stone-700 bg-white  rounded-lg px-3 py-2 mb-3"
                />

               
                <label className="block mb-1 font-medium dark:text-white">
                    Phone Number
                </label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-stone-300 dark:border-stone-700 bg-white rounded-lg px-3 py-2 mb-3"
                />

              
                <label className="block mb-1 font-medium dark:text-white">
                    Special Requests
                </label>
                <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={3}
                    className="w-full border border-stone-300 dark:border-stone-700 bg-white  rounded-lg p-2 mb-6 outline-none resize-none"
                />

                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-stone-200 dark:border-stone-700">
                    <Button variant="secondary" onClick={onClose}>
                        Cancel
                    </Button>

                    <Button
                        type="button"
                        onClick={handleSave}
                    >
                        Save Changes
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default EditBooking;