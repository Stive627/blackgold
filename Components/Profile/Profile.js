import React from 'react'
import ProfileLarge from './ProfileLarge'
import { useScreen } from '../../hooks/useScreen'
import ProfileSmall from './ProfileSmall'


function Profile() {
    const width = useScreen()
    if(width < 800) return <ProfileSmall/>
    return <ProfileLarge/>

}

export default Profile
