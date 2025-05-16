import React from 'react'
import { useScreen } from '../../hooks/useScreen'
import ProductCard from './ProductCard'
import { useData } from '../../context/DataContext'

function Product() {
  const {data} = useData()
  const width = useScreen()
  function getDim(width){
    if(width < 400){
      return 'grid-cols-2'
    }
    if(width > 400 && width < 600){
      return 'grid-cols-3'
    }
    if(width > 600 && width < 850){
      return 'grid-cols-4'
    }
    if(width > 850 && width < 1120){
      return 'grid-cols-5'
    }
    if(width > 1120 && width < 1300){
      return 'grid-cols-6'
    }
    if(width > 1300 && width < 1500){
      return 'grid-cols-7'
    }
    if(width > 1500){
      return 'grid-cols-8'
    }
  }
  if(!data) return<div className=' mt-3  w-full h-64 flex justify-center items-center'><div className=' w-10 h-10 animate-spin rounded-full border border-blue-900 border-t-white'></div></div>
  return (
    <div className=' w-screen flex justify-center'>
      <div style={{width:'98%'}} className={`grid gap-3 mt-3 ${getDim(width)}`}>
        {[...data].map((elt, indx)=><ProductCard key={indx} product={elt}/>)}
      </div>
    </div>
  )
}

export default Product
