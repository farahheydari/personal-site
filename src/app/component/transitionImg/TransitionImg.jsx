'use client'

import { motion } from 'framer-motion';

const imageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: .9,
      ease: "easeOut",
    },
  },
};

const AnimatedImage = ({ src, alt, customStyle = {} }) => {
  return (
    <motion.div
 
      style={{
        padding: '20px 0', 
        textAlign: 'center',
      }}
      variants={imageVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }} 
    >
      <motion.img
        src={src}
        alt={alt}
        style={customStyle}
      />
    </motion.div>
  );
};

export default AnimatedImage;
