import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function EmptyCart() {
  const bgRouter = useRouter()
  return (
    <div className=' mt-0 lg:mt-9'>
      <p className=' font-semibold text-lg lg:text-2xl text-center'>The cart is empty</p>
      <div className=' flex justify-center mt-7'>
        <Image alt='empty card' width={200} height={200} src={'https://blackgold-bucket.s3.ap-south-1.amazonaws.com/undraw_empty-cart_574u.svg'}/>
      </div>
      <div className=' flex justify-center mt-12 text-white'>
        <button onClick={()=> bgRouter.push('/filter?category=Starchy Food')} className=' cursor-pointer rounded-md  py-1 font-semibold' style={{backgroundColor:'rgba(0, 122, 94, 1)', width:'120px', fontSize:14}}>Start Shopping</button>
      </div>
    </div>
  )
}

export default EmptyCart
