"use client"
import React from 'react'
import Profile from '../../Components/Profile/Profile'
import Navbar from '../../Components/Navbar/Navbar'

function page() {
  return (
    <div className=' w-screen h-screen'>
        <Navbar/>
        <Profile/>
    </div>
  )
}

export default page
