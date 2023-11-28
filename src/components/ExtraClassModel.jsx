import React, { useState } from "react";
import "@/style/checkBox.css";

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
          <div className="p-5">
            <div className="flex flex-col">
              <div className="flex gap-3">
                <label class="checkbox style-c">
                  <input type="checkbox" />
                  <div class="checkbox__checkmark"></div>
                  <div class="checkbox__body">Style C</div>
                </label>
              </div>
              <p className="pl-8">hello</p>
            </div>
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </>
  );
}
