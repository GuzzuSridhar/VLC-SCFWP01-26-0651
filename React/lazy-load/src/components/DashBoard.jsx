import { useEffect } from "react";

console.log("Dashboard page loaded"); // run only once on the load

function DashBoard() {
  useEffect(() => {
    console.log("Dashboard Component Mounted"); // runs everytime a component is mounted

    return () => {
      console.log("Dashboard Component Unmounted"); // // runs everytime a component is unmounted
    };
  }, []);

  return (
    <>
      <h1>DashBoard </h1>
    </>
  );
}

export default DashBoard;
