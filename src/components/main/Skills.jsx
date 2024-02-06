import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "../../constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvide";
import SkillText from "../sub/SkillText";
import { skills } from "../../data/constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full
       relative overflow-hidden md:pb-50 py-0 md:py-20"
      style={{ transform: "scale(0.9" }}
    >
      <h1
        className="text-[40px] 
      text-center
      font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
      >
        Making apps with modern technologies
      </h1>

      <div className="grid grid-cols-5 md:grid-cols-7 gap-1 md:gap-12">
        {skills.map((skill, index) => {
          return <SkillDataProvider key={index} skill={skill} index={index} />;
        })}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
