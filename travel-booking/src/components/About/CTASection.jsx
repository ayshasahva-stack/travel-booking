import { Link } from "react-router-dom";

import ctaImage from "../../assets/images/cta.jpg";

const CTASection = () => {
  return (
    <section
      className="relative py-24 md:py-32 bg-cover bg-center"
      style={{
        backgroundImage: `url(${ctaImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">

        <p className="uppercase tracking-[4px] text-amber-4 00 font-semibold">
          Start Your Adventure
        </p>

        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
          Ready For Your
          <br />
          Next Journey?
        </h2>

        <p className="mt-6 text-base sm:text-lg text-gray-200 leading-8 max-w-2xl mx-auto">
          Discover amazing destinations, create unforgettable memories,
          and book your dream vacation with WayGo today.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/destinations"
            className="px-8 py-4 rounded-full bg-teal-700 hover:bg-teal-800 transition font-semibold"
          >
            Explore Destinations
          </Link>

          <Link
            to="/contact"
            className="px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-stone-900 transition font-semibold"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
};

export default CTASection;