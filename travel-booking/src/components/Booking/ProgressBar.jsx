const STEPS = [
  "Trip Details",
  "Travelers",
  "Payment",
  "Confirm",
];

const ProgressBar = ({ step }) => {
  return (
    <div className="mb-10 ">
      <div className="flex items-center justify-between">

        {STEPS.map((item, index) => (
          <div
            key={item}
            className="flex items-center flex-1"
          >
           
            <div className="flex flex-col items-center flex-shrink-0">

              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300
                ${
                  index < step
                    ? "bg-teal-700 text-white"
                    : index === step
                    ? "bg-amber-400 text-stone-900"
                    : "bg-stone-200 text-stone-500"
                }`}
              >
                {index < step ? "✓" : index + 1}
              </div>

              <p
                className={`hidden md:block mt-2 text-sm font-medium
                ${
                  index === step
                    ? "text-amber-600"
                    : "text-stone-500"
                }`}
              >
                {item}
              </p>

            </div>

            

            {index !== STEPS.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2 rounded-full
                ${
                  index < step
                    ? "bg-teal-700"
                    : "bg-stone-200"
                }`}
              />
            )}

          </div>
        ))}

      </div>
    </div>
  );
};

export default ProgressBar;