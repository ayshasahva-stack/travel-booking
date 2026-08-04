import BookingCard from "./BookingCard";

const BookingList = ({ bookings, onCancelBooking, onEditBooking }) => {
    return (
        <div className="grid gap-6">
            {bookings.map((booking) => (
                <BookingCard
                    key={booking.id}
                    booking={booking}
                    onCancelBooking={onCancelBooking}
                     onEditBooking={onEditBooking}
                />
            ))}
        </div>
    );
};

export default BookingList;