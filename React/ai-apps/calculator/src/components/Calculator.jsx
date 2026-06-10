import { useState } from "react";
import "../App.css";

function Calculator() {
  const [display, setDisplay] = useState("");
  const [memory, setMemory] = useState("");

  const appendValue = (value) => {
    setDisplay((prev) => prev + value);
  };

  const calculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
      setMemory(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const clearMemory = () => {
    setMemory("");
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>

      <input type="text" value={display} readOnly />

      <div className="memory">Memory: {memory}</div>

      <div className="button-row">
        <button onClick={() => appendValue("7")}>7</button>
        <button onClick={() => appendValue("8")}>8</button>
        <button onClick={() => appendValue("9")}>9</button>
        <button onClick={() => appendValue("/")}>/</button>
      </div>

      <div className="button-row">
        <button onClick={() => appendValue("4")}>4</button>
        <button onClick={() => appendValue("5")}>5</button>
        <button onClick={() => appendValue("6")}>6</button>
        <button onClick={() => appendValue("*")}>*</button>
      </div>

      <div className="button-row">
        <button onClick={() => appendValue("1")}>1</button>
        <button onClick={() => appendValue("2")}>2</button>
        <button onClick={() => appendValue("3")}>3</button>
        <button onClick={() => appendValue("-")}>-</button>
      </div>

      <div className="button-row">
        <button onClick={() => appendValue("0")}>0</button>

        <button className="equals" onClick={calculate}>
          =
        </button>

        <button className="clear" onClick={clearDisplay}>
          C
        </button>

        <button onClick={() => appendValue("+")}>+</button>
      </div>

      <button className="memory-button" onClick={clearMemory}>
        MC
      </button>
    </div>
  );
}

export default Calculator;
