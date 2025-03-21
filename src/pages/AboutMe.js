import React from 'react';

// page components
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";

//animations
import { motion } from 'framer-motion';
import { fade } from "../animation";
import ScrollTop from "../components/ScrollTop";

const AboutMe = () => {
    return (
     <motion.div exit="exit" variants={fade} initial="hidden" animate="show">
      <AboutSection />
      <SkillsSection />
      <ScrollTop/>
     </motion.div>
   );
};

export default AboutMe;
