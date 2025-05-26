import React, { useState, useEffect} from 'react'
import RegistrationForm from './RegistrationForm'
import OtpUI from './OtpUI'
import { useRouter } from 'next/navigation'

function Login({log, handleSwitch}) {
    const [number, setNumber] = useState('')
    const [curr, setCurr] = useState(0)
    const [otp, setOtp] = useState(['', '', '', ''])
    const [code, setCode] = useState(1111)
    const [status, setStatus] = useState({success:false, failed:false, wrongMessage:false})
    const bgRouter = useRouter()
    function handleSubmitNumber(e){
        e.preventDefault()
        console.log('I will improve it later')
        setCurr(1)
    }
    useEffect(()=>{
      const joinedOtp = otp.join('')
      if(joinedOtp.length === 4){
        if(+joinedOtp === code){
          setStatus({failed:false, success:true})
          setTimeout(() => {
            bgRouter.push('/profile?indx=1')
          }, 2000);
          
        }
        else{
          console.log(false)
          setStatus({failed:true, success:false, wrongMessage:true})
          setOtp(['', '', '', ''])
          setTimeout(() => {
            setStatus({failed:false, success:false, wrongMessage:true})
          }, 500);

        }
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[otp, code])
    function clearWrongMessage(){
      setStatus({...status, wrongMessage:false})
    }
    if(curr ===0 ) return <RegistrationForm log={log} handleSwitch={handleSwitch} number={number} handleNumber={(e)=> setNumber(e.target.value)} handleSubmitNumber={handleSubmitNumber}/>

    return <OtpUI clearWrongMessage={clearWrongMessage} status={status} code={code} handlePrevious={() => setCurr(0)} otp={otp} setOtp={setOtp} number={number}/>
}

export default Login
