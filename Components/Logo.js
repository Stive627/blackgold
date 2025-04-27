"use client"
import Image from 'next/image'
import React from 'react'
import { fetchLink } from '../Functions/fetchLink'
import '../App.css'
import { useScreen } from '../hooks/useScreen'

function Logo() {
  const width = useScreen()
  const large = width > 600
  return (
    <Image alt='blackgold logo' className='logoblack rounded-full' width={large ? 200 : 150} height={ large ? 200 : 150} src={fetchLink('logoAnim.png')}/>
  )
}

export default Logo
