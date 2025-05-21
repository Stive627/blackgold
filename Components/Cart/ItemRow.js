import { Add, Minimize } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

function ItemRow({item, quantity, addQuantity, reduceQuantity, getRemoved}) {
  return (
    <div className=' flex justify-between'>
      <div className=' flex flex-row gap-4'>
        <Image width={200} height={200} alt='item' src={item.descriptionImages[0]}/>
        <div className=' relative'>
            <p className=' font-semibold'>{item.name}</p>
            <p>{quantity} kg</p>
            <div className=' absolute bottom-0'>
            <div style={{backgroundColor:'rgba(158, 42, 43, 1)'}} className=' flex flex-row  text-white rounded-md'>
              {quantity >1 && <button className='relative bottom-2' type='button' onClick={reduceQuantity}><Minimize/></button>}
              <button className=' mx-1' type='button'>{quantity}</button>
              <button className='relative' onClick={addQuantity}><Add sx={{fontSize:23}}/></button>
            </div>
            <button onClick={getRemoved} style={{color:'rgba(67, 64, 64, 1)', fontSize:14}}>Remove</button>
            </div>
        </div>
      </div>
      <div>
        <p>CFA{item.newPrice}</p>
        <p style={{color:'rgba(146, 146, 146, 1)'}} className=' line-through'>CFA {item.lastPrice}</p>
      </div>
    </div>
  )
}

export default ItemRow
