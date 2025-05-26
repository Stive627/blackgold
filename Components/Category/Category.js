import React from 'react'
import Image from 'next/image'
import { useScreen } from '../../hooks/useScreen'
import { useRouter} from 'next/navigation'

const CategoryCard = ({title, subTitle='', img}) => {
    const bgRouter = useRouter()
    const category = title === 'Starchy Food'? 'Starchy Food' : 'Farm Fresh'
    return(
        <div className='relative'>
            <div className='absolute m-1'>
                <h2 style={{fontSize:subTitle? 24:14}} className='font-bold text-white '>{title}</h2>
                <h2 style={{fontSize:subTitle? 16:12}} className=' text-white font-light'>{subTitle}</h2>
                <div> <button onClick={()=>bgRouter.push(`/filter?category=${category}`)} style={{fontSize:subTitle? 15:9, position:'relative', top:subTitle?'30px':'0px'}} className=' text-[8px] bg-white  rounded-md cursor-pointer px-2 py-1'>Shop Now</button></div>
            </div>
            <Image alt='farm fresh fruits' src={img} className=' rounded-lg'  width={900} height={900}/>
        </div>
    )
}
function Category() {
    const width = useScreen()
    const smallscreen = width <600
  return (
    <div className=' flex justify-center'>
        <div style={{width:'98%'}} className=' w-full flex justify-center mt-2 '>
            <div className=' flex justify-between gap-2'>
                <CategoryCard title={'Farm-Fresh Fruits'} subTitle={!smallscreen ?'Ripe, delicious, and straight from the source!':''}  img={'https://blackgoldapi.tsasoft.com/Fruits.jpg'}/>
                <CategoryCard title={'Starchy Food'}  subTitle={!smallscreen?' Freshly picked and ready to cook!':''} img={'https://blackgold-bucket.s3.ap-south-1.amazonaws.com/Screenshot%202025-05-10%20at%204.37.06%20PM%202.png'} />
                {width > 1000 &&<CategoryCard title={'Organic Vegetables'} subTitle={!smallscreen? 'Nutritious, flavorful, and always fresh!':''}  img={'https://blackgoldapi.tsasoft.com/Organic.png'}/>}
            </div>
        </div>
    </div>
  )
}

export default Category
