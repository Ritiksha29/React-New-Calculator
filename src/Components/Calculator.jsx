import React, { useState } from "react";
import "../styles.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  // Button Layout
  const buttons = [
    "C",
    "⌫",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  // Handle Button Clicks
  const handleClick = (value) => {
    if (value === "C") {
      setInput(""); // Clear input
    } else if (value === "⌫") {
      setInput(input.slice(0, -1)); // Remove last character
    } else if (value === "=") {
      calculateResult(); // Compute result
    } else {
      setInput(input + value); // Append value
    }
  };

  // Compute Result
  const calculateResult = () => {
    let tokens = input.match(/(\d+\.?\d*|\+|\\-|\*|\/)/g);
    if (!tokens) return;

    let result = Number(tokens[0]); // Convert first token to number

    for (let i = 1; i < tokens.length; i += 2) {
      let operator = tokens[i];
      let nextNum = Number(tokens[i + 1]); // Convert next token to number

      if (operator === "+") result += nextNum;
      if (operator === "-") result -= nextNum;
      if (operator === "*") result *= nextNum;
      if (operator === "/") result /= nextNum;
    }

    setInput(result.toString()); // Convert result back to string for display
  };

  return (
    <>
      <h1 className="heading">Calculator</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly className="display" />
        <div className="buttons">
          {buttons.map((btn, index) => (
            <button key={index} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calculator;
