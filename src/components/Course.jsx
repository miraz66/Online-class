"use client";

import {
  SubjectsIcon,
  StudentIcon,
  DateIcon,
  CardIcon,
  TeachersIcon,
  SummaryIcon,
  ExclamationMark,
} from "@/assets/Svg";
import clsx from "clsx";
import { useState } from "react";
import CourseType from "./CourseType";
import ExtraClassModel from "./ExtraSubModel";
import Modal from "./Modal";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import Teachers from "./Teachers";

export default function Course() {
  const [active, setActive] = useState("Subjects");
  const [next, setNext] = useState(false);
  const [isOpen, setIsOpen] = useState();
  const [check, setCheck] = useState();
  const [activeTeacher, setActiveTeacher] = useState();

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
      error: "Please select any service to book the appointment.",
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
      error: "Please select staff member",
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
      error: "Please select a time slot to proceed with the booking.",
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

  function onClose() {
    setIsOpen(false);
    setCheck(false);
  }

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
          {next &&
            OptionCategory.map(
              (data, index) =>
                active === data.name && (
                  <div
                    key={index}
                    className="mx-5 my-3 px-5 flex gap-2 py-2 font-medium text-red-500 shadow-xl bg-neutral-100 before:absolute before:h-full before:top-0 before:left-0 before:w-1 before:bg-red-500"
                  >
                    <ExclamationMark className="w-5 h-5" fill="#ef4444" />
                    <span>{data.error}</span>
                  </div>
                )
            )}
          <div className="h-[55rem] overflow-hidden">
            <div className="shadow-sm overflow-y-auto">
              {active === "Subjects" && (
                <CourseType
                  check={check}
                  setCheck={setCheck}
                  setIsOpen={setIsOpen}
                />
              )}
              {active === "Teachers" && (
                <div className="h-[45.5rem] p-6 overflow-y-auto">
                  <Teachers
                    activeTeacher={activeTeacher}
                    setActiveTeacher={setActiveTeacher}
                    setActive={setActive}
                  />
                </div>
              )}
              {active === "Date & Time" && <div className="">Date & Time</div>}
              {active === "Cart Items" && <div className="">Cart Items</div>}
              {active === "Student Info" && (
                <div className="">Student Info</div>
              )}
              {active === "Summary" && <div className="">Summary</div>}
            </div>
            <div className="border-t p-5 pr-10 flex gap-5 justify-end">
              <button className="flex items-center text-xl group">
                <ArrowLongLeftIcon className="text-neutral-500 w-10 h-10 group-hover:text-neutral-600 group-hover:ease-in-out group-hover:duration-200" />
                <span className="group-hover:text-neutral-600 group-hover:ease-in-out group-hover:duration-200">
                  Go Back
                </span>
              </button>
              <button
                onClick={handleButtonClick}
                className="px-6 flex items-center gap-2 py-2 bg-secondary hover:bg-muted ease-in-out duration-200 text-white text-xl tracking-tight rounded-md"
              >
                {active === "Subjects" && <span>Next Teachers</span>}
                {active === "Teachers" && <span>Next Date & Time</span>}
                {active === "Date & Time" && <span>Next Cart Items</span>}
                {active === "Cart Items" && <span>Next Student Info</span>}
                {active === "Student Info" && <span>Next Summary</span>}
                {active === "Summary" && <span>Next Book Classroom</span>}
                <ArrowLongRightIcon className="h-10 w-10" />
              </button>
            </div>

            {active === "Subjects" && (
              <div
                className={clsx(
                  "ease-in-out duration-300 overlay",
                  isOpen ? "-translate-y-[29rem]" : "translate-y-0"
                )}
              >
                <Modal onClose={onClose} css="absolute w-full lg:top-0 right-0">
                  <ExtraClassModel
                    setActive={setActive}
                    isOpen={isOpen}
                    onClose={onClose}
                  />
                </Modal>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
