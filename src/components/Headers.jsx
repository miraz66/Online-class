"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navigation = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Activities", link: "/activities" },
  { name: "Contact", link: "/contact" },
  { name: "My Bookings", link: "/bookings" },
];

export default function Headers() {
  const currentRoute = usePathname();

  return (
    <>
      <div className="py-10 max-w-7xl mx-auto flex justify-between relative place-items-center before:absolute before:h-[500px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[600px] after:translate-x-1/3 after:bg-gradient-conic after:from-lime-100 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-100 before:dark:opacity-10 after:dark:from-sky-200 after:dark:via-[#d0ff01] after:dark:opacity-40 before:lg:h-[360px]">
        <div className="flex items-center z-10">
          <Image src={logo} alt="Logo" height={50} width={50} />
          <span className="text-3xl font-semibold text-secondary">
            nlineClass
          </span>
        </div>
        <div className="flex gap-12 items-center">
          <div className="flex gap-8">
            {navigation.map((item) => (
              <Link
                className={clsx(
                  "text-xl tracking-tighter ease-in-out duration-300 pb-hpx",
                  currentRoute === item.link &&
                    " relative before:absolute before:bg-secondary before:left-0 before:bottom-0 before:h-[2px] before:w-full"
                )}
                href={item.link}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button className="text-lg font-semibold rounded-lg text-white bg-secondary hover:bg-muted px-8 py-3 ease-in-out duration-300">
            Book Class
          </button>
        </div>
      </div>
    </>
  );
}
