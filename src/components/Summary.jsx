import { StudentDetails } from "@/assets/Svg";
import React from "react";

export default function Summary() {
  return (
    <>
      <div className="flex flex-col items-center gap-1 pt-6">
        <StudentDetails className="w-40 h-40" />
        <h6 className="mt-4 font-semibold text-2xl text-secondary">Summary</h6>
        <p className="text-lg font-medium text-neutral-700">
          Your class booking summary
        </p>
        <p>
          Using {'"flat15"'} coupon code you can get exclusive discount deals
        </p>
        <h5 className="mt-8 text-xl font-medium">Customer</h5>
        <p className="font-medium text-secondary">Hafiz Islam</p>
        <div className="flex pt-6">
          <div className="border-r-2 pr-10 border-neutral-400">
            <p>Class</p>
            <p className="font-medium">Mathematics</p>
          </div>
          <div className="pl-10">
            <p>Date & Time</p>
            <time className="font-medium">
              December 28, 2023, 9:00 am - 10:00 am
            </time>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex py-6 justify-between relative before:absolute before:w-full before:h-[2px] before:bg-neutral-200 before:bottom-0">
          <div className="pl-6">
            <p>Subtotal</p>
            <p>Tax</p>
          </div>
          <div className="pr-6">
            <p>$70.00</p>
            <p>+$7.50</p>
          </div>
        </div>
        <div className="flex items-center justify-between relative py-6 before:absolute before:w-full before:h-[2px] before:bg-neutral-200 before:bottom-0">
          <p className="pl-6">Have a coupon code ?</p>
          <div className="h-12 border rounded border-neutral-400">
            <input
              className="h-full pl-4 outline-none"
              type="text"
              placeholder="Enter Your coupon code"
            />
            <button className="rounded bg-lime-600 text-white py-2 px-6 mr-2">
              Apply Apply Apply Apply Apply Apply Apply Apply Apply Apply Apply
              Apply Apply Apply Apply Apply Apply Apply Apply Apply Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
