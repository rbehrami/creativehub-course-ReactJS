import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'

const ExploreMoreHome = () => {
  return (
    <>
    <div className='container mx-auto py-8'>
      <h1 className='text-4xl my-3 font-semibold'>Explore more about Ai and Copilot</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-screen-xl '>
        <Card1 />
        <Card2 />
        <Card3 />
    </div>
    </div>
    </>
  )
}

export default ExploreMoreHome;
