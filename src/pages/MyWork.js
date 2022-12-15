import { useEffect, useRef } from "react";

import connecpet_booking from '../img/connecpet_booking.png';
// import eventspage from '../img/eventspage.jpg';
import pranktprankssearch from '../img/pranktprankssearch.png';
import nekojita from "../img/nekojita.png";
import imeji from "../img/imeji.png";
import tofudovideo from "../videos/tofudovideo.mov";


//style
import styled from 'styled-components';
import { Description, Hide, ColumnWrapper } from '../styles';

//links
import {Link} from 'react-router-dom';

//animations
import { motion } from 'framer-motion';
import {
  sliderContainer,
  slider,
  pageAnimation,
  photoAnim,
  fade,
  lineAnim,
  titleAnim,
} from "../animation";
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
        <motion.h2 variants={fade}>imeji</motion.h2>
        <motion.h3 variants={fade}>Image gallery</motion.h3>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Wrapper>
          <a href="https://imeji.netlify.app/">
            <motion.img
              width="90%"
              variants={photoAnim}
              src={imeji}
              alt="Imeji image gallery"
            />
          </a>
        </Wrapper>
        <Description>
          <p>
            An Image gallery concept built in JS, using <a href="https://www.pexels.com/api/">pexels api</a> to be able to
            search any image.
          </p>
        </Description>
      </Project>
      <Project>
        <motion.h2 variants={fade}>nekojita</motion.h2>
        <motion.h3 variants={fade}>Blog website concept</motion.h3>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Wrapper>
          <a href="https://nekojita.netlify.app/">
            <motion.img
              width="90%"
              variants={photoAnim}
              src={nekojita}
              alt="Nekojita blog site landing page"
            />
          </a>
        </Wrapper>
        <Description>
          <p>
            A creative project, trying out various design concepts and bringing
            them to life through JS and Framer Motion animation. Developing it
            into a real platform where I can share my stories and experiences in
            Japan.
          </p>
          {/* <Social variants={titleAnim} className="social">
            <Circle></Circle>
            <a href="https://nekojita.netlify.app/">
              <h3>Website</h3>
            </a>
          </Social> */}
        </Description>
      </Project>
      {/* <Project>
        <motion.h2 variants={fade}>Prankt</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Wrapper>
          <a href="https://prankt.herokuapp.com">
            <motion.img
              variants={photoAnim}
              src={pranktprankssearch}
              alt="list of pranks done by professional pranksters"
            />
          </a>
        </Wrapper>
        <Description>
          <p>
            A lighthearted, collaborative project Airbnb-inspired web
            application which allows people to "book a prank" on their friends
            and family, done by a "professional prankster".
          </p>
          <Social variants={titleAnim} className="social">
            <Circle></Circle>
            <a href="https://prankt.herokuapp.com">
              <h3>Website</h3>
            </a>
          </Social>
        </Description>
      </Project> */}
      <Project>
        <motion.h2 variants={fade}>tofudo</motion.h2>
        <motion.h3 variants={fade}>Todo list manager</motion.h3>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <ColumnWrapper>
          <div className="inner-wrapper">
            <video
              src={tofudovideo}
              controls
              width="90%"
              muted
              autoPlay={"autoplay"}
              preLoad="auto"
              loop
            >
              {" "}
              Tofudo video not able to load.
            </video>
          </div>
          <Description>
            <p>
              A minimalist todo list with CRUD functionality and fetching from a
              weather api, built in React JS.
            </p>
          </Description>
        </ColumnWrapper>
      </Project>
      <Project>
        <motion.h2 variants={fade}>ConnecPet</motion.h2>
        <motion.h3 variants={fade}>SNS application</motion.h3>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Wrapper>
          <Link to="https://connecpet.org">
            <motion.img
              variants={photoAnim}
              src={connecpet_booking}
              alt="connecpet petsitters booking page"
            />
          </Link>
          <Description>
            <p>
              Collaborative project at Le Wagon Coding Bootcamp, based on our
              shared love for pets, creating an application that connecting pet
              owners and pet sitters on a fun SNS platform.
            </p>
            <iframe
              width="580"
              height="360"
              src="https://www.youtube.com/embed/Tqgv8XiOPMI?t=590"
              title="Web Development Coding Bootcamp Tokyo | Le Wagon Demo Day - Spring 2021"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Description>
        </Wrapper>
      </Project>
      <ScrollTop />
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
  padding-bottom: 2rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    padding: 1rem;
  }

  h3 {
    margin-bottom: 1rem;
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
