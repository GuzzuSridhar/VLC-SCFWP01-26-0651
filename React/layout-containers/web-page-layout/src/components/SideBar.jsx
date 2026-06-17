import { Link } from "react-router-dom";
import FlexBox from "./containers/FlexBox";

function SideBar() {
  return (
    <FlexBox
      direction="column"
      gap="15px"
      padding="20px"
      background="#2563eb"
      style={{ color: "white" }}
    >
      <h3>Menu</h3>
      <span>
        <Link to="/dashboard">DashBoard</Link>
      </span>
      <span>Tasks</span>
      <span>Users</span>
      <span>Settings</span>
    </FlexBox>
  );
}

export default SideBar;
