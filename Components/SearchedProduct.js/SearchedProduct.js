import React, { useState } from 'react'
import RightSearchProduct from './RightSearchProduct'
import LeftSearchProduct from './LeftSearchProduct'
import { useScreen } from '../../hooks/useScreen'
import SmallRightSearch from './SmallRightSearch'
import { useData } from '../../context/DataContext'
import { SearchDataProvider } from './SearchDataContext'
import { useSearchParams } from 'next/navigation'

function SearchedProduct(){
  const {data} = useData()
  const params = useSearchParams()
  const category = decodeURI(params.get('category')) 
  const categoryIndx = category === 'Farm Fresh'? 0 : 1
  const [filter, setFilter] = useState({categoryIndx:0, category:category})
  const [localShow, setLocalShow] = useState(categoryIndx)
  const id = params.get('id')
  const width = useScreen()
  const large = width > 800
  return (
    <SearchDataProvider products={data}>
      <div className={`${large?'grid  grid-cols-9 h-screen':'w-full p-2'}`}>
        {id ? 
          <>

          </>
          :
          <>
        {large && <LeftSearchProduct setLocalShow={setLocalShow} localShow={localShow} filter={filter} setFilter={setFilter}/>}
        <RightSearchProduct localShow={localShow} title={filter.category} />
        {!large && <SmallRightSearch/>}
          </>}

      </div>
    </SearchDataProvider>
  )
}

export default SearchedProduct
