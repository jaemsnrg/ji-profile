import React from 'react';
import { motion } from "framer-motion"
import { Wrapper } from './animatedBall.style';

const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

const AnimatedBall = () => {
    return (
        <Wrapper>
        <motion.ul
            initial="hidden"
            animate="visible"
            variants={list}
        >
            <motion.li variants={item} />
            <motion.li variants={item} />
            <motion.li variants={item} />
        </motion.ul>
        </Wrapper>
    )
}

export default AnimatedBall;