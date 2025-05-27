"use client"
import React, { Suspense } from 'react'
import Order from '../../Components/order/Order'

function page() {
  return (
    <Suspense>
        <Order/>
    </Suspense>
  )
}

export default page
