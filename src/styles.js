import styled from "styled-components";
import {motion} from "framer-motion"

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 8rem;
  color: black;
  @media (max-width: 1100px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Image = styled.div`
  flex: 1;
  display: flex;
  margin-left: 3rem;
  z-index: 2;
  width: 100%;
  img {
    object-fit: cover;
    width: 80%;
  }

  @media (max-width: 1100px) {
    margin-left: unset;
    justify-content: center;

    img {
      width: 40%;
    }
  }

`;

export const Description = styled.div`
  flex: 1;
  padding-right: 4rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1100px) {
  padding:0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


