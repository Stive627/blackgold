import { ArrowBackIos} from '@mui/icons-material'
import React from 'react'
import Filter from './Filter'
import SortBy from './SortBy'
import { useScreen } from '../../hooks/useScreen'
import ProductCard from '../Products/ProductCard'
import { useSearchData } from './SearchDataContext'
import { useRouter } from 'next/navigation'

function RightSearchProduct({title, localShow}) {
    const filterParams = localShow === 0 ? 'Farm Fresh' : 'Starchy Food'
    const {data} = useSearchData()
    const filteredData = /(Farm Fresh)|(Starchy Food)|(All Starchy Food)|(All Fresher)/.test(title)? [...data].filter(elt => elt.category === filterParams): [...data].filter(elt => ((elt.category === filterParams)&&(elt.subCategory === title)))
    const width = useScreen()
    const large = width > 800
    const bgRouter = useRouter()
  return (
    <div className={`col-span-7 ${large?'pt-15 pr-4 ml-3':'pt-27'}`}>
        <div className=' flex flex-row gap-4 items-center mx-2 lg:mx-0'>
          <button onClick={()=> bgRouter.back()} className=' cursor-pointer'><ArrowBackIos/></button>
          <p className={`text-black font-bold ${large ? 'text-[28px]':' text-[24px]'}`}>{title}</p>
        </div>
        <div style={{color:'rgba(0, 0, 0, 0.8)'}} className=' mx-2 lg:mx-0 flex  justify-between items-center my-3'>
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
