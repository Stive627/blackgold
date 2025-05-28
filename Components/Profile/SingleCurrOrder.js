import Image from 'next/image'
import React from 'react'
import { useScreen } from '../../hooks/useScreen'

function SingleCurrOrder({product}) {
    const date = new Intl.DateTimeFormat('en-US', {dateStyle:'full'}).format(new Date())
    const width = useScreen()
    const large = width> 500
  return (
    <div className=' flex justify-between pb-5'>
      <div className=' flex flex-row gap-2 lg:gap-4'>
        <Image src={product.descriptionImages[0]} width={large?200:100} height={large?200:100} alt={`the image number no${product._id}`}  />
        <div style={{fontSize:14}} className=' relative'>
            <p style={{fontSize:20}} className=' font-bold'>{product.name}</p>
            <p >{product.unit}</p>
            <p style={{fontSize:large?15:11}} className=' my-2'>ORDER ID: {product._id}</p>
            <p  style={{color:'rgba(67, 64, 64, 1)',fontSize:large?16:9}} className=' '>Placed on {date}</p>
            <div className=' absolute bottom-0'>
                <div className=' flex flex-row gap-5'>
                    <button className=' font-semibold hidden lg:block'>Return Order</button>
                    <button style={{backgroundColor:'rgba(41, 142, 119, 1)'}} className=' hidden lg:block text-white px-2 rounded-md cursor-pointer'>Track Delivery</button>
                </div>
            </div>
        </div>
      </div>
      <div className=' relative'>
        <p style={{fontSize:large?16:11}} className=' hidden lg:block font-semibold'>CFA {product.newPrice}</p>
        <button style={{backgroundColor:'rgba(41, 142, 119, 1)', fontSize:large?16:12}} className=' block lg:hidden w-24 h-5 lg:h-7 lg:w-30 text-white lg:px-2 rounded-md  cursor-pointer'>Track Delivery</button>
        <div className=' lg:hidden absolute bottom-0 flex justify-end  w-full'>
          <button style={{fontSize:large?16:12, color:'rgba(67, 64, 64, 1)'}} className=' font-semibold'>Return Order</button>
        </div>
      </div>

    </div>
  )
}

export default SingleCurrOrder
