import React from 'react'
import { PrimaryButton } from '../styles/GlobalStyles';
import styles from '../promotions/Cards.module.css';
// import styled from 'styled-components';

const Card3 = () => (
  <div className="bg-white rounded-xl shadow-md flex flex-col">
    <img
      src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-AI-15-Milestones?wid=517&hei=291&fit=crop"
      alt="Copilot"
      className="h-[200px] w-full object-cover mb-4"
    />
    <div className="flex-grow px-6">
      <h3 className={styles.cardtitle}>15 Microsoft milestones that shaped AI</h3>
      <p className={styles.cardparagraph}>
        From the launch of Bing to the development of Copilot, explore key innovations that shaped Microsoft's vision for AI.
      </p>
    </div>
    <div className="px-6 py-5 pb-4">
      <PrimaryButton>
        Find More
      </PrimaryButton>
    </div>
  </div>
);



export default Card3;
