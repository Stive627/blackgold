import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Square from './Square';

function OtpUI({number, handlePrevious, otp, setOtp}) {
    const [currIndx, setCurrIndx] = useState(0)
    const handleValue = (indx, val) => {
        const newOtp = [...otp]
        newOtp[indx] = val
        setOtp(newOtp)
        setCurrIndx(currIndx + 1)
    }
  return (
    <>
      <div className=' flex flex-row mt-7 mb-4 items-center gap-3'>
        <button onClick={()=> handlePrevious()}><ArrowBackIcon/></button>
        <p className=' font-semibold'>Account Registration</p>
      </div>
      <p>OTP has been sent to {number}</p>
      <div className=' flex flex-row gap-3 my-3'>
        {otp.map((elt, indx) => <Square key={indx} val={elt} setValue={handleValue} indx={indx} currIndx={currIndx} setCurrIndx={setCurrIndx}/>)}
      </div>
      <p style={{color:'rgba(203, 35, 37, 1)'}}>Resend Code</p>
    </>
  )
}

export default OtpUI
