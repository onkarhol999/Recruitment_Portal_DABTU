import React from 'react' // eslint-disable-line no-unused-vars
import Footer from './component/headerFooter/Footer';
import Header from './component/headerFooter/Header';
import TimeLine from './component/timeLine/TimeLine';
import PersonalDetails from './component/personalDetailsForm/personalDetails';


function App() {
  return (
    <>
      <Header/>
      <TimeLine/>
      <PersonalDetails/>
      <Footer/>
    </>
  )
}

export default App
