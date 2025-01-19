import React from 'react';

// //style
import styled from 'styled-components';
import { About } from '../styles';
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

// animate shared layout detects whether our layout changed

const ProjectsSection = () => {
  const [element, controls] = useScroll();
  return (
    <Projects 
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden">
    </Projects>
  );
};



const Projects = styled(About)`
  display: block;
  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .section-title {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .dropdown {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;


export default ProjectsSection;
