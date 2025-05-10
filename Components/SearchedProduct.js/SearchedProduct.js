import React, { useEffect, useState } from 'react'
import { useLang } from '../../context/LangContext'
import Navbar from '../Navbar/Navbar'

function SearchedProduct({params}) {
    const [id, setId] = useState('')
    useEffect(()=>{
        params.then((value) => setId(value.id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const {lang} = useLang()
    console.log(lang)
  return (
    <div>
        <Navbar/>
        <p>Hi Stive {id}</p>
    </div>
  )
}

export default SearchedProduct
