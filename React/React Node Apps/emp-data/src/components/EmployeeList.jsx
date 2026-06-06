import { useEffect, useState } from "react";

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
    <>
      <div>
        <h1>Employee List</h1>
        <table>
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
              <tr>
                <td>{employee.empId}</td>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default EmployeeList;
