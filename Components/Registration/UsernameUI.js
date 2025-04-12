import React from 'react'

function UsernameUI({username, setUsername}) {
    const validUsername = username.length >=4
  return (
    <div className=' mt-9'>
      <p>Enter your username</p>
      <input placeholder='Enter your username' style={{backgroundColor:'rgba(217, 217, 217, 0.52)'}} className=' outline-red-600 w-full rounded-lg px-3 py-1 my-2' value={username} onChange={(e) => setUsername(e.target.value)}/>
      <div className=' flex justify-center mt-4'><button type='submit' disabled={!validUsername} className=' px-4 py-1 rounded-lg' style={{color:'white', cursor:validUsername? 'pointer':'not-allowed', backgroundColor:validUsername? 'rgba(203, 35, 37, 1)':'rgba(158, 42, 43, 0.55)'}}>Save</button></div>
    </div>
  )
}

export default UsernameUI
