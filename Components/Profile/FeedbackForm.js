import { Star, StarBorder, StarPurple500 } from '@mui/icons-material'
import React, { useState } from 'react'

function FeedbackForm() {
    const [feedback, setFeedback] = useState({stars:-1, delay:undefined, quality:undefined, packaging:undefined, reorder:undefined, suggestion:''})
    function getStars(indx){
        if(feedback.stars ===0){
            setFeedback({...feedback, stars:indx!== 0? indx : -1})
        }
        else{
        setFeedback({...feedback, stars:indx})
        }
    }
    function getAccentColor(value){
        if(value === 'Yes'){
            return 'green'
        }
        if(value === 'No' || value ==='Very late'){
            return 'red'
        }
            return 'rgba(237, 185, 65, 1)'
    }
  return (
    <div className=' flex justify-center'>
        <form style={{border:`1px rgba(0, 0, 0, 0.09) solid`}} className=' w-full lg:w-4/5 p-2 flex flex-col gap-5 rounded-md mt-3'>
            <div>
                <p className=' font-semibold'>Rate your experience</p>
                <div className=' flex flex-row gap-3 mt-2 '>{Array(5).fill(undefined).map((elt, indx) => <button onMouseEnter={()=> getStars(indx)}  onClick={()=>getStars(indx)} type='button' key={indx}>{indx > feedback.stars ? <StarBorder sx={{color:'rgba(127, 127, 127, 1)'}}/>:<Star sx={{color:'rgba(237, 185, 65, 1)'}}/>}</button>)}</div>
            </div>
            <div>
                <p className='font-semibold'>Was your order delivered on time?</p>
                <div className=' flex flex-row gap-5 mt-2 '>
                    {['Yes', 'A bit late', 'Very late'].map((elt, indx) =>(
                    <div key={indx}>
                        <input style={{accentColor:getAccentColor(feedback.delay) }} type='radio' onChange={(e) =>setFeedback({...feedback, delay:e.target.value})} value={elt} name='delay' id={`delay${indx}`}/>
                        <label className=' relative left-1.5' htmlFor={`delay${indx}`}>{elt}</label>
                    </div>
                    ))}
                </div>
            </div>
            <div>
                <p className='font-semibold'>Are you satisfied with the quality of your product?</p>
                <div className=' flex flex-row gap-5 mt-2 '>
                    {['Yes', 'Somewhat', 'No'].map((elt, indx) =>(
                    <div key={indx}>
                        <input style={{accentColor:getAccentColor(feedback.quality)}} type='radio' onChange={(e) =>setFeedback({...feedback, quality:e.target.value})} value={elt} name='satisfied' id={`satisfied${indx}`}/>
                        <label className=' relative left-1.5' htmlFor={`satisfied${indx}`}>{elt}</label>
                    </div>
                    ))}
                </div>
            </div>
            <div>
                <p className='font-semibold'>Was the packaging satisfactory?</p>
                <div className=' flex flex-row gap-5 mt-2 '>
                    {['Yes', 'Somewhat', 'No'].map((elt, indx) =>(
                    <div key={indx}>
                        <input style={{accentColor:getAccentColor(feedback.packaging)}} type='radio' onChange={(e) =>setFeedback({...feedback, packaging:e.target.value})} value={elt} name='packaging' id={`packaging${indx}`}/>
                        <label className=' relative left-1.5' htmlFor={`packaging${indx}`}>{elt}</label>
                    </div>
                    ))}
                </div>
            </div>
            <div>
                <p className='font-semibold'>Will your order from us again?</p>
                <div className=' flex flex-row gap-5 mt-2 '>
                    {['Yes', 'Maybe', 'No'].map((elt, indx) =>(
                    <div key={indx}>
                        <input type='radio' style={{accentColor:getAccentColor(feedback.reorder)}} onChange={(e) =>setFeedback({...feedback, reorder:e.target.value})} value={elt} name='reorder' id={`reorder${indx}`}/>
                        <label className=' relative left-1.5' htmlFor={`reorder${indx}`}>{elt}</label>
                    </div>
                    ))}
                </div>
            </div>
            <div>
                <p className='font-semibold'>Any suggestions?</p>
                <textarea value={feedback.suggestion} onChange={e => setFeedback({...feedback, suggestion:e.target.value})} rows={4} placeholder='Suggestions' className=' p-1 rounded-md mt-2 outline-gray-400 w-full lg:w-2/3' style={{resize:'none', border:`1px rgba(127, 127, 127, 0.96) solid`}}></textarea>
            </div>
            <div className='flex justify-end'><button  type='submit' style={{background:'rgba(41, 142, 119, 1)' , color:'white', cursor:'pointer'}} className=' w-30 py-0.5 rounded-md border'>Submit</button></div>
        </form>
    </div>
  )
}

export default FeedbackForm
