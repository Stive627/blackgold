import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SeasonalPick from '../SeasonalPick/SeasonalPick'
import Category from '../Category/Category'
import Product from '../Products/Product'
import axios from 'axios'
import { fetchLink } from '../../Functions/fetchLink'

function HomeBG() {
  const [products, setProducts] = useState(undefined)
  useEffect(()=>{
    axios({url:fetchLink('products'), method:'GET'})
    .then((val)=>{setProducts(val.data); console.log(val.data)})
    .catch(err => console.error(err.response.data))
  },[])
  return (
    <>
      <Navbar/>
      <SeasonalPick/>
      <Category/>
      <Product products={products} setProducts={setProducts}/>
    </>
  )
}

export default HomeBG
