import Image from 'next/image'
import React from 'react'
import { fetchLink } from '../../Functions/fetchLink'
import { useScreen } from '../../hooks/useScreen'

const CategoryCard = ({title, subTitle, handleClick}) => {
    return(
        <div className=' relative   '>
            <div className='text-white absolute  left-7 top-3'>
                <h2 className=' font-bold text-[24px]'>{title}</h2>
                <p  className=' text-[16px] '>{subTitle}</p>
            </div>
            <div className=' absolute bottom-3.5 left-7'> <button onClick={()=> handleClick()} style={{width:158, height:35, backgroundColor:'white'}} className=' text-[16px] border border-white rounded-lg cursor-pointer'>Shop Now</button></div>
            <Image alt='farm fresh fruits' src={'https://blackgoldapi.tsasoft.com/Fruits.jpg'} className=' rounded-lg' style={{width:'612px', height:'288px'}} width={612} height={288}/>
        </div>
    )
}
function Category() {
    const large = useScreen()
if(large)
  return (
    <div className=' flex justify-center'>
        <div style={{width:'98%'}} className=' w-full flex justify-center mt-2 '>
            <div className=' flex justify-between gap-5'>
                <CategoryCard title={'Farm-Fresh Fruits'} subTitle={'Ripe, delicious, and straight from the source!'} handleClick={()=>console.log()}/>
                <CategoryCard title={'Organic Vegetables'} subTitle={'Nutritious, flavorful, and always fresh!'} handleClick={()=>console.log()}/>
                <CategoryCard title={'Organic Vegetables'} subTitle={'Nutritious, flavorful, and always fresh!'} handleClick={()=>console.log()}/>
            </div>
        </div>
    </div>
  )
}

export default Category
