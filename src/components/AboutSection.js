import React from "react";
import brady from '../img/me.svg';

//styled

import { About, Description, Image, Hide, ButtonWrapper } from "../styles";
//Framer Motion
import { motion } from 'framer-motion';
import { fade } from "../animation";
import { photoAnim } from "../animation";
import Wave from "./Wave";
import { useTranslation } from 'react-i18next';
//if we want to target an element to make an animation,
// we simply put "motion." in the tag
// for example, for a h2 tag, it would become <motion.h2></motion.h2>
// example
// <motion.h1 animate={{ opacity: 1, transition:{ duration: 2 } }} initial={{ opacity: 0 }}>Hello</motion.h1>
const AboutSection = () => {

  const { t } = useTranslation();

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
              {t('banner.line1')}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim} className="rainbow-title">
              {t('banner.line2_part1')}{" "}
              <span className="rainbow-text">{t('banner.line2_part2')}</span>
            </motion.h2>
            <motion.h2 variants={titleAnim}>
              {t('banner.line3')}
            </motion.h2>
          </Hide>
          <motion.p variants={titleAnim}>
            {t('banner.description')}
          </motion.p>
          <ButtonWrapper isLandingPage={true}>
            <a href="https://www.linkedin.com/in/brady-dornan1996/">
              <motion.button variants={fade} className="primary-button">
                {t('banner.connect')}
              </motion.button>
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

export default AboutSection;
