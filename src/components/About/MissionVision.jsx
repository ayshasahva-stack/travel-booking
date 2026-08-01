import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="uppercase tracking-[4px] text-teal-700 font-semibold">
            Our Purpose
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white">
            Mission & Vision
          </h2>

          <p className="mt-6 text-stone-400 leading-8">
            We are passionate about making travel simple, memorable,
            and accessible for everyone.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Mission */}
          <div className="bg-stone-50 rounded-3xl p-8 md:p-10 shadow-md hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
              <FaBullseye size={28} />
            </div>

            <h3 className="mt-6 text-3xl font-bold text-stone-900">
              Our Mission
            </h3>

            <p className="mt-5 text-stone-600 leading-8">
              Our mission is to simplify travel planning by offering
              reliable destination information, secure bookings, and
              excellent customer service that helps every traveler enjoy
              a smooth and memorable experience.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-stone-50 rounded-3xl p-8 md:p-10 shadow-md hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
              <FaEye size={28} />
            </div>

            <h3 className="mt-6 text-3xl font-bold text-stone-900">
              Our Vision
            </h3>

            <p className="mt-5 text-stone-600 leading-8">
              Our vision is to become a trusted travel platform that
              inspires people to explore the world with confidence,
              making every journey exciting, affordable, and unforgettable.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;