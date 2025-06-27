import React, { useRef, useEffect } from 'react';

function Stopwatch() {
  const secondsRef = useRef(0);     
  const intervalRef = useRef(null);
  const displayRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      secondsRef.current += 1;

      if (displayRef.current) {
        displayRef.current.textContent = `${secondsRef.current} seconds`;
      }
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    secondsRef.current = 0;

    if (displayRef.current) {
      displayRef.current.textContent = '0 seconds';
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold mb-4">Stopwatch</h1>
      <p ref={displayRef} className="text-4xl text-blue-600 mb-6">0 seconds</p>
      <div className="space-x-4">
        <button onClick={startTimer} className="bg-green-500 text-white px-4 py-2 rounded">Start</button>
        <button onClick={stopTimer} className="bg-red-500 text-white px-4 py-2 rounded">Stop</button>
        <button onClick={resetTimer} className="bg-yellow-500 text-white px-4 py-2 rounded">Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
