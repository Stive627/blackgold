import React from 'react'

function UsernameUI({username, handleUsername, handleSubmit}) {
    const validUsername = username.length >=4
  return (
    <form onSubmit={handleSubmit}  className=' mt-9'>
      <p>Enter your username</p>
      <input autoFocus={true} placeholder='Enter your username' style={{backgroundColor:'rgba(217, 217, 217, 0.52)'}} className=' outline-red-600 w-full rounded-lg px-3 py-1 my-2' value={username} onChange={handleUsername}/>
      <div className=' flex justify-center mt-4'><button type='submit' disabled={!validUsername} className=' px-4 py-1 rounded-lg' style={{color:'white', cursor:validUsername? 'pointer':'not-allowed', backgroundColor:validUsername? 'rgba(203, 35, 37, 1)':'rgba(158, 42, 43, 0.55)'}}>Save</button></div>
    </form>
  )
}

export default UsernameUI
