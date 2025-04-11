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

function HomeBG() {
  const [products, setProducts] = useState(undefined)
  const [imgSeasonal, setImgSeasonal] = useState(undefined)
  const {status} = useAuth()
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
  return (
    <div className=' h-screen w-screen overflow-x-hidden blackgoldscroll'>
      <Navbar/>
      <SeasonalPick imgSeasonal={imgSeasonal}/>
      <Category/>
      <Product products={products} setProducts={setProducts}/>
      {/* <Registration/> */}
    </div>
  )
}

export default HomeBG
