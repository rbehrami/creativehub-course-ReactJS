import React from 'react'
import {useRef, useEffect} from 'react'

const Exercise1 = () => {
  const inputRef = useRef(null);

 useEffect(()=>{
  inputRef.current.focus();
 },[])

  return (
    <div>
       
      <div className="container mx-auto mt-10 w-xl ">        
      <form action="" className='d-flex mx-auto mt-10 py-10 px-10'>
          <div className='d-flex text-center'>
            <h2 className='text-2xl font-bold mb-10'>Multiple input form</h2>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700">Fullname</label>
            <input type="text" ref={inputRef}  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>
              <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>
              <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>
      </form>
    </div>
    </div>
  )
}

export default Exercise1
