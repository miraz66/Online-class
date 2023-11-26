"use client";

import {
  SubjectsIcon,
  StudentIcon,
  DateIcon,
  CardIcon,
  TeachersIcon,
  SummaryIcon,
} from "@/assets/Svg";
import clsx from "clsx";
import { useState } from "react";
import CourseType from "./CourseType";

export default function Course() {
  const [active, setActive] = useState("Subjects");

  const OptionCategory = [
    {
      name: "Subjects",
      icon: (
        <SubjectsIcon
          className={clsx(
            "shadow-md border-[1px] border-neutral-300",
            "Subjects" === active ? "bg-secondary" : "bg-white "
          )}
          fill={"Subjects" === active ? "#ffffff" : "#171717"}
        />
      ),
    },
    {
      name: "Teachers",
      icon: (
        <TeachersIcon
          className={clsx(
            "shadow-md border-[1px] border-neutral-300",
            "Teachers" === active ? "bg-secondary" : "bg-white "
          )}
          fill={"Teachers" === active ? "#ffffff" : "#171717"}
        />
      ),
    },
    {
      name: "Date & Time",
      icon: (
        <DateIcon
          className={clsx(
            "shadow-md border-[1px] border-neutral-300",
            "Date & Time" === active ? "bg-secondary" : "bg-white "
          )}
          fill={"Date & Time" === active ? "#ffffff" : "#171717"}
        />
      ),
    },
    {
      name: "Cart Items",
      icon: (
        <CardIcon
          className={clsx(
            "shadow-md border-[1px] border-neutral-300",
            "Cart Items" === active ? "bg-secondary" : "bg-white "
          )}
          fill={"Cart Items" === active ? "#ffffff" : "#171717"}
        />
      ),
    },
    {
      name: "Student Info",
      icon: (
        <StudentIcon
          className={clsx(
            "shadow-md border-[1px] border-neutral-300",
            "Student Info" === active ? "bg-secondary" : "bg-white "
          )}
          fill={"Student Info" === active ? "#ffffff" : "#171717"}
        />
      ),
    },
    {
      name: "Summary",
      icon: (
        <SummaryIcon
          className={clsx(
            "shadow-md border-[1px] border-neutral-300",
            "Summary" === active ? "bg-secondary" : "bg-white "
          )}
          fill={"Summary" === active ? "#ffffff" : "#171717"}
        />
      ),
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-10 my-10 grid grid-cols-4">
        <div className="h-[26rem] rounded-lg shadow-lg w-[16rem] p-8 border z-10 bg-white">
          <div className="col-span-1 gap-5 grid grid-rows-6">
            {OptionCategory.map(({ name, icon }) => (
              <button
                onClick={() => {
                  setActive(name);
                }}
                className={clsx(
                  "flex items-center gap-6",
                  name === active ? "cursor-pointer" : "cursor-no-drop"
                )}
                key={name}
              >
                {icon}
                <span
                  className={clsx(
                    "text-lg",
                    name === active ? "text-lime-600" : "text-primary"
                  )}
                >
                  {name}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="col-span-3 border-2 rounded-lg">
          <div className="p-6 shadow-sm overflow-y-scroll">
            <CourseType />
          </div>
          <div className="border h-10"></div>
          <div className="border h-10"></div>
          <div className="border h-10"></div>
          <div className="border h-10"></div>
          <div className="border h-10"></div>
          <div className="border h-10"></div>
          <div className="border h-10"></div>
          <div className="border h-10"></div>
          <div className="border h-10"></div>
          <div className="border h-10"></div>
          <div className="border h-10"></div>
          <div className="border h-10"></div>
          <div className="border h-10"></div>
          <div className="border h-10"></div>
          <div className="border h-10"></div>
          <div className="border h-10"></div>
          <div className="border h-10"></div>
        </div>
      </div>
    </>
  );
}
