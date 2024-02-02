import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Typewriter from "typewriter-effect";
import Socials from "./Socials";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-between absolute px-8 md:px-20 mt-40 w-full z-[50]"
    >
      <div
        className="h-full w-full flex flex-col gap-5 justify-center m-auto
       text-center
      md:text-start"
      >
        <motion.div
          variants={slideInFromTop}
          className="cursor-pointer Welcome-box py-[8px] px-[7px] border 
          border-[#7042f88b] opacity-[0.9]
          mx-auto md:mx-0 flex flex-row items-center justify-center gap-2
          "
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1
            className="Welcome-text text-[13px]
          
          "
          >
            Hola. Hello. Pardon. &nbsp;
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Himanshu <br />
            </span>
            {""}
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Software Engineer",
                  "Web Developer",
                  "Mobile Developer",
                  "DevOps Engineer",
                ],
                autoStart: true,
                loop: true,
                delay: 200,
                deleteSpeed: 50,
                pauseFor: 2000,
              }}
            />
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 mt-5 max-w-[600px] hidden md:block"
        >
          A Full Stack Software Engineer with experience in Website, Mobile, and
          Software development. Creating innovative and user-friendly solutions
          to complex problems.
        </motion.p>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 mt-5 max-w-[600px]  md:hidden"
        >
          Creating innovative and user-friendly solutions to complex problems.
        </motion.p>
        <Socials />
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 my-4 button-primary text-center text-white 
          cursor-pointer rounded-lg max-w-[200px]
          hover:shadow-xl hover:scale-105 transform transition-all 
          duration-200 ease-in-out
          mx-auto md:mx-0 px-4 md:px-0
          "
        >
          Download Resume
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className={`w-full h-full  justify-center items-center
        animate-pulse duration-75 ease-out  md:flex
       `}
      >
        <img
          src="/mainIconsdark.svg"
          alt="work icons"
          height={450}
          width={450}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
