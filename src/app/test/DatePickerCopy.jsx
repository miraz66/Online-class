import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";

const App = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  // Function to check if a day is Saturday or Sunday
  const isDisabledDay = (day) => {
    const dayOfWeek = day.day();
    const isWeekend = dayOfWeek === 6 || dayOfWeek === 0; // 6 is Saturday, 0 is Sunday

    // Check if the day is in the list of specific disabled days
    const isSpecificDisabledDay =
      Array.isArray(disabledDays) &&
      disabledDays.find(
        (disabledDay) =>
          disabledDay.year === day.year &&
          disabledDay.month === day.month &&
          disabledDay.day === day.day
      );

    return isWeekend || isSpecificDisabledDay;
  };

  const disabledDays = [
    {
      year: 2023,
      month: 12,
      day: 20,
    },
    {
      year: 2023,
      month: 12,
      day: 21,
    },
    {
      year: 2023,
      month: 12,
      day: 7,
    },
  ];

  const handleDisabledSelect = (disabledDay) => {
    console.log("Tried selecting a disabled day", disabledDay);
  };

  return (
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      minimumDate={utils().getToday()}
      disabledDays={disabledDays}
    />
  );
};

export default App;
