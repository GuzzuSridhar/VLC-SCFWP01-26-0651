import FlexBox from "./components/containers/FlexBox";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

function App() {
  return (
    <FlexBox direction="column" height="100vh">
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
