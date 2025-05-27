import { Add, Minimize } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'
import { useScreen } from '../../hooks/useScreen'

function ItemRow({item, addQuantity, reduceQuantity, idx, getRemoved}) {
  const width = useScreen()
  const large = width > 600
  return (
    <div style={{transition:'200ms'}} className={`flex justify-between mt-3 ${idx === 1 && ' border relative bottom-30'}`}>
      <div className=' flex flex-row gap-4'>
        <Image width={large?200:120} height={200} alt='item' src={item.descriptionImages[0]}/>
        <div className=' relative'>
            <p  className=' font-semibold'>{item.name}</p>
            <p>{item.qty} kg</p>
            <div className=' absolute bottom-0'>
            {large &&<div style={{backgroundColor:'rgba(158, 42, 43, 1)'}} className='flex flex-row text-white rounded-md'>
              <button className='relative bottom-2' type='button' onClick={reduceQuantity}><Minimize/></button>
              <button className=' mx-1' type='button'>{item.qty}</button>
              <button className='relative' onClick={addQuantity}><Add sx={{fontSize:23}}/></button>
            </div>}
            <button onClick={getRemoved} style={{color:'rgba(67, 64, 64, 1)', fontSize:14}}>Remove</button>
            </div>
        </div>
      </div>
      <div className=' relative'>
        <p className=' text-[12px] lg:text-[16px] float-right lg:float-none'>CFA {item.newPrice}</p><div></div>
        <p className=' text-[12px] lg:text-[16px] line-through float-right' style={{color:'rgba(146, 146, 146, 1)'}} >CFA {item.lastPrice}</p>
            {!large &&<div style={{backgroundColor:'rgba(158, 42, 43, 1)'}} className=' absolute bottom-0 flex flex-row  text-white rounded-md'>
              <button className='relative bottom-1.5' type='button' onClick={reduceQuantity}><Minimize sx={{fontSize:20}}/></button>
              <button className=' mx-1 text-[13px]' type='button'>{item.qty}</button>
              <button className='' onClick={addQuantity}><Add sx={{fontSize:20}}/></button>
            </div>}
      </div>
    </div>
  )
}

export default ItemRow
