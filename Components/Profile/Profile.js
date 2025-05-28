import React from 'react'
import ProfileLarge from './ProfileLarge'
import { useScreen } from '../../hooks/useScreen'
import ProfileSmall from './ProfileSmall'
import { OptionProvider } from './OptionContext'


function Profile() {
    const width = useScreen()
    if(width < 800) return <OptionProvider><ProfileSmall/></OptionProvider>
    return <ProfileLarge/>

}

export default Profile
