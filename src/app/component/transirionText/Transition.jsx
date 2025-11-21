'use client'

import { motion, useInView } from 'framer-motion'; 
import React, { useRef } from 'react'; 

const textVariants = {
  initial: {
    opacity: 0,
    x:-100,
  },
  animate: {
    opacity: 1,
    x:10,
    transition: {
      duration: 1, 
      ease: "easeOut",
    },
  },
};

const TransitionText = ({ children, customStyle = {} }) => {
  const ref = useRef(null);
  
  const isInView = useInView(ref, { 
    once: true,      
    amount: 0.2,       
  }); 

  return (
    <motion.div
      ref={ref} 
      variants={textVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"} 
      
      style={customStyle}
    >
      {children}
    </motion.div>
  );
};

export default TransitionText;
