import { ExpandLess, ExpandMore } from '@mui/icons-material'
import React, { useState } from 'react'
import { useOption } from './OptionContext'

function OptionSmallScreen() {
    const [expand, setExpand] = useState(false)
    const [arr, setArr] = useState(['Current Orders', 'Cancelled', 'Delivered'])
    const {handleOption} = useOption()
    function handleExpand(){
        setExpand(prev => !prev)
    }
    function handleSelect(elt){
        if(!expand){
            setExpand(true)
        }
        else{
            const arrCopy = [...arr]
            const arrRest = arrCopy.filter(element => element !== elt)
            setArr([elt, ...arrRest])
            setExpand(false)
            handleOption(elt)
        }
    }
  return (
    <div  className='relative z-20 '>
        <div style={{border:`1px rgba(67, 67, 67, 0.81) solid`, height:expand ?'90px':'28px', padding:5, transition:'500ms', }} className=' flex flex-row items-start gap-2 bg-white rounded-md absolute right-0 border overflow-hidden'>
            <div className=' flex flex-col gap-1  float-right'>
                {arr.map((elt, indx) => <p onClick={()=> handleSelect(elt)} style={{color:'rgba(67, 67, 67, 0.81)', width:'110px'}} key={indx}>{elt}</p>)}
            </div>
            <button onClick={handleExpand}>{expand ? <ExpandLess sx={{color:'rgba(67, 67, 67, 0.81)'}}/> : <ExpandMore sx={{color:'rgba(67, 67, 67, 0.81)'}}/>}</button>
        </div>
    </div>
  )
}

export default OptionSmallScreen
