import { useEffect } from "react";

function Button() {
  useEffect(() => {
    console.log("Button Component Mounted"); // runs everytime a component is mounted

    return () => {
      console.log("Button Component Unmounted"); // // runs everytime a component is unmounted
    };
  }, []);
  return (
    <>
      <button>Submit</button>
    </>
  );
}

export default Button;
