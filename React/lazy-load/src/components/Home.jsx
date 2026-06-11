import { useEffect } from "react";
import Button from "./Button";

console.log("Home page loaded"); // run only once on the load

function Home() {
  useEffect(() => {
    console.log("Home Component Mounted"); // runs everytime a component is mounted

    return () => {
      console.log("Home Component Unmounted"); // // runs everytime a component is unmounted
    };
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <Button />
    </>
  );
}

export default Home;
