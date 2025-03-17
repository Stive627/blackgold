"use client"
import { fetchLink, useScreen } from '@/app/logic/logic'
import Image from 'next/image'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';

function Navbar() {
    const large = useScreen()
  
  if(!large){
    return(
      <div style={{backgroundColor:'rgba(41, 142, 119, 1)'}} className=' text-white w-full px-1'>
        <div className=' flex flex-row items-center gap-3'>
          <Image width={60} height={60} alt='logo de blackgold' src={fetchLink('images/logo.png')}/>
          <div className='relative grow'>
              <input className=' border w-full py-1 bg-white text-slate-600 pl-2.5 rounded-md outline-none' placeholder='Search'/>
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
    <div style={{backgroundColor:'rgba(41, 142, 119, 1)'}} className=' text-white w-full px-2 text-[14px]'>
        <div className=' flex flex-row items-center gap-5'>
          <Image width={70} height={70} alt='logo de blackgold' src={fetchLink('images/logo.png')}/>
            <p className=' text-[24px]'>Black Gold</p>
            <div className='  ml-6'>
                <p>Deliver to </p>
                <button className=' border border-none '> Select Location {' '}<KeyboardArrowDownIcon className='text-white'/> </button>
            </div>
          <div className='relative grow'>
            <input className=' border w-full py-1 bg-white text-slate-600 pl-2.5 rounded-md outline-none' placeholder='Search'/>
            <div className=' absolute right-2 top-1 '><SearchIcon className=' text-slate-700'/></div>
          </div>
          <div>
              <p><LanguageIcon/> Language</p>
              <div className=' flex justify-end'><p className=''>English <button><KeyboardArrowDownIcon/></button></p></div>
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
  )
}

export default Navbar