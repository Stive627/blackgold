import React from 'react'
import ProductCard from '../Products/ProductCard'
import {ArrowForwardIos } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import './swiper.css'

function SimilarProduct({data, category, width=1000, similarRef, getCoords, handleLeave}) {
  const bgRouter = useRouter()
  const similarprods = width >600 ? 40 : 2
  return (
    <div className=' w-full overflow-hidden relative mt-5'>
      <div onMouseMove={getCoords} onMouseLeave={handleLeave}  ref={true? similarRef : null} className=' flex flex-row gap-4 similar'>
        {data.slice(0,similarprods).map((elt, indx) => <ProductCard description={true} key={indx} product={elt}/>)}
        <button onClick={()=>bgRouter.push(`/filter?category=${category}`)}  className=' relative  h-9  w-10 bg-white border rounded-full p-2 flex justify-center items-center border-gray-400 cursor-pointer bg-white'><ArrowForwardIos sx={{fontSize:19}}/></button>
      </div>
    </div>
  )
}

export default SimilarProduct
