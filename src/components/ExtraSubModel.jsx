import "@/style/checkBox.css";
import clsx from "clsx";
import ExtraClassType from "./ExtraClassType";
import { Data } from "@/assets/SubData";

export default function ExtraClassModel({ isOpen, onClose, setActive }) {
  return (
    <>
      <div
        className={clsx(
          "mt-5 flex justify-between flex-col translate-y-0 ease-in-out duration-500 left-0 bottom-0 w-full bg-white h-[28rem] rounded-t-3xl",
          isOpen && "-translate-y-[29.5rem]"
        )}
        style={{
          boxShadow: "rgba(122, 118, 118, 0.1) 0px -15px 10px 0px",
        }}
      >
        <div className="px-5 pt-5">
          <h5 className="text-xl pb-6 font-semibold">Subject Extras</h5>
          <div className="h-52 overflow-y-scroll side-scroll">
            {Data.map(({ name, extraSub }) => {
              if (name === isOpen) {
                return extraSub.map((data, index) => {
                  return <ExtraClassType key={index} {...data} />;
                });
              }
            })}
          </div>

          <div className="flex justify-between pt-5">
            <h5 className="text-xl font-semibold">Bring anyone with you ?</h5>
            <div className="w-[22.5rem] relative pr-10">
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-none focus:border-neutral-300 sm:text-sm transition-opacity duration-500 ease-in-out">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option2">Option 2</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option3">Option 3</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="border p-5 pr-10 flex gap-10 justify-end">
          <button
            onClick={() => onClose()}
            className="text-xl font-medium tracking-tight text-neutral-600 hover:text-neutral-500"
          >
            Cannel
          </button>
          <button
            onClick={() => setActive("Teachers")}
            className="px-6 flex items-center gap-2 py-2 bg-secondary hover:bg-muted ease-in-out duration-200 text-white text-xl tracking-tight rounded-md"
          >
            <span>Continue</span>
          </button>
        </div>
      </div>
    </>
  );
}
