import * as React from "react";
import { Wrapper } from "./ballGroupAnimation.style";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const pushItemsIntoArray = numOfItems => {
  const itemArray = [];
  for (let item = 0; item < numOfItems; item++) {
    itemArray.push(item);
  }
  return itemArray;
};

const BallGroupAnimation = props => {
  let { numOfItems, width } = props;
  let itemsToAnimate = pushItemsIntoArray(numOfItems);
  return (
    <Wrapper width={width}>
      <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {itemsToAnimate.map(index => (
          <motion.li key={index} className="item" variants={item} />
        ))}
      </motion.ul>
    </Wrapper>
  );
};

export default BallGroupAnimation;
