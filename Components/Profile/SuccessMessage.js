import Image from 'next/image'
import React from 'react'

function SuccessMessage() {
  return (
        <div className=' absolute top-0 left-0 right-0 bottom-0 w-screen h-screen overflow-hidden' style={{backgroundColor:'rgba(0,0,0, 0.3)'}}>
            <div className=' w-full h-full flex justify-center items-center '>
                <div className='bg-white rounded-md  p-2'>
                    <div className=' flex justify-center'><Image alt='pour la confirmation des donnees utilisateur' width={300} height={300} src={'https://blackgold-bucket.s3.ap-south-1.amazonaws.com/account%20details.png'}/></div>
                    <p className=' text-center'>Account Details saved successfully</p>
                </div>
            </div>
        </div>
  )
}

export default SuccessMessage
