import { useState } from "react";
import { format, isSunday, isSaturday, isToday, isPast } from "date-fns";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function DatePicker() {
  const [selected, setSelected] = useState();

  const CurrentDate = new Date(); //current date selected

  const isDisabled = (date) => {
    return (
      (isSunday(date) || isSaturday(date) || isPast(date)) && !isToday(date) // disabled holiday or today before all days.
    );
  };

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }

  const css = `
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: red;
  }
  `;

  return (
    <>
      <style>{css}</style>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
        disabled={isDisabled}
        fromYear={CurrentDate.getFullYear()}
        toYear={CurrentDate.getFullYear() + 1}
        fromDate={CurrentDate.getDate()}
        modifiersClassNames={{
          today: "my-today",
        }}
        showOutsideDays
      />
    </>
  );
}
