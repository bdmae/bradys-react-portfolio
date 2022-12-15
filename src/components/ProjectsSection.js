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
    <Projects variants={scrollReveal} ref={element} animate={controls} initial="hidden">
      {/* <h2>
        A <span>deeper</span> insight
      </h2>
      <AnimateSharedLayout>
        <Toggle title="A little more about me">
          <div className="dropdown">
            <p>snapshot description</p>
          </div>
        </Toggle> */}
        {/* <Toggle title="Projects snapshot">
          <div className="dropdown">
            <p>snapshot description</p>
            <Wrapper>
              <img src={connecpet_homepage} alt="connect pet homepage" />
              <img src={prankthomepage} alt="prankt home page" />
              <img src={weatherapp} alt="weather app" />
              <img src={heymovielist} alt="movie list homepage" />
              <motion.button variants={fade}>curriculum vitae</motion.button>
            </Wrapper>
          </div>
        </Toggle> */}
      {/* </AnimateSharedLayout> */}
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
