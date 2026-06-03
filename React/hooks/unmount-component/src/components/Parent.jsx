import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [showChild, setShowChild] = useState(true);

  return (
    <div>
      <h1>Component Un-Mount Demo </h1>
      <button onClick={() => setShowChild(!showChild)}>
        {showChild ? "Hide Child" : "Show Child"} Component
      </button>
      {showChild && <Child />}
    </div>
  );
}

export default Parent;
