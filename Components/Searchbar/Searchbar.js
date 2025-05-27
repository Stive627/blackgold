import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useScreen } from '../../hooks/useScreen';
import { Close } from '@mui/icons-material';
import Image from 'next/image';
import axios from 'axios';
import { fetchLink } from '../../Functions/fetchLink';
import { useRouter } from 'next/navigation';

const SingleSearchRow = ({elt, handleDelete, indx, handleClick}) => {
  const [hover, setHover] = useState(false)
  return <div onClick={handleClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=> setHover(false)} className=' flex justify-between px-2 hover:bg-gray-200'><p className=' text-black py-1 '>{elt}</p><button onClick={()=>handleDelete(indx)}><Close sx={{color:hover?'gray':'white', cursor:'pointer'}}/></button></div>
}

function Searchbar() {
    const [data, setData] = useState()
    const [userInput, setUserInput] = useState('')
    const [show, setShow] = useState(false)
    const [localData, setLocalData] = useState(undefined)
    useEffect(() =>{
      axios({url:fetchLink('products'), method:'GET'})
      .then(value => setData(value.data))
      .catch(err => console.log(err))
    },[])
    const width = useScreen()
    const large = width > 800
    const names = data?.map(elt => elt.name)
    const matchArr2 = names?.filter(elt => elt.toLowerCase().includes(userInput.toLowerCase()))
    function handleChange(e){
      const value = e.target.value
      const matchArr = names?.filter(elt => elt.toLowerCase().includes(value.toLowerCase()))
      setLocalData(matchArr)
      setUserInput(value)
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
    const bgRouter = useRouter()
    function handleRedirect(name){
      const product = data.find(elt => elt.name = name)
      console.log(product._id)
      bgRouter.push(`/filter?category=${product.category}&subCategory=${product.subCategory}&id=${product._id}`)
    }
  return (
    <>
      <div className=' relative grow'>
        <div className='relative z-10'>
            <input id='search' onFocus={handleFocus}  className={`border border-none w-full ${large ? 'py-2':'py-1.5'} bg-white text-slate-600 pl-2.5 rounded-t-md outline-none ${!show && 'rounded-b-md'}`} placeholder='Search ' onChange={handleChange}/>
            <div className=' absolute right-2 top-1.5 '><SearchIcon className=' text-slate-700'/></div>
        </div>
        <hr style={{color:'rgba(146, 146, 146, 1)'}}/>
        {show && (userInput && matchArr2.length === 0 ? 
        <div className=' absolute z-10  w-full bg-white rounded-b-md p-2'>
          <div className=' flex justify-center'><Image alt='no keyword found' width={300} height={300} src={'https://blackgold-bucket.s3.ap-south-1.amazonaws.com/Screenshot%20from%202025-05-10%2011-12-51.png'}/></div>
          <p className=' text-black text-center'>Sorry, No results found</p>
        </div>
         :
          <div htmlFor='search' className=' absolute z-10  w-full bg-white rounded-b-md'>
            <div onClick={(e)=>e.stopPropagation()} className=' w-full h-full flex flex-col divide-y divide-gray-200'>
              {localData?.map((elt, indx) => <SingleSearchRow handleClick={(e)=> {e.stopPropagation();setShow(false); handleRedirect(elt) }} indx={indx} key={indx} elt={elt} handleDelete={handleDelete}/> )}
            </div>
          </div>)}
        </div>
      {show && <div onClick={handleBlur} className=' absolute right-0 left-0 top-0 bottom-0 h-screen w-screen   z-0'></div>}
    </>
  )
}

export default Searchbar
