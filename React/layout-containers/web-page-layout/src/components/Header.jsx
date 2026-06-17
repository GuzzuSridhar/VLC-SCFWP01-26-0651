import { Link } from "react-router-dom";
import FlexBox from "./containers/FlexBox";

function Header() {
  return (
    <FlexBox
      justify="space-between"
      align="center"
      padding="20px"
      background="#2563eb"
      style={{ color: "white" }}
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
      </FlexBox>
    </FlexBox>
  );
}

export default Header;
