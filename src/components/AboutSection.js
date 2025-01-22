import React from "react";
import brady from '../img/me.svg';

//styled

import { About, Description, Image, Hide, ButtonWrapper } from "../styles";
//Framer Motion
import { motion } from 'framer-motion';
import { fade } from "../animation";
import { photoAnim } from "../animation";
import Wave from "./Wave";
//if we want to target an element to make an animation,
// we simply put "motion." in the tag
// for example, for a h2 tag, it would become <motion.h2></motion.h2>
// example
// <motion.h1 animate={{ opacity: 1, transition:{ duration: 2 } }} initial={{ opacity: 0 }}>Hello</motion.h1>
const AboutSection = () => {

  const titleAnim = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: { duration: 2 } },
  };

  const container = {
    hidden: {x: 100},
    show: {x: 0, transition: { duration: 1, ease: "easeOut", staggerChildren: 1 } },
  };


  return (
    <About>
      <Description>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <motion.h2 variants={titleAnim}>Hi there,</motion.h2>
            <motion.h2 variants={titleAnim}>
              I'm <b>Brady</b>.
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim} class="rainbow-title">
              a <span class="rainbow-text">front end fanatic</span>.
            </motion.h2>
          </Hide>
          <motion.p variants={titleAnim}>
              I’m dedicated to creating digital experiences that are as delightful to use as they are to look at.
          </motion.p>
          <ButtonWrapper>
            <a href="https://www.linkedin.com/in/brady-dornan1996/">
              <motion.button variants={fade}>let's connect!</motion.button>
            </a>
          </ButtonWrapper>
        </motion.div>
      </Description>
      {/* if you want to get an image out of the staggering elemnets,
          you can define an initial and a show */}
      <Image>
        <motion.img
          variants={photoAnim}
          initial="hidden"
          animate="show"
          src={brady}
          alt="myself"
        />
      </Image>
      <Wave />
    </About>
  );
};

//styled components in style.js


export default AboutSection;
