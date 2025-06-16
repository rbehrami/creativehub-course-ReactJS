import React from 'react'
import styles from '../promotions/Cards.module.css'
import {PrimaryButton} from '../styles/GlobalStyles'

const PromoXbox = () => {
  return (
    <>
    <div className='py-20'>
          <a href="">
            <div className='container mx-auto bg-gray-100 py-10'>
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-20 py-20">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-4xl font-bold mb-4">Xbox controllers</h2>
                        <p className="text-lg mb-6">
                            Elite, wireless, adaptive—find the controller that fits your style of play
                        </p>
                        <a href="#">
                            <PrimaryButton>Shop now</PrimaryButton>
                        </a>
                    </div>
                    <div>
                        <div className="h-full">
                            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Xbox-Controller-Valentine-Hero-2120x1190:VP5-1596x600" alt="Xbox Controllers" />
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    </>
  )
}

export default PromoXbox;