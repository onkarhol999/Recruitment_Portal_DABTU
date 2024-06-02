import React, { useState } from 'react'; //eslint-disable-line no-unused-vars
import './ExperienceDetails.css';
import TimeLine from '../timeLine/TimeLine';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function ExperienceDetails() {
  const [teachingExperience, setTeachingExperience] = useState({
    institution: '',
    position: '',
    fromDate: '',
    toDate: '',
    natureOfAppointment: '',
    totalExperience: 0
  });

  const [administrativeExperience, setAdministrativeExperience] = useState({
    institution: '',
    position: '',
    fromDate: '',
    toDate: '',
    natureOfAppointment: '',
    totalExperience: 0
  });

  const handleTeachingChange = (e) => {
    const { id, value } = e.target;
    setTeachingExperience(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleAdministrativeChange = (e) => {
    const { id, value } = e.target;
    setAdministrativeExperience(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleTeachingSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Assuming you store the JWT token in localStorage

      // Log the form data to check if it is being captured correctly
      console.log('Teaching Experience:', teachingExperience);
      const response = await axios.post('http://localhost:5000/saveTeachingExperience', teachingExperience, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    console.log(response.data.message);
    alert('Education details saved successfully');
      console.log(response.data);
    } catch (error) {
      console.error('Error saving teaching experience:', error);
    }
  };

  const handleAdministrativeSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Assuming you store the JWT token in localStorage

      // Log the form data to check if it is being captured correctly
      console.log('Administrative Experience:', administrativeExperience);

      const response = await axios.post('http://localhost:5000/saveAdministrativeExperience', administrativeExperience, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    console.log(response.data.message);
    alert('Education details saved successfully');
      
      console.log(response.data);
    } catch (error) {
      console.error('Error saving administrative experience:', error);
    }
  };

  return (
    <>
      <TimeLine />
      <div className='experienceDetailForm'>
        <div className="From">
          <h3 id='tabName'>Teaching Experience</h3>
          <form className='form' onSubmit={handleTeachingSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="institution" className="form-label">Institution / Organization</label>
                  <input type="text" className="form-control" id="institution" placeholder='Experience in Institution / Organization' value={teachingExperience.institution} onChange={handleTeachingChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="position" className="form-label">Select Your Position</label>
                  <select className="form-select" id="position" value={teachingExperience.position} onChange={handleTeachingChange}>
                    <option value="" disabled>Open this select menu</option>
                    <option value="Asst. Professor">Asst. Professor</option>
                    <option value="Asst. Professor Senior Scale">Asst. Professor Senior Scale</option>
                    <option value="Asst. Professor Selection Grade">Asst. Professor Selection Grade</option>
                    <option value="Associate Professor">Associate Professor</option>
                    <option value="Professor">Professor</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="fromDate" className="form-label">Period of Appointment</label>
                  <div className="FTDateDiv">
                    <label htmlFor="fromDate" className="form-label">From</label>
                    <input type="date" className="form-control FTDate" id="fromDate" value={teachingExperience.fromDate} onChange={handleTeachingChange} />
                    <label htmlFor="toDate" className="form-label">To</label>
                    <input type="date" className="form-control FTDate" id="toDate" value={teachingExperience.toDate} onChange={handleTeachingChange} />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="natureOfAppointment" className="form-label">Nature of Appointment</label><br />
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="natureOfAppointment" id="natureOfAppointment" value="Permanent / Regular" checked={teachingExperience.natureOfAppointment === 'Permanent / Regular'} onChange={handleTeachingChange} />
                    <label className="form-check-label mx-2" htmlFor="Permanent">
                      Permanent / Regular
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="natureOfAppointment" id="natureOfAppointment" value="Contractual / Temporary" checked={teachingExperience.natureOfAppointment === 'Contractual / Temporary'} onChange={handleTeachingChange} />
                    <label className="form-check-label mx-2" htmlFor="Contractual">
                      Contractual / Temporary
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label" htmlFor="totalExperience">Total Experience</label>
                  <input type="number" className="form-control" id="totalExperience" placeholder='number of years of Experience you have' value={teachingExperience.totalExperience} onChange={handleTeachingChange} />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary saveBtn">Save and Add Next</button>
          </form>
        </div>
        <div className="From">
          <h3 id='tabName'>Administrative Experience</h3>
          <form className='form' onSubmit={handleAdministrativeSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="institution" className="form-label">Institution / Organization</label>
                  <input type="text" className="form-control" id="institution" placeholder='Experience in Institution / Organization' value={administrativeExperience.institution} onChange={handleAdministrativeChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="position" className="form-label">Select Your Position</label>
                  <select className="form-select" id="position" value={administrativeExperience.position} onChange={handleAdministrativeChange}>
                    <option value="" disabled>Open this select menu</option>
                    <option value="Head">Head</option>
                    <option value="Dean">Dean</option>
                    <option value="Registrar">Registrar</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="fromDate" className="form-label">Period of Appointment</label>
                  <div className="FTDateDiv">
                    <label htmlFor="fromDate" className="form-label">From</label>
                    <input type="date" className="form-control FTDate" id="fromDate" value={administrativeExperience.fromDate} onChange={handleAdministrativeChange} />
                    <label htmlFor="toDate" className="form-label">To</label>
                    <input type="date" className="form-control FTDate" id="toDate" value={administrativeExperience.toDate} onChange={handleAdministrativeChange} />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="natureOfAppointment" className="form-label">Nature of Appointment</label><br />
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="natureOfAppointment" id="natureOfAppointment" value="Permanent / Regular" checked={administrativeExperience.natureOfAppointment === 'Permanent / Regular'} onChange={handleAdministrativeChange} />
                    <label className="form-check-label mx-2" htmlFor="Permanent">
                      Permanent / Regular
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="natureOfAppointment" id="natureOfAppointment" value="Contractual / Temporary" checked={administrativeExperience.natureOfAppointment === 'Contractual / Temporary'} onChange={handleAdministrativeChange} />
                    <label className="form-check-label mx-2" htmlFor="Contractual">
                      Contractual / Temporary
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label" htmlFor="totalExperience">Total Experience</label>
                  <input type="number" className="form-control" id="totalExperience" placeholder='number of years of Experience you have' value={administrativeExperience.totalExperience} onChange={handleAdministrativeChange} />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary saveBtn">Save and Add Next</button>
          </form>
        </div>
      </div>
      <div className="saveBtnDiv">
        <NavLink to="/achievement">
          <button type="button" className="btn btn-primary saveBtn1">Submit and Next</button>
        </NavLink>
      </div>
    </>
  );
}

export default ExperienceDetails;
