import Image from "next/image";
import schoolTemplateCurriculumImg_1 from "@/assets/OverviewImage/school-template-curriculum-img-1.webp";

export default function OverviewCard() {
  return (
    <div className="pb-10">
      <Image
        className="rounded-lg"
        src={schoolTemplateCurriculumImg_1}
        alt=""
      />
      <h5 className="text-3xl py-5 font-medium font-serif text-neutral-800">
        Computer Science
      </h5>
      <p className="text-neutral-600">
        Hands-on experience with the latest programming languages and
        technology.
      </p>
    </div>
  );
}
