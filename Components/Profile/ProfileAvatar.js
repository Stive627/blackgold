import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ProfileAvatar({handleToogleProfile}) {
    const localUsername = undefined
  return (
    <div onClick={handleToogleProfile} className=' cursor-pointer'>
        {localUsername ? <div className=' w-7 h-7 border bg-black rounded-full flex justify-center items-center'><p>S</p></div> :<AccountCircleIcon/>}
        <p>{localUsername ?? 'Profile'}</p>
    </div>
  )
}

export default ProfileAvatar
