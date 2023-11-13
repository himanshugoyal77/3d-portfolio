import React from "react";

const DownloadCV = () => {
  return (
    <div
      className="absolute z-10 
    hidden  w-full md:w-max
    md:top-[55%] md:left-[10%] cursor-pointer
  md:flex items-center justify-center gap-3 md:gap-6
  border border-gray-300 rounded-md py-2 px-4 text-white

  hover:bg-gray-200 hover:text-[#0f0a15]
  transition duration-600 ease-in-out origin-left transform 
  "
    >
      Download Resume
    </div>
  );
};

export default DownloadCV;
