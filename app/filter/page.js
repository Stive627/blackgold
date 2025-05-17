"use client"
import React, { Suspense } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import SearchedProduct from '../../Components/SearchedProduct.js/SearchedProduct'
import { SearchDataProvider } from '../../Components/SearchedProduct.js/SearchDataContext'

function page() {
  return (
    <Suspense>
      <Navbar/>
      <SearchDataProvider>
        <SearchedProduct/>
      </SearchDataProvider>
    </Suspense>
  )
}

export default page
