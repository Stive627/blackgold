import React, { useEffect, useState } from 'react'
import ProductCard from '../Products/ProductCard';
import { useSearchData } from './SearchDataContext';
import { useShow } from '../../context/ShowContext';

function SmallRightSearch() {
  const [currSubCategory, setCurrSubCategory] = useState(undefined)
  const {show} = useShow()
  const localShow = show.category
  const arr = localShow === 1 ? ['All Fresher ','Fruits', 'Vegetable', 'Seasonal']:['All Starchy Food','Root', 'Green Banana', 'Beans']
  const {data, categorizedProds, subCategorizedProds} = useSearchData()
  const category = ['_', 'Fresh Farm','Starchy Food']

  useEffect(()=>{
    categorizedProds(category[localShow])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function handleChange(indx, elt){
    if(indx === 0){
        setCurrSubCategory('')
        categorizedProds(category[localShow])
    }
    else{
    subCategorizedProds(category[localShow], elt)
    setCurrSubCategory(indx)
    }
  }
  return (
    <>
        <div className=' w-full flex justify-end mt-3'>
            <div className=' flex flex-row gap-1'>
                {arr.map((elt, indx) => <button onClick={()=>handleChange(indx, elt)} key={indx} style={{borderColor:indx=== currSubCategory? 'rgba(41, 142, 119, 1)':'rgba(207, 207, 207, 1)', color:indx=== currSubCategory?'rgba(0, 122, 94, 1)':'black', backgroundColor:indx===0?'rgba(207, 207, 207, 1)':'white'}} className=' border px-2 py-0.5 rounded-lg'>{indx===0 ? elt.split(' ')[0]:elt}</button>)}
            </div>
        </div>
        <div className=' grid grid-cols-2 gap-2 mt-2'>
            {data.map((elt, indx) => <ProductCard key={indx} product={elt}/>)}
        </div>
    </>
  )
}

export default SmallRightSearch
