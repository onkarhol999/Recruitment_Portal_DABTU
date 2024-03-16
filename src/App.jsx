import './App.css';
import Footer from './component/headerFooter/Footer';
import Header from './component/headerFooter/Header';
import PersonalDetails from './component/personalDetailsForm/PersonalDetails';
import TimeLine from './component/timeLine/TimeLine';


function App() {
  return (
    <>
     <Header/>
     <TimeLine/>
     <PersonalDetails/>
     <Footer/>
    </>
  );
}

export default App;
