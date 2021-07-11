import React from 'react';

import connecpet_booking from '../img/connecpet_booking.png';
// import eventspage from '../img/eventspage.jpg';
import pranktprankssearch from '../img/pranktprankssearch.png';
import weatherapp from '../img/weatherapp.png';
import heymovielist from '../img/heymovielist.png';

//style
import styled from 'styled-components';
import { About } from '../styles';

//links
import {Link} from 'react-router-dom';

//animations
import { motion } from 'framer-motion';
import { pageAnimation } from "../animation";

const MyWork = () => {
  return(
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <Project>
        <h2>ConnecPet</h2>
        <div className="line"></div>
        <Wrapper>
         <Link>
          <img src={connecpet_booking} alt="connecpet petsitters booking page" />
         </Link>
        </Wrapper>
      </Project>
      <Project>
        <h2>Prankt</h2>
        <div className="line"></div>
        <Wrapper>
         <Link>
          <img src={pranktprankssearch} alt="prank search page" />
         </Link>
        </Wrapper>
      </Project>
      <Project>
        <h2>Weather App</h2>
        <div className="line"></div>
        <Wrapper>
         <Link>
           <img src={weatherapp} alt="weather app" />
         </Link>
        </Wrapper>
      </Project>
      <Project>
        <h2>HeyMovieList</h2>
        <div className="line"></div>
        <Wrapper>
         <Link>
          <img src={heymovielist} alt="movie list homepage" id="movielist"/>
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

const Project = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    padding: 1rem;
  }

  #movielist {
    border-radius: 40px;
  }
`;

export default MyWork;
