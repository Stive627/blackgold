import { FilterList } from '@mui/icons-material'
import React, { useState } from 'react'

function Filter() {
    const [filter, setFilter] = useState({status:false, value:1})
    function handleChange(e){
        setFilter({...filter, value:e.target.value})
    }
    function handleToogleFilter(){
        setFilter({...filter, status:!filter.status})
    }
  return (
    <div className=' relative'>
        <div onClick={handleToogleFilter} className=' flex flex-row items-center gap-9 cursor-pointer'>
            <div className=' flex flex-row items-center gap-3'><button><FilterList sx={{color:'rgba(0, 0, 0, 0.5)', fontSize:19, cursor:'pointer'}}/></button><p className='text-[12px]' style={{fontSize:15}}>Filter</p></div>
            <p className=' text-[10px]'>1-2000 FCFA</p>
        </div>
        {filter.status && <div style={{borderColor:'rgba(0, 0, 0, 0.3)'}} className=' absolute border w-60 h-36 bg-white rounded-md'>
                                <div className=' w-full h-full p-3'>
                                    <p>Price Range</p>
                                    <div className=' flex flex-row justify-between'><p>1 FCFA</p><p>{filter.value} FCFA</p></div>
                                    <input type='range' min={1} max={2000} value={filter.value} onChange={handleChange} className=' w-full text-red-600'/>
                                </div>
                            </div>}
    </div>
  )
}

export default Filter
