import React, { useState } from "react";
import "@/style/checkBox.css";
import NumberStepper from "./NumberStepper";
import { ClockIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Select, Option } from "@material-tailwind/react";
import clsx from "clsx";

export default function ExtraClassModel({ setIsOpen, isOpen }) {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <>
      <div
        className={clsx(
          "mt-5 flex justify-between flex-col translate-y-0 ease-in-out duration-500 left-0 bottom-0 w-full bg-white h-[28rem] rounded-t-3xl",
          isOpen && "-translate-y-[29.5rem]"
        )}
        style={{
          boxShadow: "rgba(122, 118, 118, 0.1) 0px -15px 10px 0px",
        }}
      >
        <div className="px-5 pt-5">
          <h5 className="text-xl pb-6 font-semibold">Subject Extras</h5>
          <div className="h-52 overflow-y-scroll side-scroll">
            <div className="px-5 pr-10 py-2 flex justify-between">
              <div className="flex flex-col">
                <div className="flex gap-3">
                  <label className="checkbox style-c">
                    <input type="checkbox" />
                    <div className="checkbox__checkmark"></div>
                    <div className="font-medium text-lg tracking-tighter -mt-[2px]">
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
            <div className="px-5 pr-10 py-2 flex justify-between">
              <div className="flex flex-col">
                <div className="flex gap-3">
                  <label className="checkbox style-c">
                    <input type="checkbox" />
                    <div className="checkbox__checkmark"></div>
                    <div className="font-semibold text-lg tracking-tight -mt-[2px]">
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
            <div className="px-5 pr-10 py-2 flex justify-between">
              <div className="flex flex-col">
                <div className="flex gap-3">
                  <label className="checkbox style-c">
                    <input type="checkbox" />
                    <div className="checkbox__checkmark"></div>
                    <div className="font-semibold text-lg tracking-tight -mt-[2px]">
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
            <div className="px-5 pr-10 py-2 flex justify-between">
              <div className="flex flex-col">
                <div className="flex gap-3">
                  <label className="checkbox style-c">
                    <input type="checkbox" />
                    <div className="checkbox__checkmark"></div>
                    <div className="font-semibold text-lg tracking-tight -mt-[2px]">
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

          <div className="flex justify-between pt-5">
            <h5 className="text-xl font-semibold">Bring anyone with you ?</h5>
            <div className="w-[22.5rem] relative pr-10">
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-none focus:border-neutral-300 sm:text-sm transition-opacity duration-500 ease-in-out">
                <option className="" value="option1">
                  Option 1
                </option>
                <option value="option2">Option 2</option>
                <option value="option2">Option 2</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="border p-5 pr-10 flex gap-10 justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="text-xl font-medium tracking-tight text-neutral-600 hover:text-neutral-500"
          >
            Cannel
          </button>
          <button className="px-6 flex items-center gap-2 py-2 bg-secondary hover:bg-muted ease-in-out duration-200 text-white text-xl tracking-tight rounded-md">
            <span>Continue</span>
          </button>
        </div>
      </div>
    </>
  );
}
