import './App.css';
import EducationalDetails from './component/EducationalDetailsForm/EducationalDetails';
import Footer from './component/headerFooter/Footer';
import Header from './component/headerFooter/Header';
// import PersonalDetails from './component/personalDetailsForm/personalDetails';
// import TimeLine from './component/timeLine/TimeLine';
// import Home from './component/home/Home';


function App() {
  return (
    <>
      <Header/>
      {/* <TimeLine/>
      <Home/> */}
      {/* <PersonalDetails/> */}
      <EducationalDetails/>
      <Footer/>
    </>
  );
}

export default App;
