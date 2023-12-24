import { PlusIcon } from "@heroicons/react/24/outline";
import SubjectsDetails from "./SubjectsDetails";

export default function CartItems() {
  return (
    <>
      <div className="flex justify-between items-center pb-10">
        <div className="flex gap-4 items-center">
          <h5 className="text-2xl text-neutral-600 tracking-tight font-semibold">
            My Subjects
          </h5>
          <p className="py-1 px-5 bg-neutral-50 border rounded font-medium">
            1 Subject
          </p>
        </div>
        <button className="flex gap-2 border-neutral-300 shadow hover:shadow-md ease-in-out duration-200 rounded items-center border py-3 px-8">
          <PlusIcon className="w-5 h-5" />
          <span className="font-medium">Add Class</span>
        </button>
      </div>
      <SubjectsDetails />
      <SubjectsDetails />

      <div className="flex justify-between pt-10">
        <p className="font-semibold">
          Cart Total <span className="font-normal">(Deposit)</span>
        </p>
        <span className="text-lime-600 font-semibold">$23.00</span>
      </div>
    </>
  );
}
