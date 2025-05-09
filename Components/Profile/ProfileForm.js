import React from 'react'
import InputField from './InputField';
import PaymentRaw from './PaymentRaw';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandLess } from '@mui/icons-material';


function ProfileForm({userInfo, setUserInfo, handleSubmit, className}) {
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
  return (
    <form onSubmit={handleSubmit} className={className}>
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
  )
}

export default ProfileForm
