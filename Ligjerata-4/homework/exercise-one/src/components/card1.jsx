import React from 'react'
import '../assets/css/cards.css'

export function CardOne(){
    return (
        <>
            <div className="card1">
                <div className="card-content">
                    <h3 className="card1-title">adobe firefly</h3>
                    <p className="card-intro">The ultimate creative AI solution.</p>
                    <p className="card-paragraph">Create images, videos, audio, and vector graphics in the Firefly app.</p>
                    <p className="learn-more"><a href="/#">Learn More</a></p>
                    <div>
                        <img src="https://www.adobe.com/homepage/fragments/loggedout/pods/max-london-tkdwn-2025/media_1238a8d48316f19eeeb73ec6d28edc4a110a364e2.png?width=2000&format=webply&optimize=medium" alt="Card Image" class="content-image" />
                    </div>
                </div>
            </div>
        </>
    )
}