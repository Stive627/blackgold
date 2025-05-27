import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PaymentRaw from '../Profile/PaymentRaw'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { payments } from '../Profile/ProfileForm'
import { useRouter } from 'next/navigation'

function DeliveryForm() {
    const [userInfo, setUserInfo] = useState({address:'', delivery:'', addressArr:'', selectedAddress:'', paymentMethod:undefined})
    const [expand, setExpand] = useState(false)
    const bgRouter = useRouter()
    useEffect(() => {
        axios({url:`https://api.mapbox.com/search/geocode/v6/forward?q=${userInfo.address}&limit=5&access_token=pk.eyJ1Ijoic3RpdmV0c2EiLCJhIjoiY21hM3Q4azhvMDBtdjJpcXhpaDRtYjB2OCJ9.cAVLQ69PTYp33gHCB6yV1A`, method:'GET'})
        .then(value => {
            const primaryArr = value.data['features']
            const dataArr = primaryArr.map(elt => elt['properties'].full_address)
            setUserInfo({...userInfo, addressArr:dataArr})})
        .catch(err => console.log(err))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userInfo.address])
    function closeTab(){
        setUserInfo({...userInfo, addressArr:undefined, address:''})
    }
    function selectLocation(elt){
        setUserInfo({...userInfo, addressArr:undefined, address:'', selectedAddress:elt})
    }
    const currPaymentMethod = payments.find(elt => elt.content === userInfo.paymentMethod)

    function handleSubmit(e){
        e.preventDefault()
        bgRouter.push('/profile?indx=1')
    }
  return (
    <>
        <form onSubmit={handleSubmit} className=' flex flex-col gap-5  lg:w-96  lg:float-left mt-6 lg:mt-0'>
            <div className=' flex flex-col gap-1 relative'>
                <label className=' font-semibold' htmlFor='deliveryAddress'>Delivery Address</label>
                <input value={userInfo.selectedAddress} onChange={e=> setUserInfo({...userInfo, address:e.target.value, selectedAddress:e.target.value})} id='deliveryAddress' className='p-0.5 rounded-md relative z-20   ' autoComplete='delivery address' name='deliveryAddress' style={{border:' 1px rgba(127, 127, 127, 0.96) solid', outlineColor:`rgba(41, 142, 119, 1)`}} placeholder='Enter your delivery address'/>
                {
                (userInfo.addressArr && userInfo.addressArr.length > 0) && 
                <div className='absolute z-20 w-full bg-white divide-y top-15 border border-gray-300 rounded-md p-1'>
                    {userInfo?.addressArr?.map((elt, indx) => <div onClick={() => selectLocation(elt)} key={indx} className='cursor-pointer flex flex-row gap-3 items-center' style={{color:+indx === 0 ?'rgba(0, 122, 94, 1)':'gray'}}><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#007A5E"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg></button><p >{elt}</p></div>)}
                </div>}
            </div>
            <div className=' flex flex-col gap-1'>
                <label className=' font-semibold' htmlFor='deliveryDate'>Choose Delivery date</label>
                <input value={userInfo.delivery} onChange={e => setUserInfo({...userInfo, delivery:e.target.value})} style={{borderColor:'rgba(127, 127, 127, 0.96)'}} className=' border py-0.5 rounded-md' name='deliveryDate' type='date' id='deliveryDate' placeholder='Enter your delivery address'/>
            </div>
            <div className=' relative'>
                <p className=' font-semibold pb-1'>Payment Method</p>
                <div onClick={()=>setExpand(!expand)} className=' relative cursor-pointer'>
                    {userInfo.paymentMethod?.length > 0 ? <PaymentRaw hover={false} content={currPaymentMethod?.content} image={currPaymentMethod.image}/> : <p className=' border border-gray-300 px-2 py-1 rounded-md'>--select a payment method---</p>}
                    <button type='button'  className=' absolute right-0.5 top-1'>{expand ? <ExpandLess/> : <ExpandMore/>}</button>
                </div>
                {expand &&<div className=' flex flex-col gap-3 bg-white absolute w-full py-1 cursor-pointer border border-gray-100 rounded-md'>
                            {payments.filter((elt, indx) => elt.content !== userInfo.paymentMethod ).map((elt, indx) => <PaymentRaw handleClick={()=>{setUserInfo({...userInfo, paymentMethod:elt.content}); setExpand(false)}} key={indx} content={elt.content} image={elt.image}/>)}
                        </div>}
            </div>
            <div className=' flex justify-end'>
                <button className=' rounded-md px-2 py-1 text-[12px]' style={{color:'rgba(41, 142, 119, 1)', border:`1px rgba(41, 142, 119, 1) solid`}}>Proceed to pay</button>
            </div>
        </form>
        {(userInfo.addressArr && userInfo.addressArr.length > 0) && <div onClick={closeTab} className=' w-screen h-screen overflow-hidden absolute z-10 top-0 left-0 right-0 bottom-0 '></div>}
    </>
  )
}

export default DeliveryForm
