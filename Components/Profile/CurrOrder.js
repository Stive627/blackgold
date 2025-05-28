import React, { useState, useEffect } from 'react'
import { useCart } from '../../context/CartContext'
import SingleCurrOrder from './SingleCurrOrder'
import axios from 'axios'
import { fetchLink } from '../../Functions/fetchLink'

function CurrOrder() {
  const [data, setData] = useState(undefined)
  const {cart} = useCart()
    useEffect(() =>{
        axios({url:fetchLink('products'), method:'GET'})
        .then(val => {
        const selectedDatas = val.data.filter(elt => [...cart.items].includes(elt._id))
        setData(selectedDatas)
        })
        .catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])  
  if(!data) return <div className=' text-center mt-6'><p>Current order</p></div>
  return (
    <div className=' flex flex-col divide-y gap-6 divide-gray-200 mt-10'>
      {data.map((elt, indx) => <SingleCurrOrder key={indx} product={elt}/>)}
    </div>
  )
}

export default CurrOrder
