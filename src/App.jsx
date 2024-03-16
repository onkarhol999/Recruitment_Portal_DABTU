import './App.css';
import Footer from './component/headerFooter/Footer';
import Header from './component/headerFooter/Header';
// import Home from './component/home/Home';
import PersonalDetails from './component/personalDetailsForm/personalDetails';

function App() {
  return (
    <>
     <Header/>
     {/* <Home/> */}
     <PersonalDetails/>
     <Footer/>
    </>
  );
}

export default App;
