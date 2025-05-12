import React, { useState } from 'react'
import { useShow } from '../../context/ShowContext'
import RightSearchProduct from './RightSearchProduct'
import LeftSearchProduct from './LeftSearchProduct'
import { useScreen } from '../../hooks/useScreen'
import SmallRightSearch from './SmallRightSearch'
import { useData } from '../../context/DataContext'
import { SearchDataProvider } from './SearchDataContext'

function SearchedProduct(){
  const {data} = useData()
  const {show} = useShow()
  const initialValue = show.category === 1 ? 'All Fresher ' : 'All Starchy Food'
  const [currIndx, setCurrIndx] = useState({indx:0, value:initialValue})
  const width = useScreen()
  console.log(data)
  const large = width > 800
  return (
    <SearchDataProvider products={data}>
      <div className={`${large?'grid  grid-cols-9 h-full p-4':'w-full p-2'}`}>
        {large && <LeftSearchProduct currIndx={currIndx} setCurrIndx={setCurrIndx}/>}
        <RightSearchProduct title={currIndx.value} />
        {!large && <SmallRightSearch />}
      </div>
    </SearchDataProvider>
  )
}

export default SearchedProduct
