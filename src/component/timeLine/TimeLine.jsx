import React from 'react';
import './TimeLine.css';
import user from '../Images/TimeLine/user.png'
import achivement from '../Images/TimeLine/achivements.png'
import education from '../Images/TimeLine/education.png'
import experience from '../Images/TimeLine/experience.png'
import { NavLink } from 'react-router-dom';

const TimeLine = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-item">
        <NavLink to="/profile">
        <div className="timeline-item-header">
          <h3>Personal Details</h3>
        </div>
          <div className="timeline-item-content">
          <img src={user} alt="User Icon" />
        </div>
        </NavLink>
      </div>
      <div className="timeline-item">
        <NavLink to="/education">
        <div className="timeline-item-header">
          <h3>Education Details</h3>
        </div>
        <div className="timeline-item-content">
          <img src={education} alt="Education Icon" />
        </div>
        </NavLink>
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
