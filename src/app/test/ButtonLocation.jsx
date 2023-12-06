import React from "react";

import { ClassNames, DayPicker } from "react-day-picker";
import styles from "react-day-picker/dist/style.module.css";

export default function ButtonLocation() {
  const [selectedDay, setSelectedDay] = React.useState();

  const classNames = {
    ...styles,
    head: "custom-head",
  };
  return (
    <>
      <style>{`.custom-head { color: red }`}</style>
      <DayPicker
        mode="single"
        className="h-[40rem] w-[60rem] text-red-600"
        classNames={classNames}
        selected={selectedDay}
        onSelect={setSelectedDay}
      />
    </>
  );
}
