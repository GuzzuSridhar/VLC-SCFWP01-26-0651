import { useState } from "react";

function AddNumbers() {
  const [none, setNone] = useState(0);
  const [ntwo, setNtwo] = useState(0);
  const [result, setResult] = useState(0);

  const add = () => {
    setResult(Number(none) + Number(ntwo));
    console.log(result);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    gap: "1rem",
    fontFamily: "Arial, sans-serif",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "220px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#646cff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <input
        type="number"
        value={none}
        onChange={(e) => setNone(e.target.value)}
        style={inputStyle}
      />
      <input
        type="number"
        value={ntwo}
        onChange={(e) => setNtwo(e.target.value)}
        style={inputStyle}
      />

      <button onClick={add} style={buttonStyle}>
        Add
      </button>
      <h3 style={{ color: "#333", marginTop: "20px" }}>Result: {result}</h3>
    </div>
  );
}

export default AddNumbers;
