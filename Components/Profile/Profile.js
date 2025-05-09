import React from 'react'
import ProfileLarge from './ProfileLarge'
import { useScreen } from '../../hooks/useScreen'
import ProfileSmall from './ProfileSmall'


function Profile({handleToogleProfile}) {
    const width = useScreen()
    if(width < 800) return <ProfileSmall handleToogleProfile={handleToogleProfile}/>
    return <ProfileLarge handleToogleProfile={handleToogleProfile}/>

}

export default Profile
