import React from 'react';

import computer from '../img/computer.png';

//icons
import past from '../img/past.png';
import skills from '../img/skills.png';
import coffee from '../img/coffee.png';
import bulb from '../img/bulb.png';


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
        <h1>
          The <span>who</span> and the <span>what</span>.
        </h1>
        <Cards>
          <Card>
            <div className="icon">
              <img src={past} alt="my background" />
              <h3>My background</h3>
            </div>
            <p>
              {/* A girl from a small village in the UK. The smell of farms and
              pastry makes me feel quite at home.
              Fell in love with Joe Hisaishi's compositions at 12 years of age and
              longed to experience Japan ever since. */}
              Began coding during the 2020 pandemic, and "If you can't stop
              thinking about it, don't stop working for it." so I left my life
              in Osaka behind and graduated from LeWagon bootcamp, joined a
              reputable tech start up where I met incredible people and gained
              many new skills.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={skills} alt="my technical skills" />
              <h3>My Journey</h3>
            </div>
            <p>
              On a professional level, I mainly work with JavaScript, React, PHP and SQL.
              I build most of my personal projects using React because I'm in love with the intuitivity and the way it encourages you a component-based mindset.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={coffee} alt="during my time off" />
              <h3>When I'm not coding..</h3>
            </div>
            <p>
              My more productive hobbies include learning languages such as
              Japanese & Korean. On the slightly less productive side... a
              slight obsession with Kdrama and second hand shopping.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={bulb} alt="my future goals" />
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
      <Image>
        <img src={computer} alt="computer" />
      </Image>
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
    width: 80%;
    padding: 2rem 0rem 4rem 0rem;
  }

  img {
    width: 40%;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
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
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 2px;
      padding: 1rem;
    }
  }
`;



export default SkillsSection;
