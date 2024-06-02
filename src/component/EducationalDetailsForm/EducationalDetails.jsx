import React, { useState } from 'react';
import './EducationalDetails.css';
import TimeLine from '../timeLine/TimeLine';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function EducationalDetails() {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= currentYear - 100; year--) {
        years.push(year);
    }
    const handleYearChange = (e) => {
        setSelectedYear(parseInt(e.target.value));
    };

    const [highestQualification, setHighestQualification] = useState('');
    const [university, setUniversity] = useState('');
    const [percentage, setPercentage] = useState('');
    const [additionalCourses, setAdditionalCourses] = useState('');

    const handleQualificationChange = (e) => {
        setHighestQualification(e.target.value);
    };
    const handleUniversityChange = (e) => {
        setUniversity(e.target.value);
    };
    const handlePercentageChange = (e) => {
        setPercentage(e.target.value);
    };
    const handleCoursesChange = (e) => {
        setAdditionalCourses(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            highestQualification,
            university,
            yearOfPassing: selectedYear,
            percentage,
            additionalCourses,
        };

        const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage

        try {
            const response = await axios.post('http://localhost:5000/saveEducationDetails', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response.data.message);
            alert('Education details saved successfully');

            // Reset form state
            setHighestQualification('');
            setUniversity('');
            setPercentage('');
            setAdditionalCourses('');
            setSelectedYear(currentYear);
            e.target.reset(); // Reset the form element

        } catch (error) {
            console.error('Error:', error);
            alert('Failed to save education details');
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
                                    <label htmlFor="InputHighestQualification" className="form-label">Highest Qualification</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputHighestQualification"
                                        value={highestQualification}
                                        onChange={handleQualificationChange}
                                        placeholder='Enter your highest qualification'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="InputUniversity" className="form-label">University / Board</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputUniversity"
                                        value={university}
                                        onChange={handleUniversityChange}
                                        placeholder='Enter Name of Your University'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="InputPassingYear" className="form-label">Month and year of passing</label>
                                    <div className="passingYearMonthDiv">
                                        <select id="month" className='form-select passingYNM' name="month">
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
                                    <label htmlFor="InputPercentage" className="form-label">Percentage and marks obtained</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputPercentage"
                                        value={percentage}
                                        onChange={handlePercentageChange}
                                        placeholder='Enter your percentage'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="InputAdditionalCourses" className="form-label">Additional Courses</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputAdditionalCourses"
                                        value={additionalCourses}
                                        onChange={handleCoursesChange}
                                        placeholder='Enter any additional courses'
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary saveBtn">Save</button>
                    </div>
                </form>

                <form className='form' onSubmit={handleSubmit}>
                    <div className="From">
                        <h3 id='tabName'>HSC</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="InputHighestQualification" className="form-label">Highest Qualification</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputHighestQualification"
                                        value={highestQualification}
                                        onChange={handleQualificationChange}
                                        placeholder='Enter your highest qualification'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="InputUniversity" className="form-label">University / Board</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputUniversity"
                                        value={university}
                                        onChange={handleUniversityChange}
                                        placeholder='Enter Name of Your University'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="InputPassingYear" className="form-label">Month and year of passing</label>
                                    <div className="passingYearMonthDiv">
                                        <select id="month" className='form-select passingYNM' name="month">
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
                                    <label htmlFor="InputPercentage" className="form-label">Percentage and marks obtained</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputPercentage"
                                        value={percentage}
                                        onChange={handlePercentageChange}
                                        placeholder='Enter your percentage'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="InputAdditionalCourses" className="form-label">Additional Courses</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputAdditionalCourses"
                                        value={additionalCourses}
                                        onChange={handleCoursesChange}
                                        placeholder='Enter any additional courses'
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary saveBtn">Save</button>
                    </div>
                </form>

                <form className='form' onSubmit={handleSubmit}>
                    <div className="From">
                        <h3 id='tabName'>Graduation</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="InputHighestQualification" className="form-label">Highest Qualification</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputHighestQualification"
                                        value={highestQualification}
                                        onChange={handleQualificationChange}
                                        placeholder='Enter your highest qualification'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="InputUniversity" className="form-label">University / Board</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputUniversity"
                                        value={university}
                                        onChange={handleUniversityChange}
                                        placeholder='Enter Name of Your University'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="InputPassingYear" className="form-label">Month and year of passing</label>
                                    <div className="passingYearMonthDiv">
                                        <select id="month" className='form-select passingYNM' name="month">
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
                                    <label htmlFor="InputPercentage" className="form-label">Percentage and marks obtained</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputPercentage"
                                        value={percentage}
                                        onChange={handlePercentageChange}
                                        placeholder='Enter your percentage'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="InputAdditionalCourses" className="form-label">Additional Courses</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputAdditionalCourses"
                                        value={additionalCourses}
                                        onChange={handleCoursesChange}
                                        placeholder='Enter any additional courses'
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary saveBtn">Save</button>
                    </div>
                </form>
                <form className='form' onSubmit={handleSubmit}>
                    <div className="From">
                        <h3 id='tabName'>Post Graduation</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="InputHighestQualification" className="form-label">Highest Qualification</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputHighestQualification"
                                        value={highestQualification}
                                        onChange={handleQualificationChange}
                                        placeholder='Enter your highest qualification'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="InputUniversity" className="form-label">University / Board</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputUniversity"
                                        value={university}
                                        onChange={handleUniversityChange}
                                        placeholder='Enter Name of Your University'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="InputPassingYear" className="form-label">Month and year of passing</label>
                                    <div className="passingYearMonthDiv">
                                        <select id="month" className='form-select passingYNM' name="month">
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
                                    <label htmlFor="InputPercentage" className="form-label">Percentage and marks obtained</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputPercentage"
                                        value={percentage}
                                        onChange={handlePercentageChange}
                                        placeholder='Enter your percentage'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="InputAdditionalCourses" className="form-label">Additional Courses</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputAdditionalCourses"
                                        value={additionalCourses}
                                        onChange={handleCoursesChange}
                                        placeholder='Enter any additional courses'
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary saveBtn">Save</button>
                    </div>
                </form>

                <form className='form' onSubmit={handleSubmit}>
                    <div className="From">
                        <h3 id='tabName'>PHD</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="InputHighestQualification" className="form-label">Highest Qualification</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputHighestQualification"
                                        value={highestQualification}
                                        onChange={handleQualificationChange}
                                        placeholder='Enter your highest qualification'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="InputUniversity" className="form-label">University / Board</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputUniversity"
                                        value={university}
                                        onChange={handleUniversityChange}
                                        placeholder='Enter Name of Your University'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="InputPassingYear" className="form-label">Month and year of passing</label>
                                    <div className="passingYearMonthDiv">
                                        <select id="month" className='form-select passingYNM' name="month">
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
                                    <label htmlFor="InputPercentage" className="form-label">Percentage and marks obtained</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputPercentage"
                                        value={percentage}
                                        onChange={handlePercentageChange}
                                        placeholder='Enter your percentage'
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="InputAdditionalCourses" className="form-label">Additional Courses</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="InputAdditionalCourses"
                                        value={additionalCourses}
                                        onChange={handleCoursesChange}
                                        placeholder='Enter any additional courses'
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary saveBtn">Save</button>
                    </div>
                </form>
                <NavLink to="/experience">
                    <button className="btn btn-primary saveBtn">Next</button>
                </NavLink>
            </div>
        </>
    );
}

export default EducationalDetails;
