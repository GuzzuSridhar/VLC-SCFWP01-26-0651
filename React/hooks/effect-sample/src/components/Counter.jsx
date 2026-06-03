import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [countOne, setCountOne] = useState(0);

  useEffect(() => {
    console.log("Effect Called");
    // update the document title when count changes
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count : {count}
      </button>
      <button onClick={() => setCountOne((prev) => prev + 1)}>
        CountOne : {countOne}
      </button>
    </div>
  );
}

export default Counter;
