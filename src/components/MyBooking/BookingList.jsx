import BookingCard from "./BookingCard";

const BookingList = ({ bookings, onCancelBooking }) => {
    return (
        <div className="grid gap-6">
            {bookings.map((booking) => (
                <BookingCard
                    key={booking.id}
                    booking={booking}
                    onCancelBooking={onCancelBooking}
                />
            ))}
        </div>
    );
};

export default BookingList;