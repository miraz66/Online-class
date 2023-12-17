import clsx from "clsx";
import React from "react";

export default function ClassTimeCard({
  time,
  classTimeSelect,
  setClassTimeSelect,
  setActive,
}) {
  return (
    <div
      onClick={() => {
        setClassTimeSelect(time);
        setActive("Cart Items");
      }}
      className={clsx(
        "p-3 border cursor-pointer rounded-md hover:border-neutral-500 hover:ease-in-out hover:duration-200",
        time === classTimeSelect && "bg-neutral-50 border-lime-500"
      )}
    >
      <time className="font-medium text-neutral-800">{time}</time>
      <p className="text-sm">15 Seats left</p>
      <p className="text-sm">15 Seats left</p>
    </div>
  );
}
