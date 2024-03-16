import React from 'react'  // eslint-disable-line no-unused-vars
import './Achievement.css';

function Achievement() {
  return (
    <>
        <form className='AchievementForm'>
            <h3 id='tabName'>Your Research Papers</h3>
            <div className="formComponents">
                <div className="mb-3">
                    <label htmlFor="InputPapers" className="form-label">Research Paper 1</label>
                    <input type="text" className="form-control" id="inputPapers" placeholder='Paste Link of Your Research paper'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPapers" className="form-label">Research Paper 2</label>
                    <input type="text" className="form-control" id="inputPapers" placeholder='Paste Link of Your Research paper'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPapers" className="form-label">Research Paper 3</label>
                    <input type="text" className="form-control" id="inputPapers" placeholder='Paste Link of Your Research paper'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPapers" className="form-label">Research Paper 4</label>
                    <input type="text" className="form-control" id="inputPapers" placeholder='Paste Link of Your Research paper'/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary saveBtn">Save and Submit</button>
        </form>
    </>
  )
}

export default Achievement
