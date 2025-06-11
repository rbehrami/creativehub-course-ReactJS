import { useState } from 'react'
import {NavBarmenu} from './components/navbarmenu'
import {TopContent} from './components/topcontent'
import { ContentLeft } from './components/contentleft'
import {ContentRight} from './components/contentright'
import { MiddleRow } from './components/middlerow'
import {CardOne} from './components/card1'
import {CardTwo} from './components/card2'
import {CardThree} from './components/card3'
import {CardFour} from './components/card4'
import {CardFive} from './components/card5'
import {CardSix} from './components/card6'
import { FooterColumnOne } from './components/footer-content-col1'
import {FooterColumnTwo} from './components/footer-col2'
import { FooterColumnThree } from './components/footer-col3'
import { FooterColumnFour } from './components/footer-col4'
import { FooterColumnFive } from './components/footer-col5'
import { FooterMiddleContent } from './components/footer-middle-content'
import { FooterBottom } from './components/footer-bottom'
import './App.css'



function App() {
  return (
    <>
      <NavBarmenu />
      <TopContent />
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', padding: '0 35px'}}>
      <ContentLeft />
      <ContentRight />
      </div>
      <MiddleRow />
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gridAutoRows: 'auto', gridGap: '2rem',marginBottom: '25px', padding: "0 50px"}}>
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
        <CardFive />
        <CardSix />
      </div>
      <div style={{background: '#FAF7F7'}}>
        <div style={{display: 'grid',justifyItems: 'center',gridTemplateColumns: 'repeat(5, 1fr)',gridAutoRows: 'auto',gap: '2rem',padding: '20px 0'}}>
          <FooterColumnOne />
          <FooterColumnTwo />
          <FooterColumnThree />
          <FooterColumnFour />
          <FooterColumnFive />
        </div>
        <FooterMiddleContent/>
        <FooterBottom/>
      </div>      
    </>
  )
}

export default App
