import { ArrowBackIos} from '@mui/icons-material'
import React from 'react'
import { useShow } from '../../context/ShowContext'
import Filter from './Filter'
import SortBy from './SortBy'
import { useScreen } from '../../hooks/useScreen'
import ProductCard from '../Products/ProductCard'
import { useSearchData } from './SearchDataContext'

function RightSearchProduct({title, localShow}) {
    const {handleCategory} = useShow()
    const filterParams = localShow === 1 ? 'Fresh Farm' : 'Starchy Food'
    const {data} = useSearchData()
    const filteredData = /(All Fresher)|(All Starchy Food)/.test(title)? [...data].filter(elt => elt.category === filterParams): [...data].filter(elt => ((elt.category === filterParams)&&(elt.subCategory === title)))
    const width = useScreen()
    const large = width > 800
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
         {large && <div className=' grid grid-cols-6 gap-2 mt-2'>
                      {filteredData.map((elt, indx) => <ProductCard key={indx} product={elt}/>)}
                  </div>}
    </div>
  )
}

export default RightSearchProduct
