import React from "react";
import Course from "./Course";

export default function LearningSection() {
  return (
    <>
      <div className="py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-medium tracking-tight text-primary leading-tight">
            Learning Begins With <span className="line-clamp-none">Us</span>
          </h2>
          <div className="mt-20 flex justify-between gap-20 relative before:absolute before:h-[500px] before:w-[600px] before:-translate-x-1/2 before:rounded-full after:rounded-full after:right-0 after:-top-60 before:bg-gradient-radial before:from-pink-200 before:to-transparent before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[600px] after:w-[600px] after:translate-x-1/3 after:bg-gradient-conic after:from-lime-100 after:via-lime-100 after:blur-2xl after:content-[''] before:lg:h-[600px]">
            <p className="text-xl z-10">
              We, at Champion School offer supportive and inspirational
              environments for young enquiring minds to learn and grow with us.
              Our passion for learning means we achieve more than outstanding
              results. We strive to build confident and creative thinkers and
              aim at delivering an education that is truly relevant to their
              future
            </p>
            <div className="">
              <p className="text-xl relative before:content-[''] before:-top-10 before:absolute before:h-1 before:w-20 before:bg-secondary">
                We are an early learning academy focused on social-emotional
                development and early literacy and numeracy. Our students walk
                out with the character and confidence to make their mark in the
                world, equipped with the knowledge and real-world skills that
                take them way ahead in the industry they may serve.
              </p>
              <button className="mt-14 px-5 py-2 shadow-lg ease-in border-[1px] border-white duration-100 hover:shadow-sm hover:border-[1px]">
                Know More About Us
              </button>
            </div>
          </div>
        </div>

        <Course />
      </div>
    </>
  );
}
