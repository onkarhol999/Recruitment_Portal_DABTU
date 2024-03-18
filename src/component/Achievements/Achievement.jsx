import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import './Achievement.css';
import add from '../Images/AddNRemove/add.png';
import remove from '../Images/AddNRemove/minus.png';
import TimeLine from '../timeLine/TimeLine';

function Achievement() {
  const [researchPapers, setResearchPapers] = useState([{ id: 1, value: '' }]);

  const handleInputChange = (id, value) => {
    const updatedPapers = researchPapers.map(paper => {
      if (paper.id === id) {
        return { ...paper, value };
      }
      return paper;
    });
    setResearchPapers(updatedPapers);
  };

  const addInputField = () => {
    const newId = researchPapers[researchPapers.length - 1].id + 1;
    setResearchPapers([...researchPapers, { id: newId, value: '' }]);
  };

  const removeInputField = id => {
    if (id !== 1) {
      const updatedPapers = researchPapers.filter(paper => paper.id !== id);
      setResearchPapers(updatedPapers);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // You can access all research papers' values in researchPapers state array here.
    console.log(researchPapers);
  };

  return (
    <>
      <TimeLine />
      <form className='AchievementForm' onSubmit={handleSubmit}>
        <h3 id='tabName'>Your Research Papers</h3>
        <div className="formComponents">
          {researchPapers.map((paper, index) => (
            <div key={paper.id} className="mb-3">
              <label htmlFor={`inputPapers-${paper.id}`} className="form-label">Research Paper {index === 0 ? '' : paper.id}</label>
              <input
                type="text"
                className="form-control my-2"
                id={`inputPapers-${paper.id}`}
                placeholder='Paste Link of Your Research paper'
                value={paper.value}
                onChange={e => handleInputChange(paper.id, e.target.value)}
              />
              {index !== 0 && (
                <button type="button" className="btn btn-danger" onClick={() => removeInputField(paper.id)}><img src={remove}/></button>
              )}
            </div>
          ))}
        </div>
        <div className="form-group">
            <button type="button" className="btn addBtn" onClick={addInputField}><img src={add}/></button>
        </div>
        <button type="submit" className="btn btn-primary saveBtn">Save and Submit</button>
      </form>
    </>
  );
}

export default Achievement;
