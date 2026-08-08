import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
      }}
    >

      <div className="absolute inset-0 bg-black/60"></div>


      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-3xl text-center text-white">
          <p className="uppercase tracking-[5px] text-white font-semibold">
            About us
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Explore the World
            <br />
            With Confidence
          </h1>

          <p className="mt-6 text-lg text-gray-200 leading-8">
            WayGo helps travelers discover amazing destinations,
            plan unforgettable trips, and enjoy a seamless booking
            experience—all in one place.
          </p>

          <Link
            to="/destinations"
            className="inline-block mt-10 bg-teal-700 hover:bg-teal-800 px-8 py-4 rounded-full font-semibold transition"
          >
            Explore Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;