import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header>
      {/* Top Section */}
      <div className="headerContainer">
        <img className="dbatuLogo" src="https://dbatu.ac.in/wp-content/uploads/2022/12/cropped-OQSD-Wtj.jpeg" alt="College Logo" />
        <div className="topcontainer">
              <div className="Title">
                <p className="">Dr. Babasaheb Ambedkar Technological University</p> 
                <p className="">डॉ. बाबासाहेब आंबेडकर तंत्रशास्त्र विद्यापीठ</p>
                <p className="">Lonere-402103, Tal-Mangaon, Dist-Raigad (M.S.) India</p>
                <p className="">Recruitment Portal</p>
              </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
