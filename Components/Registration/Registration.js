import React from 'react'
import { useScreen } from '../../hooks/useScreen'

function Registration() {
  const width = useScreen()
  return (
    <div className=' absolute top-0  left-0 bottom-0 right-0 overflow-hidden' style={{backgroundColor:'rgba(67, 64, 64, 0.6)'}}>
      <div className=' w-full h-full flex justify-center items-center'>
        <div style={{borderColor:'rgba(67, 67, 67, 1)', width:'700px'}} className='h-96 bg-white border rounded-lg'></div>
      </div>
    </div>
  )
}

export default Registration
