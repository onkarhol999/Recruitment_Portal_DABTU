import React, { useState } from 'react';
import './EducationalDetails.css';
import TimeLine from '../timeLine/TimeLine';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function EducationalDetails() {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState('01');
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= currentYear - 100; year--) {
        years.push(year);
    }

    const handleYearChange = (e) => {
        setSelectedYear(parseInt(e.target.value));
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    const initialFormState = {
        highestQualification: '',
        university: '',
        percentage: '',
        additionalCourses: '',
    };

    const [sscDetails, setSscDetails] = useState(initialFormState);
    const [hscDetails, setHscDetails] = useState(initialFormState);
    const [graduationDetails, setGraduationDetails] = useState(initialFormState);
    const [postgraduationDetails, setPostgraduationDetails] = useState(initialFormState);
    const [phdDetails, setphdDetails] = useState(initialFormState);

    const handleInputChange = (e, setDetails) => {
        const { id, value } = e.target;
        setDetails(prevDetails => ({ ...prevDetails, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const educationDetails = {
            ...sscDetails,
            yearOfPassing: `${selectedYear}-${selectedMonth}`,
        };

        try {
            const token = localStorage.getItem('token');
            console.log('Education Details:', educationDetails);
            const response = await axios.post('http://localhost:5000/saveSSCEducationDetails', educationDetails, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response.data.message);
            alert('Education details saved successfully');
        } catch (error) {
            console.error('Error saving education details:', error.response ? error.response.data : error.message);
            alert(`Error saving education details: ${error.response ? error.response.data : error.message}`);
        }
    };

    const handleSubmitHSC = async (e) => {
        e.preventDefault();
        const educationDetails = {
            ...hscDetails,
            yearOfPassing: `${selectedYear}-${selectedMonth}`,
        };

        try {
            const token = localStorage.getItem('token');
            console.log('Education Details:', educationDetails);
            const response = await axios.post('http://localhost:5000/saveHSCEducationDetails', educationDetails, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response.data.message);
            alert('Education details saved successfully');
        } catch (error) {
            console.error('Error saving education details:', error.response ? error.response.data : error.message);
            alert(`Error saving education details: ${error.response ? error.response.data : error.message}`);
        }
    };

    const handleSubmitGraduation = async (e) => {
        e.preventDefault();
        const educationDetails = {
            ...graduationDetails,
            yearOfPassing: `${selectedYear}-${selectedMonth}`,
        };

        try {
            const token = localStorage.getItem('token');
            console.log('Education Details:', educationDetails);
            const response = await axios.post('http://localhost:5000/saveGraduationEducationDetails', educationDetails, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response.data.message);
            alert('Education details saved successfully');
        } catch (error) {
            console.error('Error saving education details:', error.response ? error.response.data : error.message);
            alert(`Error saving education details: ${error.response ? error.response.data : error.message}`);
        }
    };

    const handleSubmitPostGraduation = async (e) => {
        e.preventDefault();
        const educationDetails = {
            ...postgraduationDetails,
            yearOfPassing: `${selectedYear}-${selectedMonth}`,
        };

        try {
            const token = localStorage.getItem('token');
            console.log('Education Details:', educationDetails);
            const response = await axios.post('http://localhost:5000/savePostGraduationEducationDetails', educationDetails, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response.data.message);
            alert('Education details saved successfully');
        } catch (error) {
            console.error('Error saving education details:', error.response ? error.response.data : error.message);
            alert(`Error saving education details: ${error.response ? error.response.data : error.message}`);
        }
    };

    const handleSubmitPhd = async (e) => {
        e.preventDefault();
        const educationDetails = {
            ...phdDetails,
            yearOfPassing: `${selectedYear}-${selectedMonth}`,
        };

        try {
            const token = localStorage.getItem('token');
            console.log('Education Details:', educationDetails);
            const response = await axios.post('http://localhost:5000/savePhDEducationDetails', educationDetails, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response.data.message);
            alert('Education details saved successfully');
        } catch (error) {
            console.error('Error saving education details:', error.response ? error.response.data : error.message);
            alert(`Error saving education details: ${error.response ? error.response.data : error.message}`);
        }
    };

    return (
        <>
            <TimeLine />
            <div className='educationalDetailForm'>
                <form className='form' onSubmit={handleSubmit}>
                    <div className="From">
                        <h3 id='tabName'>SSC</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="highestQualification" className="form-label">Highest Qualification</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="highestQualification"
                                        value={sscDetails.highestQualification}
                                        onChange={(e) => handleInputChange(e, setSscDetails)}
                                        placeholder='Enter your highest qualification'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="university" className="form-label">University / Board</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="university"
                                        value={sscDetails.university}
                                        onChange={(e) => handleInputChange(e, setSscDetails)}
                                        placeholder='Enter Name of Your University'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="passingYear" className="form-label">Month and year of passing</label>
                                    <div className="passingYearMonthDiv">
                                        <select id="month" className='form-select passingYNM' value={selectedMonth} onChange={handleMonthChange} name="month">
                                            <option value="01">January</option>
                                            <option value="02">February</option>
                                            <option value="03">March</option>
                                            <option value="04">April</option>
                                            <option value="05">May</option>
                                            <option value="06">June</option>
                                            <option value="07">July</option>
                                            <option value="08">August</option>
                                            <option value="09">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </select>
                                        <select id="year" className='form-control passingYNM' name="year" value={selectedYear} onChange={handleYearChange}>
                                            {years.map((year) => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="percentage" className="form-label">Percentage and marks obtained</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="percentage"
                                        value={sscDetails.percentage}
                                        onChange={(e) => handleInputChange(e, setSscDetails)}
                                        placeholder='Enter your percentage'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="additionalCourses" className="form-label">Additional Courses</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="additionalCourses"
                                        value={sscDetails.additionalCourses}
                                        onChange={(e) => handleInputChange(e, setSscDetails)}
                                        placeholder='Enter any additional courses'
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary saveBtn">Save</button>
                    </div>
                </form>
                 <form className='form' onSubmit={handleSubmitHSC}>
                    <div className="From">
                        <h3 id='tabName'>HSC</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="highestQualification" className="form-label">Highest Qualification</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="highestQualification"
                                        value={hscDetails.highestQualification}
                                        onChange={(e) => handleInputChange(e, setHscDetails)}
                                        placeholder='Enter your highest qualification'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="university" className="form-label">University / Board</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="university"
                                        value={hscDetails.university}
                                        onChange={(e) => handleInputChange(e, setHscDetails)}
                                        placeholder='Enter Name of Your University'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="passingYear" className="form-label">Month and year of passing</label>
                                    <div className="passingYearMonthDiv">
                                        <select id="month" className='form-select passingYNM' value={selectedMonth} onChange={handleMonthChange} name="month">
                                            <option value="01">January</option>
                                            <option value="02">February</option>
                                            <option value="03">March</option>
                                            <option value="04">April</option>
                                            <option value="05">May</option>
                                            <option value="06">June</option>
                                            <option value="07">July</option>
                                            <option value="08">August</option>
                                            <option value="09">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </select>
                                        <select id="year" className='form-control passingYNM' name="year" value={selectedYear} onChange={handleYearChange}>
                                            {years.map((year) => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="percentage" className="form-label">Percentage and marks obtained</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="percentage"
                                        value={hscDetails.percentage}
                                        onChange={(e) => handleInputChange(e, setHscDetails)}
                                        placeholder='Enter your percentage'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="additionalCourses" className="form-label">Additional Courses</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="additionalCourses"
                                        value={hscDetails.additionalCourses}
                                        onChange={(e) => handleInputChange(e, setHscDetails)}
                                        placeholder='Enter any additional courses'
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary saveBtn">Save</button>
                    </div>
                </form>                
                <form className='form' onSubmit={handleSubmitGraduation}>
                    <div className="From">
                        <h3 id='tabName'>Graduation</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="highestQualification" className="form-label">Highest Qualification</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="highestQualification"
                                        value={graduationDetails.highestQualification}
                                        onChange={(e) => handleInputChange(e, setGraduationDetails)}
                                        placeholder='Enter your highest qualification'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="university" className="form-label">University / Board</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="university"
                                        value={graduationDetails.university}
                                        onChange={(e) => handleInputChange(e, setGraduationDetails)}
                                        placeholder='Enter Name of Your University'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="passingYear" className="form-label">Month and year of passing</label>
                                    <div className="passingYearMonthDiv">
                                        <select id="month" className='form-select passingYNM' value={selectedMonth} onChange={handleMonthChange} name="month">
                                            <option value="01">January</option>
                                            <option value="02">February</option>
                                            <option value="03">March</option>
                                            <option value="04">April</option>
                                            <option value="05">May</option>
                                            <option value="06">June</option>
                                            <option value="07">July</option>
                                            <option value="08">August</option>
                                            <option value="09">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </select>
                                        <select id="year" className='form-control passingYNM' name="year" value={selectedYear} onChange={handleYearChange}>
                                            {years.map((year) => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="percentage" className="form-label">Percentage and marks obtained</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="percentage"
                                        value={graduationDetails.percentage}
                                        onChange={(e) => handleInputChange(e, setGraduationDetails)}
                                        placeholder='Enter your percentage'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="additionalCourses" className="form-label">Additional Courses</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="additionalCourses"
                                        value={graduationDetails.additionalCourses}
                                        onChange={(e) => handleInputChange(e, setGraduationDetails)}
                                        placeholder='Enter any additional courses'
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary saveBtn">Save</button>
                    </div>
                </form>
                <form className='form' onSubmit={handleSubmitPostGraduation}>
                    <div className="From">
                        <h3 id='tabName'>Post Graduation</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="highestQualification" className="form-label">Highest Qualification</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="highestQualification"
                                        value={postgraduationDetails.highestQualification}
                                        onChange={(e) => handleInputChange(e, setPostgraduationDetails)}
                                        placeholder='Enter your highest qualification'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="university" className="form-label">University / Board</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="university"
                                        value={postgraduationDetails.university}
                                        onChange={(e) => handleInputChange(e, setPostgraduationDetails)}
                                        placeholder='Enter Name of Your University'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="passingYear" className="form-label">Month and year of passing</label>
                                    <div className="passingYearMonthDiv">
                                        <select id="month" className='form-select passingYNM' value={selectedMonth} onChange={handleMonthChange} name="month">
                                            <option value="01">January</option>
                                            <option value="02">February</option>
                                            <option value="03">March</option>
                                            <option value="04">April</option>
                                            <option value="05">May</option>
                                            <option value="06">June</option>
                                            <option value="07">July</option>
                                            <option value="08">August</option>
                                            <option value="09">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </select>
                                        <select id="year" className='form-control passingYNM' name="year" value={selectedYear} onChange={handleYearChange}>
                                            {years.map((year) => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="percentage" className="form-label">Percentage and marks obtained</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="percentage"
                                        value={postgraduationDetails.percentage}
                                        onChange={(e) => handleInputChange(e, setPostgraduationDetails)}
                                        placeholder='Enter your percentage'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="additionalCourses" className="form-label">Additional Courses</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="additionalCourses"
                                        value={postgraduationDetails.additionalCourses}
                                        onChange={(e) => handleInputChange(e, setPostgraduationDetails)}
                                        placeholder='Enter any additional courses'
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary saveBtn">Save</button>
                    </div>
                </form>

                <form className='form' onSubmit={handleSubmitPhd}>
                    <div className="From">
                        <h3 id='tabName'>PHD</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="highestQualification" className="form-label">Highest Qualification</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="highestQualification"
                                        value={phdDetails.highestQualification}
                                        onChange={(e) => handleInputChange(e, setphdDetails)}
                                        placeholder='Enter your highest qualification'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="university" className="form-label">University / Board</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="university"
                                        value={phdDetails.university}
                                        onChange={(e) => handleInputChange(e, setphdDetails)}
                                        placeholder='Enter Name of Your University'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="passingYear" className="form-label">Month and year of passing</label>
                                    <div className="passingYearMonthDiv">
                                        <select id="month" className='form-select passingYNM' value={selectedMonth} onChange={handleMonthChange} name="month">
                                            <option value="01">January</option>
                                            <option value="02">February</option>
                                            <option value="03">March</option>
                                            <option value="04">April</option>
                                            <option value="05">May</option>
                                            <option value="06">June</option>
                                            <option value="07">July</option>
                                            <option value="08">August</option>
                                            <option value="09">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </select>
                                        <select id="year" className='form-control passingYNM' name="year" value={selectedYear} onChange={handleYearChange}>
                                            {years.map((year) => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="percentage" className="form-label">Percentage and marks obtained</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="percentage"
                                        value={phdDetails.percentage}
                                        onChange={(e) => handleInputChange(e, setphdDetails)}
                                        placeholder='Enter your percentage'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="additionalCourses" className="form-label">Additional Courses</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="additionalCourses"
                                        value={phdDetails.additionalCourses}
                                        onChange={(e) => handleInputChange(e, setphdDetails)}
                                        placeholder='Enter any additional courses'
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary saveBtn">Save</button>
                    </div>
                </form>

            </div>
            <div className="btnContainer" style={{textAlign: "center"}}>

            <NavLink to="/nextPage" className="btn btn-primary nextBtn">Next</NavLink>
            </div>
        </>
    );
}

export default EducationalDetails;
