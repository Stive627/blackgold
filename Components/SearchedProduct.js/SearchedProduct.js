import React, { useState, useEffect } from 'react'
import RightSearchProduct from './RightSearchProduct'
import LeftSearchProduct from './LeftSearchProduct'
import { useScreen } from '../../hooks/useScreen'
import SmallRightSearch from './SmallRightSearch'
import { useData } from '../../context/DataContext'
import { SearchDataProvider, useSearchData } from './SearchDataContext'
import { useSearchParams } from 'next/navigation'
import DescriptionProduct from './DescriptionProduct'
import { fetchLink } from '../../Functions/fetchLink'
import axios from 'axios'

function SearchedProduct(){
  const {data, getProduct} = useSearchData()
  useEffect(()=>{
    axios({url:fetchLink('products'), method:'GET'})
    .then((val)=>{getProduct(val.data); console.log(val.data)})
    .catch(err => console.error(err.response.data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const params = useSearchParams()
  const category = decodeURI(params.get('category')) 
  const categoryIndx = category === 'Farm Fresh'? 0 : 1
  const [filter, setFilter] = useState({categoryIndx:0, category:category})
  const [localShow, setLocalShow] = useState(categoryIndx)
  const id = params.get('id')
  const width = useScreen()
  const large = width > 800
  if(!data) return <div className=' h-screen w-screen flex justify-center items-center'><button className=' border border-black rounded-full border-t-white animate-spin w-8 h-8'></button></div>
  return (
    <div className={`${large?'grid  grid-cols-9 h-screen':'w-full'}`}>
      {id ? 
        <>
        <DescriptionProduct/>
        </>
        :
        <>
      {large && <LeftSearchProduct setLocalShow={setLocalShow} localShow={localShow} filter={filter} setFilter={setFilter}/>}
        <RightSearchProduct localShow={localShow} title={filter.category} />
      {!large && <SmallRightSearch/>}
        </>}
    </div>
  )
}

export default SearchedProduct
