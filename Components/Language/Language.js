import React, { useState } from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckIcon from '@mui/icons-material/Check';
import { useLang } from '../../context/LangContext';
import getLanguage from '../../Functions/getLanguage';

function Language() {
    const [show, setShow] = useState(false)
    const {lang, toggleLang} = useLang()
    const language = getLanguage(lang)
  return (
    <div className=' relative'>
        <p><LanguageIcon/>{language['language']}</p>
        <button onClick={()=> setShow(!show)} className=' relative left-6 cursor-pointer'>{lang==='en-US'?'English':'French'} <span className=' cursor-pointer'><KeyboardArrowDownIcon/></span></button> 
        {show && <div className=' absolute border w-40 border-gray-300 rounded-md text-black bg-white z-10'>
                    <div className=' flex flex-col gap-2 p-2'>
                        <button onClick={()=> {setShow(false); toggleLang()}} className=' flex flex-row gap-1 cursor-pointer'><CheckIcon sx={{color:lang === 'en-US'? 'black':'white'}}/> <p>English (Anglais)</p></button>
                        <button onClick={()=> {setShow(false); toggleLang()}} className=' flex flex-row gap-1 cursor-pointer'><CheckIcon sx={{color:lang === 'fr'? 'black':'white'}}/> <p>French (Français)</p></button>
                    </div>
                </div>
        }
    </div>
  )
}

export default Language
