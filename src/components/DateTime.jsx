import React from "react";
import DateTimeSection from "./DateTimeSection";

export default function DateTime() {
  return (
    <div className="">
      <h5 className="font-semibold text-2xl relative after:absolute after:bg-secondary after:h-[2px] after:w-40 after:-bottom-[6px] after:left-0">
        Date & Time
      </h5>
      <div className="mt-10 h-[35rem] grid grid-cols-2">
        <div className="h-full">
          <DateTimeSection />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
