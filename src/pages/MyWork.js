import React from 'react';

import connecpet_booking from '../img/connecpet_booking.png';
// import eventspage from '../img/eventspage.jpg';
import pranktprankssearch from '../img/pranktprankssearch.png';
import weatherapp from '../img/weatherapp.png';
import heymovielist from '../img/heymovielist.png';

//style
import styled from 'styled-components';
import { Hide } from '../styles';

//links
import {Link} from 'react-router-dom';

//animations
import { motion } from 'framer-motion';
import { sliderContainer, slider, pageAnimation, photoAnim, fade, lineAnim } from "../animation";
import {useScroll} from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const MyWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Project>
        <motion.h2 variants={fade}>ConnecPet</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Wrapper>
          <Link>
            <Hide>
              <motion.img
                variants={photoAnim}
                src={connecpet_booking}
                alt="connecpet petsitters booking page"
              />
            </Hide>
          </Link>
        </Wrapper>
      </Project>
      <Project
      >
        <motion.h2 variants={fade}>Prankt</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Wrapper>
          <Link>
            <motion.img
              variants={photoAnim}
              src={connecpet_booking}
              alt="connecpet petsitters booking page"
            />
          </Link>
        </Wrapper>
      </Project>
      <Project>
        <motion.h2 variants={fade}>Weather App</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Wrapper>
          <Link>
            <motion.img
              variants={photoAnim}
              src={connecpet_booking}
              alt="connecpet petsitters booking page"
            />
          </Link>
        </Wrapper>
      </Project>
      <Project>
        <motion.h2 variants={fade}>HeyMovieList</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Wrapper>
          <Link>
            <motion.img
              variants={photoAnim}
              src={connecpet_booking}
              alt="connecpet petsitters booking page"
            />
          </Link>
        </Wrapper>
      </Project>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Project = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    padding: 1rem;
  }

  #movielist {
    border-radius: 40px;
  }
`;

// frame animation
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

export default MyWork;
