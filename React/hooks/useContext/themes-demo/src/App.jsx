import { useContext } from "react";
import { ThemeContext } from "./components/contexts/ThemeContext";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
