import React from 'react'
import { useCart } from '../../context/CartContext'

function Summary() {
    const {cart} = useCart()
    const items = [{title:'Number of items', value:cart.items.length},{title:'Item Cost', value:`${cart.total} FCFA`}, {title:'Delivery Cost', value:'100 FCFA'}]
  return (
    <div style={{border:`3px rgba(41, 142, 119, 1) solid`}} className=' p-3 rounded-xl w-80 lg:float-right'>
      <p className=' font-bold text-[18px] mb-4'>Order Summary</p>
      <div className=' flex flex-col gap-3'>
        {items.map((elt, indx) => (

            <div key={indx} className=' flex flex-row justify-between'>
                <p>{elt.title}</p>
                <p>{elt.value}</p>
            </div>
        ))}
      </div>
      <hr style={{color:'rgba(207, 207, 207, 1)'}} className=' my-4'/>
      <div className=' flex justify-between '>
        <p className=' font-bold'>Total Amount</p>
        <p className='font-bold'>{cart.total + 100} FCFA</p>
      </div>
    </div>
  )
}

export default Summary
