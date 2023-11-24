"use client";

import {
  SubjectsIcon,
  StudentIcon,
  DateIcon,
  CardIcon,
  TeachersIcon,
  SummaryIcon,
} from "@/assets/Svg";

const OptionCategory = [
  { name: "Subjects", icon: <SubjectsIcon className="w-10 h-10" /> },
  { name: "Teachers", icon: <TeachersIcon className="w-10 h-10" /> },
  { name: "Date & Time", icon: <DateIcon className="w-10 h-10" /> },
  { name: "Cart Items", icon: <CardIcon className="w-10 h-10" /> },
  { name: "Student Info", icon: <StudentIcon className="w-10 h-10" /> },
  { name: "Summary", icon: <SummaryIcon className="w-10 h-10" /> },
];

export default function Course() {
  return (
    <>
      <div className="max-w-6xl mx-auto my-10 bg-yellow-100 h-[30rem] grid grid-cols-4">
        <div className="z-10 col-span-1 bg-white grid grid-rows-6">
          {OptionCategory.map(({ name, icon }) => (
            <div className="flex gap-6" key={name}>
              {icon}
              <h6>{name}</h6>
            </div>
          ))}
        </div>
        <div className="col-span-3 bg-green-300"></div>
        <div className="col-span-3 bg-green-300"></div>
        <div className="col-span-3 bg-green-300"></div>
        <div className="col-span-3 bg-green-300"></div>
        <div className="col-span-3 bg-green-300"></div>
        <div className="col-span-3 bg-green-300"></div>
        <div className="col-span-3 bg-green-300"></div>
        <div className="col-span-3 bg-green-300"></div>
        <div className="col-span-3 bg-green-300"></div>
        <div className="col-span-3 bg-green-300"></div>
        <div className="col-span-3 bg-green-300"></div>
        <div className="col-span-3 bg-green-300"></div>
        <div className="col-span-3 bg-green-300"></div>
        <div className="col-span-3 bg-green-300"></div>
        <div className="col-span-3 bg-green-300"></div>
        <div className="col-span-3 bg-green-300"></div>
      </div>
    </>
  );
}
