import { Socials } from "../../constants/index";

const Navbar = () => {
  return (
    <div
      className="w-full h-[65px] fixed top-0  
    bg-transparent z-50 px-10 "
    >
      <div
        className="
      w-full h-full flex flex-row items-center justify-between 
      "
      >
        <a href="" className="flex justify-center items-center gap-4">
          <img
            src="/logo.png"
            alt="logo"
            height={35}
            width={35}
            className="cursor-pointer hover:animate-slowspin
             shadow-inner
             rounded-full
             shadow-white
             bg-[#030014] 
            transition duration-300 ease-in-out transform hover:scale-110
            "
          />
          <a
            href="mailto:2021.himanshu.goyal@ves.ac.in"
            className="glow text-white"
          >
            2021.himanshu.goyal@ves.ac.in
          </a>
        </a>

        <div
          className="w-[500px] h-full hidden md:flex flex-row items-center justify-between
         "
        >
          <div
            className="flex items-center justify-between w-full h-auto
           border-[#7042f861]  mr-[15px] px-[20px] 
          py-[10px] rounded-full text-gray-200"
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

            <a href="#projects" className="cursor-pointer glow">
              Education
            </a>
            <a href="#projects" className="cursor-pointer glow">
              Contact
            </a>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;
