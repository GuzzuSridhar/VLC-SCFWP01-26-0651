import FlexBox from "./components/containers/FlexBox";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./components/context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <FlexBox direction="column" height="100vh" className={`app ${theme}`}>
      {/* header section */}
      <Header />

      {/* Body Section */}
      <FlexBox grow={1}>
        <SideBar />
        <MainContent />
      </FlexBox>

      {/* Footer Section */}
      <Footer />
    </FlexBox>
  );
}

export default App;
