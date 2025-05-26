import React, {useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Square from './Square';

function OtpUI({number, handlePrevious, otp, setOtp, status, clearWrongMessage}) {
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
        <button onClick={handlePrevious}><ArrowBackIcon/></button>
        <p className=' font-semibold'>Account Registration</p>
      </div>
      <p>OTP has been sent to {number}</p>
      {status.wrongMessage && <p style={{color:'rgba(203, 35, 37, 1)'}} className=' text-center'>the password is wrong</p>}
      <div className=' flex flex-row gap-3 my-3'>
        {otp.map((elt, indx) => <Square clearWrongMessage={clearWrongMessage} status={status} key={indx} val={elt} setValue={handleValue} indx={indx} currIndx={currIndx} setCurrIndx={setCurrIndx}/>)}
      </div>
      {status.success? <p style={{color:'rgba(203, 35, 37, 1)'}} className=' text-center'>loading...</p> :<button style={{color:'rgba(203, 35, 37, 1)'}}>Resend Code</button>}
    </>
  )
}

export default OtpUI
