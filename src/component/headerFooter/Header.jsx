import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header>
      {/* Top Section */}
      <div className="bg-white p-4 rounded-md mb-2 d-flex align-items-center justify-content-center">
        <img className="DBATUlogo" src="https://dbatu.ac.in/wp-content/uploads/2022/12/cropped-OQSD-Wtj.jpeg" alt="College Logo" />
        <div className="text-center">
          <div className="text-3xl font-bold">
            <p className="text-3xl font-bold text-primary">Dr. Babasaheb Ambedkar Technological University</p> 
            <p className="text-lg mt-1">डॉ. बाबासाहेब आंबेडकर तंत्रशास्त्र विद्यापीठ</p>
            <p className="text-lg">Lonere-402103, Tal-Mangaon, Dist-Raigad (M.S.) India</p>
            <p className="text-lg mt-2 text-1xl">Recruitment Portal</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
