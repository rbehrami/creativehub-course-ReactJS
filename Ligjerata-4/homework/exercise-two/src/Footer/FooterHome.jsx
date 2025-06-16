import React from 'react'
import WhatsNew from './WhatsNew';
import MicrosoftStore from './MicrosoftStore';
import Education from './Education';
import Business from './Business';
import DeveloperIT from './DeveloperIT';
import Company from './Company';
import { BiGlobe } from "react-icons/bi";

const FooterHome = () => {
  return (
    <>   
      <footer className="bg-[#f2f2f2]">
      <div class="container px-6 py-10 mx-auto">
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6">
              <WhatsNew />
              <MicrosoftStore />
              <Education />
              <Business />
              <DeveloperIT />
              <Company />
          </div>

          <div className='sm:flex sm:items-center sm:justify-between mt-5'>
            <div className='sm:flex sm:items-center sm:justify-center gap-8'>
                <p class="flex flex-row items-center text-xs text-gray-600 gap-2">
                    <BiGlobe />
                    <a href="">English (United States)</a>
                </p>
                <p class="flex flex-row items-center text-xs  text-gray-600 gap-2">
                    <BiGlobe />
                    <a href="">Your Privacy Choices</a>
                </p>
                <p class="flex flex-row items-center text-xs  text-gray-600 gap-2">
                    Consumer Healthy Privacy
                </p>    
            </div>  
            <div className='sm:flex sm:flex-row sm:items-center sm:justify-between gap-5 mt-5'>
                <p class=" text-xs  text-gray-600 ">
                    <a href="">Sitemap</a>
                </p>   
                <p class=" text-xs  text-gray-600 ">
                    <a href="">Contact Microsoft</a>
                </p> 
                 <p class=" text-xs  text-gray-600 ">
                    <a href="">Privacy</a>
                </p> 
                 <p class=" text-xs  text-gray-600 ">
                    <a href="">Terms of use</a>
                </p> 
                 <p class=" text-xs  text-gray-600 ">
                    <a href="">Trademarks</a>
                </p>
                 <p class=" text-xs  text-gray-600 ">
                    <a href="">Safety & eco</a>
                </p>
                 <p class=" text-xs  text-gray-600 ">
                    <a href="">Recycling</a>
                </p>
                 <p class=" text-xs  text-gray-600 ">
                    <a href="">About our ads</a>
                </p>
                 <p class=" text-xs  text-gray-600 ">
                    <a href="">Microsoft 2025</a>
                </p>
            </div>             
          </div>          
      </div>
      </footer>
    </>
  )
}

export default FooterHome;