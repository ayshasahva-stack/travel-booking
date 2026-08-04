import aboutImage from "../../assets/images/about-story.jpg";

const AboutStory = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div>
            <img
              src={aboutImage}
              alt="Travel adventure"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          {/* Content */}
          <div>
            <p className="uppercase tracking-[4px] text-teal-700 font-semibold">
              Our Story
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight dark:text-white">
              Making Every Journey
              <br />
              Simple & Memorable
            </h2>

            <p className="mt-6 text-stone-600 dark:text-stone-400 leading-8 text-base sm:text-lg">
              At TravelEase, we believe that every journey begins with
              excitement. Our goal is to make travel planning simple,
              enjoyable, and stress-free for everyone.
            </p>

            <p className="mt-6 text-stone-600 dark:text-stone-400 leading-8 text-base sm:text-lg">
              Whether you're looking for a peaceful beach vacation,
              an adventurous mountain escape, or a vibrant city tour,
              TravelEase helps you discover destinations that match your
              style and budget.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <h3 className="text-3xl font-bold text-teal-700">150+</h3>
                <p className="mt-2 text-stone-600 dark:text-stone-400">Destinations</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-teal-700">5000+</h3>
                <p className="mt-2 text-stone-600 dark:text-stone-400">Happy Travelers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-teal-700">24/7</h3>
                <p className="mt-2 text-stone-600 dark:text-stone-400">Customer Support</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-teal-700">100%</h3>
                <p className="mt-2 text-stone-600 dark:text-stone-400">Secure Booking</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStory;