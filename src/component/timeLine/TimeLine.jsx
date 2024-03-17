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
     <div className='time-lineitem-flex'>
        <div className="timeline-item-header"  id='p1'>
          <h3 className='p1'>Personal Details</h3>
        </div>
          <div className="timeline-item-content">
          <img src={user} alt="User Icon" />
        </div>
      </div>
        </NavLink>
      </div>
      <div className="timeline-item">
        <NavLink to="/education">
         <div className='time-lineitem-flex'>
            <div className="timeline-item-header"  id='p2'>
              <h3 className='p1'>Education Details</h3>
            </div>
            <div className="timeline-item-content">
              <img src={education} alt="Education Icon" />
            </div>
         </div>
       </NavLink>
     </div>
      <div className="timeline-item">
        <NavLink to="/experience">
          <div className='time-lineitem-flex'>
            <div className="timeline-item-header"  id='p3'>
              <h3 className='p1'>Experience</h3>
            </div>
            <div className="timeline-item-content">
              <img src={experience} alt="Experience Icon" />
            </div>
          </div>
       
        </NavLink>
        
      </div>
      <div className="timeline-item">
        <NavLink to="/achievement">
          <div className='time-lineitem-flex'>
            <div className="timeline-item-header" id='p4'>
              <h3 className='p1'>Achievements</h3>
            </div>
            <div className="timeline-item-content">
              <img src={achivement} alt="Achievements Icon" />
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default TimeLine;
