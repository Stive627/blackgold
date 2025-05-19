import React from 'react'
import ProductCard from '../Products/ProductCard'
import {ArrowForwardIos } from '@mui/icons-material'
import { useRouter } from 'next/navigation'

function SimilarProduct({data, category, width=1000}) {
  const bgRouter = useRouter()
  const similarprods = width >600 ? 4 : 2
  return (
    <div className=' relative mt-5'>
      <p className=' font-bold text-2xl mb-2'>Similar Products</p>
      <hr style={{color:'rgba(207, 207, 207, 1)'}} className=' mb-5'/>
      <div className=' flex flex-row gap-4 '>
        {data.slice(0,similarprods).map((elt, indx) => <ProductCard key={indx} product={elt}/>)}
        <button onClick={()=>bgRouter.push(`/filter?category=${category}`)}  className=' relative  h-9  w-10 bg-white border rounded-full p-2 flex justify-center items-center border-gray-400 cursor-pointer bg-white'><ArrowForwardIos sx={{fontSize:19}}/></button>
      </div>
    </div>
  )
}

export default SimilarProduct
