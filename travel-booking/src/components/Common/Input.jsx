import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  className = "",
  as = "input",
  rows = 4,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputStyles = `
    w-full
    border
    rounded-xl
    px-4
    py-3
    bg-white dark:bg-stone-900
    text-stone-800 dark:text-white
    placeholder:text-stone-400 dark:placeholder:text-stone-500
    border-stone-300 dark:border-stone-700
    focus:outline-none
    focus:ring-2
    focus:ring-teal-500
    transition-colors duration-300
    ${error
      ? "border-red-500"
      : "border-stone-300 dark:border-stone-700"
    }
    ${className}
  `;

  return (
    <div className="mb-5">
      <label className="block mb-2 font-medium text-stone-800 dark:text-white transition-colors duration-300">
        {label}
      </label>

      {as === "textarea" ? (
        <textarea
          rows={rows}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${inputStyles} resize-none dark:[color-scheme:dark]`}
          {...rest}
        />
      ) : (
        <div className="relative">
          <input
            type={
              type === "password"
                ? showPassword
                  ? "text"
                  : "password"
                : type
            }
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${inputStyles} dark:[color-scheme:dark] ${type === "password" ? "pr-12" : ""
              }`}
            {...rest}
          />

          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 dark:text-stone-400 hover:text-teal-600 dark:hover:text-teal-400"
            >
              {showPassword ? (
                <FaEye size={18} />
              ) : (
                <FaEyeSlash size={18} />
              )}
            </button>
          )}
        </div>
      )}

      {error && (
        <p className="text-red-600 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;