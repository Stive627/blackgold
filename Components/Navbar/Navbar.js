import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { fetchLink } from '../../Functions/fetchLink';
import { useScreen } from '../../hooks/useScreen';
import Language from '../Language/Language';
import Location from '../Location/Location';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';


function Navbar() {
    const width = useScreen() 
    const [showl, setShowl] = useState(false) //show the localisation window or not
    const [streetName, setStreetName] = useState('') //display the name of the street
    const [locadata, setLocaData] = useState(undefined) //the data of location saved on localstorage
    const [loadingLocation, setLoadingLocation] = useState(false) // we are sending the request to api for getting the localisation longitude and latitude
    const alreadySetLocation = localStorage.getItem('blackgoldLocation')
    const [userLocation, setUserLocation] = useState({input:'', suggestedArr:undefined, selectedLocation:'', showl:false, streetName:'', locadata:undefined, loadingLocation:false}) // The list of suggested location when the user is writing in the field input

    // This function takes the data based on enable location access
    function handleEnableLocation(){
      const success = (pros) =>{
        let coords = pros.coords
        console.log(coords.latitude, coords.longitude)
        setLocaData({longitude:coords.longitude, latitude:coords.latitude})    
        localStorage.setItem('blackgoldLocation', JSON.stringify({longitude:coords.longitude, latitude:coords.latitude}))    
      }
      const fail = (err) => {
        console.warn(err.code, err.message)
      }
      const options = {
        enableHighAccuracy:true,
        timeout:5000,
        maximunAge:0
      }
      navigator.geolocation.getCurrentPosition(success, fail, options)
    }
    //The function select a location from the list.
    
    function handleSelectedLocation(elt){
      setUserLocation({...userLocation, selectedLocation:elt})
    }
    //The function cancel a selectedLocation.
    function handleDeselectLocation(){
      setUserLocation({...userLocation, selectedLocation:''})
    }
    //side effect for location search
    
    useEffect(()=>{
      const searchWord = userLocation.input
      if(searchWord.length){
        axios({url:`https://api.mapbox.com/search/geocode/v6/forward?q=${searchWord}&limit=9&access_token=pk.eyJ1Ijoic3RpdmV0c2EiLCJhIjoiY21hM3Q4azhvMDBtdjJpcXhpaDRtYjB2OCJ9.cAVLQ69PTYp33gHCB6yV1A`, method:'GET'})
        .then((val) => {
          const primaryArr = val.data['features']
          const dataArr = primaryArr.map(elt => elt['properties'].full_address)
          setUserLocation({...userLocation, suggestedArr:dataArr})
          console.log(dataArr)
        })
        .catch(err => console.log(err))
      }
      else setUserLocation({...userLocation, suggestedArr:undefined})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userLocation.input])

    //the side effect handle the effect based on enable location access
    useEffect(()=>{
      const data = JSON.parse(alreadySetLocation)
      if(data){
        console.log(data)
        setLoadingLocation(true)
        axios({url:`https://api.mapbox.com/search/geocode/v6/reverse?access_token=pk.eyJ1Ijoic3RpdmV0c2EiLCJhIjoiY21hM3Q4azhvMDBtdjJpcXhpaDRtYjB2OCJ9.cAVLQ69PTYp33gHCB6yV1A&longitude=${data.longitude}&latitude=${data.latitude}`, method:'GET'})
        .then((value) => {
          const street = value.data['features'][0]['properties'].full_address
          console.log(street)
          setStreetName(street)
          setShowl(false)
        })
        .catch(err => console.log(err))
        .finally(()=> setLoadingLocation(false))
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[locadata])

  // this function delete the location data from localstorage
  function handleDeleteLocationBrowser(){
    localStorage.clear('blackgoldLocation')
    setStreetName(undefined)
  }

  // Navbar for small screen
  if(width <1000){
    return(
      <div style={{backgroundColor:'rgba(41, 142, 119, 1)'}} className=' text-white w-full pt-2 fixed z-20'>
        <div className=' flex flex-row items-center gap-3'>
          <Image width={40} height={40} alt='logo de blackgold' src={fetchLink('logo.png')}/>
          <div className='relative grow'>
              <input className=' border border-none w-full py-1 bg-white text-slate-600 pl-2.5 rounded-md outline-none' placeholder='Search'/>
              <div className=' absolute right-2 top-1 '><SearchIcon className=' text-slate-700'/></div>
          </div>
          <div className=' relative'><AccountCircleIcon/></div>
          <div className=' relative'><LocalGroceryStoreIcon/></div>
        </div>
        <hr className=' w-full bg-white my-1.5'/>
        <div style={{color:'rgba(255, 255, 255, 1)'}} className=' w-full flex justify-between text-[14px] mt-2 py-2'>
          {streetName && <p><LocationOnIcon/>{streetName}</p>}
          <button onClick={()=>setShowl(true)} className=' border border-none'>{alreadySetLocation ? 'Change' : 'Add'} location</button>
        </div>
        <Location handleDeselectLocation={handleDeselectLocation} handleSelectedLocation={handleSelectedLocation} userLocation={userLocation} setUserLocation={setUserLocation} loading={loadingLocation} handleEnableLocation={handleEnableLocation} showl={showl} setShowl={setShowl}></Location>
      </div>
    )
  }
  //Navbar for big screen

  return (
    <div style={{backgroundColor:'rgba(41, 142, 119, 1)'}} className=' text-white w-full px-2 text-[14px] py-1 fixed z-20'>
        <div className=' flex flex-row items-center gap-5'>
          <Image width={50} height={50} alt='logo de blackgold' src={fetchLink('logo.png')}/>
            <p onClick={handleDeleteLocationBrowser} className=' text-[24px] font-bold cursor-pointer'>Black Gold</p>
            <Location handleDeselectLocation={handleDeselectLocation} handleSelectedLocation={handleSelectedLocation} userLocation={userLocation} setUserLocation={setUserLocation} loading={loadingLocation} handleEnableLocation={handleEnableLocation} showl={showl} setShowl={setShowl}>
              <p>Deliver to </p>
              {streetName ? <p className=' cursor-pointer' onClick={()=>setShowl(true)}>{streetName}</p> :<button onClick={()=>setShowl(true)} className=' border border-none '> Select Location {' '}<KeyboardArrowDownIcon className='text-white'/> </button>}
            </Location>
          <div className='relative grow'>
            <input className=' border border-none w-full py-2 bg-white text-slate-600 pl-2.5 rounded-md outline-none' placeholder='Search'/>
            <div className=' absolute right-2 top-2 '><SearchIcon className=' text-slate-700'/></div>
          </div>
          <div className=' flex flex-row gap-6'>
            <Language/>
            <div>
                <AccountCircleIcon/>
                <p>Profile</p>
            </div>
            <div>
                <LocalGroceryStoreIcon/>
                <p>Cart</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar