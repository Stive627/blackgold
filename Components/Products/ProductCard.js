import Image from 'next/image'
import React from 'react'
import { useScreen } from '../../hooks/useScreen'
import { useRouter } from 'next/navigation'

function ProductCard({product}) {
  const width = useScreen()
  const large = width > 1900
  const bgRouter = useRouter()
  return (
    <div onClick={()=>bgRouter.push(`/filter?category=${product.category}&subCategory=${product.subCategory}`)}  className=' flex-col border rounded-lg' style={{borderColor:'rgba(0, 0, 0, 0.25)', width:large?'340px':''}}>
      <div className=' flex jcen'><Image style={{border:'2px', borderTopRightRadius:'7px', borderTopLeftRadius:'7px'}} alt={`image number${product._id}`} src={product.descriptionImages[0]} width={130} height={130}/></div>
        <div className=' p-2'>
          <p>{product.name}</p>
          <p>{product.unit}</p>
          <div className=' flex justify-between w-full items-center mt-2'>
            <p className=' font-semibold text-[12px]'>CFA {product.newPrice}{'   '}<span  style={{textDecoration:'line-through', color:'rgba(127, 127, 127, 1)', fontSize:'10px'}}>CFA {product.lastPrice}</span></p>
            <button className={`border  ${large > 1000? 'px-5':'px-3'}`} style={{borderColor:'rgba(158, 42, 43, 1)', color:'rgba(158, 42, 43, 1)', borderRadius:'5px'}}>Add</button>
          </div>
        </div>
    </div>
  )
}

export default ProductCard
