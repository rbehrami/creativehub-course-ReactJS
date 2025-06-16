import React from 'react'
import { PrimaryButton } from '../styles/GlobalStyles';
import styles from '../promotions/Cards.module.css';
// import styled from 'styled-components';

const Card4 = () => (
  <div className="bg-white rounded-xl shadow-md flex flex-col">
    <img
      src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Windows-11-Business?wid=380&hei=213&fit=crop"
      alt="Copilot"
      className="h-[200px] w-full object-cover"
    />
    <div className="flex-grow px-5  py-6 mt-6">
      <h3 className={styles.cardtitle}>Windows 11 for business</h3>
      <p className={styles.cardparagraph}>
        Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all.
      </p>
    </div>
    <div className="px-4 pb-4">
      <PrimaryButton>Learn More</PrimaryButton>
    </div>
  </div>
);



export default Card4;
