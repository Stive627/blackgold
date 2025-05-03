"use client"
import React, { Suspense } from 'react'
import CategoryPage from '../../Components/Category/CategoryPage'

function Category() {
  return (
    <Suspense>
        <CategoryPage/>
    </Suspense>
  )
}

export default Category
