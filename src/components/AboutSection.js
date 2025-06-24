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
            <motion.h2 variants={titleAnim}>
              I'm Brady.
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim} class="rainbow-title">
              I <span class="rainbow-text">build tools</span>
            </motion.h2>
            <motion.h2 variants={titleAnim}>
              that make <b>work easier.</b>
            </motion.h2>
          </Hide>
          <motion.p variants={titleAnim}>
            I build flexible tools and interfaces that make work smoother and experiences better.
          </motion.p>
          <ButtonWrapper isLandingPage={true}>
            <a href="https://www.linkedin.com/in/brady-dornan1996/">
              <motion.button variants={fade}>let's connect!</motion.button>
            </a>
          </ButtonWrapper>
        </motion.div>
      </Description>
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
