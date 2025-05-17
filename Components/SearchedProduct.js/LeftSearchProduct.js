import React, { useState } from 'react'

function LeftSearchProduct({filter, setFilter, localShow, setLocalShow}) {
    const red = 'rgba(214, 16, 16, 1)'
    const [currCategory, setCurrCategory] = useState(localShow)
    function handleChange(category, index, value){
        if(category=== currCategory){
            setFilter({categoryIndx:index, category:value})
            setLocalShow(category)
        }
        else{
            setCurrCategory(category)
            setFilter({categoryIndx:index, category:value})
            setLocalShow(category)
        }
    }
  return (
        <div className=' col-span-2 pt-20 flex justify-center' style={{backgroundColor:'rgba(241, 241, 241, 1)'}}>
          <div className=' h-full  flex flex-col gap-3 w-3/4 '>
            <p className=' font-semibold text-[17px] text-black'>Newly added</p>
            <p className=' font-semibold text-[17px] text-black'>Discounted Items</p>
            <div>
              <p style={{color:currCategory=== 0 ? red : 'black'}} className='font-semibold text-[17px]'>Farm Fresh</p>
              <div className=' flex justify-center w-full'>
                <div className=' w-3/4 flex flex-col gap-2'>
                {['All Fresher','Fruits', 'Vegetable', 'Seasonal'].map(((elt, indx) => <p onClick={()=> handleChange(0, indx, elt)} style={{color:(currCategory=== 0 && indx === filter.categoryIndx) ? red : 'black'}}  className=' cursor-pointer' key={indx}>{indx===0 ? elt.split(' ')[0]:elt}</p>))}
                </div>
              </div>
            </div>
            <div>
              <p style={{color:currCategory === 1 ? red : 'black'}} className='font-semibold text-[17px]'>Starchy Food</p>
              <div className=' flex justify-center w-full'>
                <div className=' w-3/4 flex flex-col gap-2'>
                  {['All Starchy Food','Root', 'Green Banana', 'Beans'].map(((elt, indx) => <p onClick={()=> handleChange(1, indx, elt)} style={{color:(currCategory=== 1 && indx === filter.categoryIndx) ? red : 'black'}} className='cursor-pointer' key={indx}>{indx===0 ? elt.split(' ')[0]:elt}</p>))}
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default LeftSearchProduct
