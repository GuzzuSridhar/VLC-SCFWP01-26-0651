import { Routes, Route, Link } from "react-router-dom";
import { lazy } from "react";

// lazy load components
const DashBoard = lazy(() => import("./components/DashBoard"));
const Home = lazy(() => import("./components/Home"));
const Reports = lazy(() => import("./components/Reports"));
const Settings = lazy(() => import("./components/Settings"));

// Traditional component imports
// import DashBoard from "./components/DashBoard";
// import Home from "./components/Home";
// import Reports from "./components/Reports";
// import Settings from "./components/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      {/* navbar */}
      <Link to="/">Home</Link> | <Link to="/dashboard">DashBoard</Link> |{" "}
      <Link to="/reports">Reports</Link> | <Link to="/settings">Settings</Link>{" "}
      |
      <hr />
    </>
  );
}
export default App;
