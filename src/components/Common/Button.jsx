const Button = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  variant = "primary",
  className = "",
}) => {
  const variants = {
    primary: "bg-teal-700 text-white hover:bg-teal-600",
    secondary: "border border-stone-300 hover:bg-stone-100",
    warning: "bg-amber-400 text-stone-900 hover:bg-amber-300",
    danger: "bg-red-600 text-white hover:bg-red-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3
        rounded-xl
        font-semibold
        transition
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;