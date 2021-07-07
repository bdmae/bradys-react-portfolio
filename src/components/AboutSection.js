import React from "react";
import meatcomputer from '../img/meatcomputer.jpg';
//styled
import styled from 'styled-components';
import { About, Description, Image, Hide } from "../styles";



const AboutSection = () => {
  return(
    <About>
      <Description>
        <div className="title">
            <Hide>
             <h2>Hi there, I'm <b>Brady</b>.</h2>
            </Hide>
            <Hide>
              <h2>a <span>front end fanatic</span>.</h2>
            </Hide>
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


export default AboutSection;
