import React from 'react';

import computer from '../img/computer.png';


//styles
import styled from 'styled-components';
import { About, Description } from '../styles';

//scroll anim
import { scrollReveal } from "../animation";
import { useScroll } from './useScroll';

//the view is saying true when you scroll.
// we can specify WHEN something is true, we can do that with threshold
// if we set it to 0.5, we're setting it half way down the frame
// so we're saying if our elements are in view, start the animation - if not, hide
const SkillsSection = () => {
   const [element, controls] = useScroll();
  return (
    <Skills
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <Cards>
          <Card>
            <div className="title-wrapper">
              <i class="ph ph-house"></i>
              <h3>My background</h3>
            </div>
            <p>
              Began coding during the 2020 pandemic, and "If you can't stop
              thinking about it, don't stop working for it." so I left my life
              in Osaka behind and graduated from LeWagon bootcamp and the rest is history.
            </p>
          </Card>
          <Card>
            <div className="title-wrapper">
              <i class="ph ph-gear"></i>
              <h3>My Journey</h3>
            </div>
            <p>
              On a professional level, I mainly work with JavaScript, Vue.js (with TypeScript) and Ruby on Rails.
              I build most of my personal projects using React because I'm in love with the intuitivity and the way it encourages you a component-based mindset.
            </p>
          </Card>
          <Card>
            <div className="title-wrapper">
              <i class="ph ph-instagram-logo"></i>
              <h3>When I'm not coding..</h3>
            </div>
            <p>
              I run a photogrpahy instagram account. I particularly love capturing the different seasons in Japan.
              Learning Korean as my hobby, one day I will watch squid game without subtitles!
            </p>
          </Card>
          <Card>
            <div className="title-wrapper">
              <i class="ph ph-lightbulb"></i>
              <h3>My goals</h3>
            </div>
            <p>
              To contribute even further to a world of beautiful, intuitively
              designed pages with the help of JS frameworks such as React. To be
              able to create any inspiring design and to bring it to life.
            </p>
          </Card>
        </Cards>
      </Description>
    </Skills>
  );
};

const Skills = styled(About)`
  display: block;
  padding: 2rem 2rem;
  text-align: center;

  h1 {
    padding-bottom: 5rem;
  }

  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 50%;
    padding: 2rem 0rem 4rem 0rem;
  }

  img {
    width: 40%;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Image = styled.div`
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 15rem;
  padding: 2rem;

  .title-wrapper {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 2px;
      padding: 1rem;
    }

    i {
      font-size: 4rem;
    }
  }
`;



export default SkillsSection;
