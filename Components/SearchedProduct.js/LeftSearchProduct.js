import React, { useState } from 'react'
import { useShow } from '../../context/ShowContext'

function LeftSearchProduct({currIndx, setCurrIndx}) {
    const {show, handleCategory} = useShow()
    const red = 'rgba(214, 16, 16, 1)'
    const showCategory = show.category
    const [currCategory, setCurrCategory] = useState(showCategory)
    function handleChange(category, index, value){
        if(category=== currCategory){
            setCurrIndx({indx:index, value:value})
        }
        else{
            setCurrCategory(category)
            setCurrIndx({indx:index, value:value})
        }
    }
  return (
        <div className=' col-span-2 pt-20 flex justify-center' style={{backgroundColor:'rgba(241, 241, 241, 1)'}}>
          <div className=' h-full  flex flex-col gap-3 w-3/4 '>
            <p className=' font-semibold text-[17px] text-black'>Newly added</p>
            <p onClick={()=> handleCategory(undefined)} className=' font-semibold text-[17px] text-black'>Discounted Items</p>
            <div>
              <p style={{color:currCategory=== 1 ? red : 'black'}} className='font-semibold text-[17px]'>Fresh Farm</p>
              <div className=' flex justify-center w-full'>
                <div className=' w-3/4 flex flex-col gap-2'>
                {['All Fresher ','Fruit', 'Vegetable', 'Seasonal'].map(((elt, indx) => <p onClick={()=> handleChange(1, indx, elt)} style={{color:(currCategory=== 1 && indx === currIndx.indx) ? red : 'black'}}  className=' cursor-pointer' key={indx}>{indx===0 ? elt.split(' ')[0]:elt}</p>))}
                </div>
              </div>
            </div>
            <div>
              <p style={{color:currCategory === 2 ? red : 'black'}} className='font-semibold text-[17px]'>Starchy Food</p>
              <div className=' flex justify-center w-full'>
                <div className=' w-3/4 flex flex-col gap-2'>
                {['All Starchy Food','Root', 'Green Banana', 'Beans'].map(((elt, indx) => <p onClick={()=> handleChange(2, indx, elt)} style={{color:(currCategory=== 2 && indx === currIndx.indx) ? red : 'black'}} className='cursor-pointer' key={indx}>{indx===0 ? elt.split(' ')[0]:elt}</p>))}
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default LeftSearchProduct
