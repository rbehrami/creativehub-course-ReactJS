import React from 'react'

const Hero = () => {
  return (
    <div className="container mx-auto w-full h-[400px] bg-gray-500 flex justify-center items-center rounded-xl">
        <div className='text-center'>
            <h1 className="text-5xl font-bold text-white">Dhuro se nuk pakësohesh</h1>
      <p className='text-wrap text-xl px-50 text-white py-5'>Një platformë që mundëson të dhuroni gjëra për njerëzit që kanë nevoja për ato produkte, përdorimi është falas si produktet që dhurohen.</p>
      <div>
        <button className='bg-white px-10 py-5 rounded-xl font-medium me-5'>Dhuro</button>
        <button className='border  px-10 py-5 rounded-xl font-medium text-white'>Shfleto</button>
      </div>
        </div>
      
    </div>
  )
}

export default Hero;
