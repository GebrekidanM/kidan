"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const FadeIn = ({ children, delay = 0.25, direction = "up", fullWidth = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: { duration: 0.5, delay: delay } 
    },
  };

  return (
    <div ref={ref} className={`${fullWidth ? "w-full" : "w-auto"}`}>
        <motion.div
          variants={variants}
          initial="hidden"
          animate={controls}
        >
          {children}
        </motion.div>
    </div>
  );
};

export default FadeIn;