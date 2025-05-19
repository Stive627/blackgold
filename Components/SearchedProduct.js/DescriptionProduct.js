import { ArrowBackIos} from '@mui/icons-material'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useScreen } from '../../hooks/useScreen'
import { useSearchData } from './SearchDataContext'
import SimilarProduct from './SimilarProduct'
import SmallDescriptionProd from './SmallDescriptionProd'
import Quantity from './Quantity'

function DescriptionProduct() {
    const params = useSearchParams()
    const bgRouter = useRouter()
    const category = decodeURI(params.get('category'))
    const id = params.get('id')
    const {data} = useSearchData()
    const [product, setProduct]=useState(data)
    const [currImage, setCurrImage] = useState(0)
    const [hover, setHover] = useState(undefined)
    const width = useScreen()
    const large = width > 600
    const similarProducts = [...data].filter(elt => elt.category === category)
    const similarRef = useRef()
    const [coords, setCoords] = useState({x:0, y:0})
    const w = similarRef.current?.innerWidth
    function getcoord(e){
      setHover(true)
      setCoords({x:e.clientX, y:e.clientY})
    }
    useEffect(()=>{
      function getSingleProduct(){
        const prod = [...data].find(elt => elt._id === id)
        setProduct([prod])
  }
        getSingleProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])
    function handleLeave(){
      setCoords({...coords, x:0})
      setHover(false)
    }
    useEffect(()=>{
      if(typeof window !== 'undefined' && similarRef.current){
      similarRef.current.addEventListener('mousemove', (e) =>{
       if(e.clientX > coords.x){
          similarRef.current.style.transform = `translate(90%)`
        }
        else{
          similarRef.current.style.transform = `translate(-100%)`
        }
      })
      }
    },[coords])
    const imageSize = large ? 180 : 100
  if(width < 600) return <SmallDescriptionProd category={category} product={product} similarProducts={similarProducts} />
  return (
    <div className='h-screen w-screen  flex justify-center'>
      <div className=' h-full w-full lg:w-1/2  pt-29 lg:pt-20'>
        <div className='flex flex-row gap-2 items-center'>
            <button onClick={()=> bgRouter.push(`/filter?category=${category}`)}><ArrowBackIos sx={{color:'rgba(67, 64, 64, 1)'}}/></button>
            <p className=' font-bold text-2xl'>{category}</p>
        </div>
        <hr style={{color:'rgba(207, 207, 207, 1)'}} className=' my-2'/>
        <div className=' w-full flex justify-between mb-7'>
            <div className=' flex flex-row gap-6'>
                <Image width={imageSize} height={imageSize} alt='main image' src={product[0].descriptionImages[currImage]}/>
                <div style={{height:imageSize}} className='relative w-48'>
                    <p className=' font-semibold text-2xl'>{product[0].name}</p>
                    <Quantity/>
                    <p style={{color:'rgba(0, 122, 94, 1)', fontSize:11}} className=' absolute bottom-0 font-bold'>Delivery in 3 hours</p>
                </div>
            </div>
            <div className=''>
              <div className=' text-center'> 
                <p className=' font-semibold text-[14px] '>CFA {product[0].newPrice}</p>
                <p style={{color:'rgba(146, 146, 146, 1)'}} className=' line-through text-[14px] '>CFA {coords.x === 0 ? 'a':'b'} {product[0].lastPrice}</p>
              </div>
              <button style={{border:`2px rgba(158, 42, 43, 1) solid`, width:'105px', fontSize:14, color:'rgba(158, 42, 43, 1)', padding:'2px', borderRadius:'6px'}} className=' my-3'>Add to cart</button>
             <div></div> <button style={{width:'105px', fontSize:14, color:'rgba(158, 42, 43, 1)', padding:'2px', borderRadius:'6px'}} className=' my-3'>Buy now</button>
            </div>
        </div>
        <div className=' flex flex-row gap-5 px-3'>
          {product[0].descriptionImages.map((elt, indx) => <Image style={{outlineOffset:'3px', outline:indx === currImage ?'2px rgba(0, 122, 94, 1) solid':'none'}} onMouseMove={()=>setCurrImage(indx)} key={indx} src={elt} width={90} height={90} alt={`prod no${indx}`}/>)}
        </div>
        <p className=' mt-5'>{product[0].description}</p>
        <p className=' mt-5 font-bold text-2xl mb-2'>Similar Products</p>
        <hr style={{color:'rgba(207, 207, 207, 1)'}} className=' mb-5'/>
        <div className=' relative'> 
          <SimilarProduct handleLeave={handleLeave} similarRef={similarRef} getCoords={getcoord} category={category} data={[...similarProducts, ...similarProducts, ...similarProducts]}/>
        </div>
      </div>
    </div>
  )
}

export default DescriptionProduct
