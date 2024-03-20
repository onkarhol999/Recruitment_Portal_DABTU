import React from 'react'  //eslint-disable-line no-unused-vars
import './EducationalDetails.css';
import TimeLine from '../timeLine/TimeLine';
import { NavLink } from 'react-router-dom';
function EducationalDetails() {
  return (
    <>
     <TimeLine/>
        <div className='educationalDetailForm'>
            <div className="From">
                <h3 id='tabName'>SSC</h3>
                <form className='form'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputUniversity" className="form-label">University / Board</label>
                                <input type="text" className="form-control" id="inputuniversity" placeholder='Enter Name of Your University'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputPassingYear" className="form-label">Month and year of passing</label>
                                <div className="passingYearMonthDiv">

                                <input type="text" className="form-control passingYNM" id="inputPassingMonth" placeholder='month'/>
                                <input type="number" className="form-control passingYNM" id="inputPassingYear" placeholder='Year'/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputPercentage" className="form-label">Percentage and marks obtain</label>
                                <input type="number" className="form-control" id="inputPercentage" placeholder='Enter your percentage'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputClass" className="form-label">Class and Division Obtained</label>
                                <input type="email" className="form-control" id="inputClass" placeholder='Enter Class and Division Obtained'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="customFile">Upload SSC MarkSheet</label>
                                <input type="file" className="form-control" id="SSC MarkSheet" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary saveBtn">Save</button>
                </form>
            </div>
            <div className="From">
                <h3 id='tabName'>HSC</h3>
                <form className='form'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputUniversity" className="form-label">University / Board</label>
                                <input type="text" className="form-control" id="inputuniversity" placeholder='Enter Name of Your University'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputPassingYear" className="form-label">Month and year of passing</label>
                                <div className="passingYearMonthDiv">

                                <input type="text" className="form-control passingYNM" id="inputPassingMonth" placeholder='month'/>
                                <input type="number" className="form-control passingYNM" id="inputPassingYear" placeholder='Year'/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputPercentage" className="form-label">Percentage and marks obtain</label>
                                <input type="number" className="form-control" id="inputPercentage" placeholder='Enter your percentage'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputClass" className="form-label">Class and Division Obtained</label>
                                <input type="email" className="form-control" id="inputClass" placeholder='Enter Class and Division Obtained'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="customFile">Upload HSC MarkSheet</label>
                                <input type="file" className="form-control" id="HSC MarkSheet" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary saveBtn">Save</button>
                </form>
            </div>
            <div className="From">
                <h3 id='tabName'>Graduate</h3>
                <form className='form'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputUniversity" className="form-label">University / Board</label>
                                <input type="text" className="form-control" id="inputuniversity" placeholder='Enter Name of Your University'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputPassingYear" className="form-label">Month and year of passing</label>
                                <div className="passingYearMonthDiv">

                                <input type="text" className="form-control passingYNM" id="inputPassingMonth" placeholder='month'/>
                                <input type="number" className="form-control passingYNM" id="inputPassingYear" placeholder='Year'/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputPercentage" className="form-label">Percentage and marks obtain</label>
                                <input type="number" className="form-control" id="inputPercentage" placeholder='Enter your percentage'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputClass" className="form-label">Class and Division Obtained</label>
                                <input type="email" className="form-control" id="inputClass" placeholder='Enter Class and Division Obtained'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="customFile">Upload Graduation MarkSheet</label>
                                <input type="file" className="form-control" id="Graduation MarkSheet" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary saveBtn">Save</button>
                </form>
            </div>
            <div className="From">
                <h3 id='tabName'>Post Graduate</h3>
                <form className='form'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputUniversity" className="form-label">University / Board</label>
                                <input type="text" className="form-control" id="inputuniversity" placeholder='Enter Name of Your University'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputPassingYear" className="form-label">Month and year of passing</label>
                                <div className="passingYearMonthDiv">

                                <input type="text" className="form-control passingYNM" id="inputPassingMonth" placeholder='month'/>
                                <input type="number" className="form-control passingYNM" id="inputPassingYear" placeholder='Year'/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputPercentage" className="form-label">Percentage and marks obtain</label>
                                <input type="number" className="form-control" id="inputPercentage" placeholder='Enter your percentage'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputClass" className="form-label">Class and Division Obtained</label>
                                <input type="email" className="form-control" id="inputClass" placeholder='Enter Class and Division Obtained'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="customFile">Upload Post-Graduation MarkSheet</label>
                                <input type="file" className="form-control" id="Post-Graduation MarkSheet" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary saveBtn">Save</button>
                </form>
            </div>
            <div className="From">
                <h3 id='tabName'>PHD</h3>
                <form className='form'>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputUniversity" className="form-label">University / Board</label>
                                <input type="text" className="form-control" id="inputuniversity" placeholder='Enter Name of Your University'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputPassingYear" className="form-label">Month and year of passing</label>
                                <div className="passingYearMonthDiv">

                                <input type="text" className="form-control passingYNM" id="inputPassingMonth" placeholder='month'/>
                                <input type="number" className="form-control passingYNM" id="inputPassingYear" placeholder='Year'/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputPercentage" className="form-label">Percentage and marks obtain</label>
                                <input type="number" className="form-control" id="inputPercentage" placeholder='Enter your percentage'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputSubject" className="form-label">Subject of Studies</label>
                                <input type="text" className="form-control" id="inputSubject" placeholder='Enter your Subject of Studies'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputClass" className="form-label">Class and Division Obtained</label>
                                <input type="email" className="form-control" id="inputClass" placeholder='Enter Class and Division Obtained'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="customFile">Upload PHD MarkSheet</label>
                                <input type="file" className="form-control" id="PHD MarkSheet" />
                            </div>
                        </div>
                    </div>
                    {/* <NavLink to="/experience"> */}
                       <button type="submit" className="btn btn-primary saveBtn">Save</button>
                   {/* </NavLink> */}
                    
                </form>
                  <NavLink to="/experience">
                       <button type="submit" className="btn btn-primary saveBtn">Next</button>
                   </NavLink>
            </div>
        
        </div> 
    </>
  )
}

export default EducationalDetails
