"use client"
import React, { Suspense } from 'react'
import Profile from '../../Components/Profile/Profile'
import Navbar from '../../Components/Navbar/Navbar'

function page() {
  return (
    <Suspense>
      <div className=' w-screen h-screen'>
          <Navbar/>
          <Profile/>
      </div>
    </Suspense>
  )
}

export default page
