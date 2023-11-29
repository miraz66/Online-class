import React, { useState } from "react";
import { PlusSmallIcon, MinusSmallIcon } from "@heroicons/react/24/solid";
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
    <div className="border h-12 border-neutral-300 rounded-md flex justify-center p-[4px]">
      <button
        className={clsx(
          "bg-neutral-400 text-white px-3 rounded-l ease-in-out duration-300",
          value > 1 ? "cursor-pointer" : "cursor-no-drop bg-neutral-200"
        )}
        onClick={decrement}
      >
        <MinusSmallIcon className="w-5 h-5" />
      </button>
      <input
        type="number"
        className="w-54 text-center outline-none"
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
          "bg-neutral-400 text-white px-3 rounded-r ease-in-out duration-300",
          value < 10 ? "cursor-pointer" : "cursor-no-drop bg-neutral-200"
        )}
        onClick={increment}
      >
        <PlusSmallIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default NumberStepper;
