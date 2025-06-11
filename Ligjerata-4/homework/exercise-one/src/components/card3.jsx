import React from 'react'
import '../assets/css/cards.css'

export function CardThree(){
    return (
        <>
            <div className="card3">
                <div className="card-body">
                    <div className='card3-header-bg'>
                        <div className="card-content">
                            <p className="card-intro">Creative Cloud</p>
                            <p className='card3-paragraph'>Creative Cloud All Apps free trial</p>
                            <p className='card3-paragraph'>Creative Cloud for business</p>
                            <p className='card3-paragraph'>Student pricing</p>
                        </div>
                    </div>
                    
                    <div className='card3-main'>                     
                            <h4 className='card3-title'>Acrobat</h4>
                            <p className='card3-text'><a href="">Acrobat free trial</a></p>
                            <p className='card3-text'><a href="">Online PDF tools</a></p>
                     

                        <h4 className='card3-title'>Explore</h4>
                        <p className='card3-text'><a href="">View all products</a></p>
                        <p className='card3-text'><a href="">See all plans and pricing</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}