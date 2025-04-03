import axios from "axios";
import { useEffect, useState } from "react";
import { fetchLink } from "../Functions/fetchLink";

export default function useFetchSeasonalImg(){
    const [img, setImg] = useState(undefined)
    useEffect(()=> {
        axios({url:fetchLink('products/seasonalProducts')})
        .then((value) => setImg(value.data))
        .catch(err => console.error(err.response.data))
    },[])
    return img
}