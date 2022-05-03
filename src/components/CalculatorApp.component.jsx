import React, { useState } from "react";

import "./CalculatorApp.style.css";

 export const CalculatorApp = () => {
  const [left, setLeft] = useState("");
  const [operand, setOperand] = useState("");
  const [input, setInput] = useState("0");
  const inputHandler = (event) => {
    setInput(event.target.value);
  };
  const clearInput = () => {
    setInput("0");
  };
  const buttonHandler = (event) => {
    setInput((input) => {
      return input.concat(event.target.innerText);
    });
  };
  const operate = (event) => {
    setLeft(input);
    setOperand(event.target.innerText);
    setInput("");
  };
  const equalsTo = () => {
    switch (operand) {
      case "+":
        setInput(parseInt(left) + parseInt(input));
        break;
      case "−":
        setInput(parseInt(left) - parseInt(input));
        break;
      case "×":
        setInput(parseInt(left) * parseInt(input));
        break;
      case "÷":
        setInput(parseInt(left) / parseInt(input));
        break;
      default:
        alert("Something Went Wrong");
    }
  };
  return (
    <div className="calculator">
      <div className="input-container">
        <input type="text" value={input} onChange={inputHandler} />
      </div>
      <div className="row">
        <button
          className="button"
          style={{ color: "#777777" }}
          onClick={clearInput}
        >
          CLEAR
        </button>
        <button className="button" onClick={buttonHandler}>
          0
        </button>
        <button className="button" onClick={equalsTo}>
          =
        </button>
        <button className="button operator" onClick={operate}>
          &divide;
        </button>
      </div>
      <div className="row">
        <button className="button" onClick={buttonHandler}>
          7
        </button>
        <button className="button" onClick={buttonHandler}>
          8
        </button>
        <button className="button" onClick={buttonHandler}>
          9
        </button>
        <button className="button operator" onClick={operate}>
          &times;
        </button>
      </div>
      <div className="row">
        <button className="button" onClick={buttonHandler}>
          4
        </button>
        <button className="button" onClick={buttonHandler}>
          5
        </button>
        <button className="button" onClick={buttonHandler}>
          6
        </button>
        <button className="button operator" onClick={operate}>
          &minus;
        </button>
      </div>
      <div className="row">
        <button className="button" onClick={buttonHandler}>
          1
        </button>
        <button className="button" onClick={buttonHandler}>
          2
        </button>
        <button className="button" onClick={buttonHandler}>
          3
        </button>
        <button className="button operator" onClick={operate}>
          +
        </button>
      </div>
    </div>
  );
};

