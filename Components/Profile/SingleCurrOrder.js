import Image from 'next/image'
import React from 'react'

function SingleCurrOrder({product}) {
    const date = new Intl.DateTimeFormat('en-US', {dateStyle:'full'}).format(new Date())
  return (
    <div className=' flex justify-between pb-5'>
      <div className=' flex flex-row gap-4'>
        <Image src={product.descriptionImages[0]} width={200} height={200} alt={`the image number no${product._id}`} />
        <div style={{fontSize:14}} className=' relative'>
            <p style={{fontSize:20}} className=' font-bold'>{product.name}</p>
            <p >{product.unit}</p>
            <p  className=' my-2'>ORDER ID; {product._id}</p>
            <p style={{color:'rgba(67, 64, 64, 1)'}} className=' '>Placed on {date}</p>
            <div className=' absolute bottom-0'>
                <div className=' flex flex-row gap-5'>
                    <button className=' font-semibold'>Return Order</button>
                    <button style={{backgroundColor:'rgba(41, 142, 119, 1)'}} className=' text-white px-2 rounded-md cursor-pointer'>Track Delivery</button>
                </div>
            </div>
        </div>
      </div>
      <p style={{fontSize:16}} className=' font-semibold'>CFA {product.newPrice}</p>
    </div>
  )
}

export default SingleCurrOrder
