import React from 'react'
import {useState, useEffect} from 'react'


function Savetolocal() {
 const [count, setCount] = useState(0);
 useEffect(()=>{
    const storedCount = localStorage.getItem('count');
    if(storedCount !== null){
        setCount(parseInt(storedCount));
    }
 },[]);

 useEffect(()=>{
    localStorage.setItem('count', count);
 },[count]);

 const increaseNumber = ()=>setCount(prev => prev+1);
 const decreaseNumber = ()=>setCount(prev=>prev-1);
 const resetNumber = () => setCount(0);

  return (
     <div className="container mx-auto  flex flex-col w-xl mb-20 py-15 items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">Counter App</h1>
      <div className="text-6xl mb-6 text-indigo-900">{count}</div>
      <div className="space-x-4">
        <button onClick={decreaseNumber} className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl text-xl">−</button>
        <button onClick={resetNumber} className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-xl text-xl">Reset</button>
        <button onClick={increaseNumber} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl text-xl">+</button>
      </div>
    </div>
  )
}

export default Savetolocal
