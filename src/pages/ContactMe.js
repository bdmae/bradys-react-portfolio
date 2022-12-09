import React from 'react';
import pointingbrady from "../img/pointing-brady.svg";

import styled from "styled-components";
import { Hide } from "../styles";
//animations
import { motion } from 'framer-motion';
import {
  sliderContainer,
  slider,
  pageAnimation,
  titleAnim,
  contactPhotoAnim,
  fade,
} from "../animation";

import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";



const ContactMe = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      {/* <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div> */}
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
   min-height: 90vh;
   display: flex;
   flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 2rem;

`;

const SocialsLinks = styled.div`
`;

const SocialsWrappers = styled.div`
  display: flex;
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
    /* position: fixed;
    bottom:0;
    left: 50%; */
  }

  @media (max-width: 1100px) {
    margin-left: unset;
    justify-content: center;

    img {
      width: 60%;
    }
  }
`;

//rainbow frames

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
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
