import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./EmployeeList.css";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  console.log(employees);

  const fetchEmployees = async () => {
    try {
      const response = await fetch("http://localhost:3000/employees");
      const data = await response.json();
      console.log(data);
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="list-container">
      <header>
        <h1>Employee List</h1>
      </header>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.empId}>
              <td>{employee.empId}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>${Number(employee.salary).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="actions">
        <Link to="/" className="add-btn">
          Add New Employee
        </Link>
      </div>
    </div>
  );
}

export default EmployeeList;
