import React from 'react'
import {useScreen} from '../../hooks/useScreen'
import Image from 'next/image'
import { fetchLink } from '../../Functions/fetchLink'
import '../../App.css'
import { useData } from '../../context/DataContext'

function AnimationSeasonal() {
  const {data} = useData()
  const imgSeasonal = [...data].filter(elt => elt.category === 'Fresh Farm')
  const width = useScreen()
  const large = width > 1020
  if(!imgSeasonal) return <div style={{position:'relative', top:large?'':'16px', bottom:large? '45px':'', right:large?'80px':'', width:large?'700px':'256px', height:large?'176px':'150px'}} className=' flex justify-center items-center'><div className=' w-10 h-10 border-2 rounded-full border-blue-600 border-b-white animate-spin'></div></div>
  return (
    <div style={{position:'relative', overflowX:'hidden', top:large?'':width<402?'-35px':'-30px', bottom:large? '60px':'', right:large?'20px':large <402 ?'-12px':'', width:large?'550px':large>750?'900px':'256px', height:large?'206px':'150px', border:'2px', borderRadius:'9px'}}>
      <div className=' flex flex-row gap-3.5 pl-6 scrollHorrizontal'>
        {imgSeasonal.map((elt, indx) =><Image width={100} height={100}   className=' rounded-lg'  key={indx} src={elt.descriptionImages[0]} alt={`image no${indx}`}/>)}
      </div>
    </div>
  )
}
export default AnimationSeasonal
