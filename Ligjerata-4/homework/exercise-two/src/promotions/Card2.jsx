import React from 'react'
import cardImage from '../assets/surfacepro.jpg'
import styles from './Cards.module.css'
import {PrimaryButton} from '../styles/GlobalStyles'

const Card2 = () => {
  return (
    <>
      <div className="w-full md:w-1/4 p-2">
        <div className="h-full flex flex-col rounded shadow-lg overflow-hidden">
          <img src={cardImage} alt="Copilot" className="h-[200px] w-full object-cover" />          
          <div className="flex-grow px-5 py-4">
            <h3 className={styles.cardtitle}>Save up to $500.00 off select Surface Pro, Copilot+ PC</h3>
            <p className={styles.cardparagraph}>
              Hit the books with a fast, flexible 2-in-1 built for advanced AI possibilities.
            </p>
          </div>      
          <div className="px-6 pt-2 pb-6">
            <PrimaryButton><a href="#">Shop Surface Pro, Copilot+ PC</a></PrimaryButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card2;
