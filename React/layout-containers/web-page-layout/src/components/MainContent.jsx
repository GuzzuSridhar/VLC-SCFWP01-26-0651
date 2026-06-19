import { Route, Routes } from "react-router-dom";
import FlexBox from "./containers/FlexBox";
import Home from "./Home";
import Projects from "./Projects";
import Profile from "./Profile";
import About from "./About";
import Dashboard from "./Dashboard";

function MainContent() {
  return (
    <FlexBox
      direction="column"
      gap="20px"
      padding="20px"
      // background="#e7eaf0"
      grow={1}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </FlexBox>
  );
}

export default MainContent;
