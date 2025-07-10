import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment': 
      return { count: Math.min(state.count + 1,10) };
    case 'decrement':
      return { count: Math.max(state.count - 1,0)};
    case 'reset':
        return initialState;
    default:
      throw new Error();
  }
}

export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main className='container mx-auto'>
    <div className='block text-center gap-5  mt-10'>
      <p className='text-2xl'>Count: <span className='font-bold text42xl'>{state.count}</span></p>
      <div className='flex gap-3 py-3 justify-center'>
        <button className='bg-green-500 px-5 py-1 rounded' onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button className='bg-red-500 px-5 py-1 rounded text-2xl' onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        <button className='bg-yellow-500 px-5 py-1 rounded text-2xl' onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
      
    </div>
    </main>
  
  );
}
