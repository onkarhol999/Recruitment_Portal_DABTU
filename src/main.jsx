import React from 'react';
import ReactDOM from 'react-dom';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './component/home/Home.jsx';
import PersonalDetails from './component/personalDetailsForm/personalDetails.jsx';
// import TimeLine from './component/timeLine/TimeLine.jsx';
import Education from './component/EducationalDetailsForm/EducationalDetails.jsx';
import ExperienceDetails from './component/ExperienceDetails/ExperienceDetails.jsx';
import Achievement from './component/Achievements/Achievement.jsx'
import Register from './component/Register/Register.jsx';
import Login from './component/login/login.jsx';
import UserDetails from './component/userInfo/UserInfo.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="profile" element={<PersonalDetails />} />
      <Route path="education" element={<Education />} />
      <Route path="experience" element={<ExperienceDetails />} />
      <Route path="achievement" element={<Achievement />} />
      <Route path="userDetails" element={<UserDetails />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
