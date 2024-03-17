import React from 'react';
import './Header.css'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <>
      
      {/* Top Section */}
      <div className="headerContainer">
        <img className="dbatuLogo" src="https://dbatu.ac.in/wp-content/uploads/2022/12/cropped-OQSD-Wtj.jpeg" alt="College Logo" />
        <div className="topcontainer">
              <div className="Title">
                <p className="clgName">Dr. Babasaheb Ambedkar Technological University</p> 
                <p className="clgName">डॉ. बाबासाहेब आंबेडकर तंत्रशास्त्र विद्यापीठ</p>
                <p className="clgAddress">Lonere-402103, Tal-Mangaon, Dist-Raigad (M.S.) India</p>
                <p className="clgSiteTitle">Recruitment Portal</p>
              </div>
        </div>
      </div>
      
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Explore Menu</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link navBtn">
                           Home
              </NavLink>
              </li>
              <li className="nav-item">
                 <NavLink to="/profile" className="nav-link navBtn"> 
                     Profile
                </NavLink> 
              </li>
              <li className="nav-item">
                <a className="nav-link navBtn" href="#">Job Application</a>
              </li>

              <li className="nav-item">
                <a className="nav-link navBtn" href="#">My Applied Post</a>
              </li>
            </ul>
            <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link navBtn" href="#">userName </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </nav>
      </>
    </header>
  );
};

export default Header;
