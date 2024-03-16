import React from 'react' // eslint-disable-line no-unused-vars
import Footer from './component/headerFooter/Footer';
import Header from './component/headerFooter/Header';
import TimeLine from './component/timeLine/TimeLine';
// import PersonalDetails from './component/personalDetailsForm/PersonalDetails';
import EducationalDetails from './component/EducationalDetailsForm/EducationalDetails';


function App() {
  return (
    <>
      <Header/>
      <TimeLine/>
      <EducationalDetails/>
      <Footer/>
    </>
  )
}

export default App
