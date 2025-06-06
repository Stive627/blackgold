import React, {useEffect, useState, useRef} from 'react'
import InputField from './InputField';
import PaymentRaw from './PaymentRaw';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandLess } from '@mui/icons-material';
import '../../App.css'
import SuccessMessage from './SuccessMessage';

export const payments = [
    {image:'https://blackgold-bucket.s3.ap-south-1.amazonaws.com/orange.png', content:'Orange Money'},
    {image:'https://blackgold-bucket.s3.ap-south-1.amazonaws.com/mtn.png', content:'Mtn Mobile Money'},
    {image:'https://blackgold-bucket.s3.ap-south-1.amazonaws.com/cash.png', content:'Cash on  Delivery'}
]

function ProfileForm({className}) {
    const [expand, setExpand] = useState(false)
    const formRef = useRef()
    const [success, setSuccess] = useState(false)
    const [userInfo, setUserInfo] = useState({name:'', phone:'', email:'', address:'', paymentMethod:undefined, edit:true, apartement:'', street:'', neighbourhood:'', bp:''})

    function handleSubmit(e){
        e.preventDefault()
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
            setUserInfo({...userInfo, edit:false})
        }, 1200);
    }
 
    function handleEdit(){
        setUserInfo({...userInfo, edit:true})
    }

    function handleExpand(){
        if(userInfo.edit){
            setExpand(!expand)
        }
    }
    useEffect(() => {
        if(userInfo.paymentMethod && formRef.current){
            formRef.current.style.height = '370px'
        }

    }, [userInfo.paymentMethod])

    const validForm = userInfo.name && userInfo.phone && userInfo.address && userInfo.paymentMethod && userInfo.bp && userInfo.street && userInfo.apartement
    const currPaymentMethod = payments.find(elt => elt.content === userInfo.paymentMethod)
  return (
    <>
        <form onSubmit={handleSubmit} className={className}>
            <InputField detail={{name:'name', label:'Name', value:userInfo.name, setUserInfo, userInfo, placeholder:'Enter your name'}}/>
            <InputField detail={{name:'phone', label:'Phone number', value:userInfo.phone, setUserInfo, userInfo, placeholder:'Enter your phone number'}}/>
            <InputField detail={{name:'email', label:'Email Address (optional)', value:userInfo.email, userInfo, setUserInfo, placeholder:'Enter your email address'}}/>
            <div className=' relative'>
            <p className=' font-semibold pb-1'>Payment Method</p>
            <div onClick={handleExpand} className=' relative cursor-pointer'>
            {userInfo.paymentMethod?.length > 0 ? <PaymentRaw hover={false} content={currPaymentMethod?.content} image={currPaymentMethod.image}/> : <p className=' border border-gray-300 px-2 py-1 rounded-md'>--select a payment method---</p>}
            {userInfo.edit && <button type='button'  className=' absolute right-0.5 top-1'>{expand ? <ExpandLess/> : <ExpandMoreIcon/>}</button>}
            </div>
            {expand &&<div className=' flex flex-col gap-3 bg-white absolute w-full py-1 cursor-pointer border border-gray-100 rounded-md'>
                        {payments.filter((elt, indx) => elt.content !== userInfo.paymentMethod ).map((elt, indx) => <PaymentRaw handleClick={()=>{setUserInfo({...userInfo, paymentMethod:elt.content}); setExpand(false)}} key={indx} content={elt.content} image={elt.image}/>)}
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
            { userInfo.edit &&<div className=' flex justify-end mt-3'><button type='submit' disabled={!validForm}  className=' border px-3 py-1 rounded-md' style={{color:'white', cursor:validForm?'pointer':'not-allowed', backgroundColor:validForm?'rgba(0, 122, 94, 1)':'rgba(0, 122, 94, 0.52)'}}>Save</button></div>}
        </form>
        {success && <SuccessMessage/>}
    </>
  )
}

export default ProfileForm
