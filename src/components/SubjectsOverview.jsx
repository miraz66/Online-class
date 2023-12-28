import React from "react";
import OverviewCard from "./OverviewCard";
import { OverviewData } from "@/assets/OverviewData/Data";

export default function SubjectsOverview() {
  return (
    <div className="max-w-7xl mx-auto px-10 py-28 mt-20">
      <div className="grid grid-cols-2">
        <h3 className="text-5xl font-semibold font-serif text-neutral-700 leading-tight">
          Subjects <br /> Overview
        </h3>
        <p className="text-xl text-neutral-800 relative after:absolute after:w-20 after:h-[3px] after:-top-8 after:left-0 after:bg-lime-500">
          The Champion School aims at offering all our students a broad and
          balanced curriculum that provides rewarding and stimulating activities
          balanced curriculum that provides rewarding and stimulating activities
          balanced curriculum that provides rewarding and stimulating activities
          balanced curriculum that provides rewarding and stimulating activities
          balanced curriculum that provides rewarding and stimulating activities
          balanced curriculum that provides rewarding and stimulating activities
          balanced curriculum that provides rewarding and stimulating activities
          balanced curriculum that provides rewarding and stimulating activities
          balanced curriculum that provides rewarding and stimulating activities
          balanced curriculum that provides rewarding and stimulating activities
          balanced curriculum that provides rewarding and stimulating activities
          balanced curriculum that provides rewarding and stimulating activities
          balanced curriculum that provides rewarding and stimulating activities
          balanced curriculum that provides rewarding and stimulating activities
          balanced curriculum that provides rewarding and stimulating activities
          to prepare them for the best social and cultural life.
        </p>
      </div>
      <div className="grid my-20 grid-cols-3 grid-rows-2 gap-8">
        {OverviewData.map(() => {})}
        <OverviewCard />
      </div>
    </div>
  );
}
