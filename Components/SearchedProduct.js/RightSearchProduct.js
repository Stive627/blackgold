import { ArrowBackIos, FilterList, Sort } from '@mui/icons-material'
import React from 'react'
import { useShow } from '../../context/ShowContext'
import Filter from './Filter'
import SortBy from './SortBy'
import { useScreen } from '../../hooks/useScreen'

function RightSearchProduct({title}) {
    const {handleCategory} = useShow()
    const width = useScreen()
    const large = width > 800
  return (
    <div className={`col-span-7 ${large?'pt-20':'pt-27'} p-4`}>
        <div className=' flex flex-row gap-4 items-center'>
        <button onClick={()=>handleCategory(undefined)} className=' cursor-pointer'><ArrowBackIos/></button>
        <p className=' text-black font-bold text-[28px]'>{title}</p>
        </div>
        <div style={{color:'rgba(0, 0, 0, 0.8)'}} className=' flex  justify-between items-center mt-3'>
            <Filter/>
            <SortBy/>
        </div>
    </div>
  )
}

export default RightSearchProduct
