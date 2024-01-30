import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import '../styles/Layout.scss'

const Layout = () => {
  return (
    <div className='layout__container'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
