import { useState } from "react";

function FunctionalCounter() {
  const [count, setCount] = useState(0);

  // function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  // function to reset the count
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Functional Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default FunctionalCounter;
