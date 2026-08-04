import { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSuccess("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-teal-700 to-cyan-700">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">

          <p className="uppercase tracking-[4px] text-teal-700 font-semibold">
            Newsletter
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            Stay Updated
          </h2>

          <p className="mt-6 text-stone-600 leading-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive the latest travel
            updates, exclusive offers, and destination inspiration.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
                setSuccess("");
              }}
              className={`flex-1 border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-teal-600 ${
                error ? "border-red-500" : "border-stone-300"
              }`}
            />

            <button
              type="submit"
              className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Subscribe
            </button>
          </form>

          {error && (
            <p className="text-red-500 mt-4">{error}</p>
          )}

          {success && (
            <p className="text-green-600 mt-4 font-medium">{success}</p>
          )}

        </div>

      </div>
    </section>
  );
};

export default NewsLetter;