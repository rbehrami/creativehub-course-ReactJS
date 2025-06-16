import React from 'react'
import NavBar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import Hero from './Hero/Hero'
import Listitems from './Listitems/Listitems'
import PromotionLayout from './promotions/Promotion-Layout'
import PromoXbox from './PromoXbox/Promo-xbox'
import BusinessLayout from './BusinessCards/BusinessLayout'
import ExploreMoreHome from './Explore-more/ExploreMoreHome'
import Socialicons from './SocialIcons/Socialicons'
import FooterHome from './Footer/FooterHome'

const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Hero />
      <Listitems />
      <PromotionLayout />
      <PromoXbox />
      <BusinessLayout /> 
      <ExploreMoreHome />
      <div className='container mx-auto'>
         <Hero />
      </div>
      <Socialicons />
      <FooterHome />
    </>
  )
}

export default App
