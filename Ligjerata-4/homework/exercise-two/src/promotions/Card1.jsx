import React from 'react'
import cardImage from '../assets/copilot.jpg'
import styles from './Cards.module.css'
import { PrimaryButton } from '../styles/GlobalStyles'


const Card1 = () => {
  return (
    <>
      <div className="w-full md:w-1/4 p-2">
        <div className="h-full flex flex-col rounded shadow-lg overflow-hidden">
          <img src={cardImage} alt="Copilot" className="h-[200px] w-full object-cover" />          
          <div className="flex-grow px-5 py-4">
            <h3 className={styles.cardtitle}>Copilot is your AI companion</h3>
            <p className={styles.cardparagraph}>
              Always by your side, ready tosupport you whenever and wherever you need it.
            </p>
          </div>
          <div className="px-6 pt-2 pb-6">
            <PrimaryButton>Download the Copilot app</PrimaryButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card1;