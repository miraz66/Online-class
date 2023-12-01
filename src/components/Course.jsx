"use client";

import {
  SubjectsIcon,
  StudentIcon,
  DateIcon,
  CardIcon,
  TeachersIcon,
  SummaryIcon,
  ArrowLongRight,
  ExclamationMark,
} from "@/assets/Svg";
import clsx from "clsx";
import { useState } from "react";
import CourseType from "./CourseType";
import ExtraClassModel from "./ExtraSubModel";

export default function Course() {
  const [active, setActive] = useState("Subjects");
  const [next, setNext] = useState(false);
  const [isOpen, setIsOpen] = useState();

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

  // Function to handle button click
  const handleButtonClick = () => {
    setNext(true);

    setTimeout(() => {
      setNext(false);
    }, 5000);

    return clearTimeout(handleButtonClick);
  };

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
        <div className="h-[55rem] overflow-hidden col-span-3 border-2 rounded-lg">
          {next && (
            <div className="mx-5 my-3 px-5 flex gap-2 py-2 relative font-medium text-red-500 shadow-xl bg-neutral-100 before:absolute before:h-full before:top-0 before:left-0 before:w-1 before:bg-red-500">
              <ExclamationMark className="w-5 h-5" fill="#ef4444" />
              <span>Please select any service to book the appointment.</span>
            </div>
          )}
          <div className="p-6 shadow-sm overflow-y-scroll">
            <CourseType setIsOpen={setIsOpen} />
          </div>
          <div className="border-t p-5 pr-10 flex justify-end">
            <button
              onClick={handleButtonClick}
              className="px-6 flex items-center gap-2 py-2 bg-secondary hover:bg-muted ease-in-out duration-200 text-white text-xl tracking-tight rounded-md"
            >
              <span>Next Teachers </span>
              <ArrowLongRight className="h-[40px] w-[40px]" />
            </button>
          </div>
          <div
            className={clsx(
              "ease-in-out duration-300",
              isOpen ? "-translate-y-[29.6rem]" : "translate-y-0"
            )}
          >
            <ExtraClassModel isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </>
  );
}
