"use client"
import React from 'react'
import { useScreen } from '../../hooks/useScreen'
import '../../App.css'

function SeasonalPick() {
    const large = useScreen()
  return (
    <div className={` w-screen h-40  flex justify-between seasonlinear py-3 mt-4 ${large ? 'px-4' : 'px-2'}`}>

        <div>
            <p className=' text-[32px] font-bold'>Seasonal Picks</p>
            <p className='text-[16px]'>Fresh picks, only for the season!</p>
            <button style={{backgroundColor:'rgba(2, 48, 71, 1)', color:'white', marginTop:'30px', padding:'8px', borderRadius:'10px', fontSize:'16px', cursor:'pointer'}}>Order now</button>
        </div>
        <div className=' relative'>
            <div className=' flex flex-row'>
                
            </div>
        </div>
      
    </div>
  )
}

export default SeasonalPick
