import {
  PayLocallyIcon,
  PayPalIcon,
  StripeIcon,
  StudentDetails,
} from "@/assets/Svg";
import { CheckIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React, { useState } from "react";

export default function Summary({ formData }) {
  const [isActive, setIsActive] = useState("locally");

  console.log(formData);

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
        <h5 className="mt-8 font-medium text-neutral-600">Customer</h5>
        <p className="font-medium text-xl text-secondary">
          {formData.firstname + " " + formData.lastname}
        </p>
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
          <div className="h-12 mr-6 border rounded border-neutral-400">
            <input
              className="h-full pl-4 outline-none rounded"
              type="text"
              placeholder="Enter Your coupon code"
            />
            <button className="rounded bg-lime-600 text-white py-2 px-6 mr-2">
              Apply
            </button>
          </div>
        </div>
        {isActive !== "locally" && (
          <div className="flex items-center justify-between relative py-6 before:absolute before:w-full before:h-[2px] before:bg-neutral-200 before:bottom-0">
            <p className="pl-6">Deposit(Paying Now)</p>
            <p>10% ( $7.00 )</p>
          </div>
        )}
        <div className="p-6 flex items-center justify-between">
          <p>
            {isActive === "locally"
              ? "Total Amount Payable (Inc. Taxes)"
              : "Remaining Amount (Inc. Taxes)"}
          </p>
          <p>{isActive === "locally" ? "$70.00" : "$63.00"}</p>
        </div>
      </div>
      <div>
        <h5 className="text-lg font-medium pt-10 pb-6">Mode of payment</h5>
        <div className="flex gap-8">
          <div
            onClick={() => setIsActive("locally")}
            className={clsx(
              "w-52 pl-4 py-3 flex items-center gap-3 cursor-pointer border rounded-md ease-in-out duration-200",
              isActive === "locally" && "border border-lime-500 shadow-md"
            )}
          >
            <PayLocallyIcon className="w-6 h-6" />
            <p>Pay locally</p>
            {isActive === "locally" && (
              <CheckIcon className="w-5 h-5 ml-4 text-white font-bold bg-lime-500 p-[3px] rounded-full" />
            )}
          </div>
          <div
            onClick={() => setIsActive("PayPal")}
            className={clsx(
              "w-44 pl-4 py-3 flex items-center gap-3 cursor-pointer border rounded-md ease-in-out duration-200",
              isActive === "PayPal" && "border border-lime-500 shadow-md"
            )}
          >
            <PayPalIcon />
            <p>PayPal</p>
            {isActive === "PayPal" && (
              <CheckIcon className="w-5 h-5 ml-4 text-white font-bold bg-lime-500 p-[3px] rounded-full" />
            )}
          </div>
          <div
            onClick={() => setIsActive("Stripe")}
            className={clsx(
              "w-44 pl-4 py-3 flex items-center gap-3 cursor-pointer border rounded-md ease-in-out duration-200",
              isActive === "Stripe" && "border border-lime-500 shadow-md"
            )}
          >
            <StripeIcon />
            <p>Stripe</p>
            {isActive === "Stripe" && (
              <CheckIcon className="w-5 h-5 ml-4 text-white font-bold bg-lime-500 p-[3px] rounded-full" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
