import NumberStepper from "./NumberStepper";
import { ClockIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function ExtraClassType({ sub, time, price }) {
  console.log(sub);
  return (
    <>
      <div className="px-5 pr-10 py-2 flex justify-between">
        <div className="flex flex-col">
          <div className="flex gap-3">
            <label className="checkbox style-c">
              <input type="checkbox" />
              <div className="checkbox__checkmark"></div>
              <div className="font-medium text-lg tracking-tighter -mt-[2px]">
                {sub}
              </div>
            </label>
          </div>
          <div className="pl-8 flex gap-3 text-neutral-600">
            <p className="flex gap-1">
              <CurrencyDollarIcon className="text-neutral-400 w-5 h-5" />
              <span className="text-sm">{price}:00</span>
            </p>
            {time && (
              <p className="flex gap-1">
                <ClockIcon className="w-5 h-5 text-neutral-400" />
                <span className="text-sm">{time} m</span>
              </p>
            )}
          </div>
        </div>
        {sub === "Visa Application" ? null : <NumberStepper />}
      </div>
    </>
  );
}
