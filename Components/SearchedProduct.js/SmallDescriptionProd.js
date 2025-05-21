import { ArrowBackIos} from '@mui/icons-material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'; 
import 'swiper/css/pagination';
import 'swiper/css';
import './swiper.css'
import SimilarProduct from './SimilarProduct'
import Quantity from './Quantity'
import { useCart } from '../../context/CartContext'

function SmallDescriptionProd({category, product, similarProducts}) {
  const bgRouter = useRouter()
  const {handleItems} = useCart()
  return (
    <div className='pt-28 px-3 w-screen overflow-hidden'>
      <>
        <div className='flex flex-row gap-2 items-center'>
            <button onClick={()=> bgRouter.back()}><ArrowBackIos sx={{color:'rgba(67, 64, 64, 1)'}}/></button>
            <p className=' font-bold text-2xl'>{category}</p>
        </div>
        <hr style={{color:'rgba(207, 207, 207, 1)'}} className=' my-2'/>
      </>
      <div className='flex justify-center'>
        <Swiper className=' flex justify-center' style={{width:'200px'}}
        spaceBetween={50}
        modules={[Pagination]}
        slidesPerView={1}
        grabCursor={true} 
        loop={true}
        pagination={{ clickable: true }}>
        {product[0].descriptionImages.map((elt, indx) =><SwiperSlide className=' w-96' key={indx}><Image src={elt} width={190} height={190} alt={`product no${indx}`}/></SwiperSlide>)}    
        </Swiper>
      </div>
      <div className=' w-full flex justify-between mt-3'>
        <div className=' relative w-full'>
            <p className=' text-[20px] font-bold'>{product[0].name}</p>
            <div className=' relative'>
              <Quantity/>
            </div>
            <p className=' absolute  bottom-0 font-semibold text-sm'>Delivery in 3 hours</p>
        </div>
        <div>
            <div className=' text-center'> 
                <p className=' font-semibold text-[14px] '>CFA {product[0].newPrice}</p>
                <p style={{color:'rgba(146, 146, 146, 1)'}} className=' line-through text-[14px] '>CFA {product[0].lastPrice}</p>
            </div>
            <button onClick={()=> handleItems(product[0]._id)} style={{border:`2px rgba(158, 42, 43, 1) solid`, width:'85px', fontSize:14, color:'rgba(158, 42, 43, 1)', padding:'2px', borderRadius:'6px'}} className=' mt-3'>Add</button>
            <div></div> <button style={{width:'85px', fontSize:14, color:'rgba(158, 42, 43, 1)', borderRadius:'6px'}} className=' mt-2'>Buy now</button>
        </div>
      </div>
      <p className=' mt-5'>{product[0].description}</p>
      <p className=' font-bold text-2xl mb-2 mt-5'>Similar Products</p>
      <hr style={{color:'rgba(207, 207, 207, 1)'}} className=' mb-5'/>
      <SimilarProduct description={false}  category={category} data={similarProducts} width={400}/>
    </div>
  )
}

export default SmallDescriptionProd
