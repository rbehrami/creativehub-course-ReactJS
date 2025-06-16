import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'

const BusinessLayout = () => {
  return (
    <>
    <div className='container mx-auto '>
      <h1 className='text-4xl my-3 font-semibold'>For business</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl '>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
    </div>
    </div>
    </>
  )
}

export default BusinessLayout;
