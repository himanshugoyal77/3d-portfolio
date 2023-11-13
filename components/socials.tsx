import Image from "next/image";
import React, { useEffect } from "react";

const Socials = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  useEffect(() => {
    if (window.innerWidth < 500) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }, []);

  return (
    <div
      className="absolute z-10 
    top-[90%] w-full md:w-max
    md:top-[44%] md:left-[10%] cursor-pointer
  flex items-center justify-center gap-3 md:gap-6
  "
    >
      <Image
        alt="linkedin"
        width={isSmallScreen ? 20 : 30}
        height={isSmallScreen ? 20 : 30}
        unoptimized={true}
        src={
          "https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-67bzy852.png"
        }
      />
      <Image
        alt="linkedin"
        width={isSmallScreen ? 20 : 30}
        height={isSmallScreen ? 20 : 30}
        unoptimized={true}
        src={
          "https://www.pngkey.com/png/full/67-671021_twitter-logo-white-vector-facebook-logo-grey-round.png"
        }
      />
      <Image
        alt="linkedin"
        width={isSmallScreen ? 20 : 30}
        height={isSmallScreen ? 20 : 30}
        unoptimized={true}
        src={
          "https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png"
        }
      />
      <Image
        alt="linkedin"
        width={26}
        height={26}
        unoptimized={true}
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/LeetCode_logo_white_no_text.svg/1734px-LeetCode_logo_white_no_text.svg.png"
        }
      />
    </div>
  );
};

export default Socials;
