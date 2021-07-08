import React from 'react';
import connecpet_homepage from '../img/connecpet_homepage.png';
import eventspage from '../img/eventspage.jpg';
import pranktprankssearch from '../img/pranktprankssearch.png';
import weatherapp from '../img/weatherapp.png';
import heymovielist from '../img/heymovielist.png';

//style
import styled from 'styled-components';
import { About } from '../styles';

const ProjectsSection = () => {
  return(
    <Projects>
      <h2><span>Projects</span> I've been working on</h2>
      <div className="project-title">
        <h4>ConnecPet</h4>
        <p>snapshot description</p>
        <div className="project">
          <p>description of the project</p>
          <img src={connecpet_homepage} alt="connecpet homepage" />
          {/* <img src={eventspage} alt="connecpet events page" /> */}
        </div>
      </div>

      <div className="project-title">
        <h4>Prankt</h4>
        <p>snapshot description</p>
        <div className="project">
          <p>description of the project</p>
          <img src={pranktprankssearch} alt="prank search page" />
        </div>
      </div>

      <div className="project-title">
        <h4>Weather App Geocoding Project</h4>
        <p>snapshot description</p>
        <div className="project">
          <p>description of the project</p>
          <img src={weatherapp} alt="weather app" />
        </div>
      </div>

       <div className="project-title">
        <h4>HeyMovieList</h4>
        <p>snapshot description</p>
        <div className="project">
          <p>description of the project</p>
          <img src={heymovielist} alt="movie list homepage" />
        </div>
      </div>

    </Projects>
  );
};

const Projects = styled(About)`
  display: block;
  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .project-title {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .project {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;


export default ProjectsSection;
