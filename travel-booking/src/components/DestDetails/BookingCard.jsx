import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Common/Button";
import { openLogin } from "../../redux/ui/uiSlice";

const BookingCard = ({ destination }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleBooking = () => {
    if (!user) {
  dispatch(openLogin())
  return;
}
   navigate(`/booking/${destination.id}`);

  };

  return (
    <aside className="lg:sticky lg:top-28 h-fit">
    <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-6 lg:p-8 transition-shadow duration-300 hover:shadow-2xl">

      
        <div className="mb-8">
         <h2 className="text-3xl sm:text-4xl font-bold text-teal-700">
            ${destination.price.toLocaleString()}
          </h2>

          <p className="text-stone-500 mt-2">
            per person
          </p>
        </div>

      
        <div className="space-y-5 border-y py-6">

          <div className="flex justify-between">
            <span className="text-stone-500">Duration</span>

            <span className="font-semibold">
              {destination.duration}
            </span>
          </div>

         <div className="flex justify-between items-center gap-4">
            <span className="text-stone-500">
              Trip Type
            </span>

            <span className="font-semibold">
              {destination.type[0]}
            </span>
          </div>

          <div className="flex justify-between items-center gap-4">
            <span className="text-stone-500">
              Reviews
            </span>

            <span className="font-semibold">
              {destination.reviews.toLocaleString()}
            </span>
          </div>

        </div>

        <Button
          onClick={handleBooking}
        className="w-full mt-8 bg-teal-700 text-white py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-teal-600 transition"
        >
          Book Now
        </Button>

      
       <p className="text-center text-xs sm:text-sm text-stone-500 mt-6">
          🔒 Secure Booking • Free Cancellation
        </p>

      </div>
    </aside>
  );
};

export default BookingCard;