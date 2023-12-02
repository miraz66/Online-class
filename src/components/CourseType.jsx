import { CheckMark } from "@/assets/Svg";
import clsx from "clsx";
import { useState } from "react";
import SubjectCard from "./SubjectCard";
import { Data } from "@/assets/SubData";

export default function CourseType({ setIsOpen, check, setCheck }) {
  const [mark, setMark] = useState("all");

  const course = ["all", "sat", "mcat", "lsat", "gmat", "gre", "ielts"];

  return (
    <>
      <div className="h-[46rem] relative">
        <div>
          <h6 className="text-neutral-900 font-semibold text-xl relative after:absolute after:bg-secondary after:h-[2px] after:w-32 after:-bottom-[6px] after:left-0">
            <span>Course Type</span>
          </h6>
          <div className="flex gap-4">
            {course.map((item) => (
              <button
                onClick={() => setMark(item)}
                key={item}
                className={clsx(
                  "mt-8 shadow rounded-md flex gap-2 hover:border-lime-500 items-center py-1 px-3 border",
                  item === mark ? "border-lime-500" : "border-neutral-400"
                )}
              >
                <span className="font-medium uppercase tracking-wide text-lg">
                  {item}
                </span>
                {item === mark && (
                  <CheckMark fill="#84cc16" className="w-5 h-5" />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h5 className="text-xl font-semibold">Subjects</h5>
          <div className="mt-5 pb-10 grid gap-5 grid-cols-2 auto-rows-auto">
            {Data.map((item, index) => {
              if (mark === "all")
                return (
                  <SubjectCard
                    check={check}
                    setCheck={setCheck}
                    setIsOpen={setIsOpen}
                    key={index}
                    id={index}
                    {...item}
                  />
                );
              else if (mark === item.article)
                return (
                  <SubjectCard
                    check={check}
                    setCheck={setCheck}
                    setIsOpen={setIsOpen}
                    id={index}
                    key={index}
                    {...item}
                  />
                );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
