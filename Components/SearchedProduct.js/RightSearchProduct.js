import { ArrowBackIos, FilterList } from '@mui/icons-material'
import React from 'react'
import { useShow } from '../../context/ShowContext'

function RightSearchProduct({title}) {
    const {handleCategory} = useShow()
  return (
    <div className=' col-span-7 pt-20 p-4'>
        <div className=' flex flex-row gap-4 items-center'>
        <button onClick={()=>handleCategory(undefined)} className=' cursor-pointer'><ArrowBackIos/></button>
        <p className=' text-black font-bold text-[28px]'>{title}</p>
        </div>
        <div className=' flex  justify-between'>
            <div>
                <FilterList/>
            </div>
        </div>
    </div>
  )
}

export default RightSearchProduct
