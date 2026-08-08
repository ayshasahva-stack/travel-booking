import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How can I book a trip on WayGo?",
    answer:
      "Browse destinations, select your preferred package, fill in your booking details, and confirm your reservation through our booking form.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes. You can cancel your booking from the My Bookings page before your travel date.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No. We believe in transparent pricing, and all charges are clearly displayed before confirming your booking.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact us through the contact form, email, or phone number provided on this page.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-stone-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

       
        <div className="text-center mb-14">
          <p className="uppercase tracking-[4px] text-teal-700 font-semibold">
            FAQs
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-600 dark:text-stone-400">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-stone-600 dark:text-stone-400 leading-8">
            Find answers to some of the most common questions about
            WayGo and our booking process.
          </p>
        </div>

       
        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-stone-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left bg-white hover:bg-stone-50 transition"
              >
                <span className="font-semibold text-lg text-stone-900">
                  {faq.question}
                </span>

                {activeIndex === index ? (
                  <FaChevronUp className="text-teal-700" />
                ) : (
                  <FaChevronDown className="text-teal-700" />
                )}
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6 text-stone-600 leading-8 bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Faq;