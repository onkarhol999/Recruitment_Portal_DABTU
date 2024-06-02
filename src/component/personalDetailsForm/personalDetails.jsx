import React, { useState } from 'react';
import axios from 'axios';
import TimeLine from '../timeLine/TimeLine'

function PersonalDetails() {
    const [formData, setFormData] = useState({
        fullName: '',
        currentAddress: '',
        email: '',
        adharCardNumber: '',
        mobileNumber: '',
        dob: '',
        age: '',
        nationality: '',
        religion: '',
        gender: '',
        maritalStatus: '',
        category: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('No token found. Please log in.');
                return;
            }

            await axios.post('http://localhost:5000/savePersonalDetails', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
                                                                                                                                                                                                                                                                                                                   
            alert('Form submitted successfully!');
            // Navigate to the next page
        } catch (error) {
            console.error('There was an error submitting the form!', error);
            alert('Error submitting form');
        }
    };

    return (
        <>
        <TimeLine />
            <form className='personalDetailForm' onSubmit={handleSubmit}>
                <div className="row formComponents">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="inputFullName" className="form-label nameLabel">Full Name</label>
                            <div className="row personalformRow">
                                <div className="col">
                                    <input type="text" className="form-control" id="inputFullName" name="fullName" placeholder='Full Name' value={formData.fullName} onChange={handleChange} required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="inputAddress" className="form-label">Current Address</label>
                            <input type="text" className="form-control" id="inputAddress" name="currentAddress" placeholder='Enter your address' value={formData.currentAddress} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="inputEmail" name="email" placeholder='Enter your Email' value={formData.email} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="inputAadhar" className="form-label">Aadhar Card Number</label>
                            <input type="text" className="form-control" id="inputAadhar" name="adharCardNumber" placeholder="Enter your Aadhar Card Number" maxLength="12" pattern="[0-9]{12}" title="Please enter a valid 12-digit Aadhar card number" value={formData.adharCardNumber} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="inputNumber" className="form-label">Mobile Number</label>
                            <input type="text" className="form-control" maxLength="10" pattern="[0-9]{10}" id="inputNumber" name="mobileNumber" placeholder="Enter your Mobile Number" value={formData.mobileNumber} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="inputDOB" className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" id="inputDOB" name="dob" placeholder="Select or enter your Date of birth" value={formData.dob} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="inputAge" className="form-label">Age</label>
                            <input type="number" className="form-control" id="inputAge" name="age" placeholder="Enter your age" value={formData.age} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <div className="inlineRow">
                                <div className="inlineCol">
                                    <label htmlFor="inputNationality" className="form-label">Nationality</label>
                                    <input type="text" className="form-control" id="inputNationality" name="nationality" placeholder="Enter your Nationality" value={formData.nationality} onChange={handleChange} required />
                                </div>
                                <div className="inlineCol">
                                    <label htmlFor="inputReligion" className="form-label">Religion</label>
                                    <input type="text" className="form-control inlineCol" id="inputReligion" name="religion" placeholder="Enter your Religion" value={formData.religion} onChange={handleChange} required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3 radioInput">
                            <label htmlFor="inputGender" className="form-label">Gender</label>
                            <input type="text" className="form-control" id="inputGender" name="gender" placeholder="Enter your Gender" value={formData.gender} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3 radioInput">
                            <label htmlFor="inputMaritalStatus" className="form-label">Marital Status</label>
                            <input type="text" className="form-control" id="inputMaritalStatus" name="maritalStatus" placeholder="Enter your Marital Status" value={formData.maritalStatus} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="inputCategory" className="form-label">Category</label>
                            <input type="text" className="form-control" id="inputCategory" name="category" placeholder="Enter your Category" value={formData.category} onChange={handleChange} required />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary saveBtn">Save and Next</button>
            </form>
        </>
    );
}

export default PersonalDetails;
