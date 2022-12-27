import React from "react";
import SkillCircle from "./SkillCircle";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="relative min-h-screen flex flex-col text-center items-center justify-center mx-auto 
        md:text-left xl:flex-row max-w-[2000px] xl:px-10 xl:space-y-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill to see current profeciency
      </h3>
      
      <div className="grid grid-cols-4 gap-5">
        <SkillCircle />
        <SkillCircle />
        <SkillCircle />
        <SkillCircle />
        <SkillCircle />
        <SkillCircle />
        <SkillCircle />
        <SkillCircle />
        <SkillCircle />
        <SkillCircle />
        <SkillCircle />

      </div>
    </div>
  );
}

export default Skills;
