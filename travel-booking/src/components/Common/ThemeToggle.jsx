import { FaMoon, FaSun } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-300 hover:bg-stone-200 dark:hover:bg-stone-700"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <FaSun className="text-yellow-400 text-lg" />
      ) : (
        <FaMoon className="text-stone-700 text-lg" />
      )}
    </button>
  );
};

export default ThemeToggle; 