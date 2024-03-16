import React from 'react';
import './TimeLine.css';
import user from '../Images/user.png'

const TimeLine = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-item">
      <div className="timeline-item-header">
            <h3>Personal Details</h3>
          </div>
        <div className="timeline-item-content">
        
          <img src = {user} />
          
        </div>
      </div>
      <div className="timeline-item">
      <div className="timeline-item-header">
            <h3>Education Details</h3>
          </div>
        <div className="timeline-item-content">
        
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0amZ6JYcXM__iA-qeenidfFtXyfeIPaZMw&s" alt="Education Icon" />
        </div>
      </div>
      <div className="timeline-item">
       <div className="timeline-item-header">
            <h3>Experience</h3>
          </div>
        <div className="timeline-item-content">
      
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0amZ6JYcXM__iA-qeenidfFtXyfeIPaZMw&s" alt="Experience Icon" />
          
        </div>
      </div>
      <div className="timeline-item">
      <div className="timeline-item-header">
            <h3>Achievements</h3>
          </div>
        <div className="timeline-item-content">
        
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0amZ6JYcXM__iA-qeenidfFtXyfeIPaZMw&s" alt="Achievements Icon" />
          
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
