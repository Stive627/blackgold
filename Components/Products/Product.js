import React from 'react'
import { useScreen } from '../../hooks/useScreen'
import ProductCard from './ProductCard'

function Product({products, setProducts}) {
  const large = useScreen()
  if(!products) return<div className=' mt-3  w-full h-64 flex justify-center items-center'><div className=' w-10 h-10 animate-spin rounded-full border border-blue-900 border-t-white'></div></div>
  return (
    <div className=' w-screen flex justify-center'>
      <div style={{width:'98%'}} className={`grid gap-3 mt-3 ${large?'grid-cols-5':'grid-cols-2'}`}>
        {products.map((elt, indx)=><ProductCard key={indx} product={elt}/>)}
      </div>
    </div>
  )
}

export default Product
