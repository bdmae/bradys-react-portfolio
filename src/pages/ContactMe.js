import React from 'react';
import pointingbrady from "../img/pointing-brady.svg";

import styled from "styled-components";
import { Hide } from "../styles";

//animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim, contactPhotoAnim } from "../animation";

const ContactMe = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Drop me a message!</motion.h2>
        </Hide>
      </Title>
      <SocialsWrappers>
        <SocialsLinks>
          <Hide>
            <Social variants={titleAnim} className="social">
              <Circle></Circle>
              <a href="mailto:bradydornan@gmail.com">
                <h3>Email</h3>
              </a>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim} className="social">
              <Circle></Circle>
              <a href="https://www.linkedin.com/in/brady-dornan1996/">
                <h3>LinkedIn</h3>
              </a>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim} className="social">
              <Circle></Circle>
              <a href="https://www.wantedly.com/id/bradymae">
                <h3>Wantedly</h3>
              </a>
            </Social>
          </Hide>
        </SocialsLinks>
        <Hide>
          <div className="img-wrapper">
            <Image>
              <motion.img
                variants={contactPhotoAnim}
                initial="hidden"
                animate="show"
                src={pointingbrady}
                alt="myself"
              />
            </Image>
          </div>
        </Hide>
      </SocialsWrappers>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
   padding: 5rem;
   color: #353535;
   max-height: 50vh;
   display: flex;
   flex-direction: column;

   @media (max-width: 1000px) {
    padding: 1.4rem;
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 2rem;

`;

const SocialsLinks = styled.div`
`;

const SocialsWrappers = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Image = styled.div`
  flex: 1;
  display: flex;
  padding-left: 3rem;
  z-index: 2;
  width: 100%;
  justify-content: center;

  img {
    object-fit: cover;
    width: 30%;
  }

  @media (max-width: 1100px) {
    margin-left: unset;
    justify-content: center;
  }
`;

const Circle = styled.div`
   border-radius: 50%;
   width: 3rem;
   height: 3rem;
   background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem
  }
`;
export default ContactMe;
