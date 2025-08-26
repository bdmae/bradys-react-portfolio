import React from 'react';

//styles
import styled from 'styled-components';
import { About, Description, RowWrapper, TagsWrapper } from '../styles';

//scroll anim
import { scrollReveal } from "../animation";
import { useScroll } from './useScroll';
import Tag from './Tag';

//i18n
import { useTranslation } from 'react-i18next';

//the view is saying true when you scroll.
// we can specify WHEN something is true, we can do that with threshold
// if we set it to 0.5, we're setting it half way down the frame
// so we're saying if our elements are in view, start the animation - if not, hide
const SkillsSection = () => {
   const { t } = useTranslation();

   const [element, controls] = useScroll();
  return (
    <Skills
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <Cards>
          <Card>
            <div className="title-wrapper">
              <i class="ph ph-gear"></i>
              <h3>{t('skills.title')}</h3>
            </div>
            <div className="skills-wrapper">
              <RowWrapper class="frontend">
                <div class="subtitle-wrapper">
                  <h3>Frontend</h3>
                </div>
                <TagsWrapper isLandingPage={true}>
                  <Tag>Typescript</Tag>
                  <Tag>JavaScript</Tag>
                  <Tag>React</Tag>
                  <Tag>Vue</Tag>
                  <Tag>Styled Components</Tag>
                  <Tag>Tailwind CSS</Tag>
                  <Tag>Figma</Tag>
                  <Tag>Webflow</Tag>
                </TagsWrapper>
              </RowWrapper>
              <RowWrapper class="backend">
                <div class="subtitle-wrapper">
                  <h3>Backend</h3>
                </div>
                <TagsWrapper isLandingPage={true}>
                  <Tag>Ruby on Rails</Tag>
                  <Tag>Python</Tag>
                  <Tag>PHP</Tag>
                  <Tag>MySQL</Tag>
                  <Tag>PostgreSQL</Tag>
                </TagsWrapper>
              </RowWrapper>
              <RowWrapper class="devops">
                <div class="subtitle-wrapper">
                  <h3>DevOps</h3>
                </div>
                <TagsWrapper isLandingPage={true}>
                  <Tag>GitHub</Tag>
                  <Tag>Git</Tag>
                  <Tag>AWS</Tag>
                  <Tag>CircleCI</Tag>
                  <Tag>Docker</Tag>
                  <Tag>Sentry.io</Tag>
                </TagsWrapper>
              </RowWrapper>
              <RowWrapper class="other">
                <div class="subtitle-wrapper">
                  <h3>Testing</h3>
                </div>
                <TagsWrapper isLandingPage={true}>
                  <Tag>Rspec</Tag>
                  <Tag>Vitest</Tag>
                  <Tag>Cucumber (Gherkin)</Tag>
                  <Tag>Selinium WebDriver</Tag>
                </TagsWrapper>
              </RowWrapper>
            </div>
          </Card>
          <Card>
            <div className="title-wrapper">
              <i class="ph ph-house"></i>
              <h3>{t('about.backgroundTitle')}</h3>
            </div>
            <p>
              {t('about.backgroundText')}
            </p>
          </Card>
          <Card>
            <div className="title-wrapper">
              <i class="ph ph-lightbulb"></i>
              <h3>{t('about.goalsTitle')}</h3>
            </div>
            <p>
              {t('about.goalsText')}
            </p>
          </Card>
          <Card>
            <div className="title-wrapper">
              <i class="ph ph-instagram-logo"></i>
              <h3 class="">{t('about.funTitle')}</h3>
            </div>
            <p>
              {t('about.funText_part1')}
              {" "}
              <a
                  href="https://www.instagram.com/suika.snap?igsh=NXpjcXYxN3UzY2Rn&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('about.funText_link_text')}
              </a>
              {" "}
              {t('about.funText_part2')}
            </p>
          </Card>
        </Cards>
      </Description>
    </Skills>
  );
};

const Skills = styled(About)`
  display: block;
  padding: 2rem 2rem;
  text-align: center;

  h1 {
    padding-bottom: 5rem;
  }

  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 50%;
    padding: 2rem 0 4rem 0;

    @media (max-width: 1100px) {
      width: 100%;
      padding: 1rem 0 2rem 0;
      font-size: 1.2rem;
    }
  }

  img {
    width: 40%;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 15rem;
  padding: 2rem;

  .title-wrapper {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 2px;
      padding: 1rem;
      font-size: 2rem;

      @media (max-width: 1100px) {
        padding: 0.4rem;
      }
    }

    i {
      font-size: 4rem;
    }
  }

  .subtitle-wrapper {
    width: 6rem;
    h3 {
      padding: 1rem;
    }

    @media (max-width: 1100px) {
      width: 100%;
    }
  }
`;



export default SkillsSection;
