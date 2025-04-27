import Image from 'next/image'
import React from 'react'
import { useScreen } from '../../hooks/useScreen'

const CategoryCard = ({title, subTitle, handleClick, img, className, classNameBut}) => {
    return(
        <div className=' relative   '>
            <div className={`text-white ${className}`}>
                <h2 className={`font-bold text-[24px]`}>{title}</h2>
                <p  className={`text-[16px]  w-96`}>{subTitle}</p>
            </div>
            <div className={`${classNameBut?? 'absolute bottom-3.5 left-7'}`}> <button onClick={()=> handleClick()} style={{backgroundColor:'white'}} className=' text-[15px] border border-white rounded-lg cursor-pointer px-3 py-1'>Shop Now</button></div>
            <Image alt='farm fresh fruits' src={`https://blackgoldapi.tsasoft.com/${img}`} className=' rounded-lg'  width={900} height={900}/>
        </div>
    )
}
function Category() {
    const width = useScreen()
  return (
    <div className=' flex justify-center'>
        <div style={{width:'98%'}} className=' w-full flex justify-center mt-2 '>
            <div className=' flex justify-between gap-5'>
                <CategoryCard className={'absolute  left-3 top-3'} title={'Farm-Fresh Fruits'} subTitle={'Ripe, delicious, and straight from the source!'} handleClick={()=>console.log()} img={'Fruits.jpg'}/>
                {width > 624 && <CategoryCard className={' absolute top-1/3 left-1/6'} title={'Regional Favourites'} subTitle={'Fresh picks loved by Yaoundé locals – from market staples to regional favorites'} handleClick={()=>console.log()} img={'Regional.png'} classNameBut={'absolute bottom-3  left-2/5'}/>}
                {width > 1000 && <CategoryCard className={'absolute  left-3 top-3'} title={'Organic Vegetables'} subTitle={'Nutritious, flavorful, and always fresh!'} handleClick={()=>console.log()} img={'Organic.png'}/>}
            </div>
        </div>
    </div>
  )
}

export default Category
