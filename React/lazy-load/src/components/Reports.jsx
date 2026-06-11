import { useEffect } from "react";

console.log("Reports page loaded"); // run only once on the load

function Reports() {
  useEffect(() => {
    console.log("Reports Component Mounted"); // runs everytime a component is mounted

    return () => {
      console.log("Reports Component Unmounted"); // // runs everytime a component is unmounted
    };
  }, []);

  return (
    <>
      <h1>Reports</h1>
    </>
  );
}

export default Reports;
