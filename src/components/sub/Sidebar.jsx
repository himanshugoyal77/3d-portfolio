import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import ToggleButton from "./ToggleButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="sidebar flex flex-col items-center justify-center
     text-white md:hidden
    "
    >
      <motion.div
        className={`bg fixed top-0 r-0 bottom-0 
        ease-in-out duration-300
        w-[430px] bg-[#030014f4]
        ${open ? "translate-x-0 " : "translate-x-full"}
        `}
      >
        <div
          className="h-full w-[230px]  flex flex-col
         items-center justify-center gap-5
        "
        >
          <a href="#about-me" className="cursor-pointer glow">
            About me
          </a>
          <a href="#skills" className="cursor-pointer glow">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer glow">
            Projects
          </a>

          <a href="#education" className="cursor-pointer glow">
            Education
          </a>
          <a href="#contact" className="cursor-pointer glow">
            Contact
          </a>
        </div>
      </motion.div>
      <ToggleButton open={open} setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
