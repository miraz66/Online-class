import Image from "next/image";
import Corbero from "@/assets/TeachersImages/1683792129_ursuka-corbero.webp";
import { CheckIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

export default function TeachersCard({
  id,
  activeTeacher,
  setActiveTeacher,
  setActive,
  name,
  photo,
}) {
  return (
    <div
      onClick={() => {
        setActiveTeacher(id);
        setActive("Date & Time");
      }}
      className={clsx(
        "h-44 cursor-pointer text-neutral-500 relative flex flex-col justify-center items-center rounded-xl",
        id === activeTeacher
          ? "border border-lime-500 shadow-md"
          : "border-neutral-300 shadow-md border"
      )}
    >
      <Image
        className="rounded-xl"
        height={80}
        width={80}
        src={photo}
        alt="All Teachers"
      />
      <p className="pt-3 text-lg font-semibold tracking-tighter">{name}</p>
      {id === activeTeacher && (
        <CheckIcon className="h-5 w-5 rounded-full text-white p-[2px] bg-lime-500 absolute top-2 right-2" />
      )}
    </div>
  );
}
