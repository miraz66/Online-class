import { QuoteLeft } from "@/assets/Svg";
import React from "react";

export default function HeadmasterLecture() {
  return (
    <div className="bg-neutral-200">
      <div className="max-w-7xl px-10 py-20 mx-auto">
        <QuoteLeft className="w-10 h-10" fill="#84cc16" />
        <p className="py-14 text-5xl leading-snug font-medium tracking-tight  text-gray-500">
          We aim at inspiring our students to dream more, learn more, do more,
          and become more in their respective journeys of life.
        </p>
        <p className="text-xl font-medium text-secondary">
          Jonathan Doe — Headmaster
        </p>
      </div>
    </div>
  );
}
