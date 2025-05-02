import { useEffect, useState } from "react";

export default function useVisible(elt){
    const [visible, setVisible] = useState(false)
    useEffect(()=>{
    function handleScroll(){
        const dim = elt.current.getBoundingClientRect()
        if(dim.top >0 && dim.bottom <= window.innerHeight){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    },[])
    return visible
}