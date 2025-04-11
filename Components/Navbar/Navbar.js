"use client"
import Image from 'next/image'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';
import { fetchLink } from '../../Functions/fetchLink';
import { useScreen } from '../../hooks/useScreen';

function Navbar() {
    const width= useScreen()
  
  if(width <1000){
    return(
      <div style={{backgroundColor:'rgba(41, 142, 119, 1)'}} className=' text-white w-full pt-2 '>
        <div className=' flex flex-row items-center gap-3'>
          <Image width={40} height={40} alt='logo de blackgold' src={fetchLink('logo.png')}/>
          <div className='relative grow'>
              <input className=' border border-none w-full py-1 bg-white text-slate-600 pl-2.5 rounded-md outline-none' placeholder='Search'/>
              <div className=' absolute right-2 top-1 '><SearchIcon className=' text-slate-700'/></div>
          </div>
          <div className=' relative'><AccountCircleIcon/></div>
          <div className=' relative'><LocalGroceryStoreIcon/></div>
        </div>
        <hr className=' w-full bg-white my-1.5'/>
        <div style={{color:'rgba(255, 255, 255, 1)'}} className=' w-full flex justify-between text-[14px] mt-2 py-2'>
          <p><LocationOnIcon/> Delivering to Street 5th, Yaounde</p>
          <button className=' border border-none'>Change location</button>
        </div>
      </div>
    )
  }
  return (
    <div style={{backgroundColor:'rgba(41, 142, 119, 1)'}} className=' text-white w-full px-2 text-[14px] py-1'>
        <div className=' flex flex-row items-center gap-5'>
          <Image width={50} height={50} alt='logo de blackgold' src={fetchLink('logo.png')}/>
            <p className=' text-[24px] font-bold'>Black Gold</p>
            <div className='  ml-6'>
                <p>Deliver to </p>
                <button className=' border border-none '> Select Location {' '}<KeyboardArrowDownIcon className='text-white'/> </button>
            </div>
          <div className='relative grow'>
            <input className=' border border-none w-full py-2 bg-white text-slate-600 pl-2.5 rounded-md outline-none' placeholder='Search'/>
            <div className=' absolute right-2 top-2 '><SearchIcon className=' text-slate-700'/></div>
          </div>
          <div className=' flex flex-row gap-6'>
            <div>
                <p><LanguageIcon/> Language</p>
                <div className=' flex  justify-between'><p className=' relative left-1'>English</p> <button className=' cursor-pointer'><KeyboardArrowDownIcon/></button></div>
            </div>
            <div>
                <AccountCircleIcon/>
                <p>Profile</p>
            </div>
            <div>
                <LocalGroceryStoreIcon/>
                <p>Cart</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar