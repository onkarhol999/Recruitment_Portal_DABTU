import React from 'react'
import Header from './component/headerFooter/Header'
import Footer from './component/headerFooter/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
      <Header/>
       <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
