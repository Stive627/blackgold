import React, { useState } from 'react'
import { useScreen } from '../../hooks/useScreen'
import Image from 'next/image'
import { fetchLink } from '../../Functions/fetchLink'
import RegistrationForm from './RegistrationForm'
import OtpUI from './OtpUI'
import UsernameUI from './UsernameUI'

function Registration({setRegist}) {
  const width = useScreen()
  const [number, setNumber] = useState('')
  const [username, setUsername] = useState('')
  const [otp, setOtp] = useState(['', '', '', ''])
  const [currIndx, setCurrIndx] = useState(0)
  const handleSubmitNumber = (e) => {
    e.preventDefault()
  }
  const handlePrevious = ()=>{
    if(currIndx){
      setCurrIndx(currIndx -1)
    }
  }
  const ui = [<RegistrationForm key={0} number={number} setNumber={setNumber} handleSubmitNumber={handleSubmitNumber}/>, <OtpUI key={1} handlePrevious={handlePrevious} otp={otp} setOtp={setOtp}/>, <UsernameUI key={2} username={username} setUsername={setUsername}/>]
  return (
    <div onClick={()=> setRegist(false)} className=' absolute top-0  left-0 bottom-0 right-0 overflow-hidden' style={{backgroundColor:'rgba(67, 64, 64, 0.6)'}}>
      <div className=' w-full h-full flex justify-center items-center'>
        <div onClick={(e)=> e.stopPropagation() } style={{borderColor:'rgba(67, 67, 67, 1)', width:width>725?'700px':width>500?'500px':width > 400?'380px':'340px'}} className={`bg-white border rounded-lg p-4 flex justify-center`}>
        <div>
          <div className=' flex justify-center'>
          <div className=' flex flex-row items-center gap-4 '>
              <Image alt='logo Blackgold' src={fetchLink('logo.png')} width={50} height={50}/>
              <p className='text-[28px] font-bold'>Black Gold</p>
          </div>
          </div>
          {ui[currIndx]}
          </div>
        </div>
        </div>
      </div>
  )
}

export default Registration
