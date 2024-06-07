import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import html2pdf from 'html2pdf.js';
import './UserInfo.css';
import logo from '../Images/logo.png';

const UserDetails = () => {

  // html2pdf
  const pdfRef = useRef();

  const [userData, setUserData] = useState({
    personalDetails: {},
    educationDetails: [],
    achievements: {},
    teachingExperience: [],
    administrativeExperience: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get('http://localhost:5000/getAllDetails', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUserData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to fetch user data');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;


  // pdf download code
  const downloadPDF = () => {
    const element = pdfRef.current;
    const options = {
      margin: [0.5, 0, 0, 0], // Top, right, bottom, left
      filename: 'ApplicationForm.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
  };
  


  return (
    <>
    <div className='mainDiv' ref={pdfRef}>
      
      <section id="Heading">
      <div className="PDFheaderContainer">
        <img className="dbatuLogoPDF" src={logo} alt="College Logo" />
        <div className="topcontainerPDF">
              <div className="Title">
                <p className="clgName">Dr. Babasaheb Ambedkar Technological University</p> 
                <p className="clgName">डॉ. बाबासाहेब आंबेडकर तंत्रशास्त्र विद्यापीठ</p>
                <p className="clgAddress">Lonere-402103, Tal-Mangaon, Dist-Raigad (M.S.) India</p>
                <p className="clgSiteTitle">Recruitment Portal</p>
              </div>
        </div>
      </div>
      </section>

      <section id='Photo'>
        <div className="row headerRow">
        <div className="col">
          <p>Online payment details:-</p>
          <p>Reserved Category Rs. 500/ and Other Rs. 1000/</p>
          <p>UTR No.:</p>
          <p>Amount Paid.:</p>
        </div>
        <div className="photosection col">
          Your photo Here
        </div>
        </div>
      </section>
      <section id="letterFormat">
        <p>To,</p>
        <p>The Registrar,</p>
        <p>Dr. Babasaheb Ambedkar Technological University,</p>
        <p>Lonere, Mangaon,</p>
        <p>Raigad 402103</p>
        <p className='SubjectFormat'>sub:-</p>
      </section>

      <section id='Details'>
        <div className="headings">
          <h2>Personal Details</h2>
        </div>
        <table className='horizontal-table'>
          <tr>
            <th>Full Name: </th>
            <td>{userData.personalDetails?.fullName || 'N/A'}</td>
          </tr>
          <tr>
            <th>Email: </th>
            <td>{userData.personalDetails?.email || 'N/A'}</td>
          </tr>
          <tr>
            <th>Mobile Number: </th>
            <td>{userData.personalDetails?.mobileNumber || 'N/A'}</td>
          </tr>
          <tr>
            <th>Current Address: </th>
            <td>{userData.personalDetails?.currentAddress || 'N/A'}</td>
          </tr>
          <tr>
            <th>Aadhar Card Number: </th>
            <td>{userData.personalDetails?.adharCardNumber || 'N/A'}</td>
          </tr>
          <tr>
            <th>DOB:</th>
            <td>{new Date(userData.personalDetails?.dob).toLocaleDateString() || 'N/A'}</td>
          </tr>
          <tr>
            <th>Age: </th>
            <td>{userData.personalDetails?.age || 'N/A'}</td>
          </tr>
          <tr>
            <th>Nationality: </th>
            <td>{userData.personalDetails?.nationality || 'N/A'}</td>
          </tr>
          <tr>
            <th>Religion: </th>
            <td>{userData.personalDetails?.religion || 'N/A'}</td>
          </tr>
          <tr>
            <th>Gender: </th>
            <td>{userData.personalDetails?.gender || 'N/A'}</td>
          </tr>
          <tr>
            <th>Marital Status: </th>
            <td>{userData.personalDetails?.maritalStatus || 'N/A'}</td>
          </tr>
          <tr>
            <th>Category:</th>
            <td>{userData.personalDetails?.category || 'N/A'}</td>
          </tr>
        </table>
      </section>

      <section id='Details'>
        <div className="headings">
        <h2>Education Details</h2>
        </div>

        {userData.educationDetails.length > 0 ? (
          <table className="data-table">
            <thead>
              <tr>
                <th>Highest Qualification</th>
                <th>University</th>
                <th>Year of Passing</th>
                <th>Percentage</th>
                <th>Additional Courses / Specialty</th>
              </tr>
            </thead>
            <tbody>
              {userData.educationDetails.map((edu, index) => (
                <tr key={index}>
                  <td>{edu.highestQualification}</td>
                  <td>{edu.university}</td>
                  <td>{edu.yearOfPassing}</td>
                  <td>{edu.percentage}</td>
                  <td>{edu?.additionalCourses || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No education details available</p>
        )}
      </section>

      <section  id='Details'>
        <div className="headings">

        <h2>Teaching Experience</h2>
        </div>
        {userData.teachingExperience.length > 0 ? (
          <table className="data-table">
            <thead>
              <tr>
                <th>Institution</th>
                <th>Position</th>
                <th>From</th>
                <th>To</th>
                <th>Nature of Appointment</th>
                <th>Total Experience</th>
              </tr>
            </thead>
            <tbody>
            {userData.teachingExperience.map((exp, index) => (
              <tr key={index}>
                <td>{exp.institution}</td>
                <td>{exp.position}</td>
                <td>{new Date(exp.fromDate).toLocaleDateString()}</td>
                <td>{new Date(exp.toDate).toLocaleDateString()}</td>
                <td>{exp.natureOfAppointment}</td>
                <td>{exp.totalExperience} years</td>
              </tr>
            ))}
            </tbody>
          </table>
        ) : (
          <p>No teaching experience available</p>
        )}
      </section>

      <section id='Details'>
        <div className="headings">
        <h2>Administrative Experience</h2>
        </div>
        {userData.administrativeExperience.length > 0 ? (
          <table className="data-table">
            <thead>
              <tr>
                  <th>Institution</th>
                  <th>Position</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Nature of Appointment</th>
                  <th>Total Experience</th>
                </tr>
            </thead>
            <tbody>
            {userData.administrativeExperience.map((exp, index) => (
              <tr key={index}>
                <td>{exp.institution}</td>
                <td>{exp.position}</td>
                <td>{new Date(exp.fromDate).toLocaleDateString()}</td>
                <td>{new Date(exp.toDate).toLocaleDateString()}</td>
                <td>{exp.natureOfAppointment}</td>
                <td>{exp.totalExperience} years</td>
              </tr>
            ))}
            </tbody>
          </table>
        ) : (
          <p>No administrative experience available</p>
        )}
      </section>
    
      <section id='Details'>
        <div className="headings">

        <h2>Achievements</h2>
        </div>
        <table className="horizontal-table">
          <tr>
            <th>Research Papers:</th>
            <td>{userData.achievements?.researchPapers?.length > 0 ? (
            userData.achievements.researchPapers.map((paper, index) => (
              <div key={index}>
                <a href={paper} target="_blank" rel="noopener noreferrer">{paper}</a>
              </div>
            ))
          ) : 'N/A'}</td>
          </tr>
          <tr>
            <th>Project Summary:</th>
            <td>{userData.achievements?.projectSummary || 'N/A'}</td>
          </tr>
          <tr>
            <th>Project Link:</th>
            <td>{userData.achievements?.projectLink ? (
          <a href={userData.achievements.projectLink} target="_blank" rel="noopener noreferrer">
            {userData.achievements.projectLink}
          </a>
        ) : 'N/A'}</td>
          </tr>
        </table>
      </section>

      <section id='declaration'>
        <p>I hereby declare that all statements made by me in this application are true, complete and correct to the best of my knowledge and belief. I understand that in the event of any information being found false, incomplete or incorrect, my candidature/ appointment is liable to be cancelled/ terminated. I further understand that no notice shall be taken of any request for withdrawal of my application.</p>
        <p>Place:</p>
        <p>Date:</p>
        <br />
        <p className='signatureText'>(Signature of candidate)</p>
      </section>
    
    </div>

    <div className="btncontainer">
        <button className='btn btn-primary saveBtn' onClick={downloadPDF}>Save as pdf</button>
    </div>
    </>
  );
};

export default UserDetails;