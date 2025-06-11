import React from 'react'
import '../assets/css/cards.css'

export function CardSix(){
    return (
        <>
            <div className="card6">
                <div className="card6-content">
                    <div className='card6-header'>
                        <h3>in the news</h3>
                    </div>
                    <div className='card6-body'>
                        <p className="card6-intro">Photoshop Arrives for Android</p>
                        <p className="card6-paragraph">Create where inspiration strikes with the all-new Android app.</p>
                        <p className='read-story'><a href="">Read the story</a></p>
                        <hr className='space-up-down' />
                        <p className="card6-intro">Enter to win an Adobe MAX Creativity Award.</p>
                        <p className="card6-paragraph">Share your best work. Submissions open until June 26.</p>
                        <p className='read-story'><a href="">Read the story</a></p>
                        <hr className='space-up-down'/>
                        <p className="card6-intro">Introducing Firefly AI and Creative Cloud upgrades.</p>
                        <p className="card6-paragraph">Adobe MAX London unveils new AI tools and performance boosts.</p>
                        <p className='read-story'><a href="">Read the story</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}