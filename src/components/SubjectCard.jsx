import { SubHeroIcon } from "@/assets/Svg";
import React, { useState } from "react";
import { CheckMark } from "@/assets/Svg";
import clsx from "clsx";

export default function SubjectCard({
  name,
  description,
  duration,
  price,
  id,
  check,
  setCheck,
  setIsOpen,
}) {
  return (
    <>
      <div
        onClick={() => {
          setCheck(id);
          setIsOpen(true);
        }}
        className={clsx(
          "flex cursor-pointer p-4 gap-4 rounded-lg shadow-md hover:border-lime-400 hover:shadow-xl ease-in-out duration-300",
          id === check
            ? "border border-lime-500 shadow-xl"
            : "border border-neutral-400"
        )}
      >
        <div>
          <SubHeroIcon
            className="w-14 h-14 p-2 border border-neutral-400 rounded-full"
            fill="#a3a3a3"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex justify-between">
              <h6 className="text-xl font-medium tracking-wide">{name}</h6>
              {id === check && <CheckMark fill="#84cc16" className="w-7 h-7" />}
            </div>
            <p className="py-3 text-neutral-600">{description}</p>
          </div>
          <div className="flex gap-5 justify-between">
            <p>
              Duration: <span className="font-medium">{duration}</span>
            </p>
            <p>
              price: {""}
              <span className="bg-secondary text-white px-2  py-1 rounded font-medium">
                ${price}.00
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
