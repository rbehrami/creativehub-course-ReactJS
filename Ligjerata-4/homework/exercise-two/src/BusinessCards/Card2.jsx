import React from 'react'
import { PrimaryButton } from '../styles/GlobalStyles';
import styles from '../promotions/Cards.module.css';
// import styled from 'styled-components';

const Card2 = () => (
  <div className="bg-white rounded-xl shadow-md flex flex-col">
    <img
      src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Copilot-Commercial?wid=380&hei=213&fit=crop"
      alt="Copilot"
      className="h-[200px] w-full object-cover"
    />
    <div className="flex-grow px-6 py-6 mt-6">
      <h3 className={styles.cardtitle}>Microsoft 365 Copilot</h3>
      <p className={styles.cardparagraph}>
        Save time and focus on the things that matter most with AI in Microsoft 365 for busness.
      </p>
    </div>
    <div className="px-4 pb-4">
      <PrimaryButton>Learn More</PrimaryButton>
    </div>
  </div>
);



export default Card2;
