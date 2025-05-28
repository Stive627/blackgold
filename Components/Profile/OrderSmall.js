import React, { useState } from 'react'
import CurrOrder from './CurrOrder'
import { useOption } from './OptionContext'

const CurrentUI = () => {
    const {option} = useOption()
  switch(option){
    case 'Current Orders':
      return <CurrOrder/>
    case 'Cancelled':
      return <div><p className=' text-center mt-20'>No delivered order</p></div>
    case 'Delivered':
      return <div><p className=' text-center mt-20'>No cancelled order</p></div>
  }
}
function OrderSmall() {
    const [currOption, setCurrOption] = useState(0)
  return (
    <div>
      <CurrentUI index={currOption}/>
    </div>
  )
}

export default OrderSmall
