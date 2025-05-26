import React, { useState } from 'react'
import { useScreen } from '../../hooks/useScreen'
import Image from 'next/image'
import { fetchLink } from '../../Functions/fetchLink'
import Login from './Login'
import Register from './Register'

function Registration({show}) {
  const width = useScreen()
  const [log, setLog] = useState(true)

  if(show){
  return (
    <div className=' absolute top-0  left-0 bottom-0 right-0 overflow-hidden' style={{backgroundColor:'rgba(67, 64, 64, 0.6)'}}>
      <div className=' w-full h-full flex justify-center items-center'>
        <div style={{borderColor:'rgba(67, 67, 67, 1)', width:width>725?'700px':width>500?'500px':width > 400?'380px':'340px'}} className={`bg-white border rounded-lg p-4 flex justify-center`}>
          <div>
            <div className=' flex justify-center'>
              <div className=' flex flex-row items-center gap-4 '>
                  <Image alt='logo Blackgold' src={fetchLink('logo.png')} width={50} height={50}/>
                  <p className='text-[28px] font-bold'>Black Gold</p>
              </div>
            </div>
            {log? <Login log={log} handleSwitch={() => setLog(prev => !prev)}/> : <Register log={log} handleSwitch={() => setLog(prev => !prev)}/>}
          </div>
        </div>
      </div>
    </div>
  )}
}

export default Registration
