import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
      <h2> Anytext</h2>
      <h2> Anytext</h2>
      <h2> Anytext</h2>
    </>
  );
}

export default App;
