import Image from 'next/image'
import React from 'react'
import { fetchLink } from '../Functions/fetchLink'
import '../App.css'

function Logo() {
  return (
    <div className=' relative bg-gray-200'>
        <div className=' absolute w-86 h-86 logoblack  top-7 left-7 rounded-full'> </div>
      <Image alt='blackgold logo' width={400} height={400} src={fetchLink('logo.png')}/>
    </div>
  )
}

export default Logo
