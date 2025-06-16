import React from 'react'
import styles from './Cards.module.css'
import { PrimaryButton } from '../styles/GlobalStyles'

const Card4 = () => {
  return (
      <div className="w-full md:w-1/4 p-2">
        <div className="h-full flex flex-col rounded shadow-lg overflow-hidden">
          <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-M365-Icons-Teams?wid=380&hei=213&fit=crop" alt="Copilot" className="h-[200px] w-full object-cover" />
          
          <div className="flex-grow px-5 py-4">
            <h3 className={styles.cardtitle}>Achive the extraordinary</h3>
            <p className={styles.cardparagraph}>
              Microsoft 365 delivers cloud storage, security, and Microsoft Copilot in your favorite apps- all in one plan.
            </p>
          </div>

          <div className="px-5 pt-2 pb-6">
            <PrimaryButton>Shop Microsoft 365</PrimaryButton>
          </div>
        </div>
      </div>
  )
}

export default Card4;
