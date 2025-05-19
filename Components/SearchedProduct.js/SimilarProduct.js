import React from 'react'
import ProductCard from '../Products/ProductCard'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { useRouter } from 'next/navigation'

function SimilarProduct({data, category}) {
  const bgRouter = useRouter()
  return (
    <div className=' relative mt-5'>
      <p className=' font-bold text-2xl mb-2'>Similar Products</p>
      <hr style={{color:'rgba(207, 207, 207, 1)'}} className=' mb-8'/>
      <div className=' flex flex-row gap-4'>
        {data.slice(0,6).map((elt, indx) => <ProductCard key={indx} product={elt}/>)}
      </div>
      <button onClick={()=>bgRouter.push(`/filter?category=${category}`)}  className=' absolute right-0 top-1/2 bg-white border rounded-full p-2 border-gray-400 cursor-pointer'><ArrowForwardIos/></button>
    </div>
  )
}

export default SimilarProduct
