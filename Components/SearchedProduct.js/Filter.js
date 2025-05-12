import { FilterList } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import '../../App.css'
import { useSearchData } from './SearchDataContext'

function Filter() {
    const [show, setShow] = useState(false)
    const [hover, setHover] = useState(false)
    const {filter, handleFilter} = useSearchData()
    const percentage = (filter -100)/20
    function handleToogleFilter(){
        setShow(!show)
    }
    useEffect(()=>{
        if(!hover){
          var timeId =   setTimeout(() => {
                if(!hover){
                setShow(false)
                }}, 4000);
        }
        return () => clearTimeout(timeId)
    },[hover])

  return (
    <>
        <div onMouseLeave={()=>setHover(false)} onMouseMove={()=>setHover(true)} onMouseEnter={()=>setHover(true)} className=' relative'>
            <div onClick={handleToogleFilter} className=' flex flex-row items-center gap-9 cursor-pointer'>
                <div className=' flex flex-row items-center gap-3'><button><FilterList sx={{color:'rgba(0, 0, 0, 0.5)', fontSize:19, cursor:'pointer'}}/></button><p className='text-[12px]' style={{fontSize:15}}>Filter</p></div>
                <p className=' text-[11px] font-semibold'>1-2000 FCFA </p>
            </div>
            {show && <div onClick={(e) => e.stopPropagation()} style={{borderColor:'rgba(0, 0, 0, 0.3)'}} className=' absolute z-30 border w-60  bg-white rounded-md shadow-2xl'>
                                    <div className=' w-full h-full p-3'>
                                        <p>Price Range</p>
                                        <div className=' flex flex-row justify-between text-[12px]'><p>100 FCFA</p><p>{+filter === 100 ? 2000 : filter} FCFA</p></div>
                                        <input style={{background:`linear-gradient(to right, #007A5E ${percentage}% , gray ${0}%)`}} type='range' min={100} max={2000} value={filter} onChange={handleFilter} className=' w-full slider'/>
                                    </div>
                                </div>}
        </div>
        {show &&<div onClick={handleToogleFilter} className=' absolute top-0 bottom-0 left-0 right-0 w-screen h-screen overflow-hidden z-20'></div>}
    </>
  )
}

export default Filter
