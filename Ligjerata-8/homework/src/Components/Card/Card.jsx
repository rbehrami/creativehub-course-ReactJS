import React from 'react'

const Card = ({description,image}) => {
  return (
    <>
    <div className='py-10'>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={image} alt="" />
        <div class="px-6 py-4">
            
            <p class="text-gray-700 text-base">
            {description}
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
    </div>
    </div>

    </>
  )
}

export default Card
