import {
  FaGlobeAsia,
  FaShieldAlt,
  FaHeadset,
  FaWallet,
} from "react-icons/fa";

const features = [
  {
    icon: <FaGlobeAsia size={35} />,
    title: "Wide Destination Choices",
    description:
      "Explore beaches, mountains, cities, and adventure destinations across the world.",
  },
  {
    icon: <FaWallet size={35} />,
    title: "Affordable Prices",
    description:
      "Enjoy competitive prices with transparent booking and no hidden charges.",
  },
  {
    icon: <FaShieldAlt size={35} />,
    title: "Secure Booking",
    description:
      "Book confidently with a safe and reliable reservation process.",
  },
  {
    icon: <FaHeadset size={35} />,
    title: "24/7 Support",
    description:
      "Our support team is always ready to assist you before and during your trip.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24  bg-gradient-to-r from-teal-700 to-cyan-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="uppercase tracking-[4px] text-amber-300 font-semibold">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            Everything You Need
            <br />
            For Your Perfect Trip
          </h2>

          <p className="mt-6 text-stone-800 leading-8">
            We make travel planning simple, affordable, and enjoyable
            with trusted services designed for every traveler.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-stone-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-stone-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;