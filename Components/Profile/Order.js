import React, { useState } from 'react'
import CurrOrder from './CurrOrder'

const CurrentUI = ({index}) => {
  switch(index){
    case 0:
      return <CurrOrder/>
    case 1:
      return <div><p className=' text-center mt-20'>No delivered order</p></div>
    case 2:
      return <div><p className=' text-center mt-20'>No cancelled order</p></div>
  }
}

function Order() {
  const [currOption, setCurrOption] = useState(0)

  return (
    <div className=' w-1/2'>
      <div className=' flex justify-center'>
        <div className=' flex justify-between w-1/2'>
          {['Current Orders', 'Delivered', 'Cancelled'].map((elt, indx) => <button style={{fontWeight:indx === currOption ? 'bold':'normal', textDecorationLine: indx === currOption? 'underline':'none', textUnderlineOffset:5, cursor:'pointer'}}  onClick={()=>setCurrOption(indx)} key={indx}>{elt}</button>)}
        </div>
      </div>
      <CurrentUI index={currOption}/>
    </div>
  )
}

export default Order
