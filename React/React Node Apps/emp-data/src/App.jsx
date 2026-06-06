import { Routes, Route } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EmployeeForm />} />
        <Route path="/emplist" element={<EmployeeList />} />
      </Routes>
    </>
  );
}

export default App;
