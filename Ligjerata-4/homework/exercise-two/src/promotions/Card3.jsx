import React from 'react'
import styles from './Cards.module.css'
import { PrimaryButton } from '../styles/GlobalStyles';

const Card3 = () => {
  return (
<>
      <div className="w-full md:w-1/4 p-2">
  <div className="h-full flex flex-col rounded shadow-lg overflow-hidden">
    <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-X-2TB-Galaxy-Black-Series-X-1TB-Digital-White-Series-S-1TB-White?wid=380&hei=213&fit=crop" alt="Copilot" className="h-[200px] w-full object-cover" />
    
    <div className="flex-grow px-6 py-4">
      <h3 className={styles.cardtitle}>Trade in and get up to $180 for your used console</h3>
      <p className={styles.cardparagraph}>
        Buy a new Xbox Series X or S and get cach back on an eligible trade-in. Limited-time offer.
      </p>
    </div>

    <div className="px-6 pt-2 pb-6">
      <PrimaryButton>Shop Xbox consoles</PrimaryButton>
      <p><a href="#" className={styles.linktoCheck}>Check your device's eligibility</a></p>
    </div>
  </div>
</div>
</>
  )
}

export default Card3;
