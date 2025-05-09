import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useScreen } from '../../hooks/useScreen';
import { Close } from '@mui/icons-material';

const SingleSearchRow = ({elt, handleDelete, indx}) => {
  const [hover, setHover] = useState(false)
  return <div onClick={(e)=> e.stopPropagation()} onMouseEnter={()=>setHover(true)} onMouseLeave={()=> setHover(false)} className=' flex justify-between px-2 hover:bg-gray-200'><p className=' text-black py-1 '>{elt}</p><button onClick={()=>handleDelete(indx)}><Close sx={{color:hover?'gray':'white', cursor:'pointer'}}/></button></div>
}

function Searchbar() {
    const [userInput, setUserInput] = useState('')
    const [show, setShow] = useState(false)
    const [localData, setLocalData] = useState(undefined)
    const width = useScreen()
    const large = width > 800

    function handleChange(e){
      setUserInput(e.target.value)
    }

    function handleFocus(){
      setShow(true)
      const searchData = localStorage.getItem('searchData')
      if(searchData){
        const dat = [...new Set(searchData.split(','))].filter(elt => elt && elt.length > 4)
        setLocalData(dat)
      }

    }

    function handleBlur(){
      setUserInput('stive')

      const searchData = localStorage.getItem('searchData')
      if(!searchData){
        if(userInput){
          localStorage.setItem('searchData', [userInput])
        }
      }
      else{
        if(userInput.length > 0){
        localStorage.setItem('searchData', [...localData, userInput])

       }
      }
      setShow(false)
    }
    function handleDelete(idx){
      const arr = [...localData]
      const finalArr = arr.filter((elt, indx) => indx !== idx)
      setLocalData(finalArr)
      console.log('clicked')
    }
  return (
    <>
      <div className=' relative grow'>
        <div className='relative z-0'>
            <input id='search' onFocus={handleFocus}  className={`border border-none w-full ${large ? 'py-2':'py-1.5'} bg-white text-slate-600 pl-2.5 rounded-t-md outline-none ${!show && 'rounded-b-md'}`} placeholder='Search 3' onChange={handleChange}/>
            <div className=' absolute right-2 top-1.5 '><SearchIcon className=' text-slate-700'/></div>
        </div>
        <hr style={{color:'rgba(146, 146, 146, 1)'}}/>
        {show && <div htmlFor='search' className=' absolute z-0  w-full bg-white rounded-b-md'>
                        <div onClick={(e)=>e.stopPropagation()} className=' w-full h-full flex flex-col divide-y divide-gray-200'>
                          {localData?.map((elt, indx) => <SingleSearchRow indx={indx} key={indx} elt={elt} handleDelete={handleDelete}/> )}
                        </div>
                      </div>}
        </div>
      {show && <div onClick={handleBlur} className=' absolute right-0 left-0 top-0 bottom-0 h-screen w-screen -z-10'></div>}
    </>
  )
}

export default Searchbar
