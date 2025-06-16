import React from 'react'
import { PrimaryButton } from '../styles/GlobalStyles';
import styles from '../promotions/Cards.module.css';
// import styled from 'styled-components';

const Card1 = () => (
  <div className="bg-white rounded-xl shadow-md flex flex-col">
    <img
      src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-AI-5-Ways-Changing-Healthcare-Doctor?wid=517&hei=291&fit=crop"
      alt="Copilot"
      className="h-[200px] w-full object-cover mb-4"
    />
    <div className="flex-grow px-6">
      <h3 className={styles.cardtitle}>Five ways AI is changing healthcare</h3>
      <p className={styles.cardparagraph}>
        From accelerating diagnoses to personalizing tratment plans, discover how AI is helping enhance patient care.
      </p>
    </div>
    <div className="px-6 pb-4">
      <PrimaryButton>
        Find out more
      </PrimaryButton>
    </div>
  </div>
);



export default Card1;
