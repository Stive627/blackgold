import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SeasonalPick from '../SeasonalPick/SeasonalPick'
import Category from '../Category/Category'
import Product from '../Products/Product'
import axios from 'axios'
import { fetchLink } from '../../Functions/fetchLink'
import Registration from '../Registration/Registration'
import '../../App.css'
import useAuth from '../../hooks/useAuth'
import Logo from '../Logo'

function HomeBG() {
  const [products, setProducts] = useState(undefined)
  const [imgSeasonal, setImgSeasonal] = useState(undefined)
  const [regist, setRegist] = useState(undefined)
  const {status} = useAuth()
  const [splash, setSplash] = useState(true)
  useEffect(()=>{
    const timeId = setTimeout(() => setSplash(false), 700);
    return () => clearTimeout(timeId)
  },[])
  useEffect(()=>{
    axios({url:fetchLink('products'), method:'GET'})
    .then((val)=>{setProducts(val.data); console.log(val.data)})
    .catch(err => console.error(err.response.data))
  },[])
  useEffect(()=> {
    axios({url:fetchLink('products/seasonalProducts')})
    .then((value) => setImgSeasonal(value.data))
    .catch(err => console.error(err.response.data))
},[])
  const handleAuthentication = () => {
    if(!status){
      setRegist(true)
    }
  }
  if(splash) return <div className=' w-full h-screen flex justify-center items-center'><Logo/></div>
  return (
    <div className={`h-screen w-screen overflow-x-hidden blackgoldscroll ${regist&& 'overflow-y-hidden'}`}>
      <Navbar/>
      <SeasonalPick imgSeasonal={imgSeasonal}/>
      <Category/>
      <Product handleAuthentication={handleAuthentication} products={products} setProducts={setProducts}/>
      {regist && <Registration setRegist={setRegist}/>}
    </div>
  )
}

export default HomeBG
