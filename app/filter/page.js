"use client"
import React, { Suspense } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import SearchedProduct from '../../Components/SearchedProduct.js/SearchedProduct'

function page() {
  return (
    <Suspense>
      <Navbar/>
      <SearchedProduct/>
    </Suspense>
  )
}

export default page
