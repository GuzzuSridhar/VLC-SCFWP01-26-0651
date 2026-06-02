import { useState } from "react";

function CounterDemo() {
  const [a, setA] = useState(0);
  return (
    <>
      <button type="button" onClick={() => setA((CurrCount) => CurrCount + 1)}>
        {a}
      </button>
    </>
  );
}

export default CounterDemo;
