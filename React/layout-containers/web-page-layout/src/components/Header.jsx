import { Link } from "react-router-dom";
import FlexBox from "./containers/FlexBox";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <FlexBox
      justify="space-between"
      align="center"
      padding="20px"
      // background="#2563eb"
      // style={{ color: "white" }}
      height="1vh"
    >
      <h2>My Application</h2>

      <FlexBox gap="20px">
        <span>
          {" "}
          <Link to="/">Home</Link>
        </span>
        <span>
          {" "}
          <Link to="/projects">Projects</Link>
        </span>
        <span>
          {" "}
          <Link to="/profile">Profile</Link>
        </span>

        <span>
          {" "}
          <Link to="/about">About</Link>
        </span>

        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </FlexBox>
    </FlexBox>
  );
}

export default Header;
