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
  const inputStyles = `
    w-full
    border
    rounded-xl
    px-4
    py-3
    focus:outline-none
    focus:ring-2
    focus:ring-teal-500
    ${
      error
        ? "border-red-500"
        : "border-stone-300"
    }
    ${className}
  `;

  return (
    <div className="mb-5">
      <label className="block mb-2 font-medium">
        {label}
      </label>

      {as === "textarea" ? (
        <textarea
          rows={rows}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${inputStyles} resize-none`}
          {...rest}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputStyles}
          {...rest}
        />
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