"use client";

import React from "react";
import Spline from "@splinetool/react-spline";
import Animation from "@/public/a1.json";
import Lottie from "lottie-react";
import Image from "next/image";
import SkillCard from "@/components/skill";
import { BiLogoReact } from "react-icons/bi";
import TechIcons from "@/components/tech";

const AboutPage = () => {
  return (
    <>
      <div className="container">
        <video autoPlay loop id="myVideo">
          <source src="rocket.mp4" type="video/mp4" />
        </video>
        <div className=" flex flex-col items-center justify-center">
          <h2 className=" text-purple-500 font-bold text-3xl mt-12 mb-10">
            Here's what I do
          </h2>

          <div
            className="flex-grow grid grid-cols-2 md:grid-cols-3 
          gap-x-[10px] md:gap-x-3 gap-y-3 md:gap-y-5 px-2 md:px-0 mb-5 md:md-10"
          >
            <SkillCard
              title="App Development"
              image="https://th.bing.com/th/id/OIP.fHrYIeZ2Dj1cXMUTvOQ5wgAAAA?pid=ImgDet&rs=1"
            />
            <SkillCard
              title="Web Development"
              image="https://th.bing.com/th/id/OIP.fHrYIeZ2Dj1cXMUTvOQ5wgAAAA?pid=ImgDet&rs=1"
            />
            <SkillCard
              title="Devops"
              image="https://th.bing.com/th/id/OIP.fHrYIeZ2Dj1cXMUTvOQ5wgAAAA?pid=ImgDet&rs=1"
            />
            <SkillCard
              title="Problem Solving"
              image="https://th.bing.com/th/id/OIP.fHrYIeZ2Dj1cXMUTvOQ5wgAAAA?pid=ImgDet&rs=1"
            />
            <SkillCard
              title="Machine Learning"
              image="https://th.bing.com/th/id/OIP.fHrYIeZ2Dj1cXMUTvOQ5wgAAAA?pid=ImgDet&rs=1"
            />
            <SkillCard
              title="Software Testing"
              image="https://th.bing.com/th/id/OIP.fHrYIeZ2Dj1cXMUTvOQ5wgAAAA?pid=ImgDet&rs=1"
            />
          </div>
          <div className="hidden md:flex w-[60%] mx-auto">
            <TechIcons />
          </div>
          <Lottie
            animationData={Animation}
            className="w-12 h-12 md:hidden mt-2"
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
