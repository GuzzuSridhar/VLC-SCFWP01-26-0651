import { useState } from "react";

function LivePreview() {
  // declare the state variable
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  // event handling function
  function handleChange(x) {
    setName(x.target.value);
  }
  function handleChangeCountry(x) {
    setCountry(x.target.value);
  }

  return (
    <div className="container">
      <h2> React State Demo</h2>
      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Enter your Country..."
        value={country}
        onChange={handleChangeCountry}
      />

      <div className="card">
        <h2>
          Hello, {name}, from {country}
        </h2>
      </div>
    </div>
  );
}

export default LivePreview;
