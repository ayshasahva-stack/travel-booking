import { Link } from "react-router-dom";
import heroImage from "../../assets/images/contactHero.jpg";

const ContactHero = () => {
  return (
    <section
      className="relative h-[60vh] md:h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-3xl">

          <p className="uppercase tracking-[5px] text-amber-400 font-semibold">
            Contact Us
          </p>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold">
            We'd Love To
            <br />
            Hear From You
          </h1>

          <p className="mt-6 text-gray-200 leading-8 text-base sm:text-lg">
            Have questions about your next adventure?
            Our team is here to help you plan the perfect trip.
          </p>

          <Link
            to="/destinations"
            className="inline-block mt-8 px-8 py-4 rounded-full bg-teal-700 hover:bg-teal-800 transition"
          >
            Explore Destinations
          </Link>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;