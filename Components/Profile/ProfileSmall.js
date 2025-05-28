import {ArrowBackIos,KeyboardArrowRightSharp } from '@mui/icons-material'
import React, { useState } from 'react'
import ProfileForm from './ProfileForm'
import Help from './Help'
import { useRouter, useSearchParams } from 'next/navigation'
import OptionSmallScreen from './OptionSmallScreen'
import Order from './Order'
import OrderSmall from './OrderSmall'

const HeaderUI = ({title, children, handleToogleProfile, orderOptions = false }) => {
    return(
        <div className={`mt-28 px-2  divide-gray-300 h-full`}>
            <div className=' flex flex-row items-center gap-3'>
                <button onClick={handleToogleProfile}><ArrowBackIos/></button>
                <div className=' grow'>
                    <div className=' flex justify-between'>
                        <p className=' font-semibold text-[20px]'>{title}</p>
                        {orderOptions && <OptionSmallScreen/>}
                    </div>
                    <hr style={{color:'rgba(207, 207, 207, 0.72)', textDecorationLine:'underline'  , textUnderlineOffset:8}}/>
                </div>
            </div>
            {children}
        </div>
    )
}

const DefaultCase = ({setCurrIndx}) => {
    const arr = [{title:'Account', onclic:()=>setCurrIndx(0)}, {title:'Orders',onclic:()=>setCurrIndx(1)}, {title:'Help & Feedback', onclic:()=>setCurrIndx(2)},{title:'Logout', onclic:()=>console.log('the user logout')}]
    const bgRouter = useRouter()
    return(
        <HeaderUI title={'Profile'} handleToogleProfile={()=>bgRouter.back()}>
            <div className=' px-5 flex flex-col gap-5 mt-4 divide-y divide-gray-300'>
                {arr.map((elt, indx) => <button onClick={elt.onclic} key={indx}  className=' w-full flex justify-between cursor-pointer'><p className={`${elt.title === 'Logout' && 'text-red-600'}`}>{elt.title}</p> <p className=' text-gray-300'><KeyboardArrowRightSharp/></p></button>)}
            </div>
        </HeaderUI>
        
    )
}

const Account = ({setCurrIndx}) => {
    
    return(
        <HeaderUI title={'Profile'} handleToogleProfile={()=>setCurrIndx(undefined)}>
            <div className=' mt-3'>
                <ProfileForm/>
            </div>
        </HeaderUI>
    )
}

const Orders = ({setCurrIndx}) =>{
    return(
        <HeaderUI orderOptions={true} title={'Orders'} handleToogleProfile={()=>setCurrIndx(undefined)}>
            <OrderSmall/>
        </HeaderUI>
    )
}

const HelpUI = ({setCurrIndx}) => {

    return(
        <HeaderUI title={'Help & Feedback'} handleToogleProfile={()=>setCurrIndx(undefined)}>
            <div className=' mt-5'><Help/></div>
        </HeaderUI>
    )
}



function ProfileSmall() {
    const params = useSearchParams()
    const idx = params.get('indx')
    const [currIndx, setCurrIndx] = useState(+params.get('indx') ?? 10)
    switch(currIndx){
        case 10:
            return <Account setCurrIndx={setCurrIndx}/>
        case 1:
            return <Orders setCurrIndx={setCurrIndx}/>
        case 2:
            return <HelpUI setCurrIndx={setCurrIndx}/>
        default:
            return <DefaultCase setCurrIndx={setCurrIndx}/>
    }
}

export default ProfileSmall
