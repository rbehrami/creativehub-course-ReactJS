import React from 'react'
import { NavbarMenu } from '../Navbar/NavbarMenu'
import Logo from '../assets/microsoft-logo.png'
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa'

const NavBar = () => {
  const menuItems = ['Microsoft 365', 'Teams','Copilot', 'Windows','Surface','Xbox','Deals','Small Business','Support' ];
  return (
    <>
     <nav className="w-full border-b border-gray-200 bg-white py-3">
        <div className="mx-auto flex items-center justify-between px-20">
          {/* logo and menu section */}
          <div className="flex items-center gap-8">
            {/* logo section */}
            <div>
                <img src={Logo} alt="Logo" className='w-26' />
            </div>
            {/* menu section */}
            <div className="hidden md:block mt-1">
              <ul className="flex items-center gap-5 text-gray-800 text-sm">
                {/* {NavbarMenu.map((item) => (
                  <li key={item.id}>
                    <a href={item.link} className='hover:underline underline-offset-6 decoration-3'>{item.title}</a>
                  </li>
                ))} */}
                {
                  menuItems.map((item,idx)=>(
                    <li key={idx} className="hover:underline underline-offset-6 decoration-3 cursor-pointer">{item}</li>
                  ))
                }
              </ul>
            </div>
          </div>
          {/* right */}
          <div className='flex items-center gap-8 text-gray-700 text-sm mt-3'>
            <span className="hidden md:block">All Microsoft</span>
            <div className="flex flex-row items-center gap-2">
              <a href="" className='flex items-center gap-2'>
                <span className="hidden md:block">Search</span>
                <FaSearch className="text-xl" />
              </a>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <span className="hidden md:block">Cart</span>
                <FaShoppingCart className="cursor-pointer" />
            </div>
            <div className='flex flex-row items-center gap-2'>
                <span className="hidden md:block" >Sign in</span>
                <FaUserCircle className="w-6 h-6 text-5xl" />
            </div>
          </div>
          {/* Profile section or hamburger menu here */}
          {/* <div className='md:hidden' onClick={()=>
            setOpen(!open)}>
            <MdMenu className='text-4xl' />
          </div> */}
        </div>
     </nav>
     {/* Mobile Sidebar section */}

    </>
  )
}

export default NavBar

