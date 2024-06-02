import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import './Achievement.css';
import add from '../Images/AddNRemove/add.png';
import remove from '../Images/AddNRemove/minus.png';
import TimeLine from '../timeLine/TimeLine';
import axios from 'axios';

function Achievement() {
  const [researchPapers, setResearchPapers] = useState([{ id: 1, value: '' }]);
  const [summary, setSummary] = useState('');
  const [projectLink, setProjectLink] = useState('');

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

  const handleSubmit = async e => {
    e.preventDefault();
    const researchPaperValues = researchPapers.map(paper => paper.value);
    const formData = {
      researchPapers: researchPaperValues,
      projectSummary: summary,
      projectLink
    };

    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage

    try {
      const response = await axios.post('http://localhost:5000/saveAchievements', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      console.log(response.data.message);
      alert('Achievement details saved successfully');

      // Reset form state
      setResearchPapers([{ id: 1, value: '' }]);
      setSummary('');
      setProjectLink('');
      e.target.reset(); // Reset the form element

    } catch (error) {
      console.error('Error:', error);
      alert('Failed to save achievement details');
    }
  };

  const handleSummaryChange = (event) => {
    if (event.target.value.length <= 150) {
      setSummary(event.target.value);
    }
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
                <button type="button" className="btn btn-danger" onClick={() => removeInputField(paper.id)}><img src={remove} alt="remove"/></button>
              )}
            </div>
          ))}
        </div>
        <div className="form-group">
          <button type="button" className="btn addBtn" onClick={addInputField}><img src={add} alt="add"/></button>
        </div>
        <div className="formComponents">
          <label className='form-label' htmlFor="summary">Summary for the project you made (up to 150 characters):</label>
          <textarea
            className='form-control'
            id="summary"
            name="summary"
            value={summary}
            onChange={handleSummaryChange}
            maxLength={150}
            rows={4}
            cols={50}
          />
          <p>Characters remaining: {150 - summary.length}</p>

          <div className="mb-3">
            <label htmlFor="projectLinks" className="form-label">Link for the project</label>
            <input
              type="text"
              className="form-control"
              id="projectLink"
              placeholder="Link for the project"
              value={projectLink}
              onChange={e => setProjectLink(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary saveBtn">Save and Submit</button>
      </form>
    </>
  );
}

export default Achievement;
