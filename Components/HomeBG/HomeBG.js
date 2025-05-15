import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SeasonalPick from '../SeasonalPick/SeasonalPick'
import Category from '../Category/Category'
import Product from '../Products/Product'
import axios from 'axios'
import { fetchLink } from '../../Functions/fetchLink'
import Registration from '../Registration/Registration'
import '../../App.css'
import Logo from '../Logo'
import Profile from '../Profile/Profile'
import { useData } from '../../context/DataContext'
import { useShow } from '../../context/ShowContext'
import SearchedProduct from '../SearchedProduct.js/SearchedProduct'

function HomeBG() {
  const [regist, setRegist] = useState(undefined)
  const {handleData} = useData()
  const [splash, setSplash] = useState(true)
  const {show} = useShow()
  useEffect(()=>{
    const timeId = setTimeout(() => setSplash(false), 700);
    return () => clearTimeout(timeId)
  },[])
  useEffect(()=>{
    axios({url:fetchLink('products'), method:'GET'})
    .then((val)=>{handleData(val.data)})
    .catch(err => console.error(err.response.data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const HomeContent = () => {
    if(show.profile){
      return <Profile/>
    }
    else if(show.category){
      return <SearchedProduct/>
    }
    else{
      return( 
      <>
        <SeasonalPick/>
        <Category/>
        <Product />
      </>)
    }
  }

  if(splash) return <div className=' w-full h-screen flex justify-center items-center'><Logo/></div>
  return (
    <div className={`h-screen w-screen overflow-x-hidden blackgoldscroll ${regist&& 'overflow-y-hidden'}`}>
      <Navbar/>
      <HomeContent/>
      {regist && <Registration setRegist={setRegist}/>}
    </div>
  )
}

export default HomeBG
