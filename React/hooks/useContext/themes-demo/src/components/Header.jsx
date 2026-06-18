import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header>
      <h1>Themes Demo</h1>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} Mode
      </button>
    </header>
  );
}

export default Header;
