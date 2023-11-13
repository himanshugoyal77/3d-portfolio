import React from "react";
import {
  BiLogoReact,
  BiLogoFlutter,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoCPlusPlus,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoDocker,
  BiLogoAws,
  BiLogoFirebase,
  BiLogoRedux,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoCss3,
} from "react-icons/bi";
import {
  SiExpress,
  SiSelenium,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";

const TechIcons = () => {
  return (
    <div className="w-full flex flex-wrap gap-x-3 gap-y-5 items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <BiLogoReact className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">React.js</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <BiLogoFlutter className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">Flutter</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <BiLogoNodejs className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">Node.js</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SiExpress className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">Express.js</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <BiLogoMongodb className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">MongoDb</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <BiLogoCPlusPlus className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">C++</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <TbBrandNextjs className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">Next.js</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <BiLogoPostgresql className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">SQL</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <BiLogoPython className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">Python</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SiSelenium className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">Selenium</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <BiLogoDocker className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">Docker</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <BiLogoAws className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">AWS</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <BiLogoFirebase className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">Firebase</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <BiLogoRedux className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">Redux</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <AiFillGithub className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">Github</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <BiLogoTypescript className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">Typescript</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <BiLogoTailwindCss className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">Tailwindcss</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SiScikitlearn className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">Sklearn</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SiNumpy className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">Numpy</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SiPandas className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">Pandas</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <AiFillHtml5 className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">Html</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <BiLogoCss3 className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">Css</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IoLogoJavascript className="text-yellow-500 h-8 w-8" />
        <p className="text-white ">Javascript</p>
      </div>
    </div>
  );
};

export default TechIcons;
