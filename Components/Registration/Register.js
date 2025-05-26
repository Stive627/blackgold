import React, { useState, useEffect } from 'react'
import RegistrationForm from './RegistrationForm'
import OtpUI from './OtpUI'
import UsernameUI from './UsernameUI'
import { useRouter } from 'next/navigation'

function Register({log, handleSwitch}) {
    const [user, setUser] = useState({number:'', username:''})
    const [curr, setCurr] = useState(0)
    const [status, setStatus] = useState({success:false, failed:false, wrongMessage:false})
    const [code, setCode] = useState(1111)
    const [otp, setOtp] = useState(['', '', '', ''])
    const bgRouter = useRouter()
    useEffect(()=>{
        const joinedOtp = otp.join('')
        if(joinedOtp.length === 4){
        if(+joinedOtp === code){
            setStatus({failed:false, success:true})
            setTimeout(() => {
            setCurr(2)
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
    },[otp, code])

    function handleSubmitNumber(e){
        e.preventDefault()
        setCurr(1)
    }
    function handleSubmit(e){
        e.preventDefault()
        bgRouter.push('/profile?indx=1')
    }
    function clearWrongMessage(){
        setStatus({...status, wrongMessage:false})
    }
    switch(curr){
        case 0:
            return <RegistrationForm  log={log} handleSwitch={handleSwitch} handleNumber={(e) => {setUser({...user, number:e.target.value})}} number={user.number} handleSubmitNumber={handleSubmitNumber}/>
        case 1:
            return <OtpUI clearWrongMessage={clearWrongMessage} status={status} number={user.number} handlePrevious={() => setCurr(prev => prev - 1)} otp={otp} setOtp={setOtp}/>
        case 2:
            return <UsernameUI handleSubmit={handleSubmit} username={user.username} handleUsername={(e) => setUser({...user, username:e.target.value})} />

    }
}

export default Register
