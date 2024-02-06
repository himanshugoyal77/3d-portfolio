import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      className="w-full h-auto  flex flex-col
    justify-center items-center gap-4 text-white px-4 py-8 md:px-10 md:py-8 my-4"
    >
      <div
        className="flex flex-col md:flex-row justify-center items-start md:items-center
       gap-4 md:gap-12 py-2"
      >
        <span className="text-sm  text-gray-600 font-thin flex items-center gap-3">
          <CiLocationOn /> D6AD 18, AIDS <br className="md:hidden" /> VESIT,
          Chembur, Mumbai, Maharashtra 400074
        </span>
        <span className="text-sm  text-gray-600 font-thin flex items-center gap-3">
          <FiPhoneCall /> <a href="tel:887962XXXX"> +91 887962XXXX</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
