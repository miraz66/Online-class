import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  getMonth,
  getYear,
} from "date-fns";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

function isDisabledDay(day, selectedDay) {
  const isBeforeToday = day < startOfToday();
  const isWeekend = getDay(day) === 0 || getDay(day) === 6; // Sun or Sat
  const isDayBeforeSelected = isEqual(day, add(selectedDay, { days: 1 }));

  return isBeforeToday || isWeekend || isDayBeforeSelected;
}

export default function DateSection({ selectedDay, setSelectedDay }) {
  let today = startOfToday();
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  console.log(selectedDay);

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let currentMonth = 1 + getMonth(new Date());
    let currentYear = getYear(new Date());
    let a = format(firstDayCurrentMonth, "MM,yyyy");
    let b = [currentMonth, currentYear].toString();

    if (a !== b) {
      let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
      setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
    }
  }

  function nextMonth() {
    let currentMonth = 1 + getMonth(new Date());
    let currentYear = 1 + getYear(new Date());
    let a = format(firstDayCurrentMonth, "MM,yyyy");
    let b = [currentMonth, currentYear].toString();

    if (a !== b) {
      let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
      setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
    }
  }

  return (
    <div className="border rounded-lg">
      <div className="md:grid">
        <div className="py-3 flex items-center justify-between">
          {
            <button
              type="button"
              onClick={previousMonth}
              className="-my-1.5 pl-5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="h-8 w-8" />
            </button>
          }
          <h2 className="font-semibold text-2xl text-gray-700">
            {format(firstDayCurrentMonth, "MMMM yyyy")}
          </h2>
          <button
            onClick={nextMonth}
            type="button"
            className="pr-5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <div className="py-3 border-t grid grid-cols-7 text-center text-lg leading-6 text-gray-700">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="grid grid-cols-7 border auto-rows-auto text-sm">
          {days.map((day, dayIdx) => (
            <div
              key={day.toString()}
              className={classNames(
                dayIdx === 0 && colStartClasses[getDay(day)]
              )}
            >
              <button
                type="button"
                onClick={() => {
                  if (!isDisabledDay(day, selectedDay)) {
                    setSelectedDay(day);
                  } else {
                    // Day is disabled, unselect it or handle as needed
                    setSelectedDay(selectedDay);
                  }
                }}
                className={classNames(
                  isEqual(day, selectedDay) && "text-red-500",
                  !isEqual(day, selectedDay) && isToday(day) && "text-red-500",
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    "text-gray-900",
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    "text-gray-400",
                  isEqual(day, selectedDay) && isToday(day) && "text-red-500",
                  isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    "bg-lime-500 text-white",
                  !isEqual(day, selectedDay) && "hover:bg-lime-200",
                  (isEqual(day, selectedDay) || isToday(day)) &&
                    "font-semibold",
                  isDisabledDay(day) &&
                    "pointer-events-none bg-neutral-50 text-gray-400", // Disable pointer events for disabled days
                  "mx-auto flex h-full w-full items-center justify-center border py-7"
                )}
              >
                <time dateTime={format(day, "yyyy-MM-dd")}>
                  {format(day, "d")}
                </time>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
