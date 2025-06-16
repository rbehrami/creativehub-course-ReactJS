import React from 'react'
import { PrimaryButton } from '../styles/GlobalStyles';
import styles from '../promotions/Cards.module.css';
// import styled from 'styled-components';

const Card2 = () => (
  <div className="bg-white rounded-xl shadow-md flex flex-col">
    <img
      src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Fighting-Abusive-AI?wid=517&hei=291&fit=crop"
      alt="Copilot"
      className="h-[200px] w-full object-cover mb-4"
    />
    <div className="flex-grow px-6">
      <h3 className={styles.cardtitle}>Taking a stand for digitla safety</h3>
      <p className={styles.cardparagraph}>
        Microsoft is dismangling a global network of AI hackers with its first legal case to prevent the creation of harmful AI images.
      </p>
    </div>
    <div className="px-6 py-5 pb-4">
      <PrimaryButton>
        Uncover the details
      </PrimaryButton>
    </div>
  </div>
);



export default Card2;
