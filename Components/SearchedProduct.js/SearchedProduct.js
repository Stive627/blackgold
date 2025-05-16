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
  const initialValue = decodeURI(params.get('category')) === 'Farm Fresh' ? 'All Fresher ' : 'All Starchy Food'
  const initialIndx = initialValue === 'All Fresher '? 1: 2
  const [currIndx, setCurrIndx] = useState({indx:0, value:initialValue})
  const [localShow, setLocalShow] = useState(initialIndx)
  const width = useScreen()
  const large = width > 800
  return (
    <SearchDataProvider products={data}>
      <div className={`${large?'grid  grid-cols-9 h-screen':'w-full p-2'}`}>
        {large && <LeftSearchProduct setLocalShow={setLocalShow} localShow={localShow} currIndx={currIndx} setCurrIndx={setCurrIndx}/>}
        <RightSearchProduct localShow={localShow} title={currIndx.value} />
        {!large && <SmallRightSearch/>}
      </div>
    </SearchDataProvider>
  )
}

export default SearchedProduct
