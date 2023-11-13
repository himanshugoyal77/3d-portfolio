import DownloadCV from "@/components/download";
import Socials from "@/components/socials";
import Spline from "@splinetool/react-spline";
import React, { Suspense, useRef } from "react";

const HomePage = () => {
  const spline = useRef(null);

  function onLoad(splineApp: any) {
    spline.current = splineApp;
  }

  return (
    <div className="container">
     
      <div className="h-screen w-screen object-cover overflow-hidden relative z-0">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline
            scene="https://prod.spline.design/CKrN2tXjpRf8d6J2/scene.splinecode"
            style={{
              height: "100vh",
              width: "100%",
              objectFit: "cover",
              position: "relative",
            }}
            onLoad={onLoad}
        
          />
        </Suspense>
        <div
          className="text-3xl md:text-5xl max-w-[80%] flex flex-col justify-center 
        md:items-start mx-auto absolute z-10 text-white top-[8%] md:top-[12%] left-0 right-0 
        text-center md:text-start"
        >
          <h2>Hi Everyone,</h2>
          <h1 className="mt-4">
            {" "}
            I'm <span className="text-red-500 font-bold">Himanshu Goyal!</span>
          </h1>
          <div
            className="flex items-center justify-center text-xl 
          md:text-2xl gap-1  mt-3 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            Mumbai, India
          </div>
        </div>
        <Socials />
        <DownloadCV />
        <div
          className="text-2xl md:text-5xl absolute z-10 
        text-white top-[74%] md:top-[60%] left-0 right-0 text-center md:w-[80%]  md:text-end
        md:mx-auto md:flex md:flex-col md:justify-end items-center md:items-end
        "
        >
          A{" "}
          <span className="text-purple-500 font-semibold">
            Full Stack Developer
          </span>{" "}
          <div className="w-2/3 md:w-[35%] mx-auto md:mx-0">
            <div className=""></div>
            <p
              className="text-sm md:text-lg mt-2  mx-auto md:ml-auto 
           md:text-end md:leading-snug md:tracking-wider"
            >
              Creating innovative and user-friendly solutions to complex
              problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
