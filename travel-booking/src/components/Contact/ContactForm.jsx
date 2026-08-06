import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });

    setSuccessMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSuccessMessage("Your message has been sent successfully!");

    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <section className="py-16 md:py-24  bg-gradient-to-r from-teal-700 to-cyan-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">

            <p className="uppercase tracking-[4px] text-teal-700 font-semibold">
              Send a Message
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-stone-900">
              We'd Love to Hear From You
            </h2>

            {successMessage && (
              <div className="mt-6 bg-green-100 text-green-700 p-4 rounded-xl">
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">

              {/* Full Name */}
              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full rounded-xl px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-teal-600 ${
                    errors.fullName
                      ? "border-red-500"
                      : "border-stone-300"
                  }`}
                />

                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full rounded-xl px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-teal-600 ${
                    errors.email
                      ? "border-red-500"
                      : "border-stone-300"
                  }`}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-2 font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className={`w-full rounded-xl px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-teal-600 ${
                    errors.subject
                      ? "border-red-500"
                      : "border-stone-300"
                  }`}
                />

                {errors.subject && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className={`w-full rounded-xl px-4 py-3 border resize-none focus:outline-none focus:ring-2 focus:ring-teal-600 ${
                    errors.message
                      ? "border-red-500"
                      : "border-stone-300"
                  }`}
                />

                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-800 text-white py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Google Map */}
          <div className="rounded-3xl overflow-hidden shadow-lg min-h-[450px]">
            <iframe
              title="WayGo Location"
              src="https://www.google.com/maps?q=Kozhikode,Kerala&output=embed"
              className="w-full h-full min-h-[450px]"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;