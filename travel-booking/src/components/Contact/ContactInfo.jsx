import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaMapMarkerAlt size={28} />,
    title: "Our Office",
    info: "WayGo, Kozhikode, Kerala, India",
  },
  {
    icon: <FaPhoneAlt size={28} />,
    title: "Phone",
    info: "+91 98765 43210",
  },
  {
    icon: <FaEnvelope size={28} />,
    title: "Email",
    info: "support@WayGo.com",
  },
  {
    icon: <FaClock size={28} />,
    title: "Working Hours",
    info: "Mon - Sat : 9:00 AM - 6:00 PM",
  },
];

const ContactInfo = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="uppercase tracking-[4px] text-teal-700 font-semibold ">
            Get In Touch
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white">
            Contact Information
          </h2>

          <p className="mt-6 text-stone-600 dark:text-stone-400 leading-8">
            We'd love to hear from you. Reach out to us through any of
            the following contact details.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="bg-stone-50 rounded-3xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-stone-900">
                {item.title}
              </h3>

              <p className="mt-4 text-stone-600 leading-7">
                {item.info}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ContactInfo;