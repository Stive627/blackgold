"use client"
import React, { Suspense } from 'react'
import Cart from '../../Components/Cart/Cart'

function page() {
  return (
    <Suspense>
      <Cart/>
    </Suspense>
  )
}

export default page
