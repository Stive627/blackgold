import React, { useState } from 'react'
import { useScreen } from '../../hooks/useScreen';

function Location({showl, setShowl, children='', handleEnableLocation}) {
    const width = useScreen()
    const [search, setSearch] = useState('')
  return (
    <div className='  ml-6'>
      {children}
        {showl && <div onClick={()=> setShowl(false)} style={{backgroundColor:'rgba(67, 64, 64, 0.6)'}} className=' absolute top-0 bottom-0 left-0 right-0 w-screen h-screen z-10'>
                   <div className=' w-full h-full flex justify-center'>
                        <div onClick={(e)=> e.stopPropagation()} style={{width:width>725?'700px':width>500?'500px':width > 400?'380px':'340px'}} className={`rounded-lg bg-white h-80 py-2 px-3 ${width<1000? 'mt-26':'mt-4'}`}>
                            <p className=' text-[17px] font-semibold text-black text-center'>Location</p>
                            <hr style={{color:'rgba(207, 207, 207, 1)'}} className='w-full mb-5'/>
                            <div className=' flex justify-center text-white mb-3'><button onClick={handleEnableLocation}  style={{backgroundColor:'rgba(0, 122, 94, 1)'}} className=' px-2 py-1 rounded-lg cursor-pointer'>Enable Location access</button></div>
                            <p className=' text-center text-black'>OR</p>
                            <div className=' flex flex-row justify-center'>
                                <input style={{borderColor:'rgba(217, 217, 217, 0.82)', backgroundColor:'rgba(200, 200, 200,0.2)'}} placeholder='Search location' className='border grow w-full py-1 rounded-lg px-1 text-black placeholder-black outline-none' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                  </div>
        }
    </div>
  )
}

export default Location
