import React from 'react'  //eslint-disable-line no-unused-vars
import './EducationalDetails.css';

function EducationalDetails() {
  return (
    <>
        <div className='educationalDetailForm'>
            <div className="sscFrom">
                <h3>SSC</h3>
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
                </form>
            </div>
            <div className="sscFrom">
                <h3>HSC</h3>
            </div>
            <div className="sscFrom">
                <h3>Graduate</h3>
            </div>
            <div className="sscFrom">
                <h3>Post Graduate</h3>
            </div>
            <div className="sscFrom">
                <h3>PHD</h3>
            </div>
        
        </div> 
    </>
  )
}

export default EducationalDetails
