import { ArrowBackIos, FilterList, Sort } from '@mui/icons-material'
import React from 'react'
import { useShow } from '../../context/ShowContext'
import Filter from './Filter'
import SortBy from './SortBy'
import { useScreen } from '../../hooks/useScreen'
import ProductCard from '../Products/ProductCard'
import { useData } from '../../context/DataContext'

function RightSearchProduct({title}) {
    const {handleCategory} = useShow()
    const width = useScreen()
    const large = width > 800
    const {data} = useData()
  return (
    <div className={`col-span-7 ${large?'pt-20 ml-3':'pt-27'}`}>
        <div className=' flex flex-row gap-4 items-center'>
        <button onClick={()=>handleCategory(undefined)} className=' cursor-pointer'><ArrowBackIos/></button>
        <p className={`text-black font-bold ${large ? 'text-[28px]':' text-[24px]'}`}>{title}</p>
        </div>
        <div style={{color:'rgba(0, 0, 0, 0.8)'}} className=' flex  justify-between items-center mt-3'>
            <Filter/>
            <SortBy/>
        </div>
         <div className=' grid grid-cols-6 gap-2 mt-2'>
            {[...data].map((elt, indx) => <ProductCard key={indx} product={elt}/>)}
        </div>
    </div>
  )
}

export default RightSearchProduct
