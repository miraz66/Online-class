import React, { useState } from "react";
import "@/style/testStyle.css";
import clsx from "clsx";

const NumberStepper = () => {
  const [value, setValue] = useState(1);

  const increment = () => {
    setValue((prevValue) => (prevValue < 10 ? prevValue + 1 : 10));
  };

  const decrement = () => {
    setValue((prevValue) => (prevValue > 1 ? prevValue - 1 : 1));
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const parsedValue = parseInt(inputValue, 10);

    if (!isNaN(parsedValue)) {
      setValue(parsedValue);
    } else {
      setValue(); // Set to a default value or handle invalid input
    }
  };

  return (
    <div>
      <h1>Number Stepper</h1>
      <div className="flex items-center justify-center">
        <button
          className={clsx(
            "bg-blue-500 text-white px-4 py-2 rounded-l",
            value > 1 ? "cursor-pointer" : "cursor-no-drop"
          )}
          onClick={decrement}
        >
          -
        </button>
        <input
          type="number"
          className="border border-gray-300 p-2 w-16 text-center outline-none"
          value={value}
          onChange={handleInputChange}
          style={{
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
            margin: 0,
          }}
        />
        <button
          className={clsx(
            "bg-gray-200 text-white px-4 py-2 rounded-r",
            value < 10 ? "cursor-pointer" : "cursor-no-drop"
          )}
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NumberStepper;
