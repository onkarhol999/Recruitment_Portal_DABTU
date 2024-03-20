import React from 'react' //eslint-disable-line no-unused-vars
import './ExperienceDetails.css';
import TimeLine from '../timeLine/TimeLine';
import { NavLink } from 'react-router-dom';

function ExperienceDetails() {
  return (
    <>
    <TimeLine/>
        <div className='experienceDetailForm'>
            <div className="From">
                <h3 id='tabName'>Teaching Experience</h3>
                <form className='form'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputInstitution" className="form-label">Institution / Organization</label>
                                <input type="text" className="form-control" id="inputInstitution" placeholder='Experience in Institution / Organization'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputPosition" className="form-label">Select Your Position</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="AsPf">Asst. Professor</option>
                                    <option value="AsPfSeniorScale">Asst. Professor Senior Scale</option>
                                    <option value="AsPfSelectionGrade">Asst. Professor Selection Grade</option>
                                    <option value="AssoPf">Asso. Professor</option>
                                    <option value="prof">Professor</option>
                                </select>
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputPassingYear" className="form-label">Period of Appointment</label>
                                <div className="FTDateDiv">
                                <label htmlFor="InputPassingYear" className="form-label">From</label>
                                <input type="date" className="form-control FTDate" id="inputFromDate" placeholder='From'/>
                                <label htmlFor="InputPassingYear" className="form-label">To</label>
                                <input type="date" className="form-control FTDate" id="inputRoDate" placeholder='To'/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <div className="mb-3 ">
                                <label htmlFor="InputAppointment" className="form-label">Nature of Appointment</label><br />
                                <div className="form-check">
                                <input className="form-check-input " type="radio" name="NOA" id="flexRadioDefault1"/>
                                <label className="form-check-label mx-2" htmlFor="flexRadioDefault1">
                                    Permanent / Regular
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="NOA" id="flexRadioDefault2"/>
                                <label className="form-check-label mx-2" htmlFor="flexRadioDefault2">
                                    Contractual / Temperary
                                </label>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="customFile">Total Experience</label>
                                <input type="number" className="form-control" id="TotalExp" placeholder='number of years of Experience you have'/>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <button type="submit" className="btn btn-primary saveBtn">Save and Add Next</button>
                </form>
            </div>
            <div className="From">
                <h3 id='tabName'>Administrative Experience</h3>
                <form className='form'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputInstitution" className="form-label">Institution / Organization</label>
                                <input type="text" className="form-control" id="inputInstitution" placeholder='Experience in Institution / Organization'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputPosition" className="form-label">Select Your Position</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="Head">Head</option>
                                    <option value="Dean">Dean</option>
                                    <option value="Registrar">Registrar</option>
                                    <option value="other">Other</option>
                                </select>
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputPassingYear" className="form-label">Period of Appointment</label>
                                <div className="FTDateDiv">
                                <label htmlFor="InputPassingYear" className="form-label">From</label>
                                <input type="date" className="form-control FTDate" id="inputFromDate" placeholder='From'/>
                                <label htmlFor="InputPassingYear" className="form-label">To</label>
                                <input type="date" className="form-control FTDate" id="inputRoDate" placeholder='To'/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3 ">
                                <label htmlFor="InputAppointment" className="form-label">Nature of Appointment</label><br />
                                <div className="form-check">
                                <input className="form-check-input " type="radio" name="NOA" id="flexRadioDefault1"/>
                                <label className="form-check-label mx-2" htmlFor="flexRadioDefault1">
                                    Permanent / Regular
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="NOA" id="flexRadioDefault2"/>
                                <label className="form-check-label mx-2" htmlFor="flexRadioDefault2">
                                    Contractual / Temperary
                                </label>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="customFile">Total Experience</label>
                                <input type="number" className="form-control" id="TotalExp" placeholder='number of years of Experience you have'/>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <button type="submit" className="btn btn-primary saveBtn">Save and Add Next</button>
                </form>
            </div>
        </div> 
            <div className="saveBtnDiv">
                <NavLink to="/achievement">
                <button type="submit" className="btn btn-primary saveBtn1">Submit and Next</button>    
                </NavLink>
            </div>
    </>
  )
}

export default ExperienceDetails
