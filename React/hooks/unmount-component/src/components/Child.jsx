import { useEffect } from "react";

function Child() {
  useEffect(() => {
    console.log("Component Mounted");
    return () => console.log("Component Unmounted");
  }, []);
  return (
    <div>
      <h2>Child Component</h2>
    </div>
  );
}

export default Child;
