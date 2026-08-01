import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBookingsThunk, deleteBookingThunk } from "../../redux/booking/bookingThunk";

import BookingHeader from "../../components/MyBooking/BookingHeader";
import BookingList from "../../components/MyBooking/BookingList";
import EmptyBookings from "../../components/MyBooking/EmptyBookins";
import Loading from "../../components/Common/Loading";

const MyBookings = () => {
    const dispatch = useDispatch();

    const { bookings, loading, error } = useSelector(
        (state) => state.booking
    );

    useEffect(() => {
        dispatch(getBookingsThunk());
    }, [dispatch]);

    const handleCancelBooking = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to cancel this booking?"
        );

        if (!confirmed) return;

        try {
            await dispatch(deleteBookingThunk(id)).unwrap();
        } catch (error) {
            console.error(error);
        }
    };
    if (loading) {
        return <Loading />;
    }

    if (error) {
        return (
            <p className="text-center pt-28 text-red-500">
                {error}
            </p>
        );
    }

    return (
        <section className="pt-28 pb-20 bg-stone-50 min-h-screen dark:bg-stone-950">
            <div className="max-w-7xl mx-auto px-6">
                <BookingHeader />

                {bookings.length === 0 ? (
                    <EmptyBookings />
                ) : (
                    <BookingList
                        bookings={bookings}
                        onCancelBooking={handleCancelBooking}
                    />
                )}
            </div>
        </section>
    );
};

export default MyBookings;