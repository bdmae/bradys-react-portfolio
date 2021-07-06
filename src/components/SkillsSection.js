import React from 'react';

// import { faCogs } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SkillsSection = () => {
  return(
    <div className="skills">
      <div className="description">
         <h1>The <span>who</span> and the <span>what</span>.</h1>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <i class="fas fa-history"></i>
              <h3>My background</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
         </div>
         <div className="card">
            <div className="icon">
              {/* <FontAwesomeIcon icon={faCogs} /> */}
              <h3>What I learned</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
         </div>
         <div className="card">
            <div className="icon">
              <i class="fas fa-mug-hot"></i>
              <h3>When I'm not coding..</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
         </div>
         <div className="card">
            <div className="icon">
              <i class="fas fa-lightbulb"></i>
              <h3>My goals</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
         </div>
       </div>

     </div>
   </div>

  );
};

export default SkillsSection;
