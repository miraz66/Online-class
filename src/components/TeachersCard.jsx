import Image from "next/image";
import Corbero from "@/assets/TeachersImages/1683792129_ursuka-corbero.webp";
import { CheckIcon } from "@heroicons/react/24/solid";

export default function TeachersCard({
  id,
  activeTeacher,
  setActiveTeacher,
  name,
  photo,
}) {
  return (
    <div
      onClick={() => setActiveTeacher(id)}
      className="h-44 cursor-pointer text-neutral-500 relative shadow-md border flex flex-col justify-center items-center border-neutral-300 rounded-xl"
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
