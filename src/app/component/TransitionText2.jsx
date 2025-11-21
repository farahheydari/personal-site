'use client'

import { motion, useInView } from 'framer-motion'; 
import React, { useRef } from 'react'; 

const textVariants = {
  initial: {
    opacity: 0,
    y:100,
  },
  animate: {
    opacity: 1,
    y:10,
    transition: {
      duration: 1.6, 
      ease: "easeOut",
    },
  },
};

const TransitionText2 = ({ children, customStyle = {} }) => {
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

export default TransitionText2;
