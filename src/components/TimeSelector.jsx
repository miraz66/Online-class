import Selector from "./Selector";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";

export default function TimeSelector({ selected, setSelected, selectedDay }) {
  return (
    <>
      <div className="flex h-full relative flex-col gap-3 justify-center items-center ">
        <div className="relative">
          <CalendarDaysIcon className="w-20 h-20 text-lime-500" />
          <ClockIcon className="w-10 h-10 text-lime-500 absolute bottom-0 left-[53px]" />
        </div>
        <div className="text-center">
          <p className="font-semibold text-lg pb-2">Service Duration</p>
          <p>Please select appropriate timeslot</p>
        </div>
        <div className="w-72 border rounded-md shadow-md">
          <Selector
            selected={selected}
            setSelected={setSelected}
            selectedDay={selectedDay}
          />
        </div>
      </div>
    </>
  );
}
