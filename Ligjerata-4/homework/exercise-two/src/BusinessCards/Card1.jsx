import React from 'react'
import { PrimaryButton } from '../styles/GlobalStyles';
import styles from '../promotions/Cards.module.css';
// import styled from 'styled-components';

const Card1 = () => (
  <div className="bg-white rounded-xl shadow-md flex flex-col">
    <img
      src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-AI-7Ed-Platinum-x86-13-007-COMMR?wid=380&hei=213&fit=crop"
      alt="Copilot"
      className="h-[200px] w-full object-cover mb-4"
    />
    <div className="flex-grow px-6">
       <button style={{background: '#ffb900', padding: '5px 10px', fontSize: '16px', fontWeight: '600'}}>New</button>
      <h3 className={styles.cardtitle}>Surface Laptop for Business, Copilot+ PC | Intel</h3>
      <p className={styles.cardparagraph}>
        Uncompromising power, all-day battery life, * and unique AI experiences - featuring Intel Core Ultra processors (Series 2).
      </p>
    </div>
    <div className="px-6 py-5 pb-4">
      <PrimaryButton>
        Shop now
      </PrimaryButton>
    </div>
  </div>
);



export default Card1;
