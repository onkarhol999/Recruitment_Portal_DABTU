import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/home/Home.jsx'
import PersonalDetails from './component/personalDetailsForm/personalDetails.jsx'

// import TimeLine from './component/timeLine/TimeLine.jsx'
import Education from './component/EducationalDetailsForm/EducationalDetails.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='profile' element={<PersonalDetails/>}/>
    <Route path='education' element={<Education/>}/>
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
