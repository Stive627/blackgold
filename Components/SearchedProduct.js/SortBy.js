import { Sort } from '@mui/icons-material'
import React from 'react'

function SortBy() {
  return (
    <div className=' flex flex-row gap-2 items-center'>
        <p style={{color:'rgba(0, 0, 0, 0.8)'}}>Sort by </p>
        <button><Sort sx={{color:'rgba(0, 0, 0, 0.5)', fontSize:15}}/></button>
    </div>
  )
}

export default SortBy
