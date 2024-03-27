import React from 'react' //eslint-disable-line no-unused-vars
import './personalDetails.css'
import user from '../Images/TimeLine/user.png';
import TimeLine from '../timeLine/TimeLine'
import { NavLink } from 'react-router-dom';

function PersonalDetails() {
  return (
    <>
    <TimeLine/>
    <form className='personalDetailForm'>
        <div className="row formComponents">
            <div className="col-md-6">
                <div className="mb-3 imageDisplay">
                    <div className="displayImage">
                        <img src={user} id='userImg' />    
                    </div>
                    <div className="inputImage">
                        <label className="form-label" htmlFor="customFile">Upload Your Photo</label>
                        <input type="file" className="form-control" id="Photo" />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="InputName" className="form-label nameLabel">Full Name</label>
                    <div className="row personalformRow">
                        <div className="col">
                            <input type="text" className="form-control" id="inputLasttName" placeholder='Last Name' required/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" id="inputFirstName" placeholder='First Name' required/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" id="inputMiddleName" placeholder='Middle Name' required/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="InputAddress" className="form-label">Current Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder='Enter your address' required/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder='Enter your Email' required/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="InputAadhar" className="form-label">Aadhar Card Number</label>
                    <input type="text" className="form-control" id="inputAadhar" placeholder="Enter your Aadhar Card Number" maxLength="12" pattern="[0-9]{12}" title="Please enter a valid 12-digit Aadhar card number" required/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="InputNumber" className="form-label">Mobile Number</label>
                    <input type="text" className="form-control" maxLength="10" pattern="[0-9]{10}" id="inputNumber" placeholder="Enter your Mobile Number" required/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="InputDOB" className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" id="inputDOB" placeholder="Select or enter your Date of birth" required/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="InputAge" className="form-label">Age</label>
                    <input type="number" className="form-control" id="inputAge" placeholder="Enter your age" required/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="InputNationality" className="form-label">Nationality</label>
                    <input type="text" className="form-control" id="inputNationality" placeholder="Enter your Nationality" required/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label className="form-label" htmlFor="customFile">Upload Your Nationality Certificate</label>
                    <input type="file" className="form-control" id="nationalityCertificate" required />
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3  radioInput">
                    <label htmlFor="InputGender" className="form-label">Gender</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Female
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Other
                        </label>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3 radioInput">
                    <label htmlFor="InputGender" className="form-label">Martial Status</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="martialStatus" id="flexRadioDefault1"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Single
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="martialStatus" id="flexRadioDefault2"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Married
                        </label>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="Inputcategory" className="form-label">Category</label>
                    <div className="row personalformRow">
                        <div className="col">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Select Category</option>
                                <option value="SC">SC</option>
                                <option value="ST">ST</option>
                                <option value="OBC">OBC</option>
                                <option value="VJNT">VJ</option>
                                <option value="VJNT">NT</option>
                                <option value="SBC">GC</option>
                                <option value="SBC">Other</option>
                            </select>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" id="inputCaste" placeholder="Enter your Caste"/>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label className="form-label" htmlFor="customFile">Upload Your caste certificate / Validity</label>
                    <input type="file" className="form-control" id="casteCertificate" />
                </div>
            </div>
        </div>    
        <NavLink to="/education">
           <button type="submit" className="btn btn-primary saveBtn">Save and Next</button>    
        </NavLink>
    </form>
               
    </>
  )
}

export default PersonalDetails
