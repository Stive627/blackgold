import React, { useState } from 'react'
import { useShow } from '../../context/ShowContext'
import RightSearchProduct from './RightSearchProduct'
import LeftSearchProduct from './LeftSearchProduct'

function SearchedProduct(){
  const {show} = useShow()
  const initialValue = show.category === 1 ? 'All Fresher ' : 'All Starchy Food'
  const [currIndx, setCurrIndx] = useState({indx:0, value:initialValue})

  return (
    <div className=' grid grid-cols-9 h-full'>
      <LeftSearchProduct currIndx={currIndx} setCurrIndx={setCurrIndx}/>
      <RightSearchProduct title={currIndx.value} />
    </div>
  )
}

export default SearchedProduct
