import Footer from "./components/Footer";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Header />
      <Welcome user="John" course="TypeScript" />
      <Footer />
    </>
  );
}

export default App;
