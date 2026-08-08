import {
    FaMapMarkedAlt,
    FaCalendarAlt,
    FaCreditCard,
    FaPlaneDeparture,
} from "react-icons/fa";

const steps = [
    {
        id: "01",
        icon: <FaMapMarkedAlt size={28} />,
        title: "Explore Destinations",
        description:
            "Browse beautiful destinations and choose your perfect getaway.",
    },
    {
        id: "02",
        icon: <FaCalendarAlt size={28} />,
        title: "Book Your Trip",
        description:
            "Select your travel dates, room type, and number of travelers.",
    },
    {
        id: "03",
        icon: <FaCreditCard size={28} />,
        title: "Secure Payment",
        description:
            "Complete your booking safely with our quick and secure payment process.",
    },
    {
        id: "04",
        icon: <FaPlaneDeparture size={28} />,
        title: "Enjoy Your Journey",
        description:
            "Pack your bags and create unforgettable memories with Us.",
    },
];

const JourneySteps = () => {
    return (
       <section className="py-24 bg-gradient-to-b from-white via-stone-50 to-stone-100 dark:from-stone-900 dark:via-stone-950 dark:to-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">
                    <p className="uppercase tracking-[4px] text-teal-700 font-semibold">
                        Simple Process
                    </p>

                    <h2 className="text-5xl font-bold mt-4 text-stone-900 dark:text-white">
                        Your Journey in 4 Steps
                    </h2>
                </div>

                

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative">

                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            className="relative text-center group"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-teal-700 text-white flex items-center justify-center mx-auto transition duration-300 group-hover:scale-110">
                                {step.icon}
                            </div>

                            <p className="text-sm text-teal-700 font-semibold mt-4">
                                {step.id}
                            </p>

                            <h3 className="text-2xl font-bold mt-3 dark:text-white">
                                {step.title}
                            </h3>

                            <p className="text-stone-500 mt-4 leading-7">
                                {step.description}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default JourneySteps;