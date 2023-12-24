import { SubHeroIcon } from "@/assets/Svg";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

export default function SubjectsDetails() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="flex justify-between py-5 items-center relative before:absolute before:w-full before:h-[2px] before:bg-neutral-300 before:bottom-0 before:left-0">
        <div className="flex items-center gap-4">
          <div
            className="cursor-pointer select-none"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <PlusCircleIcon className="w-7 h-7 text-neutral-600 font-bold " />
            ) : (
              <MinusCircleIcon className="w-7 h-7" />
            )}
          </div>
          <SubHeroIcon
            className="h-14 w-14 rounded border border-neutral-300"
            fill="#b3afaf"
          />
          <span className="font-semibold text-lg">Mathematics</span>
        </div>
        <div className="flex gap-10">
          <time>9:00 am - 10:00 am</time>
          <date>January 4, 2024</date>
        </div>
        <div className="flex flex-col">
          <span>$7.00</span>
          <span>of $70.00</span>
        </div>
      </div>

      {!show && (
        <div className="py-5 my-4 flex justify-between bg-neutral-200 rounded-md">
          <div className="flex flex-col items-center w-full border-r border-neutral-700">
            <span>Duration</span>
            <span className="font-semibold">2 h</span>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <span>Teacher</span>
            <span className="font-semibold">Draper Moore</span>
            <span className="font-semibold">Draper Moore</span>
            <span className="font-semibold">Draper Moore</span>
            <span className="font-semibold">Draper Moore</span>
            <span className="font-semibold">Draper Moore</span>
            <span className="font-semibold">Draper Moore</span>
            <span className="font-semibold">Draper Moore</span>
            <span className="font-semibold">Draper Moore</span>
          </div>
        </div>
      )}
    </>
  );
}
