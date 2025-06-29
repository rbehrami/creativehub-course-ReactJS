import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Header/NavBar'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'


const FooterMenus = [
  {
    title: 'Help',
    links: ['Contact', 'Shipping & Returns', 'FAQs', 'Wholesale Inquiries'],
  },
  {
    title: 'Discover',
    links: ['Shop All', 'Service Offerings', 'Find In Stores', 'Rewards'],
  },
  {
    title: 'About',
    links: ['Our Mission', 'Journal', 'In The Press', 'Reviews'],
  },
  {
    title: 'Commitment',
    links: ['Giving Back', 'Transparency'],
  },
];

const Layout = () => {

  return (
    <div>
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>      
      <Banner />
      <Footer  menus={FooterMenus}/>
    </div>
  )
}

export default Layout
