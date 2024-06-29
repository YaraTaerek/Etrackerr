import React from 'react'
import { Outlet} from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar'
export default function MainLayout() {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

