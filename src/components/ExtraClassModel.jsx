import React, { useState } from "react";
import "@/style/checkBox.css";
import NumberStepper from "./NumberStepper";
import { ClockIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import ListBox from "./ListBox";

export default function ExtraClassModel() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <>
      <div
        className="absolute left-0 bottom-0 w-full bg-white h-[26rem] rounded-t-3xl p-5"
        style={{
          boxShadow: "rgba(122, 118, 118, 0.1) 0px -15px 10px 0px",
        }}
      >
        <div className="">
          <h5 className="text-xl font-semibold">Subject Extras</h5>
          <div className="h-52 overflow-y-scroll side-scroll">
            <div className="px-5 py-2 flex justify-between">
              <div className="flex flex-col">
                <div className="flex gap-3">
                  <label class="checkbox style-c">
                    <input type="checkbox" />
                    <div class="checkbox__checkmark"></div>
                    <div class="font-semibold text-lg tracking-tight -mt-[2px]">
                      Style C
                    </div>
                  </label>
                </div>
                <div className="pl-8 flex gap-3 text-neutral-600">
                  <p className="flex gap-1">
                    <CurrencyDollarIcon className="text-neutral-400 w-5 h-5" />
                    <span className="text-sm">20:00</span>
                  </p>
                  <p className="flex gap-1">
                    <ClockIcon className="w-5 h-5 text-neutral-400" />
                    <span className="text-sm">30 m</span>
                  </p>
                </div>
              </div>
              <NumberStepper />
            </div>
            <div className="px-5 py-2 flex justify-between">
              <div className="flex flex-col">
                <div className="flex gap-3">
                  <label class="checkbox style-c">
                    <input type="checkbox" />
                    <div class="checkbox__checkmark"></div>
                    <div class="font-semibold text-lg tracking-tight -mt-[2px]">
                      Style C
                    </div>
                  </label>
                </div>
                <div className="pl-8 flex gap-3 text-neutral-600">
                  <p className="flex gap-1">
                    <CurrencyDollarIcon className="text-neutral-400 w-6 h-6" />
                    <span>20:00</span>
                  </p>
                  <p className="flex gap-1">
                    <ClockIcon className="w-6 h-6 text-neutral-400" />
                    <span>30 m</span>
                  </p>
                </div>
              </div>
              <NumberStepper />
            </div>
            <div className="px-5 py-2 flex justify-between">
              <div className="flex flex-col">
                <div className="flex gap-3">
                  <label class="checkbox style-c">
                    <input type="checkbox" />
                    <div class="checkbox__checkmark"></div>
                    <div class="font-semibold text-lg tracking-tight -mt-[2px]">
                      Style C
                    </div>
                  </label>
                </div>
                <div className="pl-8 flex gap-3 text-neutral-600">
                  <p className="flex gap-1">
                    <CurrencyDollarIcon className="text-neutral-400 w-6 h-6" />
                    <span>20:00</span>
                  </p>
                  <p className="flex gap-1">
                    <ClockIcon className="w-6 h-6 text-neutral-400" />
                    <span>30 m</span>
                  </p>
                </div>
              </div>
              <NumberStepper />
            </div>
          </div>

          <div className="flex justify-between">
            <h5 className="text-xl font-semibold">Bring anyone with you ?</h5>
            <h5 className="text-xl font-semibold">Bring anyone with you ?</h5>
            <h5 className="text-xl font-semibold">Bring anyone with you ?</h5>
            <h5 className="text-xl font-semibold">Bring anyone with you ?</h5>
            <div className="w-96">
              <ListBox />
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}
