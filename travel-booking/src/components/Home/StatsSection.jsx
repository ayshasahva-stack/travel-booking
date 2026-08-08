const stats = [
  {
    number: "150+",
    title: "Destinations",
  },
  {
    number: "5,000+",
    title: "Happy Travelers",
  },
  {
    number: "2,500+",
    title: "Bookings Completed",
  },
  {
    number: "24/7",
    title: "Customer Support",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-teal-700 to-cyan-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="uppercase tracking-[4px] text-amber-300 font-semibold">
            Journey in Numbers
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Trusted by Thousands
            <br />
            of Travelers
          </h2>

          <p className="mt-6 text-gray-200 leading-8">
            Our growing community of travelers inspires us to provide
            exceptional travel experiences every day.
          </p>
        </div>

        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition duration-300"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-amber-300">
                {stat.number}
              </h3>

              <p className="mt-4 text-lg font-medium">
                {stat.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default StatsSection;