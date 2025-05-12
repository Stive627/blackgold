import React, { useState } from 'react'
import { useShow } from '../../context/ShowContext';
import ProductCard from '../Products/ProductCard';
import { useSearchData } from './SearchDataContext';

function SmallRightSearch() {
  const [currCategory, setCurrCategory] = useState(1)
  const {show}=useShow()
  const arr = show.category === 1 ? ['All Fresher ','Fruit', 'Vegetable', 'Seasonal']:['All Starchy Food','Root', 'Green Banana', 'Beans']
  const {data} = useSearchData()
  function handleChange(indx){
    if(indx === 0){
        return;
    }
    setCurrCategory(indx)
  }
  return (
    <>
        <div className=' w-full flex justify-end mt-3'>
            <div className=' flex flex-row gap-1'>
                {arr.map((elt, indx) => <button onClick={()=>handleChange(indx)} key={indx} style={{borderColor:indx=== currCategory? 'rgba(41, 142, 119, 1)':'rgba(207, 207, 207, 1)', color:indx=== currCategory?'rgba(0, 122, 94, 1)':'black', backgroundColor:indx===0?'rgba(207, 207, 207, 1)':'white'}} className=' border px-2 py-0.5 rounded-lg'>{indx===0 ? elt.split(' ')[0]:elt}</button>)}
            </div>
        </div>
        <div className=' grid grid-cols-2 gap-2 mt-2'>
            {data.map((elt, indx) => <ProductCard key={indx} product={elt}/>)}
        </div>
    </>
  )
}

export default SmallRightSearch
