import { useEffect, useRef } from "react";

import nekojita from "../img/nekojita.png";
import imeji from "../img/imeji.png";
import tofudovideo from "../videos/tofudovideo.mov";
import evolanycorporate from "../img/evolanycorporate.png";

// components
import Tag from "../components/Tag";

//style
import styled from 'styled-components';
import { Description, ColumnWrapper, RowWrapper, TagsWrapper } from '../styles';

//links
import {Link} from 'react-router-dom';

//animations
import { motion } from 'framer-motion';
import {
  photoAnim,
  fade,
  lineAnim,
  pageAnimation
} from "../animation";
import {useScroll} from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';
import { faFolder } from "@fortawesome/free-regular-svg-icons";

const MyWork = () => {


  return (
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      {/* <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div> */}

      <Project>
        <motion.h2 variants={fade}>Corporate Website</motion.h2>
        <motion.h3 variants={fade}>Role: Lead Developer</motion.h3>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <RowWrapper>
          <ResponsiveImg
            variants={photoAnim}
            src={evolanycorporate}
            alt="Corporate Website"
          />
          <Description>
            <TagsWrapper>
              <Tag>JavaScript</Tag>
              <Tag>HTML</Tag>
              <Tag>SCSS3</Tag>
              <Tag>PHP</Tag>
            </TagsWrapper>
            <div class="details-wrapper">
              <p>
                Collaborated closely with the lead designer to spearhead the frontend development of the company’s 
                corporate website, significantly enhancing the company’s branding, visibility and ultimately helping to attract 40% of its top talent.
              </p>
            </div>
            <div class="button-wrapper">
              <a href="https://evolany.com/">
                <motion.button variants={fade}>let's connect!</motion.button>
              </a>
            </div>
          </Description>
        </RowWrapper>
      </Project>

      {/* <Project>
        <motion.h2 variants={fade}>imeji</motion.h2>
        <motion.h3 variants={fade}>Image gallery</motion.h3>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <RowWrapper>
            <ResponsiveImg
              variants={photoAnim}
              src={imeji}
              alt="Imeji image gallery"
            />
          <Description>
            <TagsWrapper>
              <Tag>JavaScript</Tag>
              <Tag>HTML</Tag>
              <Tag>SCSS3</Tag>
              <Tag>PHP</Tag>
            </TagsWrapper>
            <p>
              An Image gallery concept built in JS, using{" "}
              <a href="https://www.pexels.com/api/">pexels api</a> to be able to
              search any image.
            </p>
          </Description>
        </RowWrapper>
      </Project> */}
      <Project>
        <motion.h2 variants={fade}>nekojita Blog Website</motion.h2>
        <motion.h3 variants={fade}>Personal project</motion.h3>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <RowWrapper>
            <ResponsiveImg
              variants={photoAnim}
              src={nekojita}
              alt="Nekojita blog site landing page"
            />
          <Description>
            <TagsWrapper>
              <Tag>JavaScript</Tag>
              <Tag>Framer Motion</Tag>
            </TagsWrapper>
            <p>
              A creative Blog webaite concept project, bringing
              them to life through JS and Framer Motion animation. Developing it
              into a real platform where I can share my stories and experiences in
              Japan.
            </p>
            <div class="button-wrapper">
              <a href="https://nekojita.netlify.app/">
                <motion.button variants={fade}>let's connect!</motion.button>
              </a>
            </div>
          </Description>
        </RowWrapper>
      </Project>
      <Project>
        <motion.h2 variants={fade}>tofudo</motion.h2>
        <motion.h3 variants={fade}>Todo list manager</motion.h3>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <RowWrapper>
          <video
            src={tofudovideo}
            controls
            width="40%"
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop
          >
            {" "}
            Tofudo video not able to load.
          </video>
          <Description>
            <p>
              A minimalist todo list with CRUD functionality and fetching from a
              weather api, built in React JS.
            </p>
          </Description>
        </RowWrapper>
      </Project>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  margin: 5rem 10rem;
  h2 {
    font-family: "Helvetica", sans-serif;
    padding: 1rem 0rem;
    font-weight: 700;
  }
`;

const Project = styled(motion.div)`
  padding-bottom: 2rem;
  .line {
    height: 0.1rem;
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

const ResponsiveImg = styled(motion.img)`
  width: 50%;

  @media (max-width: 1100px) {
    width: 100%;
  }
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
