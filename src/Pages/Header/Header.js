import React from 'react'
import Navbar from './Navbar'
import TopNavContact from './TopNavContact'
import BottomNavbar from './BottomNavbar'

function Header() {
  return (
   <>
   <TopNavContact/>
   <Navbar/>
   <BottomNavbar/>
   </>
  )
}

export default Header