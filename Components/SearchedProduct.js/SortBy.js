import { Sort } from '@mui/icons-material'
import React, { useState } from 'react'
import '../../App.css'
import { useSearchData } from './SearchDataContext'

function SortBy() {
  const [sortBy, setSortBy] = useState({status:false, value:0})
  const {lowerprice, highestPrice, recommended} = useSearchData()
  function handleToogleSort(){
    setSortBy({...sortBy, status:!sortBy.status})
  }
  function handleChange(e){
    const value = e.target.value
    if(value === 'Lowest price'){
      lowerprice()
    }
    else if(value === 'Highest price'){
      highestPrice()
    }
    else{
      recommended()
    }
  }
  return (
   <>    
    <div className=' relative'>
        <div onClick={handleToogleSort} className=' flex flex-row gap-2 items-center cursor-pointer'>
            <p style={{color:'rgba(0, 0, 0, 0.8)'}}>Sort by </p>
            <button><Sort sx={{color:'rgba(0, 0, 0, 0.5)', fontSize:15}}/></button>
        </div>
        {sortBy.status && <div onClick={(e) => e.stopPropagation()} style={{borderColor:'rgba(0, 0, 0, 0.3)'}} className=' absolute z-10 right-0 border w-50  bg-white rounded-md'>
          <div className=' w-full h-full p-3 flex flex-col gap-3'>
            {['Recommended', 'Lowest price', 'Highest price'].map((elt, indx) => <div key={indx} className=' flex flex-row gap-4'><input value={elt} defaultChecked={elt === 'Recommended'} onChange={handleChange} id={elt} name='sort' type='radio'/><label htmlFor={elt}>{elt}</label></div>)}
          </div>
        </div>}
    </div>
    {sortBy.status &&<div onClick={handleToogleSort} className=' absolute top-0 bottom-0 left-0 right-0 w-screen h-screen overflow-hidden'></div>}

  </>

  )
}

export default SortBy
