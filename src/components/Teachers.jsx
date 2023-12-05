import { UserGroupIcon } from "@heroicons/react/24/solid";
import TeachersCard from "./TeachersCard";
import { TeachersData } from "@/assets/TeachersImages/TeacherData";

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

export default function Teachers({ activeTeacher, setActiveTeacher }) {
  return (
    <>
      <h5 className="font-semibold text-2xl relative after:absolute after:bg-secondary after:h-[2px] after:w-28 after:-bottom-[6px] after:left-0">
        Teachers
      </h5>
      <div className="mt-10 grid grid-cols-3 auto-rows-auto gap-6">
        <div>
          <div className="h-44 text-neutral-500 bg-lime-50 shadow-md border border-lime-300 flex flex-col justify-center items-center rounded-xl">
            <UserGroupIcon className="bg-lime-500 text-white p-4 h-20 w-20 rounded-xl" />
            <h1 className="pt-3 text-lg font-semibold tracking-tighter">
              All Teachers
            </h1>
          </div>
        </div>
        {TeachersData.map((data, number) => (
          <TeachersCard
            key={number}
            id={number}
            activeTeacher={activeTeacher}
            setActiveTeacher={setActiveTeacher}
            {...data}
          />
        ))}
      </div>
    </>
  );
}
