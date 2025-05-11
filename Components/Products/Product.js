import React from 'react'
import { useScreen } from '../../hooks/useScreen'
import ProductCard from './ProductCard'
import { useData } from '../../context/DataContext'

function Product() {
  const width = useScreen()
  const {data} = useData()
  if(!data) return<div className=' mt-3  w-full h-64 flex justify-center items-center'><div className=' w-10 h-10 animate-spin rounded-full border border-blue-900 border-t-white'></div></div>
  return (
    <div className=' w-screen flex justify-center'>
      <div style={{width:'98%'}} className={`grid gap-3 mt-3 ${width <1440 && width >=1200 && 'grid-cols-4'} ${width <1200 && width >860 && 'grid-cols-3'} ${width <860 && 'grid-cols-2'} ${width>=1440 &&  width < 1800 &&'grid-cols-5'} ${width>=1800 &&'grid-cols-6'}`}>
        {data.map((elt, indx)=><ProductCard key={indx} product={elt}/>)}
      </div>
    </div>
  )
}

export default Product
