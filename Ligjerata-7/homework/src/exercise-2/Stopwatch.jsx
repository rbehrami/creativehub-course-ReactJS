import React, { useRef } from 'react';

function Stopwatch() {
  const timeRef = useRef(0);
  const intervalRef = useRef(null);
  const displayRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      timeRef.current++;
      displayRef.current.innerText = timeRef.current + ' seconds';
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    timeRef.current = 0;
    displayRef.current.innerText = '0 second';
  };

  return (
    <div className="text-center  py-15">
      <h2 className="text-3xl font-bold mb-4">Stopwatch</h2>
      <p className="text-2xl mb-4" ref={displayRef}>0 second</p>
      <div className="space-x-4">
        <button onClick={start} className="bg-green-500 text-white mt-5 px-4 py-2 rounded cursor-pointer">Start</button>
        <button onClick={stop} className="bg-yellow-500 text-white px-4 py-2 rounded cursor-pointer">Stop</button>
        <button onClick={reset} className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">Reset</button>
      </div>
      
    </div>
  );
}

export default Stopwatch;
