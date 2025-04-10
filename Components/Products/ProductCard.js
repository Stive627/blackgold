import Image from 'next/image'
import React from 'react'
import { fetchLink } from '../../Functions/fetchLink'
import { useScreen } from '../../hooks/useScreen'

function ProductCard({product}) {
  const large = useScreen()
  return (
    <div className=' flex-col border rounded-lg' style={{borderColor:'rgba(0, 0, 0, 0.25)', width:large?'340px':''}}>
      <Image alt={`image number${product._id}`} src={fetchLink(product.img.slice(6))} width={large?340:300} height={large?340:300}/>
      <div className=' p-2'>
        <p>{product.name}</p>
        <p>{product.unit}</p>
        <div className=' flex justify-between w-full'>
          <p className=' font-semibold text-[9px]'>CFA{product.newPrice}{' '}<span  style={{textDecoration:'line-through', color:'rgba(127, 127, 127, 1)', fontSize:'7px'}}>{product.lastPrice}</span></p>
          <button className=' border  px-5' style={{borderColor:'rgba(158, 42, 43, 1)', color:'rgba(158, 42, 43, 1)', borderRadius:'5px'}}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
