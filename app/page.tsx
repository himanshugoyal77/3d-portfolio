"use client";
import React, { Suspense, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import Lottie from "lottie-react";
import Animation from "../public/Animation.json";
import Location from "@/icons/location";
import Socials from "@/components/socials";
import DownloadCV from "@/components/download";
import HomePage from "./home/page";
import AboutPage from "./about/page";
import TechIcons from "@/components/tech";

export default function Home() {
  return (
    <div className="parent">
      <HomePage />
      <AboutPage />
      <div className="container flex flex-col items-center justify-center
       md:hidden w-[80%]">
        <h1 className="text-xl text-white">Tech Stack I Use</h1>
        <TechIcons />
      </div>
    </div>
  );
}
