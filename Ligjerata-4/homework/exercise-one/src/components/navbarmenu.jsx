import React from 'react';

import '../assets/css/navbarmenu.css'

export function NavBarmenu(){
    return(
        <>
        
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="" className="logo">
                        <img src="https://www.adobe.com/federal/assets/svgs/adobe-logo.svg" alt="" />
                    </a>
                    <div className="navbar-center">
                        <ul className="nav-links">
                            <li><a href="/#">Creativity & Design</a></li>
                            <li><a href="/$">PDF & E-signatures</a></li>
                            <li><a href="/#">Marketing & Commerce</a></li>
                            <li><a href="/#">Learn & Support</a></li>
                        </ul>
                    </div>
                </div>              
                <div className="navbar-right">
                    <img src="" alt="" />
                    <button>Sign In</button>
                </div>
            </nav> 
            <div className="header-background"></div>
        </>
    );
};