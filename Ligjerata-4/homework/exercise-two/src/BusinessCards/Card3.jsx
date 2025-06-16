import React from 'react'
import { PrimaryButton } from '../styles/GlobalStyles';
import styles from '../promotions/Cards.module.css';
// import styled from 'styled-components';

const Card3 = () => (
  <div className="bg-white rounded-xl shadow-md flex flex-col">
    <img
      src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Visual-Studio-Icon?wid=380&hei=213&fit=crop"
      alt="Copilot"
      className="h-[200px] w-full object-cover"
    />
    <div className="flex-grow px-4  py-6 mt-6">
      <h3 className={styles.cardtitle}>Visual Studi 2022</h3>
      <p className={styles.cardparagraph}>
        Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services, and games.
      </p>
    </div>
    <div className="px-4 pb-4">
      <PrimaryButton>Download Visual Studio 2022</PrimaryButton>
    </div>
  </div>
);



export default Card3;
