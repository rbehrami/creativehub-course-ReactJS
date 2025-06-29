import React from 'react'
import { NavBarList } from './NavBarList'

const NavBar = () => {  
return (
    <>
        <header>           
            <div className='bg-[#F594A3] py-2 text-center uppercase text-base font-semibold italic text-fuchsia-950'>
                <h3>We’re moving warehouses! Shipping to resume July 1</h3>
            </div>
            <div className=' px-4 py-2 border-b-1 border-gray-200'>
                <nav className='flex justify-between'>
                    <div className='py-4 w-45'>
                        <img src="https://pinkmoon.co/cdn/shop/files/PINKMOON_LOGO_LINE_194fb718-23d7-4b4c-995c-61276ef3963f.png?v=1682435017&width=320" alt="" />
                    </div>
                    <div>               
                        <ul className='flex items-center py-5 gap-5 text-gray-800 text-sm uppercase'>
                           {NavBarList.map((item)=>(
                            <li key={item.id}>
                                <a href={item.link} className='hover:underline underline-offset-6 decoration-3 cursor-pointer'>{item.name}</a>
                            </li>
                           ))}
                        </ul>
                    </div>
                    <div>
                        <ul className='flex items-center py-5 gap-5 text-gray-800 text-sm'>
                            <li>Search</li>
                            <li>Log In</li>
                            <li>Cart</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    </>
  )
}

export default NavBar;
