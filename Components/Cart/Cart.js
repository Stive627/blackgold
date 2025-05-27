import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { ArrowBackIos } from '@mui/icons-material'
import { useCart } from '../../context/CartContext'
import axios from 'axios'
import { fetchLink } from '../../Functions/fetchLink'
import ItemRow from './ItemRow'
import { useRouter } from 'next/navigation'
import getTotal from '../../Functions/getTotal'
import EmptyCart from './EmptyCart'
import Registration from '../Registration/Registration'

function Cart() {
  const {cart, removed, addTotal} = useCart()
  const [data, setData] = useState(undefined)
  const [show, setShow] = useState(false)
  useEffect(() =>{
    axios({url:fetchLink('products'), method:'GET'})
    .then(val => {
    const selectedDatas = val.data.filter(elt => [...cart.items].includes(elt._id)).map(elt => ({...elt, qty:1, price:elt.newPrice}))
    setData(selectedDatas)
    })
    .catch(err => console.log(err))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function addQuantity(idx){
    const dataCopy = [...data]
    const newDataCopy = dataCopy.map((elt, indx) => {
      if(indx === idx){
        return {...elt, qty:elt.qty + 1}
      }
      return elt
    })
    setData(newDataCopy)
  }
  function getRemoved(indx){
    const newDatas = data.filter((elt, idx) => idx !== indx)
    removed(cart.items[indx])
    setData(newDatas)
  }
  function reduceQuantity(idx){
    const dataCopy = [...data]
    const item = dataCopy.find((elt, indx) => indx === idx)
    if(item.qty === 1){
      getRemoved(idx)
    }
    else{
    const newDataCopy = dataCopy.map((elt, indx) => {
      if(indx === idx){
        return {...elt, qty:elt.qty - 1}
      }
      return elt
    })
    setData(newDataCopy)
    }
  }

  const total = getTotal(data?.map(elt => ({price:elt.price, qty:elt.qty})))
  const bgRouter = useRouter()
  
  function handleBuy(){
    setShow(true)
    addTotal(total)

  }
  if(!data) return null
  return (
    <div>
      <Navbar/>
      <div className=' flex justify-center'>
        <div className=' w-full lg:w-2/5'>
          <div className=' mb-2  mx-1 lg:mx-0 flex flex-row gap-4 items-center mt-28 lg:mt-20'>
            <button onClick={()=> bgRouter.back()}><ArrowBackIos sx={{color:'rgba(67, 64, 64, 1)'}}/></button>
            <p className=' text-[24px] font-bold'>Cart</p>
          </div>
          <div className=' flex justify-center'>
            <div className=' w-11/12'>
              <hr style={{color:'rgba(207, 207, 207, 1)'}}/>
              <div className=' flex flex-col divide-y divide-gray-300 mt-4 gap-5'>
                {
                  data?.map((elt, indx) =><ItemRow idx={indx} addQuantity={() => addQuantity(indx)} reduceQuantity={() => reduceQuantity(indx)}  key={indx} item={elt}  getRemoved={()=>getRemoved(indx)}/>)
                }
              </div>
              {cart.items.length >0 ?
                <>
                  <hr style={{color:'rgba(207, 207, 207, 1)'}} className=' mt-3'/>
                  <div className=' flex justify-end'>
                    <div>
                        <p className=' mt-3 mb-2 font-semibold float-right lg:text-[20px]'>Total {total} CFA</p><div></div>
                        <button onClick={handleBuy} style={{backgroundColor:'rgba(0, 122, 94, 1)'}} className=' text-white rounded-md font-semibold py-1 text-sm px-2 lg:px-5 '>Proceed to Buy</button>
                    </div>
                  </div>
                </> :
                <EmptyCart/>
              }
            </div>
          </div>
        </div>
      </div>
      <Registration show={show}/>
    </div>
  )
}

export default Cart
