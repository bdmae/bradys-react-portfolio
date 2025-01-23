import nekojita from "../img/nekojita.png";
import imeji from "../img/imeji.png";
import tiedy from "../img/tiedy.png";
// import tofudovideo from "../videos/tofudovideo.mov";
import evolanycorporate from "../img/evolanycorporate.png";
import CMScatalogpage from "../img/CMScatalogpage.png";
import designsystem from "../img/designsystem.png";

// components
import Tag from "../components/Tag";

//style
import styled from 'styled-components';
import { Description, RowWrapper, TagsWrapper, ButtonWrapper } from '../styles';

//links

//animations
import { motion } from 'framer-motion';
import {
  photoAnim,
  fade,
  lineAnim,
  pageAnimation
} from "../animation";
import ScrollTop from '../components/ScrollTop';

const MyWork = () => {
  return (
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <Project>
        <motion.h2 variants={fade}>Ecommerce site CMS-Conversion</motion.h2>
        <motion.h3 variants={fade}>Role: Frontend</motion.h3>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <RowWrapper>
          <ResponsivePortraitImg
            variants={photoAnim}
            src={CMScatalogpage}
            alt="catalog page"
          />
          <Description>
            <TagsWrapper>
              <Tag>JavaScript</Tag>
              <Tag>Ruby on Rails</Tag>
              <Tag>HTML (slim)</Tag>
              <Tag>CSS/SCSS</Tag>
            </TagsWrapper>
            <div class="details-wrapper">
              <p>
              Led the frontend initiative to transform product pages into CMS-compatible templates, enabling seamless content updates by non-technical teams. 
              This shift reduced update times from around a day to just 1-2 hours, empowering teams to make changes independently and efficiently.
              </p>
            </div>
            <ButtonWrapper>
              <a href="https://www.sowxp.co.jp/catalogs/198" target="_blank" rel="noopener noreferrer">
                <motion.button variants={fade}>
                  see website
                </motion.button>
              </a>
            </ButtonWrapper>
          </Description>
        </RowWrapper>
      </Project>
      <Project>
        <motion.h2 variants={fade}>Atomic Design System</motion.h2>
        <motion.h3 variants={fade}>Role: Co-lead</motion.h3>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <RowWrapper>
          <Description>
            <TagsWrapper>
              <Tag>Figma</Tag>
              <Tag>UI / UX Design</Tag>
              <Tag>Collaboration</Tag>
            </TagsWrapper>
            <div class="details-wrapper">
              <p>
                I built a scalable Figma Design system based on Atomic Design methodology, from a creating vast reusable component library to writing documentation, which has since been adopted as a company wide design system. 
                Bridging the gap between design and development by hosting monthly meetings on optimising the design system and design handoffs to the development team.
              </p>
            </div>
          </Description>
          <ResponsivePortraitImg
            variants={photoAnim}
            src={designsystem}
            alt="Figma design system"
          />
        </RowWrapper>
      </Project>
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
              <Tag>CSS/SCSS</Tag>
              <Tag>PHP</Tag>
            </TagsWrapper>
            <div class="details-wrapper">
              <p>
                Collaborated closely with the lead designer to spearhead the frontend development of the company’s 
                corporate website, significantly enhancing the company’s branding, 
                visibility and ultimately helping to attract 30% of its top talent.
              </p>
            </div>
            <ButtonWrapper>
              <a href="https://evolany.com/" target="_blank" rel="noopener noreferrer">
                <motion.button variants={fade}>
                  see website
                </motion.button>
              </a>
            </ButtonWrapper>
          </Description>
        </RowWrapper>
      </Project>
      <Project>
        <motion.h2 variants={fade}>Meeting Contacts Manager</motion.h2>
        <motion.h3 variants={fade}>Role: Frontend</motion.h3>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <RowWrapper>
          <Description>
            <TagsWrapper>
              <Tag>React</Tag>
              <Tag>Rest Apis</Tag>
              <Tag>Collaboration</Tag>
            </TagsWrapper>
            <div class="details-wrapper">
              <p>
                Developed a responsive, user-friendly interface for Tiedy,
                a web application acting as a virtual business card manager for online meetings.
                I implemented seamless UI and UX for key user journies, 
                including creating new rooms and the authentification flow via meeting invite.
              </p>
            </div>
            <ButtonWrapper>
              <a href="https://chromewebstore.google.com/detail/tiedy/phijiocdmmhgaajomdgffmpceehgdiji" target="_blank" rel="noopener noreferrer">
                <motion.button variants={fade}>
                  see chrome extension
                </motion.button>
              </a>
            </ButtonWrapper>
          </Description>
          <ResponsiveImg
            variants={photoAnim}
            src={tiedy}
            alt="screenshot of Tiedy contact manager page"
          />
        </RowWrapper>
      </Project>
      <Project>
        <motion.h2 variants={fade}>imeji</motion.h2>
        <motion.h3 variants={fade}>Project for fun</motion.h3>
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
              <Tag>CSS</Tag>
            </TagsWrapper>
            <p>
              With my love for photography, I created a simple image gallery using the{" "}
              <a href="https://www.pexels.com/api/">pexels api</a> to be able to
              search any image for inspiration.
            </p>
            <ButtonWrapper>
              <a href="https://imeji.netlify.app/" target="_blank" rel="noopener noreferrer">
                <motion.button variants={fade}>
                  see website
                </motion.button>
              </a>
            </ButtonWrapper>
          </Description>
        </RowWrapper>
      </Project>
      <Project>
        <motion.h2 variants={fade}>Nekojita Blog Website</motion.h2>
        <motion.h3 variants={fade}>Project for fun</motion.h3>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <RowWrapper>
          <Description>
            <TagsWrapper>
              <Tag>JavaScript</Tag>
              <Tag>Scroll Magic</Tag>
              <Tag>UI/UX Design</Tag>
            </TagsWrapper>
            <p>
              A creative Blog website concept project, bringing
              them to life through JS and Framer Motion animation. Developing it
              into a real platform where I can share my stories and experiences in
              Japan.
            </p>
            <ButtonWrapper>
              <a href="https://nekojita.netlify.app/" target="_blank" rel="noopener noreferrer">
                <motion.button variants={fade}>see website</motion.button>
              </a>
            </ButtonWrapper>
          </Description>
          <ResponsiveImg
            variants={photoAnim}
            src={nekojita}
            alt="Nekojita blog site landing page"
          />
        </RowWrapper>
      </Project>
      {/* <Project>
        <motion.h2 variants={fade}>tofudo</motion.h2>
        <motion.h3 variants={fade}>Project for fun</motion.h3>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <RowWrapper>
          <Description>
            <TagsWrapper>
              <Tag>React</Tag>
            </TagsWrapper>
            <p>
              A minimalist todo list with CRUD functionality and fetching from a
              weather api, built in React JS.
            </p>
          </Description>
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
        </RowWrapper>
      </Project> */}
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

  @media (max-width: 1100px) {
    margin: 2rem;
  }
`;

const Project = styled(motion.div)`
  padding-bottom: 4rem;
  .line {
    height: 0.1rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  h3 {
    margin-bottom: 1rem;
  }

  #movielist {
    border-radius: 40px;
  }
`;

const ResponsiveImg = styled(motion.img)`
  width: 50%;
  object-fit: cover;
  border-radius: 0.8rem;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const ResponsivePortraitImg = styled(motion.img)`
  width: 28%;
  object-fit: cover;
  border-radius: 0.6rem;

  @media (max-width: 786px) {
    width: 100%;
  }
`;


export default MyWork;
