import React, {useState} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ProfileForm from './ProfileForm';
import Help from './Help';
import { useRouter } from 'next/navigation';

const Right = ({indx}) => {
    switch(indx){
        case 0:
            return <ProfileForm className={' w-1/3 flex flex-col gap-5 '}/>
        case 1:
            return //
        case 2:
            return <Help className='w-4/5'/>
    }
}

function ProfileLarge() {
    const [currOption, setCurrOption] = useState(0)
    function handleSelectOption(indx){
        setCurrOption(indx)
    }
    const arr = ['Account', 'Orders', 'Help and Feedback']
    const bgRouter = useRouter()
  return (
    <div className='pt-15 grid grid-cols-5 divide-x divide-gray-300 h-full'>
        <div className=' col-span-1 pt-7 pl-5'>
            <div className=' flex flex-col gap-3'>
                {arr.map((elt, indx) => <p onClick={()=>handleSelectOption(indx)} className={` cursor-pointer ${indx === currOption && 'font-bold text-[18px] underline'}`} key={indx}>{elt}</p>)}
            </div>
        </div>
        <div className=' col-span-4 overflow-y-scroll'>
            <div className=' flex flex-row gap-9 mt-8 ml-5'> <button onClick={()=>bgRouter.back()}  className=' cursor-pointer'><ArrowBackIosIcon sx={{color:'rgba(67, 64, 64, 1)'}}/></button> <p className=' text-[24px] font-bold '>{arr[currOption]}</p></div>
            <div className=' flex flex-col justify-center gap-3 w-ful items-center mt-10'>
                <Right indx={currOption}/>
            </div>
        </div>
    </div>
  )
}

export default ProfileLarge
