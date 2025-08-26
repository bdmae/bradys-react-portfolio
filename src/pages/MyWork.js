// import nekojita from "../img/nekojita.png";
import tiedy from "../img/tiedy.png";
import keigoifyvideo from "../videos/keigoifyvideo.mov";
// import tofudovideo from "../videos/tofudovideo.mov";
import evolanycorporate from "../img/evolanycorporate.png";
import CMScatalogpage from "../img/CMScatalogpage.png";
// import designsystem from "../img/designsystem.png";
import sowlogo from "../img/sowlogo.png"

// translations
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();  

  return (
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <Project>
        <motion.h2 variants={fade}>{t('projects.ecommerce.title')}</motion.h2>
        <motion.h3 variants={fade}>{t('projects.ecommerce.role')}</motion.h3>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <RowWrapper>
          <ResponsivePortraitImg
            variants={photoAnim}
            src={CMScatalogpage}
            alt="catalog page"
          />
          <Description>
            <TagsWrapper>
              <Tag>Ruby on Rails</Tag>
              <Tag>Design System</Tag>
              <Tag>Figma</Tag>
            </TagsWrapper>
            <div class="details-wrapper">
              <p>
              {t('projects.ecommerce.description')}
              </p>
            </div>
            <ButtonWrapper>
              <a href="https://www.sowxp.co.jp/catalogs/537" target="_blank" rel="noopener noreferrer">
                <motion.button className="primary-button" variants={fade}>
                  {t('projects.ecommerce.button')}
                </motion.button>
              </a>
            </ButtonWrapper>
          </Description>
        </RowWrapper>
      </Project>
      <Project>
        <motion.h2 variants={fade}>{t('projects.keigoify.title')}</motion.h2>
        <motion.h3 variants={fade}>{t('projects.keigoify.role')}</motion.h3>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <RowWrapper>
          <ResponsiveVideo
            src={keigoifyvideo}
            controls
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop
          >
            {" "}
            Keigoify video not able to load.
          </ResponsiveVideo>
          <Description>
            <TagsWrapper>
              <Tag>React</Tag>
              <Tag>TypeScript</Tag>
              <Tag>Styled Components</Tag>
              <Tag>OpenAI API</Tag>
            </TagsWrapper>
            <div class="details-wrapper">
              <p>
                {t('projects.keigoify.description')}
              </p>
            </div>
            <ButtonWrapper>
              <a href="https://keigoify.netlify.app/" target="_blank" rel="noopener noreferrer">
                <motion.button className="primary-button" variants={fade}>
                  {t('projects.keigoify.button')}
                </motion.button>
              </a>
            </ButtonWrapper>
          </Description>
        </RowWrapper>
      </Project>
      {/* <Project>
        <motion.h2 variants={fade}>Atomic Design System</motion.h2>
        <motion.h3 variants={fade}>Role: Co-lead</motion.h3>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <RowWrapper>
          <ResponsivePortraitImg
            variants={photoAnim}
            src={designsystem}
            alt="Figma design system"
          />
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
        </RowWrapper>
      </Project> */}
      <Project>
      <motion.h2 variants={fade}>{t('projects.dashboard.title')}</motion.h2>
        <motion.h3 variants={fade}>{t('projects.dashboard.role')}</motion.h3>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <RowWrapper>
          <ResponsivePortraitImg
            variants={photoAnim}
            src={sowlogo}
            alt="Sow Experience Site Logo"
          />
          <Description>
            <TagsWrapper>
              <Tag>Tailwind CSS</Tag>
              <Tag>JavaScript</Tag>
              <Tag>Ruby on Rails</Tag>
              <Tag>Design System</Tag>
              <Tag>Figma</Tag>
            </TagsWrapper>
            <div class="details-wrapper">
              <p>
                {t('projects.dashboard.description')}
              </p>
            </div>
          </Description>
        </RowWrapper>
      </Project>
      <Project>
        <motion.h2 variants={fade}>{t('projects.corporate.title')}</motion.h2>
        <motion.h3 variants={fade}>{t('projects.corporate.role')}</motion.h3>
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
                {t('projects.corporate.description')}
              </p>
            </div>
            <ButtonWrapper>
              <a href="https://evolany.com/" target="_blank" rel="noopener noreferrer">
                <motion.button className="primary-button" variants={fade}>
                  {t('projects.corporate.button')}
                </motion.button>
              </a>
            </ButtonWrapper>
          </Description>
        </RowWrapper>
      </Project>
      <Project>
        <motion.h2 variants={fade}>{t('projects.tiedy.title')}</motion.h2>
        <motion.h3 variants={fade}>{t('projects.tiedy.role')}</motion.h3>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <RowWrapper>
          <Description>
            <ResponsiveImg
              variants={photoAnim}
              src={tiedy}
              alt="screenshot of Tiedy contact manager page"
            />
            <TagsWrapper>
              <Tag>React</Tag>
              <Tag>Rest Apis</Tag>
              <Tag>Lua</Tag>
              <Tag>Docker</Tag>
            </TagsWrapper>
            <div class="details-wrapper">
              <p>
                {t('projects.tiedy.description')}
              </p>
            </div>
            <ButtonWrapper>
              <a href="https://tiedy.co/" target="_blank" rel="noopener noreferrer">
                <motion.button className="primary-button" variants={fade}>
                  {t('projects.tiedy.button')}
                </motion.button>
              </a>
            </ButtonWrapper>
          </Description>
        </RowWrapper>
      </Project>
      {/* <Project>
        <motion.h2 variants={fade}>Imeji Photo Gallery</motion.h2>
        <motion.h3 variants={fade}>Personal Project</motion.h3>
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

const ResponsiveVideo = styled(motion.video)`
  width: 28%;
  object-fit: cover;
  border-radius: 0.8rem;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;


export default MyWork;
