import React from "react";
import bradyoncomputer from '../img/bradyoncomputer.png';

//styled

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
          <img src={bradyoncomputer} alt="myself" />
      </Image>
    </About>
  );
};

//styled components in style.js


export default AboutSection;
