import React, { useEffect, useRef, useState } from 'react'
import { useScreen } from '../../hooks/useScreen'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import InputField from './InputField';
import money from '../../public/images/money.png'
import orange from '../../public/images/orange.png'
import mtn from '../../public/images/mtn.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PaymentRaw from './PaymentRaw';
import '../../App.css'
import { ExpandLess } from '@mui/icons-material';
import SuccessMessage from './SuccessMessage';

export const payments = [
    {image:orange, content:'Orange Money'},
    {image:mtn, content:'Mtn Mobile Money'},
    {image:money, content:'Cash on  Delivery'}
]


function ProfileLarge({handleToogleProfile}) {
    const width = useScreen()
    const formRef = useRef()
    const [currOption, setCurrOption] = useState(0)
    const [expand, setExpand] = useState(false)
    const [success, setSuccess] = useState(false)
    const [userInfo, setUserInfo] = useState({name:'', phone:'', email:'', address:'', paymentMethod:'', edit:true, apartement:'', street:'', neighbourhood:'', bp:''})
    function handleSelectOption(indx){
        setCurrOption(indx)
    }
    function handleSubmit(e){
        e.preventDefault()
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
            setUserInfo({...userInfo, edit:false})
        }, 1200);
        console.log('clicked')
    }
    function handleEdit(){
        setUserInfo({...userInfo, edit:true})
    }

    function handleExpand(){
        if(userInfo.edit){
            setExpand(!expand)
        }
    }
    useEffect(()=>{
        if(userInfo.paymentMethod){
            formRef.current.style.height = '370px'
            scrollTo({top:'-100px', behavior:'smooth'})
        }

    }, [userInfo.paymentMethod])
    const validForm = userInfo.name && userInfo.phone && userInfo.address && userInfo.paymentMethod && userInfo.bp && userInfo.street && userInfo.apartement
  return (
    <div className={`${width<1000 ?'mt-25':'mt-15 grid grid-cols-5 divide-x divide-gray-300'}  h-full`}>
        <div className=' col-span-1 pt-7 pl-5'>
            <div className=' flex flex-col gap-3'>
                {['Account', 'Orders', 'Help and Feedback'].map((elt, indx) => <p onClick={()=>handleSelectOption(indx)} className={` cursor-pointer ${indx === currOption && 'font-bold text-[18px] underline'}`} key={indx}>{elt}</p>)}
            </div>
        </div>

        <div className=' col-span-4'>
            <div className=' flex flex-row gap-9 mt-8 ml-5'> <button onClick={handleToogleProfile} className=' cursor-pointer'><ArrowBackIosIcon sx={{color:'rgba(67, 64, 64, 1)'}}/></button> <p className=' text-[24px] font-bold '>Account</p></div>
            <div className=' flex flex-col justify-center gap-3 w-ful items-center mt-10'>
                <form onSubmit={handleSubmit} className=' w-1/3 flex flex-col gap-5 '>
                    <InputField detail={{name:'name', label:'Name', value:userInfo.name, setUserInfo, userInfo, placeholder:'Enter your name'}}/>
                    <InputField detail={{name:'phone', label:'Phone number', value:userInfo.phone, setUserInfo, userInfo, placeholder:'Enter your phone number'}}/>
                    <InputField detail={{name:'email', label:'Email Address (optional)', value:userInfo.email, userInfo, setUserInfo, placeholder:'Enter your email address'}}/>
                    <div className=' relative'>
                    <p className=' font-semibold pb-1'>Payment Method</p>
                    <div onClick={handleExpand} className=' relative cursor-pointer'>
                    {userInfo.paymentMethod ? <PaymentRaw hover={false} content={payments[userInfo.paymentMethod -1].content} image={payments[userInfo.paymentMethod -1].image}/> : <p className=' border border-gray-300 px-2 py-1 rounded-md'>--select a payment method---</p>}
                    {userInfo.edit && <button  className=' absolute right-0.5 top-1'>{expand ? <ExpandLess/> : <ExpandMoreIcon/>}</button>}
                    </div>
                    {expand &&<div className=' flex flex-col gap-3 bg-white absolute w-full py-1 cursor-pointer border border-gray-100 rounded-md'>
                                {payments.filter((elt, indx) => indx !== userInfo.paymentMethod -1).map((elt, indx) => <PaymentRaw handleClick={()=>{setUserInfo({...userInfo, paymentMethod:indx+1}); setExpand(false)}} key={indx} content={elt.content} image={elt.image}/>)}
                            </div>}
                    </div>
                    <div ref={formRef} className='formNext flex flex-col gap-3'>
                        <InputField detail={{name:'address', label:'Delivery Address', value:userInfo.address,userInfo, setUserInfo, placeholder:'Enter your local address'}}/>
                        <InputField detail={{name:'apartement', label:'Apartment/House Number', value:userInfo.apartement,userInfo, setUserInfo, placeholder:'Enter your apartment'}}/>
                        <InputField detail={{name:'street', label:'Street', value:userInfo.street,userInfo, setUserInfo, placeholder:'Enter your street name'}}/>
                        <InputField detail={{name:'neighbourhood', label:'Neighbourhood', value:userInfo.neighbourhood,userInfo, setUserInfo, placeholder:'Enter your Neighbourhood'}}/>
                        <InputField detail={{name:'bp', label:'Boîte Postale/P.O. Box Number', value:userInfo.bp,userInfo, setUserInfo, placeholder:'Enter your Neighbourhood'}}/>
                    </div>
                    {!userInfo.edit &&<button onClick={handleEdit} type='button'  style={{color:'rgba(67, 67, 67, 1)', fontSize:15}} className=' px-0.5 py-1.5 border border-gray-300 w-20 rounded-lg cursor-pointer'>Edit</button>}
                    { userInfo.edit &&<div className=' flex justify-end'><button type='submit' disabled={!validForm}  className=' border px-3 py-1 rounded-md' style={{borderColor:validForm?'rgba(0, 122, 94, 1)':'rgba(217, 217, 217, 1)', color:validForm?'rgba(0, 122, 94, 1)':'black', cursor:validForm?'pointer':'not-allowed', backgroundColor:validForm?'rgba(0, 122, 94, 0.1)':'rgba(217, 217, 217, 1)'}}>Save</button></div>}
                </form>
            </div>
        </div>
        {success && <SuccessMessage/>}
    </div>
  )
}

export default ProfileLarge
