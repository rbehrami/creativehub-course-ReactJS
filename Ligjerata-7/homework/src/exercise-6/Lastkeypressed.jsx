import React, { useState, useEffect } from 'react';

function LastKeyPressed() {
  const [lastKeyPressed, setLastKeyPressed] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      setLastKeyPressed(event.key);
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='flex border border-solid justify-center items-center py-15 mt-20 h-20 text-2xl text-blue-500'>
      <h2>Last Key Pressed:</h2>
      {lastKeyPressed ? (
        <p className='ms-5'>"{lastKeyPressed}"</p>
      ) : (
        <p className='ms-5'>Press a key in the keyboard.</p>
      )}
    </div>
  );
}

export default LastKeyPressed;