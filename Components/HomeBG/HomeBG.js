import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SeasonalPick from '../SeasonalPick/SeasonalPick'
import Category from '../Category/Category'
import Product from '../Products/Product'
import axios from 'axios'
import { fetchLink } from '../../Functions/fetchLink'
import '../../App.css'
import Logo from '../Logo'
import { useData } from '../../context/DataContext'
import { useSplah } from '../../context/SplashContext'

function HomeBG() {
  const {handleData} = useData()
  const {splash, getSplashed} = useSplah()
  useEffect(()=>{
    const timeId = setTimeout(getSplashed, 700);
    return () => clearTimeout(timeId)
  },[])
  useEffect(()=>{
    axios({url:fetchLink('products'), method:'GET'})
    .then((val)=>{handleData(val.data); console.log(val.data)})
    .catch(err => console.error(err.response.data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  if(!splash) return <div className=' w-full h-screen flex justify-center items-center'><Logo/></div>
  return (
    <div className='h-screen w-screen overflow-x-hidden blackgoldscroll'>
      <Navbar/>
      <SeasonalPick/>
      <Category/>
      <Product />
    </div>
  )
}

export default HomeBG
