import React, { useState } from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckIcon from '@mui/icons-material/Check';

function Language() {
    const [currIndx, setCurrIndx] = useState(0)
    const [show, setShow] = useState(false)
  return (
    <div className=' relative'>
        <p><LanguageIcon/> Language</p>
        <button onClick={()=> setShow(!show)} className=' relative left-6 cursor-pointer'>{currIndx===0?'English':'French'} <span className=' cursor-pointer'><KeyboardArrowDownIcon/></span></button> 
        {show && <div className=' absolute border w-40 border-gray-300 rounded-md text-black bg-white z-10'>
                    <div className=' flex flex-col gap-2 p-2'>
                        <button onClick={()=> {setCurrIndx(0); setShow(false)}} className=' flex flex-row gap-1 cursor-pointer'><CheckIcon sx={{color:currIndx === 0? 'black':'white'}}/> <p>English (Anglais)</p></button>
                        <button onClick={()=> {setCurrIndx(1); setShow(false)}} className=' flex flex-row gap-1 cursor-pointer'><CheckIcon sx={{color:currIndx === 1? 'black':'white'}}/> <p>French (Français)</p></button>
                    </div>
                </div>
        }
    </div>
  )
}

export default Language
