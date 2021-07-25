import styled from "styled-components";
import {motion} from "framer-motion"

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 8rem;
  color: black;
`;

export const Image = styled.div`
  flex: 1;
  display: flex;
  margin-left: 3rem;
  z-index: 2;
  img {
    object-fit: cover;
  }

`;

export const Description = styled.div`
  flex: 1;
  padding-right: 4rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;


