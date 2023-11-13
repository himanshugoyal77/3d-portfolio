import Image from "next/image";
import React from "react";

interface SkillCardProps {
  title: string;
  image: string;
}

const SkillCard = (props: SkillCardProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-1
    hover:scale-105 duration-200 ease-in-out
     hover:bg-red-500 hover:bg-opacity-50 rounded-sm cursor-pointer
    "
    >
      <div className="h-28 w-40 md:h-32 md:w-52 rounded-sm object-cover relative">
        <Image
          alt="web-development"
          layout="fill"
          src={props.image}
          className="rounded-sm"
        />
      </div>
      <h3 className="text-white p-1">{props.title}</h3>
    </div>
  );
};

export default SkillCard;
