export const validateTripDetails = (bookingData) => {
  const errors = {};

  if (!bookingData.departDate) {
    errors.departDate = "Departure date is required";
  }

  if (!bookingData.returnDate) {
    errors.returnDate = "Return date is required";
  }

  if (
    bookingData.departDate &&
    bookingData.returnDate &&
    bookingData.returnDate <= bookingData.departDate
  ) {
    errors.returnDate = "Return date must be after departure date";
  }

  return errors;
};

export const validateTravelerDetails = (bookingData) => {
  const errors = {};

  if (!bookingData.firstName.trim()) {
    errors.firstName = "First name is required.";
  }

  if (!bookingData.lastName.trim()) {
    errors.lastName = "Last name is required.";
  }

  if (!bookingData.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[6-9]\d{9}$/.test(bookingData.phone)) {
    errors.phone = "Please enter a valid 10-digit phone number.";
  }

  if (bookingData.adults < 1) {
    errors.adults = "At least one adult is required.";
  }

  return errors;
};

export const validatePaymentDetails = (bookingData) => {
  const errors = {};

  if (!bookingData.cardName.trim()) {
    errors.cardName = "Cardholder name is required.";
  }

  const cardNumber = bookingData.cardNumber.replace(/\s/g, "");

  if (!cardNumber) {
    errors.cardNumber = "Card number is required.";
  } else if (!/^\d{16}$/.test(cardNumber)) {
    errors.cardNumber = "Card number must be 16 digits.";
  }
 const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

if (!bookingData.expiry.trim()) {
  errors.expiry = "Expiry date is required.";
} else if (!expiryRegex.test(bookingData.expiry)) {
  errors.expiry = "Enter a valid expiry date (MM/YY).";
}

  if (!bookingData.cvv.trim()) {
    errors.cvv = "CVV is required.";
  } else if (!/^\d{3,4}$/.test(bookingData.cvv)) {
    errors.cvv = "CVV must be 3 or 4 digits.";
  }

  return errors;
};