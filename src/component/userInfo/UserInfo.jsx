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
    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        // Get the JWT token from local storage or any storage solution you're using
        const token = localStorage.getItem('token');

        // Set the Authorization header with the JWT token
        const response = await axios.get('http://localhost:5000/getAllDetails', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        // Update the state with the fetched data
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
        <p>Full Name: {userData.personalDetails.fullName}</p>
        <p>Email: {userData.personalDetails.email}</p>
        <p>Mobile Number: {userData.personalDetails.mobileNumber}</p>
        {/* Add more personal details as needed */}
      </section>
      <section>
        <h2>Education Details</h2>
        <p>Highest Qualification: {userData.educationDetails.highestQualification}</p>
        <p>University: {userData.educationDetails.university}</p>
        <p>Year of Passing: {userData.educationDetails.yearOfPassing}</p>
        {/* Add more education details as needed */}
      </section>
      <section>
        <h2>Achievements</h2>
        <p>Research Papers: {userData.achievements.researchPapers?.join(', ')}</p>
        <p>Project Summary: {userData.achievements.projectSummary}</p>
        <p>Project Link: <a href={userData.achievements.projectLink} target="_blank" rel="noopener noreferrer">{userData.achievements.projectLink}</a></p>
      </section>
      <section>
        <h2>Teaching Experience</h2>
        {userData.teachingExperience.map((exp, index) => (
          <div key={index}>
            <p>Institution: {exp.institution}</p>
            <p>Position: {exp.position}</p>
            <p>From: {new Date(exp.fromDate).toLocaleDateString()}</p>
            <p>To: {new Date(exp.toDate).toLocaleDateString()}</p>
            {/* Add more teaching experience details as needed */}
          </div>
        ))}
      </section>
      <section>
        <h2>Administrative Experience</h2>
        {userData.administrativeExperience.map((exp, index) => (
          <div key={index}>
            <p>Institution: {exp.institution}</p>
            <p>Position: {exp.position}</p>
            <p>From: {new Date(exp.fromDate).toLocaleDateString()}</p>
            <p>To: {new Date(exp.toDate).toLocaleDateString()}</p>
            {/* Add more administrative experience details as needed */}
          </div>
        ))}
      </section>
    </div>
  );
};

export default UserDetails;
