import React, { useState } from 'react'
import { useShow } from '../../context/ShowContext'
import RightSearchProduct from './RightSearchProduct'
import LeftSearchProduct from './LeftSearchProduct'
import { useScreen } from '../../hooks/useScreen'
import SmallRightSearch from './SmallRightSearch'

function SearchedProduct(){
  const {show} = useShow()
  const initialValue = show.category === 1 ? 'All Fresher ' : 'All Starchy Food'
  const [currIndx, setCurrIndx] = useState({indx:0, value:initialValue})
  const width = useScreen()
  const large = width > 800
  return (
    <div className={`${large?'grid  grid-cols-9 h-full p-4':'w-full p-2'}`}>
      {large && <LeftSearchProduct currIndx={currIndx} setCurrIndx={setCurrIndx}/>}
      <RightSearchProduct title={currIndx.value} />
      {!large && <SmallRightSearch/>}
    </div>
  )
}

export default SearchedProduct
