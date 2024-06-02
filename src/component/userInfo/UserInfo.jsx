import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDetails = () => {
  const [userData, setUserData] = useState({
    personalDetails: {},
    educationDetails: {},
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

  return (
    <div>
      <h1>User Details</h1>
      <section>
        <h2>Personal Details</h2>
        <p>Full Name: {userData.personalDetails?.fullName || 'N/A'}</p>
        <p>Email: {userData.personalDetails?.email || 'N/A'}</p>
        <p>Mobile Number: {userData.personalDetails?.mobileNumber || 'N/A'}</p>
        {/* Add more personal details as needed */}
      </section>
      <section>
        <h2>Education Details</h2>
        <p>Highest Qualification: {userData.educationDetails?.highestQualification || 'N/A'}</p>
        <p>University: {userData.educationDetails?.university || 'N/A'}</p>
        <p>Year of Passing: {userData.educationDetails?.yearOfPassing || 'N/A'}</p>
        {/* Add more education details as needed */}
      </section>
      <section>
        <h2>Achievements</h2>
        <p>Research Papers: {userData.achievements?.researchPapers?.join(', ') || 'N/A'}</p>
        <p>Project Summary: {userData.achievements?.projectSummary || 'N/A'}</p>
        <p>Project Link: {userData.achievements?.projectLink ? (
          <a href={userData.achievements.projectLink} target="_blank" rel="noopener noreferrer">
            {userData.achievements.projectLink}
          </a>
        ) : 'N/A'}</p>
      </section>
      <section>
        <h2>Teaching Experience</h2>
        {userData.teachingExperience.length > 0 ? (
          userData.teachingExperience.map((exp, index) => (
            <div key={index}>
              <p>Institution: {exp.institution}</p>
              <p>Position: {exp.position}</p>
              <p>From: {new Date(exp.fromDate).toLocaleDateString()}</p>
              <p>To: {new Date(exp.toDate).toLocaleDateString()}</p>
              {/* Add more teaching experience details as needed */}
            </div>
          ))
        ) : (
          <p>No teaching experience available</p>
        )}
      </section>
      <section>
        <h2>Administrative Experience</h2>
        {userData.administrativeExperience.length > 0 ? (
          userData.administrativeExperience.map((exp, index) => (
            <div key={index}>
              <p>Institution: {exp.institution}</p>
              <p>Position: {exp.position}</p>
              <p>From: {new Date(exp.fromDate).toLocaleDateString()}</p>
              <p>To: {new Date(exp.toDate).toLocaleDateString()}</p>
              {/* Add more administrative experience details as needed */}
            </div>
          ))
        ) : (
          <p>No administrative experience available</p>
        )}
      </section>
    </div>
  );
};

export default UserDetails;
