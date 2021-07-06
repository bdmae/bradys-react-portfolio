import React from "react";
import meatcomputer from '../img/meatcomputer.jpg';
import styled from 'styled-components';


const AboutSection = () => {
  return(
    <About>
      <Description>
        <div className="title">
            <div className="hide">
             <h2>Hi there, I'm Brady.</h2>
            </div>
            <div className="hide">
              <h2>I'm a <span>front end fanatic</span>.</h2>
            </div>
          </div>
              <p>
               My aim is to join the beautiful,
               messy world of design
               and front-end development.
              </p>
           <button>curriculum vitae</button>
          </Description>
        <Image>
          <img src={meatcomputer} alt="myself" />
      </Image>
    </About>
  );
};

//styled components
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: black;
`;

const Image = styled.div`
  flex: 1;
  display: flex;
  margin-left: 3rem;

`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export default AboutSection;
