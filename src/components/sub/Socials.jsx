import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "../../../utils/motion";

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
    <motion.div
      variants={slideInFromLeft(0.9)}
      className="
     w-full md:w-max
     cursor-pointer
  flex items-center justify-center gap-3 md:gap-6
  "
    >
      <img
        alt="linkedin"
        width={20}
        height={20}
        src={
          "https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-67bzy852.png"
        }
      />
      <img
        alt="linkedin"
        width={20}
        height={20}
        src={
          "https://www.pngkey.com/png/full/67-671021_twitter-logo-white-vector-facebook-logo-grey-round.png"
        }
      />
      <img
        alt="linkedin"
        width={20}
        height={20}
        src={
          "https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png"
        }
      />
      <img
        alt="linkedin"
        width={20}
        height={20}
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/LeetCode_logo_white_no_text.svg/1734px-LeetCode_logo_white_no_text.svg.png"
        }
      />
    </motion.div>
  );
};

export default Socials;
