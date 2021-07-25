import React from 'react';

import styled from "styled-components";
//animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from "../animation";


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
      <Social variants={titleAnim}>
        <Circle></Circle>
      </Social>
      <Social variants={titleAnim}>
        <Circle></Circle>
      </Social>
      <Social variants={titleAnim}>
        <Circle></Circle>
      </Social>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
   padding: 5rem 10rem;
   color: #353535;
   min-height: 90vh;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;

`;

const Hide = styled.div`
  overflow: hidden;
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
