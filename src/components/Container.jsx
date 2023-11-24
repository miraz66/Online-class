import React from "react";
import Image from "next/image";

export default function Container() {
  return (
    <>
      <div className="relative min-h-[55rem] bg-gray-900 ">
        <Image
          src={
            "https://images.unsplash.com/photo-1585974738771-84483dd9f89f?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Background Image"
          fill
          style={{
            objectFit: "cover",
            opacity: "0.4",
          }}
        />

        <div className="absolute w-full h-full text-white">
          <div className="max-w-7xl mx-auto mt-96 relative before:absolute before:content-[''] before:-top-8 before:left-0 before:bg-white before:h-1 before:w-28">
            <h1 className="text-8xl font-medium tracking-tight">
              The Online <span className="line-clamp-none">School Texas</span>
            </h1>
            <p className="text-2xl mt-8 leading-8 tracking-wide">
              This is where we teach students skills they need to transform
              <span className="line-clamp-none">
                themselves, others, and our global communities.
              </span>
            </p>

            <button className="px-6 tracking-tighter mt-10 bg-neutral-100 hover:bg-white ease-in-out duration-200 py-2 rounded-md bg-nu text-black text-lg">
              Book Your Class Book Your Class Book Your Class
            </button>
          </div>
        </div>
      </div>

      <div className="h-96 w-96 bg-red-200"></div>
    </>
  );
}
