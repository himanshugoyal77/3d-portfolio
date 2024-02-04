"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillDataProvider = ({ index, skill }) => {
  const { image, name } = skill;
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      className="flex flex-col items-center justify-center gap-3 text-white"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * animationDelay }}
    >
      <img src={image} width={60} height={60} alt="skill image" />
      <h4 className="text-white text-center">{name}</h4>
    </motion.div>
  );
};

export default SkillDataProvider;
