import React from 'react'
import { useScreen } from '../../hooks/useScreen';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import { fetchLink } from '../../Functions/fetchLink';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Location({children='', handleEnableLocation, userLocation, setUserLocation, handleSelectedLocation, handleDeselectLocation}) {
    const width = useScreen()
  return (
    <div className='  ml-6'>
      {children}
        {userLocation.showl && <div onClick={()=> setUserLocation({...userLocation, showl:false, input:""})} style={{backgroundColor:'rgba(67, 64, 64, 0.6)'}} className=' absolute top-0 bottom-0 left-0 right-0 w-screen h-screen z-20'>
                   <div className=' w-full  flex justify-center'>
                        <div onClick={(e)=> e.stopPropagation()} style={{width:width>725?'700px':width>500?'500px':width > 400?'380px':'340px', height:userLocation.suggestedArr ? '':'200px'}} className={`rounded-lg bg-white py-2  ${width<1000? 'mt-26':'mt-4'} overflow-y-scroll`}>
                            <p className=' text-[17px] font-semibold text-black text-center'>Location</p>
                            <hr style={{color:'rgba(207, 207, 207, 1)'}} className='w-full mb-5'/>
                            {userLocation.selectedLocation ?
                            <div className=' px-3'>
                              <div className=' flex justify-between items-center'>
                                <button onClick={handleDeselectLocation} className=' cursor-pointer'><ArrowBackIosIcon sx={{color:'black'}}/></button>
                                <div className='flex flex-row gap-1 items-center' style={{color:'rgba(0, 122, 94, 1)'}}><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#007A5E"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg></button><p >{userLocation.selectedLocation}</p></div>
                                <p>hi</p>
                              </div>
                              <div className=' flex justify-center'>
                                <Image alt='successfull location image' src={fetchLink('location%20success.png')} width={200} height={200}/>
                              </div>
                              <p className=' text-center text-black'>Location successfully updated</p>
                              <div className=' flex justify-end '><button onClick={()=>setUserLocation({...userLocation, showl:false, input:'',selectedLocation:''})} className=' cursor-pointer' style={{color:'rgba(0, 122, 94, 1)'}} >Go back to home</button></div>
                            </div>
                            :
                            <div className=' px-3'>
                              <div className=' flex justify-center text-white mb-3 '><button onClick={handleEnableLocation}  style={{backgroundColor:userLocation.loading ? 'rgba(0, 122, 94, 0.7)':'rgba(0, 122, 94, 1)'}} className=' px-2 py-1 rounded-lg cursor-pointer'>Enable Location access</button></div>
                              <p className=' text-center text-black'>OR</p>
                              <div className='relative'>
                                  <button className=' text-gray-500 absolute right-0 top-1' ><SearchIcon/></button>
                                  <input autoFocus={true} style={{borderColor:'rgba(217, 217, 217, 0.82)', backgroundColor:'rgba(200, 200, 200,0.2)'}} placeholder='Search location' className='border grow w-full py-1 rounded-lg px-1 text-black placeholder-black outline-none ' value={userLocation.input} onChange={(e)=>setUserLocation({...userLocation, input:e.target.value})}/>
                              </div>
                              {userLocation.suggestedArr && userLocation.suggestedArr.length >0 ?
                              <div className=' flex flex-col divide-y divide-gray-300 gap-2'>
                                {userLocation.suggestedArr.map((elt, indx) => <div onClick={() => handleSelectedLocation(elt)} key={indx} className='cursor-pointer flex flex-row gap-3 items-center' style={{color:+indx === 0 ?'rgba(0, 122, 94, 1)':'gray'}}><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#007A5E"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg></button><p >{elt}</p></div>)}
                              </div>:
                              userLocation.suggestedArr &&
                              <div className=' text-center text-black'>
                                <div className=' flex justify-center'>
                                  <Image alt='location not found' src={fetchLink('select_location.jpg')} width={150} height={150}/>
                                </div>
                                <p >Sorry, we aren’t available at the entered location.</p><p> Try a different location</p></div>
                              }
                            </div>}
                        </div>
                    </div>
                  </div>
        }
    </div>
  )
}

export default Location
