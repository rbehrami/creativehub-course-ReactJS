import React from 'react'
import {SocialIconsImage} from '../styles/GlobalStyles'

const Socialicons = () => {
  return (
    <>
    <div className='container flex flex-row mx-auto py-20 gap-5'>
        <div className='flex justify-center items-center'>
            <h3>Follow Microsoft </h3>
        </div>
        <div className=''>
            <a href=""><SocialIconsImage src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Facebook%202x?scl=1" alt="" /></a>
        </div>
        <div className=''>
            <a href=""><SocialIconsImage src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-MSCOM-X-64x64?scl=1" alt="" /></a>
        </div>
         <div className=''>
            <a href=""><SocialIconsImage src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Linkedin%202x?scl=1" alt="" /></a>
        </div>
    </div>
    </>
  )
}

export default Socialicons
