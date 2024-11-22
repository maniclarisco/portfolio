import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        A Blockchain enthusiast with three years of experience in this
          dynamic field. Over the past three years, I have had the
          opportunity to work on various blockchain projects, each
          offering unique challenges and learning experiences. From
          developing Dapps to optimizing smart contract code. As
          blockchain technology continues to evolve, I remain passionate
          about exploring its potential to revolutionize industries and I
          am eager to tackle new challenges and contribute to the
          exciting advancements in this ever growing field.
      </motion.p>

    </>
  );
};

export default SectionWrapper(About, "about");
