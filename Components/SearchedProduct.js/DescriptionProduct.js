import { ArrowBackIos } from '@mui/icons-material'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useScreen } from '../../hooks/useScreen'
import { useSearchData } from './SearchDataContext'

function DescriptionProduct() {
    const params = useSearchParams()
    const category = decodeURI(params.get('category'))
    const id = params.get('id')
    const {data} = useSearchData()
    const [product, setProduct]=useState(data)
    console.log(data)
    const width = useScreen()
    const large = width > 600
    useEffect(()=>{
      function getSingleProduct(){
        const prod = [...data].find(elt => elt._id === id)
        setProduct([prod])
  }
        getSingleProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])
  return (
    <div className='h-screen w-screen border flex justify-center'>
      <div className=' h-full w-full lg:w-1/2 border pt-19'>
        <div className='flex flex-row gap-2 items-center'>
            <button><ArrowBackIos/></button>
            <p className=' font-bold text-2xl'>{category}</p>
        </div>
        <hr style={{color:'rgba(207, 207, 207, 1)'}} className=' my-2'/>
        <div className=' w-full flex justify-between'>
            <div>
                <div className=' flex flex-row gap-2'>
                    <Image width={large ? 300 : 200} height={300} alt='main image' src={product[0].descriptionImages[0]}/>
                    <div>
                        <p>{product[0].name}</p>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
      </div>
    </div>
  )
}

export default DescriptionProduct
