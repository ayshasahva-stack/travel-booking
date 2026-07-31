import { useEffect, useState } from "react";
import { useDispatch, useSelector,  } from "react-redux";
import { Link, useNavigate ,useParams} from "react-router-dom";

import ProgressBar from "../../components/Booking/ProgressBar";
import BookingSummary from "../../components/Booking/BookingSummary";
import TripDetails from "../../components/Booking/TripDetails";
import TravelerForm from "../../components/Booking/TravelerForm";
import PaymentForm from "../../components/Booking/PaymentForm";
// import BookingSuccess from "../../components/Booking/BookingSuccess";
import ReviewConfirm from "../../components/Booking/ReviewConfirm";
import Loading from "../../components/Common/Loading";
import EmptyState from "../../components/Common/EmptyState";
import Button from "../../components/Common/Button";

import { validateTripDetails, validateTravelerDetails, validatePaymentDetails } from "../../utils/BookingValidation";
import { createBookingThunk } from "../../redux/booking/bookingThunk";



import { fetchDestinations } from "../../redux/destination/destinationThunk";


const Booking = () => {

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { destinations, loading } = useSelector(
    (state) => state.destination
  );

  const destination = destinations.find(
    (item) => String(item.id) === id
  );
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});


  const [bookingData, setBookingData] = useState({
    departDate: "",
    returnDate: "",
    adults: 1,
    children: 0,
    roomType: "standard",

    firstName: "",
    lastName: "",
    phone: "",

    specialRequests: "",

    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const nextStep = () => {
    let newErrors = {};

    switch (step) {
      case 0:
        newErrors = validateTripDetails(bookingData);
        break;

      case 1:
        newErrors = validateTravelerDetails(bookingData);
        break;

      case 2:
        newErrors = validatePaymentDetails(bookingData);
        break;

      default:
        break;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep((prev) => prev + 1);
  };
  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleConfirmBooking = async () => {
    try {
      const booking = {
        ...bookingData,
        destinationId: destination.id,
        destinationName: destination.name,
        country: destination.country,
        image: destination.image,
        status: "Confirmed",
        bookedAt: new Date().toISOString(),
      };

      await dispatch(createBookingThunk(booking)).unwrap();

      navigate("/booking-success", {
        state: {
          destination,
          bookingData,
        },
      });
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };

  useEffect(() => {
    if (destinations.length === 0) {
      dispatch(fetchDestinations());
    }
  }, [dispatch, destinations]);

  if (loading) {
    return <Loading />;
  }

  if (!destination) {
    return <EmptyState message="Destination not found" />;
  }



  return (
    <section className="bg-stone-50 min-h-screen pt-24 lg:pt-28 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <Link
            to={`/destinations/${destination.id}`}
            className="inline-block text-teal-700 hover:underline text-sm mb-3"
          >
            ← Back to {destination.name}
          </Link>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900">
            Book Your Trip
          </h1>

          <p className="text-stone-500 mt-2">
            {destination.name}, {destination.country}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-10">

          {/* Left */}

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-5 sm:p-6 lg:p-8">
            <ProgressBar step={step} />

            {step === 0 && (
              <TripDetails
                bookingData={bookingData}
                setBookingData={setBookingData}
                errors={errors}
                setErrors={setErrors}

              />
            )}

            {step === 1 && (
              <TravelerForm
                bookingData={bookingData}
                setBookingData={setBookingData}
                errors={errors}
                setErrors={setErrors}
              />
            )}

            {step === 2 && (
              <PaymentForm
                bookingData={bookingData}
                setBookingData={setBookingData}
                errors={errors}
                setErrors={setErrors}
              />
            )}

            {step === 3 && (
              <ReviewConfirm
                destination={destination}
                bookingData={bookingData}
              />
            )}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10">
              {step > 0 ? (
                <button
                  onClick={prevStep}
                  className="w-full sm:w-auto px-6 py-3 border border-stone-300 rounded-xl font-medium hover:bg-stone-100 transition"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <Button
                  onClick={nextStep}
                  className="w-full sm:w-auto bg-teal-700 text-white hover:bg-teal-600"
                >
                  Continue →
                </Button>
              ) : (
                <Button
                  onClick={handleConfirmBooking}
                  className="w-full sm:w-auto bg-amber-400 text-stone-900 hover:bg-amber-300"
                >
                  Confirm Booking 🎉
                </Button>
              )}
            </div>
          </div>

          {/* Right */}

          <BookingSummary
            destination={destination}
            bookingData={bookingData}
          />

        </div>

      </div>
    </section>
  );
};

export default Booking;