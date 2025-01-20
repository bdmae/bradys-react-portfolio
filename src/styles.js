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
    padding: 2rem 2rem;
    text-align: center;
    flex-direction: column;
  }
`;

export const AboutSkills = styled(motion.div)`
  min-height: 90vh;
  align-items: center;
  justify-content: space-between;
  color: black;
  display: block;
  padding: 2rem 2rem;
  text-align: center;
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
  }

`;

export const Description = styled.div`
  flex: 1;
  z-index: 2;
  padding: 1rem 0;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1100px) {
    button {
      margin: 1rem;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  
  @media (max-width: 1100px) {
    justify-content: center;
  }
`;


export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


