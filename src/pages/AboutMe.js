import React from 'react';
// page components
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";

//animations
import { motion } from 'framer-motion';
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const AboutMe = () => {
    return (
     <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <AboutSection />
      <SkillsSection />
      {/* <ProjectsSection /> */}
      <ScrollTop/>
     </motion.div>
   );
};

export default AboutMe;
