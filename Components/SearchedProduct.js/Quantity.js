import { KeyboardArrowDown } from '@mui/icons-material'
import React, { useState } from 'react'
import './swiper.css'

function Quantity() {
    const [quantity, setQuantity] = useState(undefined)
    const quantities = ['250g', '500g', '1 kg', '2 kg', ]
  return (
    <div className=' flex flex-row gap-4'>
    <p>Qty 1 kg{' '}</p>
    <select className=' outline-none border w-20 rounded-sm' defaultValue={"1 kg"} value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
        {quantities.map((elt, indx) => <option className=' option' key={indx} value={elt}>{elt}</option>)}
    </select>

    </div>
  )
}

export default Quantity
