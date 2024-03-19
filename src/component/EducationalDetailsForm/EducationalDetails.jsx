import React, {useState} from 'react'  //eslint-disable-line no-unused-vars
import './EducationalDetails.css';
import TimeLine from '../timeLine/TimeLine';
function EducationalDetails() {
        const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
        const years = [];
        const currentYear = new Date().getFullYear();
      
        // Populate the years array with a range of years, you can adjust the range as needed
        for (let year = currentYear; year >= currentYear - 100; year--) {
          years.push(year);
        }
      
        // Event handler for when the year is changed
        const handleYearChange = (e) => {
          setSelectedYear(parseInt(e.target.value));
        };

        //Stream selector for 12th
        const [stream, setStream] = useState('');
        const [subjects, setSubjects] = useState([]);

        const handleStreamChange = (e) => {
            const selectedStream = e.target.value;
            setStream(selectedStream);

            // Reset subjects when the stream is changed
            setSubjects([]);
        };

        const handleSubjectChange = (e) => {
            const selectedSubjects = Array.from(e.target.selectedOptions, option => option.value);
            setSubjects(selectedSubjects);
        };

        const subjectsOptions = ['PCM', 'PCB', 'PCMB'];


        //branch selector
        const [branch, setBranch] = useState('');
        // const [Graduationstream, setGraduationStream] = useState('');

        const handleBranchChange = (e) => {
            setBranch(e.target.value);
            // Reset stream when branch changes
            setStream('');
        };

        const handleGraduationStreamChange = (e) => {
            setStream(e.target.value);
        };
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
                                <label htmlFor="InputPercentage" className="form-label">Percentage and marks obtain</label>
                                <div className="passingYearMonthDiv">
                                    <input type="number" className="form-control" id="inputMarks" placeholder='Enter your Marks'/>
                                    <input type="number" className="form-control" id="inputPercentage" placeholder='Enter your percentage'/>
                                </div>
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
                            <div className="mb-3 ">
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
                                <label className="form-label" htmlFor="stream">Select 12th stream:</label>
                                <select className='form-select' id="stream" name="stream" value={stream} onChange={handleStreamChange}>
                                    <option value="">Select Stream</option>
                                    <option value="Science">Science</option>
                                    <option value="Commerce">Commerce</option>
                                    <option value="Arts">Arts</option>
                                </select>

                                {stream === 'Science' && (
                                    <div>
                                    <label htmlFor="subjects">Select subjects:</label>
                                    <select className='form-select inlineCol' id="subjects" name="subjects" multiple={true} onChange={handleSubjectChange}>
                                        {subjectsOptions.map(subject => (
                                        <option key={subject} value={subject}>{subject}</option>
                                        ))}
                                    </select>
                                    </div>
                                )}
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="InputPercentage" className="form-label">Percentage and marks obtain</label>
                                <div className="passingYearMonthDiv">
                                    <input type="number" className="form-control" id="inputMarks" placeholder='Enter your Marks'/>
                                    <input type="number" className="form-control" id="inputPercentage" placeholder='Enter your percentage'/>
                                </div>
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
                        <div className="inlineRow">
                            <div>
                                <label className="form-label" htmlFor="branch">Select Branch:</label>
                                <select className='form-select inlineCol' id="branch" name="branch" value={branch} onChange={handleBranchChange}>
                                <option value="">Select Branch</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Medical">Medical</option>
                                <option value="Commerce">Commerce</option>
                                <option value="Arts">Arts</option>
                                </select>
                            </div>
                            {branch && (
                                <div>
                                <label className="form-label" htmlFor="stream">Select Stream:</label>
                                <select className='form-select inlineCol' id="stream" name="stream" value={stream} onChange={handleGraduationStreamChange}>
                                    <option value="">Select Stream</option>
                                    {branch === "Engineering" && (
                                    <>
                                        <option value="Computer Science">Computer Science</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Mechanical">Mechanical</option>
                                        <option value="IT">IT</option>
                                        <option value="Electrical">Electrical</option>
                                        <option value="PetroChemical">PetroChemical</option>
                                        <option value="Chemical">Chemical</option>
                                        <option value="Civil">Civil</option>
                                    </>
                                    )}
                                    {branch === "Medical" && (
                                    <>
                                        <option value="MBBS">MBBS</option>
                                        <option value="BDS">BDS</option>
                                        <option value="BHMS">BHMS</option>
                                        <option value="DPharma">D-Pharma</option>
                                        <option value="BPharma">B-Pharma</option>
                                    </>
                                    )}
                                    {branch === "Commerce" && (
                                    <>
                                        <option value="Accounting">Accounting</option>
                                        <option value="Finance">Finance</option>
                                    </>
                                    )}
                                    {branch === "Arts" && (
                                    <>
                                        <option value="History">History</option>
                                        <option value="Literature">Literature</option>
                                    </>
                                    )}
                                </select>
                                </div>
                            )}
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
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="customFile">Upload Transcript Sheet</label>
                                <input type="file" className="form-control" id="Transcript MarkSheet" />
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
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="customFile">Upload Transcript Sheet</label>
                                <input type="file" className="form-control" id="Transcript MarkSheet" />
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
                    <button type="submit" className="btn btn-primary saveBtn">Save</button>
                </form>
            </div>
        
        </div> 
    </>
  )
}

export default EducationalDetails
