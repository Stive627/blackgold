import React, { useRef, useState } from 'react'
import useFetchSeasonalImg from '../../hooks/useFetchSeasonalImg'
import { useScreen } from '../../hooks/useScreen'
import Image from 'next/image'
import { fetchLink } from '../../Functions/fetchLink'

function AnimationSeasonal() {
    const seasonalRef = useRef(new Map())
    const img = useFetchSeasonalImg()
    const large = useScreen()
  if(!img) return <div style={{position:'relative', top:large?'':'16px', bottom:large? '40px':'', right:large?'80px':'', width:large?'700px':'256px', height:large?'176px':'150px'}} className='bg-black flex justify-center items-center'><div className=' w-10 h-10 border-2 rounded-full border-blue-600 border-b-white animate-spin'></div></div>
  return (
    <div style={{position:'relative', overflowX:'scroll', top:large?'':'16px', bottom:large? '40px':'', right:large?'80px':'', width:large?'700px':'256px', height:large?'206px':'150px'}} className='bg-black flex justify-center items-center'>
      {img.map((elt, indx) =><Image fill={true } className=' rounded-md' ref={(node) =>{seasonalRef.current.set(elt, node); return () => seasonalRef.current.delete(elt)}}  key={indx} src={fetchLink(`WEB/FRUITS/${elt}`)} alt={`image no${indx}`}/>)}
    </div>

  )
}

export default AnimationSeasonal
