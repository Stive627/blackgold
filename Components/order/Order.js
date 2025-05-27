import React from 'react'
import Navbar from '../Navbar/Navbar'
import { ArrowBackIos } from '@mui/icons-material'
import DeliveryForm from './DeliveryForm'
import Summary from './Summary'
import { useRouter } from 'next/navigation'

function Order() {
    const bgRouter = useRouter()
    function goBack(){
        bgRouter.back()
    }
  return (
    <div className=' w-screen '>
      <Navbar/>
      <div className=' flex justify-center pt-27 lg:pt-20'>
        <div className=' w-11/12 lg:w-2/3 flex flex-row items-center gap-4'>
            <button onClick={goBack}><ArrowBackIos sx={{color:'rgba(67, 64, 64, 1)'}}/></button>
            <div className=' grow'>
                <p className=' font-bold text-[24px]'>Placing Order</p>
                <hr style={{color:'rgba(207, 207, 207, 1)'}} className=' w-full mt-1'/>
            </div>
        </div>
      </div>
      <div className=' w-full flex justify-center'>
        <div className='w-3/5 mt-5 hidden lg:block '>
        <DeliveryForm/>
        <Summary/>
        </div>
        <div className=' block lg:hidden mt-5'>
            <Summary/>
            <DeliveryForm/>
        </div>
      </div>
    </div>
  )
}

export default Order
