import React, { useState } from "react";

export default function ExtraClassModel() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <>
      <div
        className="absolute left-0 bottom-0 w-full bg-white h-96 rounded-t-3xl p-5"
        style={{
          boxShadow: "rgba(122, 118, 118, 0.1) 0px -15px 10px 0px",
        }}
      >
        <div className="">
          <h5 className="text-xl font-semibold">Subject Extras</h5>
          <div className="flex flex-col">
            <div className="flex gap-3">
              <input className="accent-lime-500 h-8 w-8" type="checkbox" />
              <input type="checkbox" class="accent-lime-500" />
              <label htmlFor="1">hello</label>
            </div>
            <p className="pl-6">hello</p>
          </div>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text--500 transition duration-300 ease-in-out transform scale-150"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2">Toggle me</span>
          </label>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}
