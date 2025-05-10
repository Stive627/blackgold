import Image from 'next/image'
import React from 'react'

function PaymentRaw({content, image, handleClick, hover=true}) {
  return (
    <div onClick={handleClick} className={`${hover ? 'hover:bg-gray-200':'border'}  flex flex-row gap-4 items-center px-2.5  border-gray-200 py-1 rounded-md`}><Image src={image} alt='logo' width={20} height={30}/><p>{content}</p></div>
  )
}

export default PaymentRaw
