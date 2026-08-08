import { useNavigate } from "react-router-dom";

const DestCard = ({ destination }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/destinations/${destination.id}`)}
      className="bg-white dark:bg-stone-900 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      
      <div className="relative">

        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
          className="w-full h-56 sm:h-64 lg:h-72 object-cover"
        />
       
        <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
          {destination.tag}
        </span>

        
        <span className="absolute top-4 right-4 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
          {destination.duration}
        </span>

      </div>

      

      <div className="p-6">

        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">

          <div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900 dark:text-white transition-colors duration-300">
              {destination.name}
            </h2>

            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900 dark:text-white transition-colors duration-300">
              📍 {destination.country}
            </p>

          </div>

          <div className="text-right">

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-600">
              ${destination.price}
            </h3>

            <p className="text-sm text-stone-500 dark:text-stone-400 transition-colors duration-300">
              per person
            </p>

          </div>

        </div>

      

        <div className="flex gap-2 mt-5">

          <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">
            {destination.category}
          </span>

        </div>

       

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-6">

          <button className="text-amber-400 font-semibold hover:underline">
            View Details →
          </button>

        </div>

      </div>

    </div>
  );
};

export default DestCard;