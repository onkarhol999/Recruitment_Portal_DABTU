import React from 'react';
import './TimeLine.css';
import user from '../Images/TimeLine/user.png'
import achivement from '../Images/TimeLine/achivements.png'
import education from '../Images/TimeLine/education.png'
import experience from '../Images/TimeLine/experience.png'

const TimeLine = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-item">
        <div className="timeline-item-header">
          <h3>Personal Details</h3>
        </div>
        <div className="timeline-item-content">
          <img src={user} alt="User Icon" />
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-header">
          <h3>Education Details</h3>
        </div>
        <div className="timeline-item-content">
          <img src={education} alt="Education Icon" />
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-header">
          <h3>Experience</h3>
        </div>
        <div className="timeline-item-content">
          <img src={experience} alt="Experience Icon" />
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-item-header">
          <h3>Achievements</h3>
        </div>
        <div className="timeline-item-content">
          <img src={achivement} alt="Achievements Icon" />
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
