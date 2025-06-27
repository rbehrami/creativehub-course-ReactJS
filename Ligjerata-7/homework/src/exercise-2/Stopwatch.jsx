import React from 'react'
import { useState, useRef } from 'react';

function Stopwatch(){
    const [startTime, setStartTime] = useState(0); //Koha ne sekonda
    const intervalRef = useRef(null);  //referenca

    const startTimer = () => {
        if(intervalRef.current !== null) return;
        intervalRef.current = setInterval(()=> {
            setStartTime(prevTime => prevTime + 1);
        },1000);
    }

  const stopTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
        intervalRef.current=null;
        setStartTime(0);
  };

      return (   
        <div className="text-center  py-15">
            <h1 className="text-3xl font-bold mb-4">Stopwatch</h1>
            <p className="text-2xl mb-4">{startTime} sekonda</p>
            <div className="space-x-4">
                <button onClick={startTimer} className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer">Start</button>
                <button onClick={stopTimer} className="bg-yellow-500 text-white px-4 py-2 rounded cursor-pointer">Stop</button>
                <button onClick={resetTimer} className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">Reset</button>
            </div>
        </div>
  )
}

export default Stopwatch
