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
import toast from "react-hot-toast";

const HeroContent = () => {
  const showToast = () => {
    toast.success("Resume Started Downloading...", {
      style: {
        border: "3px solid #030014",
        padding: "16px",
        color: "#030014",
      },
      iconTheme: {
        primary: "#030014",
        secondary: "#FFFAEE",
      },
    });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex md:w-[90%] mx-auto flex-col
      md:flex-row items-center justify-center px-10 md:px-20 mt-28 md:mt-36
      z-[20] "
    >
      <div
        className="h-full 
      w-full flex flex-col gap-5 justify-center m-auto md:text-start
      "
      >
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border
           border-[#7042f88b] opacity-[0.9]"
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
            <span
              className="text-transparent bg-clip-text
            bg-gradient-to-r from-purple-500 to-cyan-500"
            >
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
                  "DevOps Learner",
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
          className="text-lg text-gray-400 md:mt-5 max-w-[600px] hidden md:block"
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
          target="_blank"
          onClick={showToast}
          download="/resume/Himanshu Goyal Fullstack resume.pdf"
          href="/resume/Himanshu Goyal Fullstack resume.pdf"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Download Resume
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full
        hidden 
        md:flex justify-center items-center"
      >
        <img
          src="/self.png"
          alt="work icons"
          className="absolute mt-20 "
          height={550}
          width={550}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
