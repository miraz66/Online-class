import React from "react";

export default function RadioButton({ id, label }) {
  return (
    <>
      <div className="mb-[0.125rem] flex gap-2 min-h-[1.5rem] pl-[1.5rem]">
        <input
          className="relative cursor-pointer float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-lime-500 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100"
          type="radio"
          name="flexRadioDefault"
          id={id}
        />
        <label
          className="mt-px inline-block pl-[0.15rem] cursor-pointer"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    </>
  );
}
