import { useEffect } from "react";

console.log("Settings page loaded"); // run only once on the load

function Settings() {
  useEffect(() => {
    console.log("Settings Component Mounted"); // runs everytime a component is mounted

    return () => {
      console.log("Settings Component Unmounted"); // // runs everytime a component is unmounted
    };
  }, []);

  return (
    <>
      <h1>Settings</h1>
    </>
  );
}

export default Settings;
