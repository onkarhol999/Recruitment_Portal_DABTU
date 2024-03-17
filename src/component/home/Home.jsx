import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
// import PersonalDetails from '../personalDetailsForm/PersonalDetails'

function Home() {
  return (
    <>     
    {/* <PersonalDetails/> */}
    {/* Section one */}
        <div className="container-md-12">
        <div className="row">
        <div className="col-md-3 col3">
      <div className="text-center max-w-96 mt-4 ml-4">
        <section className="custom-section">
          <div className="custom-bg w-full">
            <h1 className="custom-title">Current Job Positions</h1>
          </div>
          <ul className="custom-list">
            <li className="mb-4">
              <a
                href="/job-details/software-engineer"
                className="custom-link"
              >
                Software Engineer
              </a>
            </li>
            <li className="mb-4">
              <a
                href="/job-details/data-analyst"
                className="custom-link"
              >
                Data Analyst
              </a>
            </li>
            <li className="mb-4">
              <a
                href="/job-details/teacher"
                className="custom-link"
              >
                Teaching Faculty
              </a>
            </li>
            <li className="mb-4">
              <a
                href="/job-details/teacher"
                className="custom-link"
              >
                Teaching Faculty
              </a>
            </li>
            <li className="mb-4">
              <a
                href="/job-details/teacher"
                className="custom-link"
              >
                Teaching Faculty
              </a>
            </li>
            <li className="mb-4">
              <a
                href="/job-details/teacher"
                className="custom-link"
              >
                Teaching Faculty
              </a>
            </li>
            <li className="mb-4">
              <a
                href="/job-details/teacher"
                className="custom-link"
              >
                Teaching Faculty
              </a>
            </li>
            {/* Add more job positions as needed */}
          </ul>
        </section>
      </div>
    </div>
           
            {/* section two */}
     <div className="col-md-5 col2">
      <div className="text-center max-w-2xl flex-1">
        <section className="custom-section">
          <div className="mb-8">
            <img
              className="custom-image"
              src="https://dbatu.ac.in/wp-content/uploads/2023/08/dbatu1-1-1024x305-1.png"
              alt="College Image"
            />
          </div>
          <div className="text-center mb-4 ">
            <p className="custom-title WelCome">Welcome to Our College!</p>
            <p className="custom-text">
              <b className='custom-subtitle'>Vision </b> <br />
              "The University is committed to become a leading 'Center of Excellence' in the field of Engineering, Technology and Science as a seat of learning with a national character and international outlook." <br />
              <b className='custom-subtitle'>Mission </b> <br />
              "The University is committed to provide quality technical education, research and development services to meet the needs of industry, business, service sector and society, at large."
            </p>
          </div>
        </section>
        <NavLink to="/profile">
        <button className="btn btn-primary btn-lg mt-4" onClick={() => {}}>
          Apply Now
        </button>
        </NavLink>
      </div>
      </div>
    {/* Section */}
    <div className="col-md-3 col1">
            <div className="rounded h-200px max-w-96 mr-4 ml-4 mt-4">
      <section className="transition duration-300 transform hover:scale-105 bg-blue-100 rounded-md p-8">
        <div className='bg-blue-300 w-full'>
          <h1 className="custom-title Explore">Explore Our Departments</h1>
        </div>

        {/* Department Links */}
        <div className="row justify-content-center">
          <div className="col">
            <a href="/departments/computer" className="department-link">
              <div className="department-card">
                <p>Computer Engineering</p>
              </div>
            </a>
            <a href="/departments/computer" className="department-link">
              <div className="department-card">
                <p>Computer Engineering</p>
              </div>
            </a>
            <a href="/departments/computer" className="department-link">
              <div className="department-card">
                <p>Computer Engineering</p>
              </div>
            </a>
            <a href="/departments/computer" className="department-link">
              <div className="department-card">
                <p>Computer Engineering</p>
              </div>
            </a>
            <a href="/departments/computer" className="department-link">
              <div className="department-card">
                <p>Computer Engineering</p>
              </div>
            </a>
            <a href="/departments/computer" className="department-link">
              <div className="department-card">
                <p>Computer Engineering</p>
              </div>
            </a>
          </div>

          {/* Other department links */}
        </div>
      </section>
    </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Home
