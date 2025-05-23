import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import React, { useRef, useState } from 'react'
import '../../App.css'
import FeedbackForm from './FeedbackForm'



function Help({className = 'w-full'}) {
    
const arr = [{title:'Question 1', content:''},{title:'Question 2', content:''}, {title:'Question 3', content:''}, {title:'Question 4', content:''}, {title:'Question 5', content:''}]
const [currQuestion , setCurrQuestion] = useState(undefined)
const questionRef = useRef(new Map())
const handleQuestion = (indx) => {
  const nodec = questionRef.current.get(indx)

    if(indx === currQuestion){
      nodec.style.height = '0px'
      setCurrQuestion(undefined)
    }
    else{ 
    const nodes = [...questionRef.current.values()]
    nodes.forEach(elt => {
        elt.style.height = '0px'
    });
    nodec.style.height = '200px'
    setCurrQuestion(indx)
  }
}
  return (
    <div className={className}>
      <p className=' font-semibold mb-5'>Help/FAQs</p>
      <div className=' flex justify-end w-full'>
        <div className=' w-3/4 flex flex-col divide-y divide-gray-300'>
        {arr.map((elt, indx) => 
                                <div className={`cursor-pointer ${currQuestion === indx}`} key={indx} onClick={() => handleQuestion(indx)}>
                                    <div className='flex justify-between'>
                                        <p>{elt.title}</p>
                                        <p>{currQuestion === indx ? <KeyboardArrowUp/>:<KeyboardArrowDown/>}</p>
                                    </div>
                                    <div className='questioncontent' ref={(node) => questionRef.current.set(indx, node)}>
                                        <p>{elt.content}</p>
                                    </div>
                                </div>
                )}
        </div>
      </div>
      <p className=' font-semibold mt-5  mb-4'>Contact Us</p>
        <div className=' flex justify-center'>
          <div className=' w-4/5 py-3'>
            <p className=' w-full lg:w-2/3' style={{textAlign:'justify'}}>For inquiries related to orders, deliveries, partnerships, or support, please reach out to us through any of the following channels:</p>
            <p className='font-semibold py-3'>Customer Support</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Email: support@blackgold.com</p>
            <p className=' font-semibold py-3'>Business Hours</p>
            <p>Monday {`-`} Saturday: 9:00 AM to 8:00 PM</p>
            <p>Sunday: 10:00 AM to 6:00 PM</p>
            <p className=' font-bold py-3'>Office Address</p>
            <p>Blackgold Pvt Ltd</p>
            <p>Street 5th, Yaoundé</p>
        </div>
        </div>
        <p className=' font-semibold mt-5 mb-4'>Feedback</p>
        <div className=' flex justify-center'>
          <div className=' w-4/5'>
              <p className=' w-full lg:w-2/3' style={{textAlign:'justify'}}>Your experience matters to us. Whether you&#39;ve got suggestions, comments, or ideas to help us improve, we&#39;d love to hear from you.</p>
              <p className=' mt-3'>Send us your feedback to feedback@blackgold.com or fill the form below</p>
          </div>
        </div>
        <FeedbackForm/>
    </div>
  )
}

export default Help
