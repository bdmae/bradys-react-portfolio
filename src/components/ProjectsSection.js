import React from 'react';
import connecpet_homepage from '../img/connecpet_homepage.png';
import eventspage from '../img/eventspage.jpg';
import pranktprankssearch from '../img/pranktprankssearch.png';
import weatherapp from '../img/weatherapp.png';
import heymovielist from '../img/heymovielist.png';

const ProjectsSection = () => {
  return(
    <div className="projects">
      <h2><span>Projects</span> I've been working on</h2>
      <div className="project-title">
        <h4>ConnecPet</h4>
        <div className="project">
          <p>description of the project</p>
          <img src={connecpet_homepage} alt="connecpet homepage" />
          <img src={eventspage} alt="connecpet events page" />
        </div>
      </div>

      <div className="project-title">
        <h4>Prankt</h4>
        <p></p>
        <div className="project">
          <p>description of the project</p>
          <img src={pranktprankssearch} alt="prank search page" />
        </div>
      </div>

      <div className="project-title">
        <h4>Weather App Geocoding Project</h4>
        <div className="project">
          <p>description of the project</p>
          <img src={weatherapp} alt="weather app" />
        </div>
      </div>

       <div className="project-title">
        <h4>HeyMovieList</h4>
        <div className="project">
          <p>description of the project</p>
          <img src={heymovielist} alt="movie list homepage" />
        </div>
      </div>

    </div>
  )
}

export default ProjectsSection;
