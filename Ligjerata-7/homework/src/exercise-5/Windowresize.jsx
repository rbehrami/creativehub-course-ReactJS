import React from 'react'
import {useEffect, useState} from 'react'

const Windowresize = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        const handleResize = ()=>{
            setWidth(window.innerWidth)
        }
    
        window.addEventListener('resize', handleResize);

    return()=>{
        window.removeEventListener('resize', handleResize);
    };

    },[]);


  return (
    <div className="flex border border-solid justify-center items-center py-15 mt-20 h-20 text-2xl text-red-500">
        <h2 className="px-40">Window width: {width}</h2>
    </div>
  )
}

export default Windowresize
