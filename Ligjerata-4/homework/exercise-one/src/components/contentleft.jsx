import React from 'react'
import '../assets/css/contentleft.css'

export function ContentLeft(){
    return (
        <>
            <div className="content-left">
                <div className="main-content">
                    <h3 className="content-title">adobe photoshop</h3>
                    <p className="content-intro">Work faster in Photoshop</p>
                    <p className="content-paragraph">Now with precise selections, instant color adjusments, and more.</p>
                    <button className="content-button">Learn More</button>
                    <div>
                        <img src="https://www.adobe.com/homepage/media_1548680aa74024757fdd91f65c9baea11f3354057.png?width=2000&format=webply&optimize=medium" alt="Card Image" class="content-image" />
                    </div>
                </div>
            </div>
        </>
    )
}