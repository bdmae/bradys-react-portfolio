import React from 'react';

import computer from '../img/computer.png';

// import { faCogs } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//styles
import styled from 'styled-components';
import { About, Description, Image } from '../styles';

const SkillsSection = () => {
  return(
    <Skills>
      <Description>
         <h1>The <span>who</span> and the <span>what</span>.</h1>
        <Cards>
          <Card>
            <div className="icon">
              {/* <i class="fas fa-history"></i> */}
              <h3>My background</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
         </Card>
         <Card>
            <div className="icon">
              {/* <FontAwesomeIcon icon={faCogs} /> */}
              <h3>What I learned</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
         </Card>
         <Card>
            <div className="icon">
              {/*-mug-hot"></i> */}
              <h3>When I'm not coding..</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
         </Card>
         <Card>
            <div className="icon">
              {/* lightbulb icon */}
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
  flex-basis: 10rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      padding: 1rem;
    }
  }
`;



export default SkillsSection;
