import React from 'react';

import computer from '../img/computer.png';

//icons
import past from '../img/past.png';
import skills from '../img/skills.png';
import coffee from '../img/coffee.png';
import bulb from '../img/bulb.png';


//styles
import styled from 'styled-components';
import { About, Description, Image } from '../styles';

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
         <h1>The <span>who</span> and the <span>what</span>.</h1>
        <Cards>
          <Card>
            <div className="icon">
              <img src={past} alt="my background" />
              <h3>My background</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
         </Card>
         <Card>
            <div className="icon">
              <img src={skills} alt="my technical skills" />
              <h3>What I learned</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
         </Card>
         <Card>
            <div className="icon">
             <img src={coffee} alt="during my time off" />
              <h3>When I'm not coding..</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
         </Card>
         <Card>
            <div className="icon">
              <img src={bulb} alt="my future goals" />
              <h3>My goals</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
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
  padding-right: 5rem;

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
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
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
