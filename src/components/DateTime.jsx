import React from "react";
import DateTimeSection from "./DateTimeSection";
import Selector from "./Selector";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";

export default function DateTime() {
  return (
    <div className="">
      <h5 className="font-semibold text-2xl relative after:absolute after:bg-secondary after:h-[2px] after:w-40 after:-bottom-[6px] after:left-0">
        Date & Time
      </h5>
      <div className="mt-10 h-[35rem] gap-6 grid grid-cols-2">
        <DateTimeSection />
        <div className="border flex flex-col gap-3 justify-center items-center rounded-lg">
          <div className="relative">
            <CalendarDaysIcon className="w-20 h-20 text-lime-500" />
            <ClockIcon className="w-10 h-10 text-lime-500 absolute bottom-0 left-[53px]" />
          </div>
          <div className="text-center">
            <p className="font-semibold text-lg pb-2">Service Duration</p>
            <p>Please select appropriate timeslot</p>
            <p>Please select appropriate timeslot</p>
            <p>Please select appropriate timeslot</p>
            <p>Please select appropriate timeslot</p>
            <p>Please select appropriate timeslot</p>
            <p>Please select appropriate timeslot</p>
            <p>Please select appropriate timeslot</p>
          </div>
          <div className="w-72">
            <Selector />
          </div>
        </div>
      </div>
    </div>
  );
}
