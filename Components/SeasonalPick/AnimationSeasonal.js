import React, { useRef, useState, useEffect} from 'react'
import { useScreen } from '../../hooks/useScreen'
import Image from 'next/image'
import { fetchLink } from '../../Functions/fetchLink'
import axios from 'axios'
import '../../App.css'

function AnimationSeasonal() {
  const [img, setImg] = useState(undefined)
  const seasonalRef = useRef(new Map())
  const [currIndx, setCurrIndx] = useState(0)
  const imgLength = img?.length
  useEffect(()=> {
      axios({url:fetchLink('products/seasonalProducts')})
      .then((value) => setImg(value.data))
      .catch(err => console.error(err.response.data))
  },[])

    const large = useScreen()
  if(!img) return <div style={{position:'relative', top:large?'':'16px', bottom:large? '40px':'', right:large?'80px':'', width:large?'700px':'256px', height:large?'176px':'150px'}} className='bg-black flex justify-center items-center'><div className=' w-10 h-10 border-2 rounded-full border-blue-600 border-b-white animate-spin'></div></div>
  return (
    <div style={{position:'relative', overflowX:'hidden', top:large?'':'16px', bottom:large? '60px':'', right:large?'80px':'', width:large?'850px':'256px', height:large?'206px':'150px'}}>
      <div className=' w-full h-full flex flex-row gap-3.5 pl-6 scrollHorrizontal'>
        {img.map((elt, indx) =><Image width={900} height={200} style={{width:'990px', height:'200px'}}   className=' rounded-lg'  key={indx} src={fetchLink(`seasonal/${elt}`)} alt={`image no${indx}`}/>)}
      </div>
    </div>

  )
}

export default AnimationSeasonal
